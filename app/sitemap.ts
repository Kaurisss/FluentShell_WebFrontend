import type { MetadataRoute } from "next";
import { HTML_LANG, localePath, LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

// Required for `output: "export"` (GitHub Pages build).
export const dynamic = "force-static";

const languages = Object.fromEntries(
  LOCALES.map((locale) => [HTML_LANG[locale], `${SITE_URL}${localePath(locale)}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
