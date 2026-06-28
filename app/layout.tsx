import type { Metadata } from 'next';
import SidebarLayout from './components/SidebarLayout';
import './globals.css';
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Tabletop Tavern Guide - Best Factions, Builds & Strategy',
  description: 'The ultimate Tabletop Tavern guide with faction tier lists, unit counters, campaign strategies, item synergies and achievement tracking. Master the roguelike RTS.',
  metadataBase: new URL('https://tabletop-tavern-guide.vercel.app'),
  openGraph: {
    title: 'Tabletop Tavern Guide',
    description: 'The ultimate Tabletop Tavern guide with faction tier lists, unit counters, campaign strategies, item synergies and achievement tracking. Master the roguelike RTS.',
    type: 'website',
  },
  verification: {
    google: '4cd6cdf221ea7b0b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="4cd6cdf221ea7b0b" />

        {/* Google Analytics 4 */}
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K" />
        <Script strategy="lazyOnload" id="gtag-init">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ET6778V62K');`}
            </Script>
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
      
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __html: `{"@context": "https://schema.org", "@type": "WebSite", "name": "Tabletop Tavern Guide", "url": "https://tabletop-tavern-guide.vercel.app"}`
          }
        />

      </head>
      <body className="font-body min-h-screen flex flex-col">
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
