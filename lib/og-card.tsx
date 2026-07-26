import type { Dictionary } from "@/lib/dictionaries";
import { SITE_NAME } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PAPER = "#f8f8fa";
const INK = "#14151c";
const BLUE = "#4659fb";
const BLUE_DEEP = "#2b2ec2";
const LINE = "#dcdce2";

const GRID = 60;

/**
 * Satori only supports flexbox and a subset of CSS, so the background grid is
 * drawn as absolutely positioned hairlines rather than a tiled background.
 */
function gridLines() {
  const lines = [];
  for (let x = GRID; x < OG_SIZE.width; x += GRID) {
    lines.push(
      <div
        key={`v${x}`}
        style={{
          position: "absolute",
          top: 0,
          left: x,
          width: 1,
          height: OG_SIZE.height,
          background: LINE,
          opacity: 0.55,
        }}
      />,
    );
  }
  for (let y = GRID; y < OG_SIZE.height; y += GRID) {
    lines.push(
      <div
        key={`h${y}`}
        style={{
          position: "absolute",
          top: y,
          left: 0,
          width: OG_SIZE.width,
          height: 1,
          background: LINE,
          opacity: 0.55,
        }}
      />,
    );
  }
  return lines;
}

export function OgCard({ dict }: { dict: Dictionary }) {
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
        padding: "76px 80px",
      }}
    >
      {gridLines()}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 44, height: 3, background: BLUE_DEEP }} />
          <div
            style={{
              marginLeft: 16,
              color: BLUE_DEEP,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2.4,
            }}
          >
            {og.kicker}
          </div>
        </div>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1.06,
          }}
        >
          <div>{og.headlineLine1}</div>
          <div>{og.headlineLine2}</div>
        </div>

        <div
          style={{
            marginTop: 34,
            maxWidth: 900,
            color: "#4b4c58",
            fontSize: 28,
            lineHeight: 1.45,
          }}
        >
          {og.subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              background: BLUE,
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            F
          </div>
          <div
            style={{
              marginLeft: 16,
              fontSize: 30,
              fontWeight: 750,
              letterSpacing: -0.8,
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ color: "#5a5b67", fontSize: 24 }}>{og.meta}</div>
      </div>
    </div>
  );
}
