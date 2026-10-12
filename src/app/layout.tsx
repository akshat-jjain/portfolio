import type { Metadata } from "next";
import "./globals.css";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  alternates: {
    canonical: portfolioData.seo.canonicalPath,
  },
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    url: absoluteUrl(portfolioData.seo.canonicalPath),
    siteName: `${portfolioData.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
  },
};

const themeInitScript = `
(function() {
  try {
    const saved = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const resolved = saved === 'light' || saved === 'dark' ? saved : (systemPrefersLight ? 'light' : 'dark');
    document.documentElement.dataset.theme = resolved;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
