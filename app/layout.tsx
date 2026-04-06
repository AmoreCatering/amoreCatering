import Nav from './components/Nav';
import Footer from './components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsWrapper from '@/components/AnalyticsWrapper';

import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });

const siteUrl = 'https://amorecatering.se';

export const metadata: Metadata = {
  title: 'Amore Catering | Premium Catering Stockholm | Hemlagat & Gourmet',
  description:
    'Amore Catering Stockholm – Premium catering för företag, bröllop och fester. Hemlagad mat med gourmetkänsla, leverans i hela Stockholm. Boka idag.',
  keywords:
    'catering stockholm, catering företag stockholm, bröllopscatering, festcatering, företagsevenemang catering, hemlagad catering, buffé stockholm',
  authors: [{ name: 'Amore Catering' }],
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Amore Catering Stockholm | Hemlagat & Gourmet',
    description:
      'Premium catering för företag, bröllop och privata fester i Stockholm. Färsk, hemlagad mat levererad till din dörr.',
    url: siteUrl,
    siteName: 'Amore Catering',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: '/catering-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Amore Catering Stockholm – Premium hemlagad catering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amore Catering Stockholm',
    description: 'Premium catering för alla tillfällen i Stockholm.',
    images: ['/catering-hero.webp'],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Amore Catering Stockholm',
  description:
    'Premium catering-tjänster i Stockholm. Hemlagad mat med gourmetkänsla för företagsevenemang, bröllop och privata fester.',
  url: siteUrl,
  telephone: '+4683042270',
  email: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Högalidsgatan 13B',
    addressLocality: 'Stockholm',
    postalCode: '117 30',
    addressCountry: 'SE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 59.3179,
    longitude: 18.033,
  },
  areaServed: {
    '@type': 'City',
    name: 'Stockholm',
  },
  priceRange: 'SEK 345–495',
  servesCuisine: ['Swedish', 'Mediterranean', 'Italian', 'Vegetarian'],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${sourceSans3.className} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main>
          <Nav />
          {children}
          <AnalyticsWrapper />
          <Footer />
        </main>
        <CookieConsent />
      </body>
    </html>
  );
}
