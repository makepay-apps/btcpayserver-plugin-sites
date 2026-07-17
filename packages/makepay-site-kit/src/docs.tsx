import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Github } from "lucide-react";
import type { ReactNode } from "react";
import { MakePayWordmark } from "./brand";
import { DocsSearch } from "./docs-search";
import type { DocEntry, TocItem } from "./types";

export function DocsShell({ productName, entries, current, toc, githubHref, children }: { productName: string; entries: DocEntry[]; current: DocEntry; toc: TocItem[]; githubHref: string; children: ReactNode }) {
  const grouped = entries.reduce<Record<string, DocEntry[]>>((acc, entry) => { (acc[entry.section] ??= []).push(entry); return acc; }, {});
  const currentIndex = entries.findIndex((entry) => entry.slug === current.slug);
  const previous = entries[currentIndex - 1]; const next = entries[currentIndex + 1];
  return <div className="mp-doc-site">
    <header className="mp-doc-header"><Link href="/" className="mp-doc-logo"><MakePayWordmark compact /><span />{productName}</Link><DocsSearch entries={entries} /><nav><Link href="/">Product</Link><a href={githubHref} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a></nav></header>
    <div className="mp-doc-layout">
      <aside className="mp-doc-sidebar"><Link href="/docs" className="mp-doc-home"><BookOpen size={17} />Documentation home</Link>{Object.entries(grouped).map(([section, docs]) => <div key={section}><strong>{section}</strong>{docs.sort((a,b) => a.order-b.order).map((entry) => <Link className={entry.slug === current.slug ? "active" : ""} href={`/docs/${entry.slug}`} key={entry.slug}>{entry.title}</Link>)}</div>)}<div className="mp-doc-sidebar-card"><span>Need the plugin?</span><a href={githubHref} target="_blank" rel="noreferrer">Open GitHub <ExternalLink size={14} /></a></div></aside>
      <main className="mp-doc-main"><div className="mp-doc-breadcrumb"><Link href="/docs">Docs</Link><span>/</span><span>{current.section}</span></div><article className="mp-prose"><header><span>{current.section}</span><h1>{current.title}</h1><p>{current.description}</p></header>{children}</article><nav className="mp-doc-pagination">{previous ? <Link href={`/docs/${previous.slug}`}><ArrowLeft size={17} /><span><small>Previous</small>{previous.title}</span></Link> : <span />}{next && <Link href={`/docs/${next.slug}`}><span><small>Next</small>{next.title}</span><ArrowRight size={17} /></Link>}</nav><footer className="mp-doc-content-footer">Built by <a href="https://makepay.io">✦ MakePay</a> for the BTCPay Server community.</footer></main>
      <aside className="mp-doc-toc"><strong>On this page</strong>{toc.map((item) => <a className={item.level === 3 ? "nested" : ""} href={`#${item.id}`} key={item.id}>{item.label}</a>)}<hr /><a href={githubHref} target="_blank" rel="noreferrer">View source <ExternalLink size={13} /></a></aside>
    </div>
  </div>;
}

export function DocsIndex({ productName, description, entries }: { productName: string; description: string; entries: DocEntry[] }) {
  const grouped = entries.reduce<Record<string, DocEntry[]>>((acc, entry) => { (acc[entry.section] ??= []).push(entry); return acc; }, {});
  return <div className="mp-doc-index"><span className="mp-kicker"><i />MakePay documentation</span><h1>{productName}</h1><p>{description}</p><DocsSearch entries={entries} /><div className="mp-doc-index-grid">{Object.entries(grouped).map(([section, docs]) => <section key={section}><strong>{section}</strong>{docs.sort((a,b)=>a.order-b.order).map((entry) => <Link href={`/docs/${entry.slug}`} key={entry.slug}><span>{entry.title}</span><small>{entry.description}</small><ArrowRight size={15} /></Link>)}</section>)}</div></div>;
}
