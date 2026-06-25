export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'pdf' | 'article' | 'video' | 'audio';
  url: string;
  featured: boolean;
}

export interface SpeakingTopic {
  id: string;
  title: string;
  description: string;
  duration: string;
  audience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'digital' | 'physical';
  category: string;
  image: string;
  slug: string;
}

export const articles: Article[] = [
  {
    slug: 'on-the-mountain',
    title: 'On the Mountain',
    excerpt:
      'What a mountain bike taught me about perseverance, prayer, and the long road of sanctification.',
    category: 'Reflection',
    date: '2024-06-10',
    readTime: '6 min',
    featured: true,
  },
  {
    slug: 'distant-city-introduction',
    title: 'Introduction to Distant City',
    excerpt:
      'We are pilgrims in a strange land, and the ache we feel is evidence of a home we have not yet reached.',
    category: 'Theology',
    date: '2024-05-28',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'discipline-and-desire',
    title: 'Discipline and Desire',
    excerpt:
      'How the ancient practice of asceticism can reframe our modern struggle with addiction and distraction.',
    category: 'Personal Systems',
    date: '2024-05-15',
    readTime: '10 min',
    featured: false,
  },
  {
    slug: 'fatherhood-and-formation',
    title: 'Fatherhood and Formation',
    excerpt:
      'The hidden curriculum of fatherhood: what my children are teaching me about God and myself.',
    category: 'Family & Fatherhood',
    date: '2024-04-30',
    readTime: '7 min',
    featured: false,
  },
  {
    slug: 'mission-in-the-mundane',
    title: 'Mission in the Mundane',
    excerpt:
      'Finding purpose in the ordinary moments that make up a life of faith.',
    category: 'Mission',
    date: '2024-04-12',
    readTime: '5 min',
    featured: false,
  },
  {
    slug: 'the-liturgy-of-suffering',
    title: 'The Liturgy of Suffering',
    excerpt:
      'When pain becomes prayer: a reflection on carrying the cross with Christ.',
    category: 'Theology',
    date: '2024-03-22',
    readTime: '9 min',
    featured: false,
  },
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Daily Examen Guide',
    description:
      'A printable guide to the Ignatian Examen, adapted for busy fathers and professionals.',
    category: 'Personal Systems',
    type: 'pdf',
    url: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'The Trinity and the Family',
    description:
      'A theological reflection on how the Trinity reveals the inner logic of family life.',
    category: 'Theology',
    type: 'article',
    url: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Recovery Roadmap',
    description:
      'A framework for understanding addiction, recovery, and the role of grace in healing.',
    category: 'Addiction Recovery',
    type: 'pdf',
    url: '#',
    featured: true,
  },
  {
    id: '4',
    title: 'Family Meeting Template',
    description:
      'A simple weekly template for running family meetings that build connection and shared purpose.',
    category: 'Family & Fatherhood',
    type: 'pdf',
    url: '#',
    featured: false,
  },
  {
    id: '5',
    title: 'Recommended Reading List',
    description:
      'Curated books on faith, fatherhood, mission, and the examined life.',
    category: 'Recommended Books',
    type: 'article',
    url: '#',
    featured: false,
  },
  {
    id: '6',
    title: 'Morning Routine Builder',
    description:
      'A worksheet for designing a morning routine rooted in prayer, movement, and intention.',
    category: 'Personal Systems',
    type: 'pdf',
    url: '#',
    featured: false,
  },
];

export const resourceCategories = [
  'Personal Systems',
  'Theology',
  'Addiction Recovery',
  'Family & Fatherhood',
  'Recommended Books',
];

export const speakingTopics: SpeakingTopic[] = [
  {
    id: '1',
    title: 'Build a Meaningful Life',
    description:
      'A keynote on the five pillars of a life rooted in faith, family, mission, discipline, and reality. Ideal for men\'s conferences, parish missions, and university chaplaincies.',
    duration: '45–60 min',
    audience: 'General',
  },
  {
    id: '2',
    title: 'The Distant City',
    description:
      'An exploration of Christian hope, pilgrimage, and the ache for home that drives the human heart. Perfect for retreats and theological conferences.',
    duration: '45–60 min',
    audience: 'General',
  },
  {
    id: '3',
    title: 'Fatherhood and Formation',
    description:
      'A practical talk on raising children in the faith, building family culture, and the spiritual formation that happens in the home.',
    duration: '45–60 min',
    audience: 'Fathers / Parents',
  },
  {
    id: '4',
    title: 'Discipline and Desire',
    description:
      'A frank conversation about addiction, recovery, and the spiritual practices that rewire desire toward the good, true, and beautiful.',
    duration: '45–60 min',
    audience: 'Recovery / Men\'s Groups',
  },
  {
    id: '5',
    title: 'Mission in the Mundane',
    description:
      'How to discover and live out your unique mission in the ordinary contexts of work, neighborhood, and family.',
    duration: '45–60 min',
    audience: 'Young Adults / Professionals',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fr. Michael Johnson',
    role: 'Pastor, St. Mary\'s Parish',
    content:
      'Jake brings a rare combination of theological depth and practical wisdom. His talk on fatherhood transformed how our men\'s group thinks about family life.',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Director, Catholic Campus Ministry',
    content:
      'Our students were deeply moved by Jake\'s message on the Distant City. He has a gift for making ancient truths feel urgently relevant.',
  },
  {
    id: '3',
    name: 'David Reyes',
    role: 'Recovery Ministry Leader',
    content:
      'Jake speaks about addiction and recovery with a vulnerability and hope that is truly healing. Our group still talks about his visit months later.',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Distant City: Essays on Pilgrimage',
    description:
      'A collection of essays on faith, longing, and the Christian journey.',
    price: 1499,
    type: 'physical',
    category: 'Books',
    image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'distant-city-essays',
  },
  {
    id: '2',
    name: 'The Examen Journal',
    description:
      'A 90-day guided journal for the Ignatian Examen, with prompts for gratitude, review, and resolution.',
    price: 1899,
    type: 'physical',
    category: 'Journals',
    image: 'https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'examen-journal',
  },
  {
    id: '3',
    name: 'Morning Routine Builder (Digital)',
    description:
      'A digital workbook and video guide for designing a morning routine rooted in prayer and discipline.',
    price: 2900,
    type: 'digital',
    category: 'Digital Products',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'morning-routine-builder',
  },
  {
    id: '4',
    name: 'Recovery Roadmap PDF',
    description:
      'A comprehensive PDF guide to understanding addiction, grace, and the path to recovery.',
    price: 1200,
    type: 'digital',
    category: 'PDF Downloads',
    image: 'https://images.pexels.com/photos/5900063/pexels-photo-5900063.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'recovery-roadmap',
  },
  {
    id: '5',
    name: 'Family Meeting Kit',
    description:
      'Printable templates, discussion guides, and a facilitator guide for running weekly family meetings.',
    price: 1500,
    type: 'digital',
    category: 'Digital Products',
    image: 'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'family-meeting-kit',
  },
  {
    id: '6',
    name: 'Theological Foundations Workbook',
    description:
      'A study guide companion to Jake\'s talks on the Trinity, the Church, and the Christian life.',
    price: 1800,
    type: 'digital',
    category: 'PDF Downloads',
    image: 'https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'theological-foundations',
  },
];
