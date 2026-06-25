import Link from 'next/link';
import { ArrowRight, FileText, BookOpen, Heart, Users, Compass } from 'lucide-react';
import { resources } from '@/lib/data/content';

const categoryIcons: Record<string, React.ReactNode> = {
  'Personal Systems': <Compass className="h-5 w-5" />,
  'Theology': <BookOpen className="h-5 w-5" />,
  'Addiction Recovery': <Heart className="h-5 w-5" />,
  'Family & Fatherhood': <Users className="h-5 w-5" />,
  'Recommended Books': <BookOpen className="h-5 w-5" />,
};

export function FeaturedResources() {
  const featured = resources.filter((r) => r.featured);

  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400">
              Resources
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Tools for the Journey
            </h2>
          </div>
          <Link
            href="/resources"
            className="group inline-flex items-center gap-2 text-forest-800 dark:text-forest-400 font-semibold hover:underline underline-offset-4 transition-all"
          >
            View all resources
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((resource) => (
            <Link
              key={resource.id}
              href="/resources"
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-background border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400">
                {categoryIcons[resource.category] || <FileText className="h-5 w-5" />}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-forest-800 dark:group-hover:text-forest-400 transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {resource.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-forest-800 dark:text-forest-400">
                <span>Access resource</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
