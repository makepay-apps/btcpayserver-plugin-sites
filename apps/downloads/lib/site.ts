import {
  BarChart3,
  BookOpen,
  Download,
  Fingerprint,
  GalleryVerticalEnd,
  Headphones,
  KeyRound,
  LockKeyhole,
  Palette,
  ShieldCheck,
  ShoppingCart,
  Video,
} from "lucide-react";
import type { SiteConfig } from "@makepay/site-kit";

export const siteConfig: SiteConfig = {
  productName: "MakePay Digital Products",
  shortName: "Digital Products",
  domain: "downloads.makepay.io",
  description:
    "Sell protected files, ebooks, audio, video, photos, art, and generated software licenses from a polished storefront that runs directly on your BTCPay Server.",
  eyebrow: "Self-hosted digital commerce",
  heroTitle: "Sell digital products without surrendering your stack.",
  heroDescription:
    "A complete storefront, protected delivery system, and license manager for BTCPay Server. Keep payments, product data, and customer access on infrastructure you control.",
  heroPoints: [
    "Six product formats with purpose-built previews and delivery",
    "Passwordless customer library, cart, and BTCPay modal checkout",
    "Local, private S3-compatible, or authenticated custom-origin storage",
  ],
  docsHref: "/docs",
  githubHref: "https://github.com/makepay-io/btcpayserver-digital-products",
  pluginBuilderHref:
    "https://plugin-builder.btcpayserver.org/public/plugins/makepay-digital-downloads",
  metrics: [
    { value: "6", label: "digital product formats" },
    { value: "3", label: "protected storage sources" },
    { value: "0", label: "hosted accounts or custodians" },
  ],
  features: [
    {
      icon: Download,
      title: "Protected file downloads",
      description:
        "Sell archives, templates, source files, and any downloadable asset through expiring, revocable, usage-limited links.",
    },
    {
      icon: BookOpen,
      title: "PDF and ebook reader",
      description:
        "Offer an optional public sample and let buyers read purchased PDFs in a bundled book-style browser or download them.",
    },
    {
      icon: Headphones,
      title: "Audio playback",
      description:
        "Publish a demo track, protect the original, and choose streaming, downloading, or both for music, podcasts, and audio packs.",
    },
    {
      icon: Video,
      title: "Video delivery",
      description:
        "Sell courses, tutorials, stock footage, and other video with an optional trailer and seekable protected streaming.",
    },
    {
      icon: GalleryVerticalEnd,
      title: "Photos and art",
      description:
        "Build public galleries from derived, downscaled previews with optional watermarks while keeping originals private.",
    },
    {
      icon: KeyRound,
      title: "Software licenses",
      description:
        "Generate configurable serial formats, control activations and validity, and integrate signed verification endpoints.",
    },
    {
      icon: Palette,
      title: "Live storefront editor",
      description:
        "Manage slides, categories, typography, colors, logo, favicon, navigation, and product presentation in a visual editor.",
    },
    {
      icon: ShoppingCart,
      title: "Complete buying journey",
      description:
        "Use a background cart, product pages, passwordless access, purchase history, and BTCPay's JavaScript checkout modal.",
    },
    {
      icon: BarChart3,
      title: "Privacy-aware analytics",
      description:
        "Connect GTM or direct GA4 commerce events with consent controls, sanitized URLs, and no buyer secrets in payloads.",
    },
  ],
  workflow: [
    {
      number: "01",
      title: "Install the plugin",
      description:
        "Add the signed release to BTCPay Server, restart, and open Digital Products from your store integrations.",
    },
    {
      number: "02",
      title: "Create protected products",
      description:
        "Upload locally or connect a private origin, set delivery rules, and add purpose-built public previews.",
    },
    {
      number: "03",
      title: "Shape your storefront",
      description:
        "Organize categories and slides, apply your visual identity, and preview desktop and mobile states live.",
    },
    {
      number: "04",
      title: "Sell and fulfill",
      description:
        "BTCPay creates the invoice; settled payments unlock protected media or issue the configured software license.",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/admin-dashboard.png",
      alt: "BTCPay Server Digital Products administration dashboard",
      title: "One BTCPay-native workspace",
      caption:
        "Manage products, license keys, order details, delivery usage, and publication health without leaving BTCPay Server.",
    },
    {
      src: "/screenshots/storefront.png",
      alt: "MakePay Digital Products responsive public storefront",
      title: "A real digital storefront",
      caption:
        "Branded navigation, hero content, categories, product cards, cart feedback, and a structured footer work as one experience.",
    },
    {
      src: "/screenshots/live-editor.png",
      alt: "MakePay Digital Products fullscreen live storefront editor",
      title: "Edit with immediate context",
      caption:
        "Configure the header, announcement, hero carousel, categories, uploads, colors, type, logo, and favicon beside a live preview.",
    },
  ],
  security: [
    {
      icon: LockKeyhole,
      title: "Private originals stay private",
      description:
        "Files stream through server-authorized routes. Local paths, S3 credentials, custom authorization headers, and private origin URLs are not emitted in public HTML.",
    },
    {
      icon: ShieldCheck,
      title: "Fulfillment is snapshotted",
      description:
        "Each checkout captures the product delivery configuration so a later catalog edit cannot silently redirect an existing purchase.",
    },
    {
      icon: Fingerprint,
      title: "Tokens and APIs are hardened",
      description:
        "Random delivery tokens, one-way hashes, expiry, revocation, nonce replay protection, signed license APIs, and bounded audit history protect access.",
    },
  ],
  useCases: [
    "Ebooks and research",
    "Music and podcasts",
    "Courses and footage",
    "Photography and design packs",
    "Templates and source code",
    "Licensed software",
  ],
  installCommand: "BTCPay Server → Manage plugins → MakePay Digital Products",
};

export const siteDescription =
  "Sell protected downloads, ebooks, audio, video, photos, art, and software licenses directly from your self-hosted BTCPay Server.";
