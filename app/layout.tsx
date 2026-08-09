import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "./LenisProvider";
import BackgroundShapes from "./BackgroundShapes";
import GlobalAnimations from "./components/GlobalAnimations";
import CustomCursor from "./components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amangoyal.dev"),
  title: "Aman Goyal | Senior Frontend Developer",
  description: "Portfolio of Aman Goyal, a Senior Frontend Developer specializing in React, Next.js, and crafting highly performant, scalable web architectures.",
  keywords: ["Aman Goyal", "Frontend Developer", "React Developer", "Next.js", "Web Developer", "Software Engineer", "India"],
  authors: [{ name: "Aman Goyal" }],
  creator: "Aman Goyal",
  alternates: {
    canonical: "https://www.amangoyal.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amangoyal.dev",
    title: "Aman Goyal | Senior Frontend Developer",
    description: "Portfolio of Aman Goyal, a Senior Frontend Developer specializing in React, Next.js, and crafting highly performant, scalable web architectures.",
    siteName: "Aman Goyal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Goyal | Senior Frontend Developer",
    description: "Portfolio of Aman Goyal, a Senior Frontend Developer specializing in React, Next.js, and crafting highly performant, scalable web architectures.",
    creator: "@amngoyal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`} style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className="min-h-screen bg-[#111111] text-white flex flex-col font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-50">
        <BackgroundShapes />
        <GlobalAnimations />
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aman Goyal",
              "url": "https://www.amangoyal.dev",
              "jobTitle": "Senior JavaScript Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Kotak Securities"
              },
              "sameAs": [
                "https://x.com/amngoyal",
                "https://github.com/amngoyal",
                "https://www.linkedin.com/in/amngoyal/"
              ]
            })
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
