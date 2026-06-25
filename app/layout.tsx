import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'Jake Avard — Build a Meaningful Life',
    template: '%s | Jake Avard',
  },
  description:
    'Faith. Family. Mission. Discipline. Reflections, resources, and formation from missionary, father, writer, and speaker Jake Avard.',
  keywords: [
    'Jake Avard',
    'Catholic missionary',
    'faith',
    'family',
    'mission',
    'discipline',
    'Christian living',
    'spiritual formation',
    'fatherhood',
    'Distant City',
  ],
  authors: [{ name: 'Jake Avard' }],
  creator: 'Jake Avard',
  metadataBase: new URL('https://jakeavard.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jakeavard.com',
    siteName: 'Jake Avard',
    title: 'Jake Avard — Build a Meaningful Life',
    description:
      'Faith. Family. Mission. Discipline. Reflections, resources, and formation from missionary, father, writer, and speaker Jake Avard.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jake Avard — Build a Meaningful Life',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jake Avard — Build a Meaningful Life',
    description:
      'Faith. Family. Mission. Discipline. Reflections, resources, and formation from missionary, father, writer, and speaker Jake Avard.',
    images: ['/og-image.jpg'],
    creator: '@jakeavard',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jakeavard.com',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
