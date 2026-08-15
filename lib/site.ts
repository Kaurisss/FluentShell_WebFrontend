/**
 * Canonical origin used for metadataBase, canonical URLs, sitemap and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in the deploy environment; the fallback is only a
 * placeholder so builds never emit localhost URLs into production metadata.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fluent-shell.github.io"
).replace(/\/+$/, "");

export const SITE_NAME = "FluentShell";

export const SITE_TAGLINE = "Native SSH & SFTP for Windows";

export const SITE_DESCRIPTION =
  "FluentShell is a free, open-source SSH and SFTP client for Windows 10 and 11. Terminal, remote file browser, and live server metrics in one native WinUI 3 window.";

export const GITHUB_URL = "https://github.com/Kaurisss/FluentShell";
