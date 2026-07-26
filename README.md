# FluentShell marketing site

The public landing page for FluentShell, built with Next.js (App Router).

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `/` redirects to the
default locale.

## Configuration

| Variable               | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for `metadataBase`, canonical URLs, `sitemap.xml`, hreflang and Open Graph image URLs. |

Set this in the deploy environment. The fallback in `lib/site.ts` is a
placeholder — without it, production metadata points at the wrong host.

## Internationalization

Every page lives under `app/[lang]`, prerendered for each entry in `LOCALES`
(`lib/i18n.ts`). Adding a locale means:

1. Add the code to `LOCALES`, `HTML_LANG` and `OG_LOCALE` in `lib/i18n.ts`.
2. Add a dictionary in `lib/dictionaries/`. `Dictionary` (in `types.ts`) is the
   contract — a missing key is a type error, not a silently untranslated string.
3. Register it in `lib/dictionaries/index.ts`.

`hreflang` alternates, the sitemap and the per-locale Open Graph cards are all
derived from `LOCALES`, so they need no separate update.

`/` redirects to `DEFAULT_LOCALE` via `redirects()` in `next.config.ts`. Keep
the two in sync — and note that `redirects()` requires a Node server, so a
switch to `output: "export"` would need a different mechanism.

### Open Graph fonts

Satori (behind `next/og`) bundles Latin glyphs only, so the Chinese card needs
an explicit font. `assets/fonts/` holds a Noto Sans SC subset covering just the
characters used in the Chinese dictionary. Regenerate it after editing the
Chinese copy:

```bash
node scripts/build-og-fonts.mjs
```

Skipping this renders unseen characters as blank boxes in the shared card.

## Checks

```bash
npm run lint
npm run build
```
