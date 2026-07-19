import { ImageResponse } from "next/og";

export const alt = "MakePay Digital Products for BTCPay Server";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "68px 76px",
        background:
          "radial-gradient(circle at 85% 15%, rgba(123,71,232,.58), transparent 32%), linear-gradient(135deg,#08090c,#111219)",
        color: "#f7f6f8",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 700 }}>
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 2.75h6.5l3.75 3.75v14.75H7a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2Z"
            fill="none"
            stroke="#f7f6f8"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M13.5 2.75V6.5h3.75" fill="none" stroke="#f7f6f8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.25 9v6m-2.5-2.5 2.5 2.5 2.5-2.5M8.75 18h5" fill="none" stroke="#51b13e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>MakePay</span>
        <span style={{ width: 1, height: 32, background: "rgba(255,255,255,.22)" }} />
        <span style={{ color: "#aaa7b1", fontSize: 22 }}>Digital Products</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 930 }}>
        <span style={{ color: "#bda9ee", fontSize: 20, letterSpacing: 3, textTransform: "uppercase" }}>
          Self-hosted commerce for BTCPay Server
        </span>
        <div style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: -4, fontWeight: 760 }}>
          Sell digital products without surrendering your stack.
        </div>
        <div style={{ color: "#aaa7b1", fontSize: 24 }}>
          Protected media delivery, software licenses, a live storefront editor, and BTCPay checkout.
        </div>
      </div>
      <div style={{ display: "flex", gap: 28, color: "#8f8c96", fontSize: 17 }}>
        <span>downloads.makepay.io</span>
        <span>•</span>
        <span>Free and open source</span>
      </div>
    </div>,
    size,
  );
}
