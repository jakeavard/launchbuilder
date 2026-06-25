import { ArrowRight, ExternalLink } from 'lucide-react';

const SUBSTACK_URL = 'https://distantcity.substack.com/';

export function LatestArticles() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400">
              Distant City
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Latest Reflections
            </h2>
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-forest-800 dark:text-forest-400 font-semibold hover:underline underline-offset-4 transition-all"
          >
            Read on Substack
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-background"
          >
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
              <img
                src="/images/IMG_7572.JPEG"
                alt="Distant City article"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground group-hover:text-forest-800 dark:group-hover:text-forest-400 transition-colors">
                Read the latest on Substack
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Essays on faith, family, mission, discipline, and the ache for home that drives the human heart.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-forest-800 dark:text-forest-400 pt-2">
                <span>Go to Distant City</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
