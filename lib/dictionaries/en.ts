import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "FluentShell — Native SSH & SFTP for Windows",
    description:
      "FluentShell is a free, open-source SSH and SFTP client for Windows 10 and 11. Terminal, remote file browser, and live server metrics in one native WinUI 3 window.",
    keywords: [
      "SSH client",
      "SFTP client",
      "Windows SSH client",
      "WinUI 3",
      "open source terminal",
      "server monitoring",
      "FluentShell",
    ],
  },
  nav: {
    home: "FluentShell home",
    product: "Product",
    capabilities: "Capabilities",
    faq: "FAQ",
    github: "GitHub",
    download: "Download",
    primaryLabel: "Primary",
    skipToContent: "Skip to content",
    backToTop: "Back to top",
  },
  language: {
    label: "Language",
    names: { en: "English", zh: "中文" },
  },
  hero: {
    releaseNote: "Native for Windows 10 and 11",
    titleLine1: "Your servers.",
    titleLine2: "One focused workspace.",
    intro:
      "FluentShell brings SSH, SFTP, and live server telemetry into one native Windows application—fast to open, direct to use, and free of browser-era overhead.",
    ctaDownload: "Download for Windows",
    ctaSource: "View source",
    meta: "Open source · No telemetry · Native WinUI 3",
  },
  screenshots: {
    hero: "FluentShell showing an SSH terminal, SFTP file browser, and live server metrics in one window",
    workspace:
      "FluentShell session workspace with terminal, SFTP files, and server metrics",
    terminal: "FluentShell terminal connected to a remote server",
    productPreview: "FluentShell product preview",
  },
  principles: {
    heading: "Product principles",
    privacy: {
      title: "Private by default",
      copy: "Zero telemetry and local profile storage.",
    },
    native: {
      title: "Native response",
      copy: "Built for Windows, not wrapped for it.",
    },
    openSource: {
      title: "Open source",
      copy: "Inspect the code and shape the roadmap.",
    },
  },
  capabilities: {
    kicker: "One surface, fewer interruptions.",
    heading: "Everything stays in context.",
    terminal: {
      title: "A terminal that keeps pace",
      copy: "A responsive xterm-compatible workspace for long-running processes, dense logs, and the commands you run all day.",
    },
    sftp: {
      title: "SFTP without context switching",
      copy: "Browse, transfer, rename, and inspect remote files beside the active terminal instead of opening a second tool.",
    },
    metrics: {
      title: "The server stays visible",
      copy: "Read CPU, memory, swap, and network activity from the same session before a small issue becomes an outage.",
    },
  },
  workflow: {
    kicker: "Designed for the work between commands",
    headingLines: ["Connect. Move files.", "Understand the machine."],
    body: "FluentShell treats a remote server as one continuous workspace. Credentials remain protected by Windows, file operations stay visible, and system health is always one glance away.",
    bullets: [
      "Windows Credential Manager integration",
      "Drag-and-drop remote file transfers",
      "Live CPU, memory, and network metrics",
    ],
  },
  stack: {
    label: "Engineered with",
    heading: "Technology stack",
  },
  faq: {
    kicker: "Answers, without the fine print.",
    heading: "Frequently asked questions",
    entries: [
      {
        question: "Is FluentShell completely free?",
        answer:
          "Yes. FluentShell is open source and free to use. There is no paid tier, telemetry package, or feature gate.",
      },
      {
        question: "How are credentials protected?",
        answer:
          "Connection secrets are stored through Windows Credential Manager rather than being written directly into profile files.",
      },
      {
        question: "Which SSH implementation does it use?",
        answer:
          "FluentShell uses SSH.NET for protocol communication and the Windows App SDK with WinUI 3 for its native interface.",
      },
      {
        question: "Does it support Windows 10?",
        answer:
          "Yes. FluentShell supports Windows 10 version 1809 and later, as well as Windows 11.",
      },
    ],
  },
  download: {
    label: "Free. Native. Open source.",
    headingLine1: "Give every server",
    headingLine2: "one clear window.",
    cta: "Download on GitHub",
    note: "Windows 10 1809+ / Windows 11",
  },
  footer: {
    tagline: "Native SSH and SFTP for Windows.",
    github: "GitHub",
    faq: "FAQ",
  },
  og: {
    kicker: "NATIVE FOR WINDOWS 10 AND 11",
    headlineLine1: "Your servers.",
    headlineLine2: "One focused workspace.",
    subtitle:
      "SSH, SFTP, and live server telemetry in one native Windows application.",
    meta: "Open source · No telemetry · WinUI 3",
  },
};
