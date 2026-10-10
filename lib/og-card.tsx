import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE_NAME } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PAPER = "#f3f4f6";
const INK = "#24272f";
const MUTED = "#646975";

type OgArtwork = { wallpaper: string; screenshot: string };

/** Read local assets at generation time so static exports need no image server. */
export async function loadOgArtwork(): Promise<OgArtwork> {
  const [wallpaper, screenshot] = await Promise.all([
    readFile(path.join(process.cwd(), "public", "bg.jpg"), "base64"),
    readFile(path.join(process.cwd(), "public", "SSH.png"), "base64"),
  ]);

  return {
    wallpaper: `data:image/jpeg;base64,${wallpaper}`,
    screenshot: `data:image/png;base64,${screenshot}`,
  };
}

export function OgCard({ dict, artwork }: { dict: Dictionary; artwork: OgArtwork }) {
  const { og } = dict;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: PAPER,
        color: INK,
        fontFamily: "OgSans, sans-serif",
        padding: "52px 64px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1.8 }}>{SITE_NAME}</div>
        <div style={{ color: MUTED, fontSize: 18 }}>{og.kicker}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 496, flexShrink: 0 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.24,
            }}
          >
            <div>{og.headlineLine1}</div>
            <div>{og.headlineLine2}</div>
          </div>
          <div style={{ marginTop: 28, width: 440, color: MUTED, fontSize: 23, lineHeight: 1.6 }}>
            {og.subtitle}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 544,
            height: 366,
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {/* SVG blur is rendered by Resvg; it does not blur the product image. */}
          <svg width="544" height="366" viewBox="0 0 544 366" style={{ position: "absolute", top: 0, left: 0 }}>
            <defs>
              <filter id="wallpaper-blur" x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="22" />
              </filter>
            </defs>
            <image href={artwork.wallpaper} x="-44" y="-44" width="632" height="454" preserveAspectRatio="xMidYMid slice" filter="url(#wallpaper-blur)" />
          </svg>
          {/* ImageResponse needs a plain img; object-fit preserves a recropped asset's ratio. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artwork.screenshot}
            alt={dict.screenshots.hero}
            width={496}
            height={284}
            style={{
              objectFit: "contain",
              boxShadow: "0 16px 32px -10px rgba(10,35,69,.3)",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: MUTED, fontSize: 20 }}>
        <div>{og.meta}</div>
        <div>SSH / SFTP / FTP</div>
      </div>
    </div>
  );
}
