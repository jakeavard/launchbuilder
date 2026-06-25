'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white dark:bg-background border border-border p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400">
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
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-white dark:bg-background border border-border p-8"
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
            className="w-full px-4 py-3 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-700 dark:focus:ring-forest-400"
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
            className="w-full px-4 py-3 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-700 dark:focus:ring-forest-400"
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
          className="w-full px-4 py-3 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-forest-700 dark:focus:ring-forest-400"
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
          className="w-full px-4 py-3 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-700 dark:focus:ring-forest-400 resize-none"
          placeholder="Tell me about your event, project, or question..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 dark:bg-forest-700 text-white hover:bg-forest-900 dark:hover:bg-forest-600 transition-all duration-200 hover:scale-[1.02]"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
