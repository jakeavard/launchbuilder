import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, BookOpen, Heart, Users, Compass, Download, ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Downloadable guides, articles, and tools for personal systems, theology, addiction recovery, family & fatherhood, and recommended books.',
  alternates: {
    canonical: 'https://jakeavard.com/resources',
  },
};
const memorySystemSections = [
  {
    title: 'Authority of the Church',
    rows: [
      { category: 'Christ Establishes a Church', topic: 'Peter as the Rock', passage: 'Matthew 16:18–19', ccc: '881–882' },
      { category: 'Christ Establishes a Church', topic: 'Church Has Binding Authority', passage: 'Matthew 18:17', ccc: '887' },
      { category: 'Apostolic Foundation', topic: 'Church = Pillar of Truth', passage: '1 Timothy 3:15', ccc: '2032' },
      { category: 'Apostolic Succession', topic: 'Office Passed On', passage: 'Acts 1:20–26', ccc: '862' },
      { category: 'Teaching Authority', topic: 'Pass It On', passage: '2 Timothy 2:2', ccc: '83' },
    ],
  },
  {
    title: 'Scripture & Tradition',
    rows: [
      { category: 'Unity of Sources', topic: 'Oral & Written Tradition', passage: '2 Thessalonians 2:15', ccc: '74–83' },
      { category: 'Unity of Sources', topic: 'Hold to What Was Passed On', passage: '1 Corinthians 11:2', ccc: '78' },
      { category: 'Scripture Not Self-Interpreting', topic: 'No Private Interpretation', passage: '2 Peter 1:20–21', ccc: '85–87' },
      { category: 'Scripture Inspired', topic: 'God-Breathed', passage: '2 Timothy 3:16', ccc: '105' },
      { category: 'Apostolic Authority', topic: 'Authoritative Teaching', passage: 'Titus 2:15', ccc: '80' },
    ],
  },
  {
    title: 'Papacy',
    rows: [
      { category: "Peter's Primacy", topic: 'Feed My Sheep', passage: 'John 21:15–17', ccc: '553' },
      { category: 'Peter Strengthens the Church', topic: 'Strengthen Your Brothers', passage: 'Luke 22:31–32', ccc: '552' },
      { category: 'Peter Leads the Church', topic: 'Peter Speaks at Council', passage: 'Acts 15:7–12', ccc: '880' },
      { category: 'Keys = Authority', topic: 'Keys of the Kingdom', passage: 'Isaiah 22:20–22', ccc: '553' },
      { category: 'One Shepherd', topic: 'One Visible Leader', passage: 'John 10:16', ccc: '882' },
    ],
  },
  {
    title: 'Eucharist',
    rows: [
      { category: 'Real Presence', topic: 'True Food & Drink', passage: 'John 6:51–58', ccc: '1374' },
      { category: 'Mass Institution', topic: '"This is My Body"', passage: 'Luke 22:19', ccc: '1339' },
      { category: 'Reception', topic: 'Communion Participation', passage: '1 Corinthians 10:16', ccc: '1366' },
      { category: 'Reception', topic: 'Unworthy Reception', passage: '1 Corinthians 11:27–29', ccc: '1385' },
      { category: 'Eucharist in Prophecy', topic: 'Pure Offering', passage: 'Malachi 1:11', ccc: '1330' },
    ],
  },
  {
    title: 'Baptism',
    rows: [
      { category: 'Baptism Saves', topic: 'Born of Water & Spirit', passage: 'John 3:5', ccc: '1215' },
      { category: 'Baptism Washes Sin', topic: 'Wash Away Your Sins', passage: 'Acts 22:16', ccc: '1227' },
      { category: 'Baptism Now Saves', topic: 'Baptism Saves You', passage: '1 Peter 3:21', ccc: '1277' },
      { category: 'Baptism Necessary', topic: 'One Baptism', passage: 'Ephesians 4:5', ccc: '1225' },
      { category: 'Cleansed by Christ', topic: 'Washed, Justified, Sanctified', passage: '1 Corinthians 6:11', ccc: '1987' },
    ],
  },
  {
    title: 'Confession',
    rows: [
      { category: 'Christ Delegates', topic: 'Sins Forgiven', passage: 'John 20:21–23', ccc: '1461' },
      { category: 'Priests Mediate', topic: 'Ministry of Reconciliation', passage: '2 Corinthians 5:18–20', ccc: '1442' },
      { category: 'Confession Is Biblical', topic: 'Confess Your Sins', passage: 'James 5:16', ccc: '1458' },
      { category: 'Repentance', topic: 'God Heals the Brokenhearted', passage: 'Psalm 147:3', ccc: '1428' },
      { category: 'Returning to God', topic: '"I Will Arise and Go"', passage: 'Luke 15:18–24', ccc: '1443' },
    ],
  },
  {
    title: 'Salvation & Justification',
    rows: [
      { category: 'Grace', topic: 'Saved by Grace', passage: 'Ephesians 2:8–10', ccc: '1996' },
      { category: 'Faith & Works', topic: 'Faith Not Alone', passage: 'James 2:24', ccc: '1815' },
      { category: 'Cooperation With Grace', topic: 'Work Out Salvation', passage: 'Philippians 2:12–13', ccc: '2001' },
      { category: 'Call to Holiness', topic: 'Be Holy', passage: '1 Peter 1:15–16', ccc: '2013' },
      { category: 'Perseverance', topic: 'Whoever Endures Will Be Saved', passage: 'Matthew 24:13', ccc: '2016' },
    ],
  },
  {
    title: 'Mary & Saints',
    rows: [
      { category: "Mary's Honor", topic: 'All Generations Will Call Her Blessed', passage: 'Luke 1:39–45', ccc: '971' },
      { category: 'Intercession', topic: 'Saints Present Prayers', passage: 'Revelation 5:8', ccc: '956' },
      { category: 'Mary Intercedes', topic: 'Wedding at Cana', passage: 'John 2:1–11', ccc: '2618' },
      { category: 'We Pray for One Another', topic: 'Pray for All People', passage: '1 Timothy 2:1', ccc: '2635' },
      { category: 'One Family', topic: 'Surrounded by Witnesses', passage: 'Hebrews 12:1', ccc: '2683' },
      { category: 'Mary', topic: 'Ark of New Covenant', passage: '2 Sam 6; Rev 11:19–12:1', ccc: '2676' },
    ],
  },
  {
    title: 'Purgatory',
    rows: [
      { category: 'Postmortem Purification', topic: 'Saved "Through Fire"', passage: '1 Corinthians 3:11–15', ccc: '1031' },
      { category: 'Purification Implied', topic: 'Forgiveness in the Age to Come', passage: 'Matthew 12:32', ccc: '1031' },
      { category: 'Prayers for Dead', topic: 'Prayer Helps the Dead', passage: '2 Maccabees 12:44–46', ccc: '1032' },
      { category: 'Perfection Required', topic: 'Nothing Unclean Shall Enter', passage: 'Revelation 21:27', ccc: '1023' },
      { category: 'Sanctification', topic: 'Refining Fire', passage: 'Zechariah 13:9', ccc: '1030' },
    ],
  },
  {
    title: 'Moral Life',
    rows: [
      { category: 'Love is Obedience', topic: 'If You Love Me, Keep My Commands', passage: 'John 14:15', ccc: '1454' },
      { category: 'Law', topic: 'Commandments Not Burdensome', passage: '1 John 5:3', ccc: '2063' },
      { category: 'Ecclesiology', topic: 'Follow Church Leaders', passage: 'Hebrews 13:17', ccc: '2037' },
      { category: 'Works', topic: 'Faith Without Works is Dead', passage: 'James 2:17', ccc: '1815' },
      { category: 'Life in Christ', topic: 'Walk by the Spirit', passage: 'Galatians 5:16–25', ccc: '1829' },
    ],
  },
  {
    title: 'Priesthood',
    rows: [
      { category: 'Priests Offer Sacrifice', topic: 'Every Priest Offers Gifts', passage: 'Hebrews 8:3', ccc: '1548' },
      { category: 'OT Foreshadowing', topic: 'Priest Forever', passage: 'Psalm 110:4', ccc: '1546' },
      { category: 'Christ the High Priest', topic: 'Our High Priest', passage: 'Hebrews 4:14–16', ccc: '1549' },
      { category: 'Shared Priesthood', topic: 'Royal Priesthood', passage: '1 Peter 2:9', ccc: '1268' },
      { category: 'Apostolic Ordination', topic: 'Laying on of Hands', passage: 'Acts 6:6', ccc: '1538' },
    ],
  },
  {
    title: 'Why Be Catholic',
    rows: [
      { category: 'Founded by Christ', topic: 'Built on Apostles', passage: 'Ephesians 2:19–20', ccc: '857' },
      { category: 'Only One Church', topic: 'One Faith, One Baptism', passage: 'Ephesians 4:3–6', ccc: '866' },
      { category: 'Apostles Teaching', topic: 'Early Church Was Liturgical', passage: 'Acts 2:42', ccc: '1342' },
      { category: 'Fullness of Truth', topic: 'Life in Abundance', passage: 'John 10:10', ccc: '816' },
      { category: 'One Body', topic: 'One Body in Christ', passage: '1 Corinthians 12:12–27', ccc: '790' },
    ],
  },
];

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
    url: '/images/morning.pdf',
    active: false,
  },
  {
    id: '3',
    title: 'Recovery Roadmap',
    description: 'A framework for understanding addiction, recovery, and the role of grace in healing.',
    category: 'Addiction Recovery',
    type: 'pdf',
    url: '#',
    active: false,
  },
  {
    id: '4',
    title: 'Family Meeting Template',
    description: 'A simple weekly template for running family meetings that build connection and shared purpose.',
    category: 'Family & Fatherhood',
    type: 'pdf',
    url: '#',
    active: false,
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
    url: '/images/morning.pdf',
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
            <a
              href="#memory-system"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 hover:text-forest-900 transition-colors"
            >
              Memory System
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {categories.map((category) => {
        const categoryResources = resources.filter(
          (r) => r.category === category && r.active !== false
         );
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
       {/* Memory System */}
      <section id="memory-system" className="py-16 md:py-24 border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">
              Memory System
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Catholic Apologetics — Categorical Memory System
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Scripture + Catechism for Evangelization & Discipleship
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-border p-8 md:p-12 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">
              What is the Memory System?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              &ldquo;Always be ready to give an explanation to anyone who asks you for a reason for your hope&rdquo; (1 Peter 3:15). Imagine having the entire foundation of your faith — from the Eucharist to the Papacy — at your fingertips, ready for any conversation. This categorical memory system is your ultimate Catholic apologetics toolkit, strategically organizing essential doctrines alongside the specific Scripture and Catechism (CCC) references that prove them. It is more than just a mnemonic tool; it is a high-impact roadmap for evangelization that empowers you to strengthen, articulate, and defend the Truth with unshakable confidence.
            </p>
          </div>

          <div className="space-y-16">
            {memorySystemSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {section.title}
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border bg-white">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-forest-50 text-left">
                        <th className="px-4 py-3 font-semibold text-forest-900 whitespace-nowrap">Category</th>
                        <th className="px-4 py-3 font-semibold text-forest-900 whitespace-nowrap">Topic</th>
                        <th className="px-4 py-3 font-semibold text-forest-900 whitespace-nowrap">Passage</th>
                        <th className="px-4 py-3 font-semibold text-forest-900 whitespace-nowrap">CCC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {section.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-neutral-50 transition-colors">
                          <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.category}</td>
                          <td className="px-4 py-3 text-foreground font-medium whitespace-nowrap">{row.topic}</td>
                          <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.passage}</td>
                          <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.ccc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
