import { Badge } from '@/frontend/components/badge/Badge';
import { Card } from '@/frontend/components/card/Card';
import SectionHeading from '@/frontend/components/section-heading/SectionHeading';
import { cn } from '@/frontend/lib/utils';
import { skillGroups } from './lib/skill-groups';

// 3 + 2 layout on laptops: the first row's cards take 2/6 each, the second row's 3/6.
const span = (i: number) => (i < 3 ? 'lg:col-span-2' : 'lg:col-span-3');

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative pt-0 md:pt-0">
      <div className="container-narrow relative">
        <SectionHeading eyebrow="Toolkit" title="What I build with." />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, i) => (
            <Card
              key={group.name}
              className={cn('reveal group card-hover rounded-[22px] bg-ink-900/85 p-6', span(i))}
              style={{ ['--reveal-delay' as string]: `${(i % 3) * 80}ms` }}
            >
              <header className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-ink-700 bg-[#10141c] text-accent-400 transition-colors group-hover:text-accent-300">
                    <group.icon size={17} />
                  </span>
                  <b className="font-display text-base font-semibold text-ink-50">{group.name}</b>
                </span>
                <small className="font-mono text-xs text-ink-500">{String(i + 1).padStart(2, '0')}</small>
              </header>

              {/* decorative bar — grows in when the card is revealed */}
              <div className="my-5 h-[3px] overflow-hidden rounded-full bg-ink-800">
                <span className="block h-full origin-left scale-x-0 rounded-full bg-aurora transition-transform delay-300 [transition-duration:1400ms] ease-out group-[.is-visible]:scale-x-100" />
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-[12.5px]">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
