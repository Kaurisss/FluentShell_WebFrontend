import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing-page";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <LandingPage locale={lang} dict={getDictionary(lang)} />;
}
