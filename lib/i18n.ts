export const LOCALES = ["en", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** BCP 47 tag written to <html lang> and used for hreflang alternates. */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localePath(locale: Locale): string {
  return `/${locale}`;
}

/** hreflang map for `alternates.languages`, plus the x-default fallback. */
export const LANGUAGE_ALTERNATES: Record<string, string> = {
  ...Object.fromEntries(
    LOCALES.map((locale) => [HTML_LANG[locale], localePath(locale)]),
  ),
  "x-default": localePath(DEFAULT_LOCALE),
};
