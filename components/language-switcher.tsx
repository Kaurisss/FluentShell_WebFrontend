import type { Dictionary } from "@/lib/dictionaries";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";

/**
 * Plain anchors rather than <Link>: switching locale must reload the document
 * so <html lang> and the localized metadata actually change.
 */
export function LanguageSwitcher({
  locale,
  dict,
  className,
}: {
  locale: Locale;
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div
      className={className ? `lang-switch ${className}` : "lang-switch"}
      role="group"
      aria-label={dict.language.label}
    >
      {LOCALES.map((candidate) => {
        const current = candidate === locale;
        return (
          <a
            key={candidate}
            href={localePath(candidate)}
            hrefLang={candidate}
            aria-current={current ? "true" : undefined}
            className={current ? "lang-option is-current" : "lang-option"}
          >
            {dict.language.names[candidate]}
          </a>
        );
      })}
    </div>
  );
}
