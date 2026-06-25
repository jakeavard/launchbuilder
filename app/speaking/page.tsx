import { Metadata } from 'next';
import Link from 'next/link';
import { Mic, Clock, Users, ArrowRight, Mail, Quote } from 'lucide-react';
import { speakingTopics, testimonials } from '@/lib/data/content';

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Invite Jake Avard to speak at your conference, parish, retreat, or university. Topics include faith, family, mission, discipline, and recovery.',
  alternates: {
    canonical: 'https://jakeavard.com/speaking',
  },
};

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white dark:bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400 mb-4">
              Speaking
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Words That Move
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Keynotes, retreats, and conversations on faith, family, mission,
              discipline, and the long road of becoming.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 dark:bg-forest-700 text-white hover:bg-forest-900 dark:hover:bg-forest-600 transition-all duration-200 hover:scale-[1.02]"
              >
                Book Jake for Your Event
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400 mb-4">
              Topics
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Talks for the Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic) => (
              <div
                key={topic.id}
                className="group flex flex-col rounded-2xl bg-white dark:bg-background border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400">
                  <Mic className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {topic.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {topic.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {topic.audience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 bg-white dark:bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/images/IMG_7572.JPEG"
                alt="Jake Avard speaking"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400">
                Bio
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                About the Speaker
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jake Avard is a Catholic missionary, writer, and speaker with
                  6 years of experience walking alongside men and families
                  through the challenges of faith, addiction, fatherhood, and
                  mission.
                </p>
                <p>
                  He has spoken at men&apos;s conferences, parish missions, university
                  chaplaincies, and recovery retreats across the country. His
                  message blends theological depth with practical wisdom, delivered
                  with the vulnerability of someone who has walked the road he
                  describes.
                </p>
                <p>
                  Jake is the author of <em>Distant City</em> and the creator of
                  several formation resources for men and families. He lives with
                  his wife and two children in the mountains, where he writes,
                  rides, and continues the slow work of building a meaningful life.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-forest-800 dark:bg-forest-700 text-white hover:bg-forest-900 dark:hover:bg-forest-600 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  Request Booking Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400 mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col rounded-2xl bg-white dark:bg-background border border-border p-8"
              >
                <Quote className="h-8 w-8 text-forest-200 dark:text-forest-800 mb-4" />
                <p className="text-muted-foreground leading-relaxed flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-24 bg-forest-900 dark:bg-forest-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Book Jake for Your Event
          </h2>
          <p className="text-lg text-forest-200 dark:text-forest-300 leading-relaxed mb-8">
            Whether it is a men&apos;s conference, parish mission, retreat, or
            university event, Jake brings a message of hope, discipline, and
            authentic faith that resonates across audiences.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-white text-forest-900 hover:bg-forest-100 transition-all duration-200 hover:scale-[1.02]"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
