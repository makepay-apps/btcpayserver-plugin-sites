import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "@makepay/site-kit/styles.css";
import { buildMetadata } from "@makepay/site-kit";
import { domain, productName, siteDescription } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  ...buildMetadata({
    title: "MakePay Event Tickets for BTCPay Server",
    description: siteDescription,
    domain,
    productName,
  }),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
