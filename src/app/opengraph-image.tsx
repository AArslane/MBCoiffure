import { ImageResponse } from "next/og";
import { BRAND, LOCATIONS } from "@/lib/site";

// Branded social-share card, generated on-domain so links unfurl with a real
// image instead of a blank box. Next auto-wires og:image and twitter:image.
export const alt = "Coiffeur MB 31 — Coiffeur barbier à Toulouse, ouvert 7j/7";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const salon = LOCATIONS[0];
const accent = "#a05a36";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1c1917",
          color: "#fafaf9",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: accent,
          }}
        >
          Coiffeur · Barbier · Toulouse
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 700 }}>
            {BRAND.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              marginTop: 12,
              color: "#d6d3d1",
            }}
          >
            Coiffeur barbier à Toulouse, ouvert 7j/7 · 10h–20h
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", color: accent }}>
            Note {salon.rating.toLocaleString("fr-FR")}/5 · {salon.reviews} avis Google
          </div>
          <div style={{ display: "flex", color: "#a8a29e" }}>
            {salon.street}, {salon.city}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
