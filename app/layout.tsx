
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JsonLd from '../components/seo/JsonLd';
import { getOrgSchema } from '../lib/seo/jsonld';

export const metadata = {
  metadataBase: new URL('https://ledgerpilot.io'),
  title: {
    default: 'LedgerPilot | AI Bookkeeping for UK Businesses',
    template: '%s | LedgerPilot'
  },
  description: 'AI-powered bookkeeping that keeps UK small businesses return-ready. Automated receipt scanning, bank reconciliation, and MTD VAT summaries.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ledgerpilot.io',
    siteName: 'LedgerPilot',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LedgerPilot AI Bookkeeping' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ledgerpilot',
    creator: '@ledgerpilot'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={getOrgSchema()} />
      </head>
      <body className="bg-slate-50 text-slate-900 overflow-x-hidden antialiased font-inter">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
