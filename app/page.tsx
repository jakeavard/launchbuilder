import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { AboutPreview } from '@/components/sections/about-preview';
import { FeaturedResources } from '@/components/sections/featured-resources';
import { LatestArticles } from '@/components/sections/latest-articles';
import { SpeakingPreview } from '@/components/sections/speaking-preview';
import { NewsletterSection } from '@/components/sections/newsletter';

export const metadata: Metadata = {
  title: 'Jake Avard — Build a Meaningful Life',
  description:
    'Faith. Family. Mission. Discipline. Reflections, resources, and formation from missionary, father, writer, and builder Jake Avard.',
  alternates: {
    canonical: 'https://jakeavard.com',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedResources />
      <LatestArticles />
      <SpeakingPreview />
      <NewsletterSection />
    </>
  );
}
