import type { Metadata } from "next";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { DocsIndex, DocsShell, SiteFooter, SiteHeader, buildMetadata } from "@makepay/site-kit";
import { getAllDocs, getDoc, headingId } from "@/lib/docs";
import { domain, githubHref, productName, siteDescription } from "@/lib/site";

type PageProps = { params: Promise<{ slug?: string[] }> };

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textFromChildren).join("");
  if (children && typeof children === "object" && "props" in children) {
    return textFromChildren((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

const mdxComponents = {
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 id={headingId(textFromChildren(children))} {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 id={headingId(textFromChildren(children))} {...props}>{children}</h3>
  ),
};

export function generateStaticParams() {
  return [{ slug: [] }, ...getAllDocs().map((entry) => ({ slug: [entry.slug] }))];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug?.length) {
    return buildMetadata({
      title: `${productName} documentation`,
      description: `Install, configure, operate, and secure ${productName}.`,
      domain,
      path: "/docs",
      productName,
    });
  }
  if (slug.length !== 1) return {};
  const doc = getDoc(slug[0]);
  if (!doc) return {};
  return buildMetadata({
    title: doc.entry.title,
    description: doc.entry.description,
    domain,
    path: `/docs/${doc.entry.slug}`,
    productName,
  });
}

export default async function DocumentationPage({ params }: PageProps) {
  const { slug } = await params;
  const entries = getAllDocs();
  if (!slug?.length) {
    return (
      <div className="mp-site">
        <SiteHeader productName={productName} githubHref={githubHref} />
        <main><DocsIndex productName={`${productName} documentation`} description={siteDescription} entries={entries} /></main>
        <SiteFooter productName={productName} githubHref={githubHref} />
      </div>
    );
  }
  if (slug.length !== 1) notFound();
  const doc = getDoc(slug[0]);
  if (!doc) notFound();
  return (
    <DocsShell
      productName={productName}
      entries={entries}
      current={doc.entry}
      toc={doc.toc}
      githubHref={githubHref}
    >
      <MDXRemote source={doc.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} components={mdxComponents} />
    </DocsShell>
  );
}
