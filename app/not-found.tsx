import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">
        404
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
        Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-8">
        Helping Faithful Men grow in Freedom and multiply the Kingdom.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all duration-200 hover:scale-[1.02]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back Home
      </Link>
    </div>
  );
}
