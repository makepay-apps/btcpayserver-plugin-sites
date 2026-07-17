import { ImageResponse } from "next/og";

export const alt = "MakePay Event Tickets for BTCPay Server";
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
        padding: "66px 72px",
        color: "#f8f7fa",
        background: "radial-gradient(circle at 82% 22%, #6f40d8 0, #171122 34%, #08090c 72%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 15, fontSize: 27, fontWeight: 700 }}>
        <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="#a685f4"
            d="M16 0 19.6 12.4 32 16l-12.4 3.6L16 32l-3.6-12.4L0 16l12.4-3.6L16 0Z"
          />
        </svg>
        <span>MakePay</span>
        <span style={{ width: 1, height: 30, background: "rgba(255,255,255,.2)" }} />
        <span style={{ color: "#aaa6b1", fontSize: 20 }}>Event Tickets</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
        <span style={{ color: "#a685f4", fontSize: 20, fontWeight: 700, letterSpacing: 2.2 }}>FOR BTCPAY SERVER</span>
        <div style={{ marginTop: 20, fontSize: 76, lineHeight: 1.03, fontWeight: 800, letterSpacing: -4 }}>
          Sell tickets. Run the door. Keep control.
        </div>
        <div style={{ marginTop: 26, color: "#aaa6b1", fontSize: 25 }}>
          Self-hosted storefronts, delivery, wallets, POS, and QR admissions.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#77737e", fontSize: 18 }}>
        <span>events.makepay.io</span>
        <span style={{ color: "#65c653" }}>Open source · Self-hosted</span>
      </div>
    </div>,
    size,
  );
}
