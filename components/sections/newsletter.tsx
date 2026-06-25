'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-forest-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-forest-300">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Stay in the Conversation
          </h2>
          <p className="text-lg text-forest-200 leading-relaxed max-w-xl mx-auto">
            Get reflections, resources, and updates delivered to your inbox.
            No noise. No spam. Just meaningful content for the journey.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-forest-300">
              <Check className="h-5 w-5" />
              <span className="font-semibold">You are subscribed. Welcome to the journey.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 w-full px-4 py-3 text-sm rounded-full bg-white/10 border border-forest-700 text-white placeholder:text-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-white text-forest-900 hover:bg-forest-100 transition-colors"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="text-xs text-forest-400">
            Unsubscribe anytime. Your email is never shared.
          </p>
        </div>
      </div>
    </section>
  );
}
