import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mp-doc-index">
      <span className="mp-kicker"><i />404</span>
      <h1>That page is not in the event plan.</h1>
      <p>The guide may have moved, or the address may be incomplete.</p>
      <div className="mp-actions">
        <Link className="mp-button mp-button-primary" href="/docs">Browse documentation</Link>
        <Link className="mp-button mp-button-secondary" href="/">Return to product</Link>
      </div>
    </main>
  );
}
