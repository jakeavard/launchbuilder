import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, BookOpen, Heart, Users, Compass, Download, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Downloadable guides, articles, and tools for personal systems, theology, addiction recovery, family & fatherhood, and recommended books.',
  alternates: {
    canonical: 'https://jakeavard.com/resources',
  },
};

const resources = [
  {
    id: '1',
    title: 'Daily Examen Guide',
    description: 'A printable guide to the Ignatian Examen, adapted for busy fathers and professionals.',
    category: 'Personal Systems',
    type: 'pdf',
    url: '/images/dailyexam.pdf',
  },
  {
    id: '2',
    title: 'The Trinity and the Family',
    description: 'A theological reflection on how the Trinity reveals the inner logic of family life.',
    category: 'Theology',
    type: 'article',
    url: '/images/Morning.pdf',
  },
  {
    id: '3',
    title: 'Recovery Roadmap',
    description: 'A framework for understanding addiction, recovery, and the role of grace in healing.',
    category: 'Addiction Recovery',
    type: 'pdf',
    url: '#',
  },
  {
    id: '4',
    title: 'Family Meeting Template',
    description: 'A simple weekly template for running family meetings that build connection and shared purpose.',
    category: 'Family & Fatherhood',
    type: 'pdf',
    url: '#',
  },
  {
    id: '5',
    title: 'Recommended Reading List',
    description: 'Curated books on faith, fatherhood, mission, and the examined life.',
    category: 'Recommended Books',
    type: 'article',
    url: '#',
  },
  {
    id: '6',
    title: 'Morning Routine Builder',
    description: 'A worksheet for designing a morning routine rooted in prayer, movement, and intention.',
    category: 'Personal Systems',
    type: 'pdf',
    url: '#',
  },
];

const categories = [
  'Personal Systems',
  'Theology',
  'Addiction Recovery',
  'Family & Fatherhood',
  'Recommended Books',
];

const categoryIcons: Record<string, React.ReactNode> = {
  'Personal Systems': <Compass className="h-5 w-5" />,
  'Theology': <BookOpen className="h-5 w-5" />,
  'Addiction Recovery': <Heart className="h-5 w-5" />,
  'Family & Fatherhood': <Users className="h-5 w-5" />,
  'Recommended Books': <BookOpen className="h-5 w-5" />,
};

const categoryDescriptions: Record<string, string> = {
  'Personal Systems': 'Tools and frameworks for building daily rhythms, morning routines, and sustainable habits.',
  'Theology': 'Essays and guides on the Trinity, the Church, sacraments, and the Christian intellectual tradition.',
  'Addiction Recovery': 'Resources for understanding addiction, grace, and the path to healing and freedom.',
  'Family & Fatherhood': 'Templates, guides, and reflections for building family culture and intentional fatherhood.',
  'Recommended Books': 'Curated reading lists on faith, fatherhood, mission, and the examined life.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">
              Resources
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Tools for the Journey
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Downloadable PDFs, articles, and guides to help you build a meaningful life rooted in faith, family, mission, and discipline.
            </p>
          </div>
        </div>
      </section>

      {categories.map((category) => {
        const categoryResources = resources.filter((r) => r.category === category);
        return (
          <section
            key={category}
            className="py-16 md:py-20 border-t border-border bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                  {categoryIcons[category] || <FileText className="h-5 w-5" />}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  {category}
                </h2>
              </div>
              <p className="text-muted-foreground mb-10 max-w-2xl">
                {categoryDescriptions[category]}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="group flex flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-forest-50 text-forest-700">
                        {resource.type === 'pdf' && <Download className="h-3 w-3" />}
                        {resource.type === 'article' && <BookOpen className="h-3 w-3" />}
                        {resource.type.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={resource.url}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-forest-800 hover:underline underline-offset-4"
                      >
                        {resource.type === 'pdf' ? 'Download' : 'Read'}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
