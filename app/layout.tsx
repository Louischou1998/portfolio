import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "周鈺清 | Full-Stack Developer",
  description: "周鈺清 — Full-stack developer specializing in React, .NET, Python, and data engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
