import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-700/10 blur-[150px]" />
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Skills & tooling"
          title="A versatile, full-stack toolkit."
          description="The technologies and practices I reach for to ship reliable software."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.name}
              className="reveal card card-hover group relative overflow-hidden p-6"
              style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
            >
              {/* glow on hover */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-accent-400 transition-all duration-300 group-hover:scale-110 group-hover:border-accent-500/50 group-hover:text-accent-300">
                  <group.icon size={20} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400"
                />
              </div>

              <h3 className="mt-5 font-display text-base font-semibold text-ink-100">
                {group.name}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-ink-800 bg-ink-900/70 px-2.5 py-1 text-xs font-medium text-ink-300 transition-colors duration-200 hover:border-accent-500/40 hover:text-accent-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
