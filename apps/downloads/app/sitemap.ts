import type { MetadataRoute } from "next";
import { getAllDocs } from "@/lib/docs";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/docs`, changeFrequency: "weekly", priority: 0.9 },
    ...getAllDocs().map((entry) => ({
      url: `${base}/docs/${entry.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
