import { LandingPage, ProductJsonLd } from "@makepay/site-kit";
import { domain, githubHref, siteConfig, siteDescription } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <ProductJsonLd
        name={siteConfig.productName}
        description={siteDescription}
        url={`https://${domain}`}
        githubHref={githubHref}
      />
      <LandingPage config={siteConfig} />
    </>
  );
}
