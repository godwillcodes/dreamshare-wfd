import type { Metadata } from "next";
import { Montserrat, Roboto } from 'next/font/google';
import "./globals.css";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import { GoogleTagManager } from '@next/third-parties/google';

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
  title: "Dreamshare - Share your Holiday Dream",
  description: "Find the perfect partner for your holiday dream with Dreamshare. Share your travel aspirations and connect with like-minded adventurers.",
  keywords: "Dreamshare, holiday, travel, partner, adventure, dream vacation",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <GoogleTagManager gtmId="GTM-PSLJN27Q" />
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <Header />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
