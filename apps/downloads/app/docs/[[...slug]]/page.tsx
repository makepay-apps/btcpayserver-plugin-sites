import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  buildMetadata,
  DocsIndex,
  DocsShell,
  SiteFooter,
  SiteHeader,
} from "@makepay/site-kit";
import { getAllDocs, getDoc, headingId } from "@/lib/docs";
import { siteConfig, siteDescription } from "@/lib/site";

type DocsPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export function generateStaticParams() {
  return [
    { slug: [] },
    ...getAllDocs().map((entry) => ({ slug: entry.slug.split("/") })),
  ];
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slug?.join("/");
  if (!path) {
    return buildMetadata({
      title: `${siteConfig.productName} documentation`,
      description: siteDescription,
      domain: siteConfig.domain,
      path: "/docs",
      productName: siteConfig.productName,
    });
  }

  const doc = getDoc(path);
  if (!doc) return {};
  return buildMetadata({
    title: doc.entry.title,
    description: doc.entry.description,
    domain: siteConfig.domain,
    path: `/docs/${doc.entry.slug}`,
    productName: siteConfig.productName,
  });
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const entries = getAllDocs();
  const path = slug?.join("/");

  if (!path) {
    return (
      <div className="mp-site">
        <SiteHeader productName={siteConfig.productName} githubHref={siteConfig.githubHref} />
        <main>
          <DocsIndex
            productName={`${siteConfig.productName} documentation`}
            description="Configure, operate, secure, and troubleshoot a complete self-hosted digital commerce workflow on BTCPay Server."
            entries={entries}
          />
        </main>
        <SiteFooter productName={siteConfig.productName} githubHref={siteConfig.githubHref} />
      </div>
    );
  }

  const doc = getDoc(path);
  if (!doc) notFound();

  return (
    <DocsShell
      productName={siteConfig.productName}
      entries={entries}
      current={doc.entry}
      toc={doc.toc}
      githubHref={siteConfig.githubHref}
    >
      <MDXRemote
        source={doc.source}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        components={{
          h2: DocumentationHeading,
          h3: DocumentationSubheading,
          a: DocumentationLink,
        }}
      />
    </DocsShell>
  );
}

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textFromChildren).join("");
  if (children && typeof children === "object" && "props" in children) {
    return textFromChildren((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function DocumentationHeading({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 id={headingId(textFromChildren(children))} {...props}>
      {children}
    </h2>
  );
}

function DocumentationSubheading({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 id={headingId(textFromChildren(children))} {...props}>
      {children}
    </h3>
  );
}

function DocumentationLink({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  return (
    <a
      href={href}
      {...props}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
