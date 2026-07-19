import {
  BarChart3,
  CalendarDays,
  CreditCard,
  MailCheck,
  MonitorSmartphone,
  PanelsTopLeft,
  QrCode,
  ShieldCheck,
  ShoppingBag,
  WalletCards,
} from "lucide-react";
import type { SiteConfig } from "@makepay/site-kit";

export const domain = "events.makepay.io";
export const productName = "MakePay Event Tickets";
export const githubHref = "https://github.com/makepay-io/btcpayserver-event-tickets";
export const pluginBuilderHref = "https://plugin-builder.btcpayserver.org/public/plugins/makepay-events";

export const siteDescription =
  "A self-hosted event storefront, checkout, ticket delivery, point-of-sale, and QR admission system built directly into BTCPay Server.";

export const siteConfig: SiteConfig = {
  productName,
  shortName: "Event Tickets",
  domain,
  description: siteDescription,
  eyebrow: "Self-hosted ticketing for BTCPay Server",
  heroTitle: "Sell tickets. Run the door. Keep control.",
  heroDescription:
    "Create professional event storefronts, accept payments through BTCPay, deliver wallet-ready tickets, and operate event-scoped admissions without handing customer data to a ticketing platform.",
  heroPoints: [
    "Branded multi-step checkout with the official BTCPay JavaScript modal",
    "PDF, email, Apple Wallet, and Google Wallet ticket delivery",
    "Mobile event scanners with check-in, check-out, re-entry, and ID review",
  ],
  docsHref: "/docs",
  githubHref,
  pluginBuilderHref,
  metrics: [
    { value: "100%", label: "self-hosted ticket operations" },
    { value: "Per event", label: "protected scanner access" },
    { value: "0", label: "payment API keys exposed to browsers" },
  ],
  features: [
    {
      icon: CalendarDays,
      title: "Events and inventory",
      description: "Publish events, define ticket types, enforce capacities and quantity limits, and reserve inventory atomically during checkout.",
    },
    {
      icon: PanelsTopLeft,
      title: "Live storefront editor",
      description: "Configure logos, artwork, typography, colors, copy, favicon, legal links, and every public checkout state from a fullscreen editor.",
    },
    {
      icon: CreditCard,
      title: "Native BTCPay checkout",
      description: "Create invoices on the server and open them with BTCPay's supported JavaScript modal while the customer remains in your event journey.",
    },
    {
      icon: MailCheck,
      title: "Complete ticket delivery",
      description: "Send editable HTML email through Resend or store SMTP with protected order links and standards-compliant PDF tickets.",
    },
    {
      icon: WalletCards,
      title: "Mobile wallet passes",
      description: "Offer signed Apple Wallet passes and Google Wallet save links using credentials encrypted by BTCPay Server data protection.",
    },
    {
      icon: QrCode,
      title: "Admission workflow",
      description: "Share a protected scanner per event, scan from camera or image, check guests in and out, count entrances, and record ID decisions.",
    },
    {
      icon: ShoppingBag,
      title: "Event point of sale",
      description: "Issue event-specific sales from a focused POS flow while keeping inventory, invoices, attendees, and delivery in the same system.",
    },
    {
      icon: BarChart3,
      title: "Orders and analytics",
      description: "Review filterable order details and connect consent-aware GTM or GA4 ecommerce events without placing personal data in the data layer.",
    },
    {
      icon: MonitorSmartphone,
      title: "Your domain and brand",
      description: "Use BTCPay App domain mapping for clean event URLs while preserving root paths, canonical links, return URLs, and protected routes.",
    },
  ],
  workflow: [
    { number: "01", title: "Create the event", description: "Set schedule, venue, ticket types, inventory, public visibility, attendee rules, and optional ID review." },
    { number: "02", title: "Shape the experience", description: "Use the live editor to align the directory, ticket selection, checkout, payment, and confirmation with your brand." },
    { number: "03", title: "Accept and deliver", description: "BTCPay creates the invoice server-side; paid orders receive protected links, PDFs, and optional wallet passes." },
    { number: "04", title: "Operate the door", description: "Share the event scanner with staff, validate attendees, manage exits and re-entry, and audit every admission." },
  ],
  screenshots: [
    {
      src: "/screenshots/event-storefront.png",
      alt: "MakePay Event Tickets public event storefront with ticket types and quantities",
      title: "A focused public ticket storefront",
      caption: "Responsive event pages keep ticket selection, context, inventory, and brand presentation in one deliberate experience.",
    },
    {
      src: "/screenshots/admin-dashboard.png",
      alt: "MakePay Event Tickets dashboard inside BTCPay Server",
      title: "Operations inside BTCPay Server",
      caption: "Events, orders, admissions, scanner access, POS, and delivery state stay beside the rest of your BTCPay workflow.",
    },
    {
      src: "/screenshots/settings-workspace.png",
      alt: "MakePay Event Tickets settings workspace in BTCPay Server",
      title: "Professional store settings",
      caption: "Configure storefront, checkout, delivery, wallets, analytics, scanner behavior, and domain mapping from one workspace.",
    },
  ],
  security: [
    {
      icon: ShieldCheck,
      title: "Server-side invoice creation",
      description: "The browser never receives a BTCPay API key. Invoice creation, order transitions, inventory, and fulfillment remain trusted server operations.",
    },
    {
      icon: QrCode,
      title: "Capability-scoped admission",
      description: "Each scanner is restricted to one event, exchanges its protected token for a scoped HttpOnly session, and can be rotated immediately.",
    },
    {
      icon: MailCheck,
      title: "Protected delivery",
      description: "Ticket codes are stored as one-way hashes with recoverable values encrypted at rest; public order and delivery links are non-cacheable capabilities.",
    },
  ],
  useCases: ["Conferences", "Meetups", "Festivals", "Workshops", "Private events", "Community gatherings"],
  installCommand: "BTCPay Server → Manage Plugins → MakePay Event Tickets",
};
