import Link from 'next/link';
import { ArrowRight, Mic } from 'lucide-react';
import { speakingTopics } from '@/lib/data/content';

export function SpeakingPreview() {
  const previewTopics = speakingTopics.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400">
              Speaking
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Invite Jake to Speak
            </h2>
          </div>
          <Link
            href="/speaking"
            className="group inline-flex items-center gap-2 text-forest-800 dark:text-forest-400 font-semibold hover:underline underline-offset-4 transition-all"
          >
            View all topics
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewTopics.map((topic) => (
            <div
              key={topic.id}
              className="group flex flex-col rounded-2xl bg-white dark:bg-background border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400">
                <Mic className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {topic.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-forest-800 dark:text-forest-400">
                <span>{topic.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/speaking"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 dark:bg-forest-700 text-white hover:bg-forest-900 dark:hover:bg-forest-600 transition-all duration-200 hover:scale-[1.02]"
          >
            Book Jake for Your Event
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
