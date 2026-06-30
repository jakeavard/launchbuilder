import { Metadata } from 'next';
import { ShoppingBag, ArrowRight, ExternalLink } from 'lucide-react';
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Books and resources from Jake Avard. Build a meaningful life with tools for faith, family, and discipline.',
  alternates: {
    canonical: 'https://jakeavard.com/store',
  },
};

const AMAZON_URL = 'https://www.amazon.com/Freedom-Journal-Finding-Through-Formation/dp/B0GPHQ6TNM';

export default function StorePage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">
              Store
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Tools for the Journey
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Books and resources to help you build a meaningful life rooted in
              faith, family, mission, and discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
              <img
                src="/images/IMG_7572.JPEG"
                alt="The Freedom Journal"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700">
                Available Now
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                The Freedom Journal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A guided journal for finding freedom through spiritual formation.
                Designed to help you build daily rhythms of prayer, reflection,
                and disciplined growth.
              </p>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all duration-200 hover:scale-[1.02]"
              >
                Buy on Amazon
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-20 bg-white border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="h-10 w-10 text-forest-700 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground mb-4">
            More Coming Soon
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Digital products, courses, and additional resources are in the works.
            Subscribe to the newsletter to be the first to know when new tools
            for the journey are available.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      {/* New Separated Line Container For Embed Element */}
<section className="py-12 bg-gray-50 border-t border-b border-border flex justify-center items-center">
  <Script
    src="https://tither.us"
    data-tither-org="tither-tech"
    data-button-text="Give Now"
    data-color="#7c3aed"
    strategy="afterInteractive"
  />
</section>
    </>
  );
}
