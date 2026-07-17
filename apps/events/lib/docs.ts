import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { DocEntry, TocItem } from "@makepay/site-kit";

const docsDirectory = path.join(process.cwd(), "content", "docs");

export type LoadedDoc = {
  entry: DocEntry;
  content: string;
  toc: TocItem[];
};

function asString(value: unknown, field: string, fileName: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing ${field} in ${fileName}`);
  }
  return value.trim();
}

function asOrder(value: unknown, fileName: string): number {
  const order = Number(value);
  if (!Number.isFinite(order)) throw new Error(`Invalid order in ${fileName}`);
  return order;
}

export function headingId(label: string): string {
  return label
    .toLowerCase()
    .replace(/[`*_]/g, "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildToc(content: string): TocItem[] {
  return Array.from(content.matchAll(/^(#{2,3})\s+(.+)$/gm)).map((match) => ({
    id: headingId(match[2]),
    label: match[2].replace(/[`*_]/g, "").replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1"),
    level: match[1].length as 2 | 3,
  }));
}

function loadFile(fileName: string): LoadedDoc {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(docsDirectory, fileName), "utf8");
  const { data, content } = matter(raw);
  return {
    entry: {
      slug,
      title: asString(data.title, "title", fileName),
      description: asString(data.description, "description", fileName),
      section: asString(data.section, "section", fileName),
      order: asOrder(data.order, fileName),
    },
    content,
    toc: buildToc(content),
  };
}

export function getAllDocs(): DocEntry[] {
  return fs
    .readdirSync(docsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(loadFile)
    .map(({ entry }) => entry)
    .sort((a, b) => a.order - b.order);
}

export function getDoc(slug: string): LoadedDoc | undefined {
  const safeSlug = slug.replace(/[^a-z0-9-]/g, "");
  const fileName = `${safeSlug}.mdx`;
  const filePath = path.join(docsDirectory, fileName);
  return fs.existsSync(filePath) ? loadFile(fileName) : undefined;
}
