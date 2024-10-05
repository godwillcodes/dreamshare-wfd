import type { Metadata } from "next";
import { Montserrat, Roboto } from 'next/font/google';
import "./globals.css";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dreamshare-wfd.vercel.app'),
  title: "Dreamshare - Share your Holiday Dream",
  description: "Find the perfect partner for your holiday dream with Dreamshare. Share your travel aspirations and connect with like-minded adventurers.",
  keywords: "Dreamshare, holiday, travel, partner, adventure, dream vacation",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Dreamshare',
    title: 'Dreamshare - Share your Holiday Dream',
    description: 'Find the perfect partner for your holiday dream with Dreamshare. Share your travel aspirations and connect with like-minded adventurers.',
    images: [
      {
        url: '/images/ski.jpg',
        width: 1200,
        height: 630,
        alt: 'Dreamshare - Share your Holiday Dream',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dreamshare',
    title: 'Dreamshare - Share your Holiday Dream',
    description: 'Find the perfect partner for your holiday dream with Dreamshare.',
    images: ['/images/ski.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <Header />
        {children}
        <Footer />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dreamshare",
              "url": "https://dreamshare-wfd.vercel.app",
              "description": "Find the perfect partner for your holiday dream with Dreamshare. Share your travel aspirations and connect with like-minded adventurers.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://dreamshare-wfd.vercel.app/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://www.facebook.com/dreamshare",
                "https://www.instagram.com/dreamshare",
                "https://twitter.com/dreamshare"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
