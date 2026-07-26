import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/lib/i18n";

type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 700;
  style: "normal";
};

const FONT_DIR = path.join(process.cwd(), "assets", "fonts");

const CJK_FILES = [
  { file: "noto-sans-sc-400.ttf", weight: 400 as const },
  { file: "noto-sans-sc-700.ttf", weight: 700 as const },
];

/**
 * Satori ships Latin glyphs only. Chinese cards get the vendored Noto Sans SC
 * subset (see scripts/build-og-fonts.mjs); English keeps the built-in font.
 *
 * Read from disk rather than imported so the font bytes stay out of the route
 * bundle. Static generation runs at build time, so the files are always local.
 */
export async function loadOgFonts(locale: Locale): Promise<OgFont[] | undefined> {
  if (locale !== "zh") return undefined;

  const fonts = await Promise.all(
    CJK_FILES.map(async ({ file, weight }) => {
      const buffer = await readFile(path.join(FONT_DIR, file));
      return {
        name: "OgSans",
        data: buffer.buffer.slice(
          buffer.byteOffset,
          buffer.byteOffset + buffer.byteLength,
        ) as ArrayBuffer,
        weight,
        style: "normal" as const,
      };
    }),
  );

  return fonts;
}
