import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ReactLenis } from "lenis/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Stelios Tsekouras – Video Editing Services",
    template: "%s | Stelios Tsekouras",
  },
  description:
    "I am Stelios Tsekouras, a professional Video Editor specializing in Short Form content for social media, delivering polished, impactful videos across political, influencer, tourism, and brand projects.",
  keywords: [
    "Stelios Tsekouras",
    "Video Editor",
    "Short Form Content",
    "Social Media Video",
    "Cinematic Editing",
    "Freelance Video Editor",
    "Greece Video Editor",
  ],
  authors: [{ name: "Stelios Tsekouras", url: "https://stsekouras.vercel.app" }],
  creator: "Stelios Tsekouras",
  publisher: "Stelios Tsekouras",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stsekouras.vercel.app",
    title: "Stelios Tsekouras – Video Editing Services",
    description:
      "I am Stelios Tsekouras, a professional Video Editor specializing in Short Form content for social media, delivering polished, impactful videos across political, influencer, tourism, and brand projects.",
    siteName: "Stelios Tsekouras Portfolio",
    images: [
      {
        url: "/steliostsekouras.png",
        width: 1200,
        height: 630,
        alt: "Stelios Tsekouras – Video Editing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stelios Tsekouras – Video Editing Services",
    description:
      "I produce short-form video content with precise editing, fluid transitions, and refined audio.",
    images: ["/steliostsekouras.png"],
  },
  alternates: {
    canonical: "https://stsekouras.vercel.app",
  },
  category: "Video Editing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
<meta name="theme-color" content="#050507" media="(prefers-color-scheme: dark)" />
<meta name="theme-color" content="#050507" media="(prefers-color-scheme: light)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* ── Blocking theme script — fires before first paint on ALL devices ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark' || stored === 'light') {
                    document.documentElement.setAttribute('data-theme', stored);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stelios Tsekouras",
              url: "https://stsekouras.vercel.app",
              jobTitle: "Video Editor",
              knowsAbout: [
                "Video Editing",
                "Short Form Content",
                "Social Media Video",
                "Cinematic Editing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-dvh text-white`}>
        <ReactLenis root options={{ syncTouch: false }}>
          <div className="min-h-dvh">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <JumpToTop />
            <Toaster position="top-center" />
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}