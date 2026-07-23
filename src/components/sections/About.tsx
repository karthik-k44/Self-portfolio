import { Briefcase, Rocket, Server, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { about } from '@/data/portfolio';

const techMarquee = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Redux Toolkit',
  'Next.js',
  'Firebase',
  'REST APIs',
  'Git',
];

const focusItems = [
  {
    icon: Rocket,
    title: 'End-to-end delivery',
    desc: 'From database schema to pixel-perfect UI, shipped in Agile sprints.',
  },
  {
    icon: Server,
    title: 'API-first',
    desc: 'RESTful services with validation, serialization, and clean architecture.',
  },
  {
    icon: Sparkles,
    title: 'Polished UX',
    desc: 'Interfaces that feel fast, accessible, and genuinely pleasant to use.',
  },
  {
    icon: Briefcase,
    title: 'Product mindset',
    desc: 'Nearly a year building real features in a product-based environment.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About me"
          title="Building the web, end to end."
          description="A quick look at who I am and how I work."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* left — narrative */}
          <div className="lg:col-span-7">
            <span className="reveal eyebrow">
              <span className="h-px w-6 bg-accent-400/60" />
              {about.title}
            </span>
            <div className="mt-5 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="reveal text-base leading-relaxed text-ink-300 sm:text-lg"
                  style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* stats */}
            <div className="reveal mt-10 grid grid-cols-3 gap-4" style={{ ['--reveal-delay' as string]: '120ms' }}>
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="card card-hover p-5 text-center"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    {h.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ink-400">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right — focus cards */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {focusItems.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal-scale card card-hover group p-5"
                  style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/50 group-hover:text-accent-300">
                    <item.icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-sm font-semibold text-ink-100">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* tech marquee */}
        <div className="reveal mt-16 overflow-hidden border-y border-ink-800/80 py-5">
          <div className="flex w-max animate-marquee gap-8">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-ink-500"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500/70" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
