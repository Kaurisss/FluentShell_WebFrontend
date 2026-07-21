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

const GITHUB_URL = "https://github.com/fluent-shell";

const capabilities = [
  {
    icon: IconTerminal2,
    title: "A terminal that keeps pace",
    copy: "A responsive xterm-compatible workspace for long-running processes, dense logs, and the commands you run all day.",
  },
  {
    icon: IconFiles,
    title: "SFTP without context switching",
    copy: "Browse, transfer, rename, and inspect remote files beside the active terminal instead of opening a second tool.",
  },
  {
    icon: IconActivity,
    title: "The server stays visible",
    copy: "Read CPU, memory, swap, and network activity from the same session before a small issue becomes an outage.",
  },
];

const stack = ["WinUI 3", "Windows App SDK", "SSH.NET", "Syncfusion DataGrid"];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="FluentShell home">
          <Image
            src="/FluentShell.ico"
            alt=""
            width={30}
            height={30}
            className="brand-mark"
          />
          <span>FluentShell</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="header-actions">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="header-github"
          >
            GitHub
            <IconArrowUpRight aria-hidden="true" />
          </a>
          <a href="#download" className="button button-primary button-compact">
            Download
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="release-note">
              <span aria-hidden="true" />
              Native for Windows 10 and 11
            </p>
            <h1 id="hero-title">
              Your servers.
              <br />
              One focused workspace.
            </h1>
          </div>

          <div className="hero-intro">
            <p>
              FluentShell brings SSH, SFTP, and live server telemetry into one
              native Windows application—fast to open, direct to use, and free
              of browser-era overhead.
            </p>
            <div className="hero-actions">
              <a href="#download" className="button button-primary">
                <IconBrandWindows aria-hidden="true" />
                Download for Windows
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <IconBrandGithub aria-hidden="true" />
                View source
              </a>
            </div>
            <p className="hero-meta">Open source · No telemetry · Native WinUI 3</p>
          </div>
        </section>

        <section id="product" className="product-stage" aria-label="FluentShell product preview">
          <div className="product-stage-inner">
            <div className="app-frame">
              <Image
                src="/app.png"
                alt="FluentShell showing an SSH terminal, SFTP file browser, and live server metrics in one window"
                width={1200}
                height={800}
                className="app-screenshot"
                preload
              />
            </div>
          </div>
        </section>

        <section className="principles" aria-label="Product principles">
          <div className="principle">
            <IconLock aria-hidden="true" />
            <div>
              <strong>Private by default</strong>
              <span>Zero telemetry and local profile storage.</span>
            </div>
          </div>
          <div className="principle">
            <IconBolt aria-hidden="true" />
            <div>
              <strong>Native response</strong>
              <span>Built for Windows, not wrapped for it.</span>
            </div>
          </div>
          <div className="principle">
            <IconBrandGithub aria-hidden="true" />
            <div>
              <strong>Open source</strong>
              <span>Inspect the code and shape the roadmap.</span>
            </div>
          </div>
        </section>

        <section id="capabilities" className="capabilities">
          <div className="section-heading">
            <p>One surface, fewer interruptions.</p>
            <h2>Everything stays in context.</h2>
          </div>

          <div className="capability-layout">
            <div className="capability-visual">
              <Image
                src="/app2.png"
                alt="FluentShell session workspace with terminal, SFTP files, and server metrics"
                width={1200}
                height={800}
                className="feature-screenshot"
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

        <section className="workflow-section">
          <div className="workflow-copy">
            <p className="workflow-kicker">Designed for the work between commands</p>
            <h2>Connect. Move files. Understand the machine.</h2>
            <p>
              FluentShell treats a remote server as one continuous workspace.
              Credentials remain protected by Windows, file operations stay
              visible, and system health is always one glance away.
            </p>
            <ul>
              <li><IconCheck aria-hidden="true" /> Windows Credential Manager integration</li>
              <li><IconCheck aria-hidden="true" /> Drag-and-drop remote file transfers</li>
              <li><IconCheck aria-hidden="true" /> Live CPU, memory, and network metrics</li>
            </ul>
          </div>

          <div className="terminal-specimen">
            <Image
              src="/app3.png"
              alt="FluentShell terminal connected to a remote server"
              width={1200}
              height={800}
              className="feature-screenshot"
            />
          </div>
        </section>

        <section id="stack" className="stack-section">
          <p>Engineered with</p>
          <div className="stack-list">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="faq-heading">
            <p>Answers, without the fine print.</p>
            <h2>Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="faq-list">
            <AccordionItem value="free">
              <AccordionTrigger>Is FluentShell completely free?</AccordionTrigger>
              <AccordionContent>
                Yes. FluentShell is open source and free to use. There is no
                paid tier, telemetry package, or feature gate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security">
              <AccordionTrigger>How are credentials protected?</AccordionTrigger>
              <AccordionContent>
                Connection secrets are stored through Windows Credential
                Manager rather than being written directly into profile files.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="library">
              <AccordionTrigger>Which SSH implementation does it use?</AccordionTrigger>
              <AccordionContent>
                FluentShell uses SSH.NET for protocol communication and the
                Windows App SDK with WinUI 3 for its native interface.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="windows">
              <AccordionTrigger>Does it support Windows 10?</AccordionTrigger>
              <AccordionContent>
                Yes. FluentShell supports Windows 10 version 1809 and later,
                as well as Windows 11.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section id="download" className="download-section">
          <div>
            <IconBrandWindows aria-hidden="true" />
            <p>Free. Native. Open source.</p>
          </div>
          <h2>Give every server<br />one clear window.</h2>
          <div className="download-actions">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="button button-on-blue">
              Download on GitHub
              <IconArrowUpRight aria-hidden="true" />
            </a>
            <span>Windows 10 1809+ / Windows 11</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" className="brand" aria-label="Back to top">
          <Image src="/FluentShell.ico" alt="" width={26} height={26} />
          <span>FluentShell</span>
        </a>
        <p>Native SSH and SFTP for Windows.</p>
        <div>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          <a href="#faq">FAQ</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}