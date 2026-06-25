import { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jake Avard for speaking inquiries, collaborations, or just to say hello.',
  alternates: {
    canonical: 'https://jakeavard.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white dark:bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 dark:text-forest-400 mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Let&apos;s Connect
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you want to book a speaking engagement, collaborate on a
              project, or just share your story, I would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@jakeavard.com"
                      className="text-muted-foreground hover:text-forest-800 dark:hover:text-forest-400 transition-colors"
                    >
                      hello@jakeavard.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Location
                    </h3>
                    <p className="text-muted-foreground">
                      Available for travel nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground">
                      Usually within 48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-forest-800 dark:bg-forest-900 p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Speaking Inquiries</h3>
                <p className="text-sm text-forest-200 dark:text-forest-300 leading-relaxed">
                  For booking speaking engagements, please include your event
                  date, location, audience size, and topic preference in your
                  message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
