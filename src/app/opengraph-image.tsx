import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "white",
          background: "linear-gradient(115deg,#233c41 0%,#0b4a55 38%,#086874 72%,#10909a 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#a9e00b" }} />
          Dental care in your neighbourhood
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, letterSpacing: 6, color: "#c4ee2a", fontWeight: 700 }}>DR. SNEHA · THE DENTAL STUDIO</div>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05, marginTop: 18 }}>Healthy Smiles for a Confident You</div>
        </div>
        <div style={{ fontSize: 30, opacity: 0.85 }}>General · Implants · Braces & Aligners · Whitening · Root Canal</div>
      </div>
    ),
    { ...size },
  );
}
