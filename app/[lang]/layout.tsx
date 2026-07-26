import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/dictionaries";
import {
  HTML_LANG,
  isLocale,
  LANGUAGE_ALTERNATES,
  localePath,
  LOCALES,
  OG_LOCALE,
} from "@/lib/i18n";
import { GITHUB_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const path = localePath(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s — ${SITE_NAME}`,
    },
    description: dict.meta.description,
    applicationName: SITE_NAME,
    keywords: dict.meta.keywords,
    category: "technology",
    alternates: {
      canonical: path,
      languages: LANGUAGE_ALTERNATES,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: OG_LOCALE[lang],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/FluentShell.ico",
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e12" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    description: dict.meta.description,
    url: `${SITE_URL}${localePath(lang)}`,
    inLanguage: HTML_LANG[lang],
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows 10 1809+, Windows 11",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: GITHUB_URL,
    softwareHelp: GITHUB_URL,
  };

  return (
    <html
      lang={HTML_LANG[lang]}
      className={cn("h-full antialiased", "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          {dict.nav.skipToContent}
        </a>
        {children}
        <script
          type="application/ld+json"
          // Static, build-time constant — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
