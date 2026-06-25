'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white dark:bg-background">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400">
              Jake Avard
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[0.95]">
              Build a
              <br />
              Meaningful Life
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
            Faith. Family. Mission. Discipline. Reflections, resources, and
            formation from missionary, father, writer, and builder Jake Avard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in animate-delay-300">
            <Link
              href="/resources"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 dark:bg-forest-700 text-white hover:bg-forest-900 dark:hover:bg-forest-600 transition-all duration-200 hover:scale-[1.02]"
            >
              Explore Resources
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/distant-city"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-white dark:hover:bg-white dark:hover:text-background transition-all duration-200"
            >
              <BookOpen className="h-4 w-4" />
              Read Distant City
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
