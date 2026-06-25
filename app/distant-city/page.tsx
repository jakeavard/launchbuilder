import { Metadata } from 'next';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Distant City',
  description:
    'Essays and reflections on faith, family, mission, discipline, and the Christian life. The blog of Jake Avard.',
  alternates: {
    canonical: 'https://jakeavard.com/distant-city',
  },
};

const SUBSTACK_URL = 'https://distantcity.substack.com/';

export default function DistantCityPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">
              Distant City
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Reflections on the Journey
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Essays on faith, family, mission, discipline, and the ache for home
              that drives the human heart. All writing lives on Substack.
            </p>
            <div className="mt-8">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all duration-200 hover:scale-[1.02]"
              >
                Read on Substack
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
              <img
                src="/images/IMG_7572.JPEG"
                alt="Distant City writing"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Distant City
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are pilgrims in a strange land, and the ache we feel is evidence
                of a home we have not yet reached. Distant City is where I write
                about that pilgrimage — the joys, the struggles, and the hope that
                sustains us on the long road of discipleship.
              </p>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-forest-800 font-semibold hover:underline underline-offset-4 transition-all"
              >
                Subscribe and read on Substack
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
