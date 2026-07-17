import Link from "next/link";
import { SiteFooter, SiteHeader } from "@makepay/site-kit";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mp-site">
      <SiteHeader productName={siteConfig.productName} githubHref={siteConfig.githubHref} />
      <main className="mp-doc-index">
        <span className="mp-kicker"><i />404</span>
        <h1>That page is not in the library.</h1>
        <p>The requested guide may have moved. Continue with the documentation index or return to the product overview.</p>
        <div className="mp-actions">
          <Link className="mp-button mp-button-primary" href="/docs">Browse documentation</Link>
          <Link className="mp-button mp-button-secondary" href="/">Product overview</Link>
        </div>
      </main>
      <SiteFooter productName={siteConfig.productName} githubHref={siteConfig.githubHref} />
    </div>
  );
}
