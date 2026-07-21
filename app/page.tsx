import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconBrandWindows, IconServer, IconActivity, IconBrandGithub } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 w-full max-w-6xl mx-auto border-b border-border/40">
        <div className="flex items-center gap-3">
          <img src="/FluentShell.ico" alt="FluentShell Logo" className="w-8 h-8 rounded-none object-contain" />
          <span className="font-bold text-xl tracking-tight text-foreground">FluentShell</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#stack" className="hover:text-foreground transition-colors">Technology</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/fluent-shell" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            GitHub
          </a>
          <Button className="border-primary-solid font-semibold h-9 px-6 rounded-none">
            Download Free
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center mt-24 px-4">
        {/* Badge */}
        <Badge variant="outline" className="mb-8 px-3 py-1 text-primary border-border bg-background shadow-none text-xs rounded-none uppercase tracking-wider font-semibold">
          <span className="mr-2">✦</span> FluentShell v1.0 is here
        </Badge>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-center max-w-4xl text-foreground leading-none">
          Your modern SSH & SFTP client for Windows.
        </h1>
        
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl text-center leading-relaxed">
          Experience the speed of native WinUI, comprehensive remote file management, and real-time performance monitoring. Built for developers who care about design.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button className="border-primary-solid h-12 px-8 text-base font-semibold w-full sm:w-auto rounded-none">
            Download Free
          </Button>
          <Button variant="outline" className="h-12 px-8 text-base font-semibold w-full sm:w-auto rounded-none">
            <IconBrandGithub className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </div>

        {/* Product Screenshot */}
        <div className="mt-28 w-full max-w-5xl px-4 relative mb-12">
          {/* Stark rigid container for the screenshot */}
          <div className="relative overflow-hidden shadow-2xl border border-border bg-card rounded-none">
             <Image 
               src="/app.png" 
               alt="FluentShell application interface" 
               width={1200} 
               height={800} 
               className="w-full h-auto object-cover grayscale-[10%]"
               priority
             />
          </div>
        </div>

        {/* Features Grid */}
        <section id="features" className="mt-24 w-full max-w-6xl px-4 pb-24">
          <div className="mb-16 flex flex-col items-center">
             <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need. Nothing you don't.</h2>
             <p className="text-muted-foreground max-w-2xl text-center">Engineered with extreme restraint to provide you exactly what is required to manage your servers, without the bloat.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-border shadow-none hover:border-foreground transition-colors rounded-none bg-background">
              <div className="mb-6 text-foreground">
                 <IconBrandWindows stroke={1.5} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Native WinUI Experience</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Built from the ground up for Windows. Enjoy a high-performance native application that feels like a natural extension of your OS.</p>
            </Card>

            <Card className="p-8 border-border shadow-none hover:border-foreground transition-colors rounded-none bg-background">
              <div className="mb-6 text-foreground">
                 <IconServer stroke={1.5} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Seamless SFTP Management</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Drag and drop files effortlessly. Our advanced Syncfusion DataGrid powers a lightning-fast file explorer for your remote servers.</p>
            </Card>

            <Card className="p-8 border-border shadow-none hover:border-foreground transition-colors rounded-none bg-background">
              <div className="mb-6 text-foreground">
                 <IconActivity stroke={1.5} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Real-time Performance</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Monitor CPU, memory, and network usage instantly. Powered by SSH.NET for reliable, low-latency performance data.</p>
            </Card>
          </div>
        </section>

        {/* Tech Stack & Compliance */}
        <section id="stack" className="w-full border-t border-border mt-12 bg-muted/30">
           <div className="max-w-6xl mx-auto py-24 px-4 text-center">
             <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10">Proudly Engineered With</h2>
             <div className="flex flex-wrap justify-center items-center gap-12 text-muted-foreground">
                <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                   <span className="font-bold text-lg tracking-tight text-foreground">Syncfusion</span>
                   <span className="text-sm font-medium">WinUI DataGrid</span>
                </div>
                <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                   <span className="font-bold text-lg tracking-tight text-foreground">SSH.NET</span>
                </div>
                <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                   <span className="font-bold text-lg tracking-tight text-foreground">Microsoft</span>
                   <span className="text-sm font-medium">Windows App SDK</span>
                </div>
             </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border py-12 text-sm text-muted-foreground bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">
           <p className="font-medium">© {new Date().getFullYear()} FluentShell. All rights reserved.</p>
           <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors font-medium">Terms of Service</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
