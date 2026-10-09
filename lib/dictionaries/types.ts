export interface FeatureCopy {
  title: string;
  copy: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ProductCopy extends FeatureCopy {
  label: string;
  bullets: [string, string, string];
}

/**
 * Every locale must supply this exact shape, so a missing translation is a
 * type error rather than an English string leaking into another language.
 */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    home: string;
    product: string;
    capabilities: string;
    faq: string;
    github: string;
    download: string;
    primaryLabel: string;
    skipToContent: string;
    backToTop: string;
  };
  language: {
    label: string;
    names: { en: string; zh: string };
  };
  hero: {
    releaseNote: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    ctaDownload: string;
    ctaSource: string;
    meta: string;
  };
  screenshots: {
    hero: string;
    workspace: string;
    editor: string;
    productPreview: string;
  };
  principles: {
    heading: string;
    privacy: FeatureCopy;
    native: FeatureCopy;
    openSource: FeatureCopy;
  };
  capabilities: {
    kicker: string;
    heading: string;
    terminal: FeatureCopy;
    sftp: FeatureCopy;
    transfers: FeatureCopy;
    editor: FeatureCopy;
    metrics: FeatureCopy;
    connections: FeatureCopy;
  };
  product: {
    files: ProductCopy;
    editor: ProductCopy;
  };
  progress: {
    heading: string;
    body: string;
    cta: string;
  };
  faq: {
    kicker: string;
    heading: string;
    entries: FaqEntry[];
  };
  download: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    cta: string;
    note: string;
  };
  footer: {
    tagline: string;
    github: string;
    faq: string;
  };
  og: {
    kicker: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    meta: string;
  };
}
