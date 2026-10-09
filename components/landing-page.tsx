import Image from "next/image";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Reveal, StaggerGroup, StaggerItem, FloatUp } from "@/components/animate";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { GITHUB_URL } from "@/lib/site";
import { publicPath } from "@/lib/utils";

const releaseUrl = `${GITHUB_URL}/releases`;

function Wallpaper({ hero = false }: { hero?: boolean }) {
  return (
    <div className="scene-ambient" aria-hidden="true">
      <Image src={publicPath("/bg.jpg")} alt="" fill loading={hero ? "eager" : "lazy"} sizes="(max-width: 1288px) 100vw, 1240px" />
    </div>
  );
}

function ProductImage({ src, alt, width, hero = false }: { src: string; alt: string; width: number; hero?: boolean }) {
  return (
    <div className="window-wrap">
      <Image
        src={publicPath(src)}
        alt={alt}
        width={width}
        height={1600}
        className="product-image"
        preload={hero}
        sizes={src === "/Editor.png" ? "(max-width: 900px) 84vw, 860px" : "(max-width: 900px) 88vw, 1080px"}
      />
    </div>
  );
}

export function LandingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const capabilities = [
    dict.capabilities.terminal,
    dict.capabilities.sftp,
    dict.capabilities.transfers,
    dict.capabilities.editor,
    dict.capabilities.metrics,
    dict.capabilities.connections,
  ];
  const principles = [
    dict.principles.native,
    dict.principles.privacy,
    dict.principles.openSource,
  ];
  const scenes = [
    { id: "files", image: "/SFTP.png", width: 2831, alt: dict.screenshots.workspace, ...dict.product.files },
    { id: "editor", image: "/Editor.png", width: 2134, alt: dict.screenshots.editor, ...dict.product.editor },
  ];

  return (
    <div className="site-shell">
      <header id="top" className="site-header">
        <a href="#top" className="brand" aria-label={dict.nav.home}>
          <span>FluentShell</span>
        </a>
        <nav className="site-nav" aria-label={dict.nav.primaryLabel}>
          <a href="#product">{dict.nav.product}</a>
          <a href="#features">{dict.nav.capabilities}</a>
          <a href="#faq">{dict.nav.faq}</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} dict={dict} />
          <a className="header-github" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label={dict.nav.github}>
            <IconBrandGithub aria-hidden="true" />
          </a>
          <a className="button button-primary button-compact" href={releaseUrl} target="_blank" rel="noreferrer">
            {dict.nav.download}<IconArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-heading">
              <Reveal as="p" className="eyebrow">{dict.hero.releaseNote}</Reveal>
              <Reveal as="h1" id="hero-title" delay={0.06}>{dict.hero.titleLine1}<br />{dict.hero.titleLine2}</Reveal>
            </div>
            <Reveal className="hero-summary" delay={0.12}>
              <p className="hero-intro">{dict.hero.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={releaseUrl} target="_blank" rel="noreferrer">
                  {dict.hero.ctaDownload}<IconArrowUpRight aria-hidden="true" />
                </a>
                <a className="text-link" href="#product">{dict.hero.ctaSource}<span aria-hidden="true">↓</span></a>
              </div>
              <p className="hero-meta">{dict.hero.meta}</p>
            </Reveal>
          </div>
          <FloatUp className="hero-product scene scene-hero">
            <Wallpaper hero />
            <ProductImage src="/SSH.png" alt={dict.screenshots.hero} width={2799} hero />
          </FloatUp>
        </section>

        <section className="principles" aria-label={dict.principles.heading}>
          {principles.map(({ title, copy }) => (
            <Reveal as="article" className="principle" key={title}>
              <div><h2>{title}</h2><p>{copy}</p></div>
            </Reveal>
          ))}
        </section>

        <section id="product" className="scenes" aria-label={dict.screenshots.productPreview}>
          {scenes.map((scene) => (
            <article className={`scene-row scene-row-${scene.id}`} key={scene.id} aria-labelledby={`${scene.id}-title`}>
              <Reveal className="scene-heading">
                <div>
                  <p className="eyebrow">{scene.label}</p>
                  <h2 id={`${scene.id}-title`}>{scene.title}</h2>
                </div>
                <div className="scene-copy">
                  <p>{scene.copy}</p>
                  <ul>{scene.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </Reveal>
              <Reveal className={`scene scene-${scene.id}`}>
                <Wallpaper />
                <ProductImage src={scene.image} alt={scene.alt} width={scene.width} />
              </Reveal>
            </article>
          ))}
        </section>

        <section id="features" className="features-section" aria-labelledby="features-title">
          <Reveal className="section-heading">
            <p className="eyebrow">{dict.capabilities.kicker}</p>
            <h2 id="features-title">{dict.capabilities.heading}</h2>
          </Reveal>
          <StaggerGroup className="capability-list">
            {capabilities.map(({ title, copy }, index) => (
              <StaggerItem as="article" className="capability" key={title}>
                <span className="capability-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="project-note">
            <div><h3>{dict.progress.heading}</h3><p>{dict.progress.body}</p></div>
            <a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">{dict.progress.cta}<IconArrowUpRight aria-hidden="true" /></a>
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
            <a className="button button-primary" href={releaseUrl} target="_blank" rel="noreferrer">{dict.download.cta}<IconArrowUpRight aria-hidden="true" /></a>
            <span>{dict.download.note}</span>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" className="brand" aria-label={dict.nav.backToTop}><span>FluentShell</span></a>
        <p>{dict.footer.tagline}</p>
        <div><LanguageSwitcher locale={locale} dict={dict} /><a href={GITHUB_URL} target="_blank" rel="noreferrer">{dict.footer.github}</a><a href="#faq">{dict.footer.faq}</a><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  );
}
