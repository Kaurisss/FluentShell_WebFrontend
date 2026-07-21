import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FluentShell — Native SSH & SFTP for Windows",
  description:
    "A native, open-source SSH and SFTP workspace for Windows with live server telemetry.",
  icons: {
    icon: "/FluentShell.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans")}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
