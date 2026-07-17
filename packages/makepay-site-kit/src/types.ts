import type { LucideIcon } from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Screenshot = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export type SiteConfig = {
  productName: string;
  shortName: string;
  domain: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroPoints: string[];
  docsHref: string;
  githubHref: string;
  pluginBuilderHref: string;
  metrics: Array<{ value: string; label: string }>;
  features: Feature[];
  workflow: Array<{ number: string; title: string; description: string }>;
  screenshots: Screenshot[];
  security: Feature[];
  useCases: string[];
  installCommand: string;
};

export type DocEntry = {
  slug: string;
  title: string;
  description: string;
  section: string;
  order: number;
};

export type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};
