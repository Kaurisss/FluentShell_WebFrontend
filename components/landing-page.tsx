import Image from "next/image";
import {
  IconActivity,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandWindows,
  IconCheck,
  IconFiles,
  IconLock,
  IconTerminal2,
} from "@tabler/icons-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Dictionary } from "@/lib/dictionaries";
import { publicPath } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { GITHUB_URL } from "@/lib/site";
import { Reveal, StaggerGroup, StaggerItem, FloatUp } from "@/components/animate";

const releaseUrl = `${GITHUB_URL}/releases`;

export function LandingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const capabilities = [
    { icon: IconTerminal2, key: "01", ...dict.capabilities.terminal },
    { icon: IconFiles, key: "02", ...dict.capabilities.sftp },
    { icon: IconActivity, key: "03", ...dict.capabilities.metrics },
  ];

  const principles = [
    { icon: IconLock, ...dict.principles.privacy },
    { icon: IconBrandWindows, ...dict.principles.native },
    { icon: IconBrandGithub, ...dict.principles.openSource },
  ];

  const scenes = [
    { id: "terminal", image: "/app3.png", background: "/bg3.png", label: dict.capabilities.terminal.title, copy: dict.capabilities.terminal.copy, alt: dict.screenshots.terminal },
    { id: "files", image: "/app2.png", background: "/bg1.png", label: dict.capabilities.sftp.title, copy: dict.capabilities.sftp.copy, alt: dict.screenshots.workspace },
    { id: "metrics", image: "/app.png", background: "/bg.png", label: dict.capabilities.metrics.title, copy: dict.capabilities.metrics.copy, alt: dict.screenshots.hero },
  ];

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{dict.nav.skipToContent}</a>
      <header id="top" className="site-header">
        <a href="#top" className="brand" aria-label={dict.nav.home}>
          <Image src={publicPath("/FluentShell.ico")} alt="" width={28} height={28} className="brand-mark" />
          <span>FluentShell</span>
        </a>
        <nav className="site-nav" aria-label={dict.nav.primaryLabel}>
          <a href="#product">{dict.nav.product}</a>
          <a href="#features">{dict.nav.capabilities}</a>
          <a href="#faq">{dict.nav.faq}</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} dict={dict} />
          <a className="header-github" href={GITHUB_URL} target="_blank" rel="noreferrer">
            {dict.nav.github}<IconArrowUpRight aria-hidden="true" />
          </a>
          <a className="button button-primary button-compact" href={releaseUrl} target="_blank" rel="noreferrer">
            {dict.nav.download}
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Reveal as="p" className="eyebrow"><span className="eyebrow-dot" />{dict.hero.releaseNote}</Reveal>
            <Reveal as="h1" id="hero-title" delay={0.06}>{dict.hero.titleLine1}<br />{dict.hero.titleLine2}</Reveal>
            <Reveal as="p" className="hero-intro" delay={0.12}>{dict.hero.intro}</Reveal>
            <Reveal className="hero-actions" delay={0.18}>
              <a className="button button-primary" href={releaseUrl} target="_blank" rel="noreferrer">
                <IconBrandGithub aria-hidden="true" />{dict.hero.ctaDownload}<IconArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#features">{dict.hero.ctaSource}<span aria-hidden="true">↓</span></a>
            </Reveal>
            <Reveal as="p" className="hero-meta" delay={0.24}><IconCheck aria-hidden="true" />{dict.hero.meta}</Reveal>
          </div>
          <FloatUp className="hero-product scene scene-hero">
            <div className="scene-ambient hero-ambient" aria-hidden="true" style={{ backgroundImage: `url(${publicPath("/hero_bg.png")})` }} />
            <div className="window-wrap">
              <Image src={publicPath("/app.png")} alt={dict.screenshots.hero} width={1400} height={900} className="product-image" priority sizes="(max-width: 900px) calc(100vw - 32px), 1120px" />
            </div>
          </FloatUp>
        </section>

        <section className="principles" aria-label={dict.principles.heading}>
          {principles.map(({ icon: Icon, title, copy }) => (
            <Reveal as="article" className="principle" key={title}>
              <Icon aria-hidden="true" />
              <div><strong>{title}</strong><span>{copy}</span></div>
            </Reveal>
          ))}
        </section>

        <section id="features" className="features-section" aria-labelledby="features-title">
          <Reveal className="section-heading">
            <p className="eyebrow">{dict.capabilities.kicker}</p>
            <h2 id="features-title">{dict.capabilities.heading}</h2>
          </Reveal>
          <StaggerGroup className="capability-list">
            {capabilities.map(({ icon: Icon, key, title, copy }) => (
              <StaggerItem as="article" className="capability" key={title}>
                <span className="capability-index">{key}</span>
                <Icon aria-hidden="true" />
                <div><h3>{title}</h3><p>{copy}</p></div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="product" className="scenes" aria-label={dict.screenshots.productPreview}>
          {scenes.map((scene, index) => (
            <article className={`scene-row scene-row-${index % 2 === 0 ? "image-first" : "copy-first"}`} key={scene.id}>
              <Reveal className={`scene scene-${scene.id}`}>
                <div
                  className="scene-ambient"
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${publicPath(scene.background)})` }}
                />
                <div className="window-wrap">
                  <Image src={publicPath(scene.image)} alt={scene.alt} width={1200} height={800} className="product-image" sizes="(max-width: 900px) calc(100vw - 32px), 720px" />
                </div>
              </Reveal>
              <Reveal className="scene-copy" delay={0.06}>
                <p className="scene-number">0{index + 1} / {dict.nav.capabilities}</p>
                <h2>{scene.label}</h2>
                <p>{scene.copy}</p>
              </Reveal>
            </article>
          ))}
        </section>

        <section className="trust-section" aria-labelledby="trust-title">
          <Reveal className="trust-copy">
            <p className="eyebrow">{dict.workflow.kicker}</p>
            <h2 id="trust-title">{dict.workflow.headingLines[0]}<br />{dict.workflow.headingLines[1]}</h2>
            <p>{dict.workflow.body}</p>
            <ul>{dict.workflow.bullets.map((bullet) => <li key={bullet}><IconCheck aria-hidden="true" />{bullet}</li>)}</ul>
          </Reveal>
          <Reveal className="trust-facts" delay={0.08}>
            <div><span>WinUI 3</span><strong>{dict.principles.native.title}</strong><p>{dict.principles.native.copy}</p></div>
            <div><span>Windows 10 1809+</span><strong>Windows 11</strong><p>{dict.download.note}</p></div>
            <div><span>Open source</span><strong>Zero telemetry</strong><p>{dict.principles.privacy.copy}</p></div>
          </Reveal>
        </section>

        <section id="faq" className="faq-section" aria-labelledby="faq-title">
          <Reveal className="section-heading"><p className="eyebrow">{dict.faq.kicker}</p><h2 id="faq-title">{dict.faq.heading}</h2></Reveal>
          <Accordion className="faq-list">
            {dict.faq.entries.map((entry, index) => <AccordionItem value={`faq-${index}`} key={entry.question}><AccordionTrigger>{entry.question}</AccordionTrigger><AccordionContent>{entry.answer}</AccordionContent></AccordionItem>)}
          </Accordion>
        </section>

        <section id="download" className="download-section" aria-labelledby="download-title">
          <Reveal as="p" className="eyebrow">{dict.download.label}</Reveal>
          <Reveal as="h2" id="download-title" delay={0.06}>{dict.download.headingLine1}<br />{dict.download.headingLine2}</Reveal>
          <Reveal className="download-actions" delay={0.12}>
            <a className="button button-on-blue" href={releaseUrl} target="_blank" rel="noreferrer">{dict.download.cta}<IconArrowUpRight aria-hidden="true" /></a>
            <span>{dict.download.note}</span>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" className="brand" aria-label={dict.nav.backToTop}><Image src={publicPath("/FluentShell.ico")} alt="" width={26} height={26} /><span>FluentShell</span></a>
        <p>{dict.footer.tagline}</p>
        <div><LanguageSwitcher locale={locale} dict={dict} /><a href={GITHUB_URL} target="_blank" rel="noreferrer">{dict.footer.github}</a><a href="#faq">{dict.footer.faq}</a><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  );
}
