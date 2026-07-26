import Image from "next/image";
import {
  IconActivity,
  IconArrowUpRight,
  IconBolt,
  IconBrandGithub,
  IconBrandWindows,
  IconCheck,
  IconFiles,
  IconLock,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { GITHUB_URL } from "@/lib/site";

const stack = ["WinUI 3", "Windows App SDK", "SSH.NET", "Syncfusion DataGrid"];

export function LandingPage({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const capabilities = [
    { icon: IconTerminal2, ...dict.capabilities.terminal },
    { icon: IconFiles, ...dict.capabilities.sftp },
    { icon: IconActivity, ...dict.capabilities.metrics },
  ];

  const principles = [
    { icon: IconLock, ...dict.principles.privacy },
    { icon: IconBolt, ...dict.principles.native },
    { icon: IconBrandGithub, ...dict.principles.openSource },
  ];

  return (
    <div className="site-shell">
      <header id="top" className="site-header">
        <a href="#top" className="brand" aria-label={dict.nav.home}>
          <Image
            src="/FluentShell.ico"
            alt=""
            width={30}
            height={30}
            className="brand-mark"
          />
          <span>FluentShell</span>
        </a>

        <nav className="site-nav" aria-label={dict.nav.primaryLabel}>
          <a href="#product">{dict.nav.product}</a>
          <a href="#capabilities">{dict.nav.capabilities}</a>
          <a href="#faq">{dict.nav.faq}</a>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher locale={locale} dict={dict} />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="header-github"
          >
            {dict.nav.github}
            <IconArrowUpRight aria-hidden="true" />
          </a>
          <a href="#download" className="button button-primary button-compact">
            {dict.nav.download}
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="release-note">
              <span aria-hidden="true" />
              {dict.hero.releaseNote}
            </p>
            <h1 id="hero-title">
              {dict.hero.titleLine1}
              <br />
              {dict.hero.titleLine2}
            </h1>
          </div>

          <div className="hero-intro">
            <p>{dict.hero.intro}</p>
            <div className="hero-actions">
              <a href="#download" className="button button-primary">
                <IconBrandWindows aria-hidden="true" />
                {dict.hero.ctaDownload}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <IconBrandGithub aria-hidden="true" />
                {dict.hero.ctaSource}
              </a>
            </div>
            <p className="hero-meta">{dict.hero.meta}</p>
          </div>
        </section>

        <section
          id="product"
          className="product-stage"
          aria-label={dict.screenshots.productPreview}
        >
          <div className="product-stage-inner">
            <div className="app-frame">
              <Image
                src="/app.png"
                alt={dict.screenshots.hero}
                width={1200}
                height={800}
                className="app-screenshot"
                sizes="(max-width: 1228px) calc(100vw - 48px), 1180px"
                preload
              />
            </div>
          </div>
        </section>

        <section className="principles" aria-label={dict.principles.heading}>
          {principles.map(({ icon: Icon, title, copy }) => (
            <div className="principle" key={title}>
              <Icon aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <span>{copy}</span>
              </div>
            </div>
          ))}
        </section>

        <section
          id="capabilities"
          className="capabilities"
          aria-labelledby="capabilities-title"
        >
          <div className="section-heading">
            <p>{dict.capabilities.kicker}</p>
            <h2 id="capabilities-title">{dict.capabilities.heading}</h2>
          </div>

          <div className="capability-layout">
            <div className="capability-visual app-frame">
              <Image
                src="/app2.png"
                alt={dict.screenshots.workspace}
                width={1200}
                height={800}
                className="feature-screenshot"
                sizes="(max-width: 980px) calc(100vw - 48px), 660px"
              />
            </div>

            <div className="capability-list">
              {capabilities.map(({ icon: Icon, title, copy }) => (
                <article className="capability" key={title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section" aria-labelledby="workflow-title">
          <div className="workflow-copy">
            <p className="workflow-kicker">{dict.workflow.kicker}</p>
            <h2 id="workflow-title">
              {dict.workflow.headingLines[0]}
              <br />
              {dict.workflow.headingLines[1]}
            </h2>
            <p>{dict.workflow.body}</p>
            <ul>
              {dict.workflow.bullets.map((bullet) => (
                <li key={bullet}>
                  <IconCheck aria-hidden="true" /> {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="terminal-specimen app-frame">
            <Image
              src="/app3.png"
              alt={dict.screenshots.terminal}
              width={1200}
              height={800}
              className="feature-screenshot"
              sizes="(max-width: 980px) calc(100vw - 48px), 700px"
            />
          </div>
        </section>

        <section
          id="stack"
          className="stack-section"
          aria-label={dict.stack.heading}
        >
          <p>{dict.stack.label}</p>
          <div className="stack-list">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section id="faq" className="faq-section" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p>{dict.faq.kicker}</p>
            <h2 id="faq-title">{dict.faq.heading}</h2>
          </div>

          {/* Base UI's Accordion is single-open and collapsible by default;
              Radix's `type`/`collapsible` props would leak onto the DOM node. */}
          <Accordion className="faq-list">
            {dict.faq.entries.map((entry, index) => (
              <AccordionItem value={`faq-${index}`} key={entry.question}>
                <AccordionTrigger>{entry.question}</AccordionTrigger>
                <AccordionContent>{entry.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section
          id="download"
          className="download-section"
          aria-labelledby="download-title"
        >
          <div>
            <IconBrandWindows aria-hidden="true" />
            <p>{dict.download.label}</p>
          </div>
          <h2 id="download-title">
            {dict.download.headingLine1}
            <br />
            {dict.download.headingLine2}
          </h2>
          <div className="download-actions">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-on-blue"
            >
              {dict.download.cta}
              <IconArrowUpRight aria-hidden="true" />
            </a>
            <span>{dict.download.note}</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" className="brand" aria-label={dict.nav.backToTop}>
          <Image src="/FluentShell.ico" alt="" width={26} height={26} />
          <span>FluentShell</span>
        </a>
        <p>{dict.footer.tagline}</p>
        <div>
          <LanguageSwitcher locale={locale} dict={dict} />
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            {dict.footer.github}
          </a>
          <a href="#faq">{dict.footer.faq}</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
