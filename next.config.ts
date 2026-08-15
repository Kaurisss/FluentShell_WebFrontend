import path from "node:path";
import type { NextConfig } from "next";

// GitHub Pages deployment (.github/workflows/deploy.yml) builds a static
// export. Setting NEXT_PUBLIC_BASE_PATH — even to "" — selects that mode:
// project repositories serve from /<repo>, <user>.github.io from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const isStaticExport = basePath !== undefined;

const nextConfig: NextConfig = {
  // Several lockfiles exist above this directory, so Turbopack would otherwise
  // infer a workspace root outside the project and watch far more of the disk.
  turbopack: {
    root: path.join(__dirname),
  },

  ...(isStaticExport && {
    output: "export" as const,
    // Directory URLs (out/en/index.html) so Pages finds them without server
    // rewrites; the default image loader needs a server, so ship originals.
    trailingSlash: true,
    basePath: basePath || undefined,
    images: { unoptimized: true },
  }),

  // Every page lives under /[lang]; send the bare origin to the default locale.
  // Temporary (307) so switching to Accept-Language detection later is not
  // blocked by cached permanent redirects. Keep in sync with DEFAULT_LOCALE.
  // Static export does not support redirects — deploy.yml writes a static
  // out/index.html redirect instead.
  ...(!isStaticExport && {
    async redirects() {
      return [{ source: "/", destination: "/en", permanent: false }];
    },
  }),
};

export default nextConfig;
