import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Several lockfiles exist above this directory, so Turbopack would otherwise
  // infer a workspace root outside the project and watch far more of the disk.
  turbopack: {
    root: path.join(__dirname),
  },

  // Every page lives under /[lang]; send the bare origin to the default locale.
  // Temporary (307) so switching to Accept-Language detection later is not
  // blocked by cached permanent redirects. Keep in sync with DEFAULT_LOCALE.
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
