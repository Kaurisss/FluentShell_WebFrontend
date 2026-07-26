// Generates the CJK font subset used by the Open Graph image renderer.
//
// Satori (behind next/og) ships Latin glyphs only, so Chinese cards would
// render as tofu without an explicit font. Rather than vendoring a ~10MB CJK
// font, this subsets Noto Sans SC down to the characters that actually appear
// in the Chinese dictionary.
//
// Re-run after editing lib/dictionaries/zh.ts:
//   node scripts/build-og-fonts.mjs

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DICTIONARY = path.join(ROOT, "lib", "dictionaries", "zh.ts");
const OUT_DIR = path.join(ROOT, "assets", "fonts");

// Google Fonts negotiates the file format from the User-Agent. Satori only
// parses ttf/otf/woff, so ask as a browser old enough to predate woff2 but new
// enough to avoid the EOT that Internet Explorer UAs receive.
const TTF_UA =
  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; en-us) " +
  "AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5";

/** TrueType (0x00010000) and OpenType/CFF ("OTTO") signatures. */
const FONT_SIGNATURES = ["00010000", "4f54544f"];

const WEIGHTS = [
  { weight: 400, file: "noto-sans-sc-400.ttf" },
  { weight: 700, file: "noto-sans-sc-700.ttf" },
];

// Always include the Latin/punctuation the card draws regardless of copy.
const BASE_CHARS =
  "FluentShell0123456789 ·—·/+.,:;!?()[]%&#'\"" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function collectCharacters(source) {
  // Everything inside the double-quoted string literals of the dictionary.
  const literals = source.match(/"(?:[^"\\]|\\.)*"/g) ?? [];
  return new Set([...BASE_CHARS, ...literals.join("")].filter((c) => c !== "\n"));
}

async function fetchSubset(weight, chars) {
  const url =
    "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@" +
    weight +
    "&text=" +
    encodeURIComponent(chars);

  const cssResponse = await fetch(url, { headers: { "User-Agent": TTF_UA } });
  if (!cssResponse.ok) {
    throw new Error(`Google Fonts CSS request failed: ${cssResponse.status}`);
  }

  const css = await cssResponse.text();
  const fontUrl = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!fontUrl) {
    throw new Error(`No font URL in CSS response for weight ${weight}`);
  }

  const fontResponse = await fetch(fontUrl, {
    headers: { "User-Agent": TTF_UA },
  });
  if (!fontResponse.ok) {
    throw new Error(`Font download failed: ${fontResponse.status}`);
  }

  const data = Buffer.from(await fontResponse.arrayBuffer());

  // Google silently serves EOT/WOFF2 to the wrong UA; both break Satori at
  // build time with an opaque error, so reject them here instead.
  const signature = data.subarray(0, 4).toString("hex");
  if (!FONT_SIGNATURES.includes(signature)) {
    throw new Error(
      `Weight ${weight}: expected TTF/OTF, got signature 0x${signature} ` +
        `(content-type ${fontResponse.headers.get("content-type")})`,
    );
  }

  return data;
}

const source = await readFile(DICTIONARY, "utf8");
const chars = [...collectCharacters(source)].sort().join("");
console.log(`Subsetting ${chars.length} unique characters.`);

await mkdir(OUT_DIR, { recursive: true });

for (const { weight, file } of WEIGHTS) {
  const data = await fetchSubset(weight, chars);
  await writeFile(path.join(OUT_DIR, file), data);
  console.log(`  ${file}  ${(data.length / 1024).toFixed(1)} KB`);
}

console.log("Done.");
