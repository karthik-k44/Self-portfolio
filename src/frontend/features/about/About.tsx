import { Card } from '@/frontend/components/card/Card';
import SectionHeading from '@/frontend/components/section-heading/SectionHeading';
import { projects } from '@/frontend/features/projects/lib/projects';
import { cn } from '@/frontend/lib/utils';
import TechBands from './components/TechBands';
import { currentRole, focusItems, intro, userGrowth } from './lib/about-content';

const tile = 'reveal overflow-hidden rounded-[22px] bg-gradient-to-b from-[#10141c] to-ink-900 p-6 sm:p-7';
const delay = (ms: number) => ({ ['--reveal-delay' as string]: `${ms}ms` });

export default function About() {
  return (
    <>
      <TechBands />
      <section id="about" className="section-padding relative">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Building the web,
                <br />
                <span className="aurora-text">end to end.</span>
              </>
            }
          />

          <div className="mt-14 grid auto-rows-[minmax(150px,auto)] gap-4 md:grid-cols-6 lg:grid-cols-12">
            {/* intro */}
            <Card className={cn(tile, 'p-7 sm:p-9 md:col-span-6 lg:col-span-7 lg:row-span-2')}>
              <span className="eyebrow">Who I am</span>
              <p className="mt-5 font-display text-[clamp(19px,2.1vw,25px)] font-medium leading-[1.45] tracking-[-0.015em] text-ink-100">
                {intro.lead[0]}
                <em className="not-italic text-accent-300">{intro.lead[1]}</em>
                {intro.lead[2]}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink-400">{intro.body}</p>
            </Card>

            {/* current role */}
            <Card
              className={cn(
                tile,
                'bg-[radial-gradient(120%_120%_at_100%_0%,rgba(99,102,241,0.28),transparent_55%),linear-gradient(180deg,#121629,#0b0e14)] md:col-span-3 lg:col-span-5'
              )}
              style={delay(80)}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ink-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Currently
              </div>
              <h3 className="mt-4 font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink-50">
                {currentRole.title}
                <br />@ {currentRole.company}
              </h3>
              <p className="mt-2 text-sm text-ink-400">{currentRole.summary}</p>
            </Card>

            {/* stats */}
            <Card
              className={cn(tile, 'grid grid-cols-2 p-0 sm:p-0 md:col-span-3 md:grid-cols-1 lg:col-span-5 lg:grid-cols-2')}
              style={delay(160)}
            >
              {[
                { value: userGrowth.value, label: userGrowth.label },
                { value: String(projects.length), label: 'Live products' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn(
                    'p-6 sm:p-7',
                    i > 0 && 'border-l border-ink-800 md:border-l-0 md:border-t lg:border-l lg:border-t-0'
                  )}
                >
                  <b className="aurora-text block font-display text-[clamp(34px,4vw,46px)] font-extrabold leading-none tracking-[-0.04em]">
                    {stat.value}
                  </b>
                  <span className="mt-2.5 block text-xs uppercase tracking-[0.12em] text-ink-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </Card>

            {/* focus */}
            {focusItems.map((item, i) => (
              <Card
                key={item.title}
                className={cn(tile, 'group card-hover md:col-span-3 lg:col-span-3')}
                style={delay(i * 80)}
              >
                <span className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-ink-700 bg-[#10141c] text-accent-400 transition-colors group-hover:border-accent-500/50 group-hover:text-accent-300">
                  <item.icon size={19} />
                </span>
                <h3 className="font-display text-[19px] font-semibold leading-tight tracking-[-0.02em] text-ink-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
