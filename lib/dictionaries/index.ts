import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { zh } from "./zh";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, FaqEntry, FeatureCopy } from "./types";
