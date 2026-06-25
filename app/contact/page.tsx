'use client';

import { Mail, MapPin, Clock, Send, Check } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">
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

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 text-forest-700 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:jake.avard@gmail.com"
                      className="text-muted-foreground hover:text-forest-800 transition-colors"
                    >
                      jake.avard@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 text-forest-700 shrink-0">
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 text-forest-700 shrink-0">
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

              <div className="rounded-2xl bg-forest-800 p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Speaking Inquiries</h3>
                <p className="text-sm text-forest-200 leading-relaxed">
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

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white border border-border p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 text-forest-700">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Message Sent</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
<<<<<<< HEAD
      action="https://formspree.io/f/xyznnaaj"
      method="POST"
=======
      action="https://formspree.io/f/xyznnaaj"
      method="POST"
>>>>>>> 59544c99425b17ad3860dbb1b4450be9d0f5782e
      className="space-y-6 rounded-2xl bg-white border border-border p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-700"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-700"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-forest-700"
        >
          <option value="">Select a topic</option>
          <option value="speaking">Speaking Inquiry</option>
          <option value="collaboration">Collaboration</option>
          <option value="resources">Resource Question</option>
          <option value="store">Store / Order</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-700 resize-none"
          placeholder="Tell me about your event, project, or question..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all duration-200 hover:scale-[1.02]"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
