import type { Dictionary } from "./types";

export const zh: Dictionary = {
  meta: {
    title: "FluentShell — Windows 原生 SSH 与 SFTP 客户端",
    description:
      "FluentShell 是面向 Windows 10 和 11 的免费开源 SSH / SFTP 客户端。终端、远程文件管理和服务器实时状态，都在同一个原生 WinUI 3 窗口里。",
    keywords: [
      "SSH 客户端",
      "SFTP 客户端",
      "Windows SSH 工具",
      "WinUI 3",
      "开源终端",
      "服务器监控",
      "FluentShell",
    ],
  },
  nav: {
    home: "FluentShell 首页",
    product: "产品",
    capabilities: "能力",
    faq: "常见问题",
    github: "GitHub",
    download: "下载",
    primaryLabel: "主导航",
    skipToContent: "跳到主要内容",
    backToTop: "回到顶部",
  },
  language: {
    label: "语言",
    names: { en: "English", zh: "中文" },
  },
  hero: {
    releaseNote: "Windows 原生体验",
    titleLine1: "为 Windows 打造的",
    titleLine2: "现代 SSH 客户端",
    intro:
      "连接服务器、管理远程文件，并在一个专注的 WinUI 工作区里掌握系统状态。FluentShell 免费、开源，为 Windows 而生。",
    ctaDownload: "从 GitHub 下载",
    ctaSource: "探索产品能力",
    meta: "开源 · 无遥测 · 支持 Windows 10 1809+ 与 Windows 11",
  },
  screenshots: {
    hero: "FluentShell 在同一窗口中显示 SSH 终端、SFTP 文件管理器和服务器实时指标",
    workspace: "FluentShell 会话工作区，包含终端、SFTP 文件列表和服务器指标",
    terminal: "FluentShell 终端已连接到远程服务器",
    productPreview: "FluentShell 产品预览",
  },
  principles: {
    heading: "产品理念",
    privacy: {
      title: "默认隐私",
      copy: "零遥测，配置全部保存在本地。",
    },
    native: {
      title: "原生响应",
      copy: "为 Windows 而写，不是套壳而来。",
    },
    openSource: {
      title: "开源",
      copy: "代码可查，路线图可参与。",
    },
  },
  capabilities: {
    kicker: "一个界面，更少打断",
    heading: "所有信息都在手边",
    terminal: {
      title: "跟得上手速的终端",
      copy: "兼容 xterm 的终端工作区，长时间运行的任务、密集日志和每天要敲的命令都跟得上。",
    },
    sftp: {
      title: "不用切窗口的 SFTP",
      copy: "在终端旁边浏览、传输、重命名和查看远程文件，不必再开第二个工具。",
    },
    metrics: {
      title: "服务器状态一直可见",
      copy: "在同一个会话里读取 CPU、内存、Swap 和网络活动，小问题变成故障之前就能发现。",
    },
  },
  workflow: {
    kicker: "为命令之间的那些事而设计",
    headingLines: ["连接、传文件", "看懂这台机器"],
    body: "FluentShell 把远程服务器当作一个连续的工作区：凭据交给 Windows 保管，文件操作全程可见，系统健康状况随时一眼可知。",
    bullets: [
      "接入 Windows 凭据管理器",
      "拖放式远程文件传输",
      "CPU、内存与网络实时指标",
    ],
  },
  stack: {
    label: "构建于",
    heading: "技术栈",
  },
  faq: {
    kicker: "答案在这里，没有附加条款",
    heading: "常见问题",
    entries: [
      {
        question: "FluentShell 完全免费吗？",
        answer:
          "是。FluentShell 开源且免费使用，没有付费版本、遥测套餐，也没有功能限制。",
      },
      {
        question: "凭据是怎么保护的？",
        answer:
          "连接密钥通过 Windows 凭据管理器保存，不会直接写进配置文件。",
      },
      {
        question: "使用的是哪个 SSH 实现？",
        answer:
          "协议通信使用 SSH.NET，原生界面使用 Windows App SDK 与 WinUI 3。",
      },
      {
        question: "支持 Windows 10 吗？",
        answer:
          "支持。FluentShell 支持 Windows 10 1809 及以上版本，也支持 Windows 11。",
      },
    ],
  },
  download: {
    label: "免费 · 原生 · 开源",
    headingLine1: "给每台服务器",
    headingLine2: "一个清晰的窗口",
    cta: "在 GitHub 下载",
    note: "Windows 10 1809+ / Windows 11",
  },
  footer: {
    tagline: "Windows 上的原生 SSH 与 SFTP",
    github: "GitHub",
    faq: "常见问题",
  },
  og: {
    kicker: "为 WINDOWS 10 与 11 原生打造",
    headlineLine1: "你的服务器",
    headlineLine2: "一个专注的工作区",
    subtitle: "SSH、SFTP 与服务器实时状态，同在一个 Windows 原生应用里",
    meta: "开源 · 无遥测 · WinUI 3",
  },
};
