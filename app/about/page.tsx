import { Metadata } from 'next';
import Image from 'next/image';
import { Mountain, BookOpen, Mic, Hammer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Jake Avard — Catholic missionary, husband, father, writer, speaker, and builder helping people build meaningful lives.',
  alternates: {
    canonical: 'https://jakeavard.com/about',
  },
};

const pillars = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Faith',
    description:
      'A life rooted in the Catholic tradition, shaped by prayer, sacrament, and the pursuit of holiness in the ordinary.',
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: 'Family',
    description:
      'Marriage and fatherhood as the primary school of love, sacrifice, and sanctification.',
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: 'Mission',
    description:
      'The call to evangelize not through programs but through authentic, intentional presence in the world.',
  },
  {
    icon: <Mountain className="h-6 w-6" />,
    title: 'Discipline',
    description:
      'The daily practices — physical, spiritual, intellectual — that form a man capable of carrying what matters.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white dark:bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400 mb-4">
              About
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Built, Not Found
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground font-medium">
                I am Jake Avard — a Catholic missionary, husband, father of two,
                writer, speaker, mountain biker, and builder.
              </p>
              <p>
                For 6 years, I have walked alongside men and families through
                the mess and beauty of the Christian life. I have seen men broken
                by addiction restored by grace. I have watched marriages on the brink
                find new footing through prayer and honest work. I have learned that
                the most profound evangelization happens not on stages but in living
                rooms, on bike trails, and across kitchen tables.
              </p>
              <p>
                My own journey has not been linear. There were years of wandering,
                of mistaking comfort for calling, of learning the hard way that a
                meaningful life is built one disciplined choice at a time. The
                mountain bike became my teacher — a metaphor for the long, grinding
                climb of sanctification, the reward of perseverance, and the
                necessity of community.
              </p>
              <p>
                Today, I write at Distant City, speak at conferences and parishes,
                and build resources for men and families who want more than the
                default settings of modern life. I believe that faith, family,
                mission, discipline, and reality are not abstract ideals but
                practical blueprints for a life worth living.
              </p>
              <p>
                This site exists to serve that vision — to provide formation,
                resources, and a sense of belonging for pilgrims who know they were
                made for more.
              </p>
            </div>

            <div className="space-y-8">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/images/IMG_7572.JPEG"
                  alt="Jake Avard"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-neutral-50 dark:bg-neutral-900 p-6 text-center">
                  <p className="text-3xl font-extrabold text-forest-800 dark:text-forest-400">6</p>
                  <p className="text-sm text-muted-foreground mt-1">Years in Mission</p>
                </div>
                <div className="rounded-xl bg-neutral-50 dark:bg-neutral-900 p-6 text-center">
                  <p className="text-3xl font-extrabold text-forest-800 dark:text-forest-400">2</p>
                  <p className="text-sm text-muted-foreground mt-1">Children</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400 mb-4">
              The Five Pillars
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              What I Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl bg-white dark:bg-background border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
