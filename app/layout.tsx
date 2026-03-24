import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daniel Avramov | Full Stack Developer",
  description:
    "Full Stack Developer specialising in React, Next.js, Node.js, TypeScript, PostgreSQL and MongoDB. Open to new opportunities.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Web Developer",
  ],
  openGraph: {
    title: "Daniel Avramov | Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js, TypeScript, PostgreSQL and MongoDB.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Avramov | Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js, TypeScript, PostgreSQL and MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-T00BHMJ61P" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T00BHMJ61P');
        `}</Script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
