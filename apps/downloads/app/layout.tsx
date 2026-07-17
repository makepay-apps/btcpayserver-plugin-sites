import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { buildMetadata } from "@makepay/site-kit";
import "@makepay/site-kit/styles.css";
import { siteConfig, siteDescription } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Sell digital products with BTCPay Server",
    description: siteDescription,
    domain: siteConfig.domain,
    productName: siteConfig.productName,
  }),
  applicationName: siteConfig.productName,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
