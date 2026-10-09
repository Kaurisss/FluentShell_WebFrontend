/**
 * Canonical origin used for metadataBase, canonical URLs, sitemap and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in the deploy environment; the fallback is only a
 * placeholder so builds never emit localhost URLs into production metadata.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fluent-shell.github.io"
).replace(/\/+$/, "");

export const SITE_NAME = "FluentShell";

export const SITE_TAGLINE = "Native SSH & File Management for Windows";

export const SITE_DESCRIPTION =
  "A free, open-source SSH, SFTP and FTP client for Windows. Multi-tab terminals, dual-pane file management, folder transfers and text editing in a native WinUI 3 interface.";

export const GITHUB_URL = "https://github.com/Kaurisss/FluentShell";
