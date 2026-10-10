import { readFile } from "node:fs/promises";
import path from "node:path";

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
 * Use the vendored Noto Sans SC subset for both locales so Latin and Chinese
 * cards share the same regular and bold weights (see scripts/build-og-fonts.mjs).
 *
 * Read from disk rather than imported so the font bytes stay out of the route
 * bundle. Static generation runs at build time, so the files are always local.
 */
export async function loadOgFonts(): Promise<OgFont[]> {
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
