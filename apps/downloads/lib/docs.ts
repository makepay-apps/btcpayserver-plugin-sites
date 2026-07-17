import "server-only";

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import type { DocEntry, TocItem } from "@makepay/site-kit";

const docsDirectory = join(process.cwd(), "content", "docs");

type DocFrontmatter = {
  title: string;
  description: string;
  section: string;
  order: number;
};

export type LoadedDoc = {
  entry: DocEntry;
  source: string;
  toc: TocItem[];
};

function readFrontmatter(fileName: string): DocEntry {
  const slug = fileName.replace(/\.mdx$/, "");
  const source = readFileSync(join(docsDirectory, fileName), "utf8");
  const { data } = matter(source);
  const frontmatter = data as Partial<DocFrontmatter>;

  if (
    !frontmatter.title ||
    !frontmatter.description ||
    !frontmatter.section ||
    typeof frontmatter.order !== "number"
  ) {
    throw new Error(`Invalid documentation frontmatter in ${fileName}`);
  }

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    section: frontmatter.section,
    order: frontmatter.order,
  };
}

export function getAllDocs(): DocEntry[] {
  return readdirSync(docsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readFrontmatter)
    .sort((left, right) => left.order - right.order);
}

export function getDoc(slug: string): LoadedDoc | null {
  const entry = getAllDocs().find((candidate) => candidate.slug === slug);
  if (!entry) return null;

  const raw = readFileSync(join(docsDirectory, `${entry.slug}.mdx`), "utf8");
  const { content } = matter(raw);
  return { entry, source: content, toc: extractToc(content) };
}

export function headingId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[`*_~[\]{}()]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractToc(source: string): TocItem[] {
  const toc: TocItem[] = [];
  const matcher = /^(##|###)\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = matcher.exec(source)) !== null) {
    const label = match[2]
      .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
      .replace(/[`*_~]/g, "")
      .trim();
    toc.push({
      id: headingId(label),
      label,
      level: match[1] === "##" ? 2 : 3,
    });
  }

  return toc;
}
