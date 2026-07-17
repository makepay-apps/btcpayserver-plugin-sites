"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { DocEntry } from "./types";

export function DocsSearch({ entries }: { entries: DocEntry[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = entries.filter((entry) => `${entry.title} ${entry.description} ${entry.section}`.toLowerCase().includes(query.toLowerCase())).slice(0, 8);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(true); }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 0); }, [open]);

  return <>
    <button className="mp-doc-search-button" onClick={() => setOpen(true)}><Search size={16} /><span>Search documentation</span><kbd>⌘ K</kbd></button>
    {open && <div className="mp-search-overlay" role="dialog" aria-modal="true" aria-label="Search documentation" onMouseDown={(e) => { if (e.currentTarget === e.target) setOpen(false); }}>
      <div className="mp-search-dialog">
        <div className="mp-search-input"><Search size={19} /><input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search guides, features, and settings…" /><button onClick={() => setOpen(false)} aria-label="Close search"><X size={18} /></button></div>
        <div className="mp-search-results">{results.length ? results.map((entry) => <Link key={entry.slug} href={`/docs/${entry.slug}`} onClick={() => setOpen(false)}><small>{entry.section}</small><strong>{entry.title}</strong><span>{entry.description}</span></Link>) : <p>No documentation found.</p>}</div>
      </div>
    </div>}
  </>;
}
