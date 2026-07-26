import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, isLocale, LOCALES, type Locale } from "@/lib/i18n";
import { loadOgFonts } from "@/lib/og-fonts";
import { OG_CONTENT_TYPE, OG_SIZE, OgCard } from "@/lib/og-card";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "FluentShell — Native SSH & SFTP for Windows";

/** Metadata routes must never 404; an unknown segment falls back to English. */
function resolveLocale(lang: string): Locale {
  return isLocale(lang) ? lang : DEFAULT_LOCALE;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const locale = resolveLocale((await params).lang);

  return new ImageResponse(<OgCard dict={getDictionary(locale)} />, {
    ...size,
    fonts: await loadOgFonts(locale),
  });
}
