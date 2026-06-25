import Link from 'next/link';
import { ArrowRight, Mic } from 'lucide-react';

const topics = [
  {
    id: '1',
    title: 'Build a Meaningful Life',
    description:
      'A keynote on the five pillars of a life rooted in faith, family, mission, discipline, and reality.',
    duration: '45–60 min',
  },
  {
    id: '2',
    title: 'The Distant City',
    description:
      'An exploration of Christian hope, pilgrimage, and the ache for home that drives the human heart.',
    duration: '45–60 min',
  },
  {
    id: '3',
    title: 'Fatherhood and Formation',
    description:
      'A practical talk on raising children in the faith, building family culture, and spiritual formation in the home.',
    duration: '45–60 min',
  },
];

export function SpeakingPreview() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700">
              Speaking
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Invite Jake to Speak
            </h2>
          </div>
          <Link
            href="/speaking"
            className="group inline-flex items-center gap-2 text-forest-800 font-semibold hover:underline underline-offset-4 transition-all"
          >
            View all topics
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="group flex flex-col rounded-2xl bg-white border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <Mic className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {topic.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-forest-800">
                <span>{topic.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all duration-200 hover:scale-[1.02]"
          >
            Book Jake for Your Event
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
