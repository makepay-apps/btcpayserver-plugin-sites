import type { Metadata } from "next";

export function buildMetadata({ title, description, domain, path = "", productName }: { title: string; description: string; domain: string; path?: string; productName: string }): Metadata {
  const base = new URL(`https://${domain}`);
  const url = new URL(path || "/", base);
  return {
    metadataBase: base,
    title: path ? `${title} | ${productName}` : title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, siteName: productName },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export function ProductJsonLd({ name, description, url, githubHref }: { name: string; description: string; url: string; githubHref: string }) {
  const json = { "@context": "https://schema.org", "@type": "SoftwareApplication", name, description, applicationCategory: "BusinessApplication", operatingSystem: "BTCPay Server", url, downloadUrl: githubHref, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, author: { "@type": "Organization", name: "MakePay.io", url: "https://makepay.io" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }} />;
}
