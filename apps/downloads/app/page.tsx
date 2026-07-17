import { LandingPage, ProductJsonLd } from "@makepay/site-kit";
import { siteConfig, siteDescription } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <ProductJsonLd
        name={siteConfig.productName}
        description={siteDescription}
        url={`https://${siteConfig.domain}`}
        githubHref={siteConfig.githubHref}
      />
      <LandingPage config={siteConfig} />
    </>
  );
}
