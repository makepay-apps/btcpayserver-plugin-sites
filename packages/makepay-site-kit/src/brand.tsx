import Link from "next/link";

export function MakePayWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="mp-wordmark" aria-label="MakePay">
      <span className="mp-wordmark-spark" aria-hidden="true">✦</span>
      <span>MakePay</span>
      {!compact && <span className="mp-wordmark-product">for BTCPay</span>}
    </span>
  );
}

export function SiteHeader({ productName, githubHref }: { productName: string; githubHref: string }) {
  return (
    <header className="mp-header">
      <div className="mp-container mp-header-inner">
        <Link className="mp-brand-link" href="/">
          <MakePayWordmark />
          <span className="mp-brand-divider" />
          <span className="mp-product-label">{productName}</span>
        </Link>
        <nav className="mp-nav" aria-label="Primary navigation">
          <Link href="/#features">Features</Link>
          <Link href="/#security">Security</Link>
          <Link href="/docs">Documentation</Link>
          <a href={githubHref} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <Link className="mp-header-cta" href="/docs/installation">Install plugin</Link>
        <details className="mp-mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <div>
            <Link href="/#features">Features</Link>
            <Link href="/#security">Security</Link>
            <Link href="/docs">Documentation</Link>
            <a href={githubHref}>GitHub</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter({ productName, githubHref }: { productName: string; githubHref: string }) {
  return (
    <footer className="mp-footer">
      <div className="mp-container mp-footer-grid">
        <div>
          <MakePayWordmark compact />
          <p>Open-source commerce software for sovereign, self-hosted payments.</p>
        </div>
        <div>
          <strong>Product</strong>
          <Link href="/#features">Features</Link>
          <Link href="/docs/installation">Installation</Link>
          <Link href="/docs/security">Security</Link>
        </div>
        <div>
          <strong>Resources</strong>
          <Link href="/docs">Documentation</Link>
          <a href={githubHref} target="_blank" rel="noreferrer">Source code</a>
          <a href="https://btcpayserver.org" target="_blank" rel="noreferrer">BTCPay Server</a>
        </div>
        <div className="mp-footer-status">
          <strong>{productName}</strong>
          <span><i /> Free and open source</span>
          <span>Self-hosted on your BTCPay Server</span>
        </div>
      </div>
      <div className="mp-container mp-footer-bottom">
        <span>© {new Date().getFullYear()} MakePay.io</span>
        <span>Accept 90+ currencies in a decentralized way with BTCPay Server.</span>
      </div>
    </footer>
  );
}
