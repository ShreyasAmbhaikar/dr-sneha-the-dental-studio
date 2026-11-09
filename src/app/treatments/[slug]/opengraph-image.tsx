import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { getTreatment, treatments } from "@/lib/treatments";

export const alt = `${site.name} – dental treatment`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  const name = t?.name ?? "Dental Treatment";

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
          {site.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#c4ee2a", fontWeight: 700 }}>DENTAL TREATMENT</div>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05, marginTop: 18, maxWidth: 980 }}>{name}</div>
          <div style={{ fontSize: 30, marginTop: 24, opacity: 0.85, maxWidth: 900 }}>{site.tagline}</div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "16px 34px",
            borderRadius: 999,
            background: "linear-gradient(180deg,#d8f952,#a9e00b)",
            color: "#0a2d55",
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          Book your consultation
        </div>
      </div>
    ),
    { ...size },
  );
}
