import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jake Avard — Build a Meaningful Life',
    template: '%s | Jake Avard',
  },
  description:
    'Faith. Family. Mission. Discipline. Reflections, resources, and formation from missionary, father, writer, and builder Jake Avard.',
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
      'Faith. Family. Mission. Discipline. Reflections, resources, and formation from missionary, father, writer, and builder Jake Avard.',
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
      'Faith. Family. Mission. Discipline. Reflections, resources, and formation from missionary, father, writer, and builder Jake Avard.',
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
  verification: {
    google: 'placeholder',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jake Avard',
              url: 'https://jakeavard.com',
              jobTitle: 'Catholic Missionary, Writer, Speaker',
              description:
                'Catholic missionary, husband, father, writer, speaker, and builder helping people build meaningful lives rooted in faith, family, mission, discipline, and reality.',
              sameAs: [
                'https://twitter.com/jakeavard',
                'https://instagram.com/jakeavard',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Distant City',
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
