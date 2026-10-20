import { Progress } from '@/frontend/components/progress/Progress';
import SectionHeading from '@/frontend/components/section-heading/SectionHeading';
import { useScrollTrack } from '@/frontend/hooks/use-scroll-track';
import { cn } from '@/frontend/lib/utils';
import ExperienceCard from './components/ExperienceCard';
import TimelineNode from './components/TimelineNode';
import { experiences } from './lib/experiences';

export default function Experience() {
  const { ref: trackRef, progress, reached } = useScrollTrack<HTMLDivElement>();
  const percent = Math.round(progress * 1000) / 10;
  const drawing = progress > 0 && progress < 1;

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-700/10 blur-[140px]" />
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building & shipping."
          description="How I've grown as a developer — scroll to watch the journey draw itself."
        />

        <div ref={trackRef} className="relative mt-16 pl-10 sm:pl-14">
          {/* scroll-drawn line: centred on the nodes, from the first node to the end of the track */}
          <div className="absolute bottom-2 left-[7px] top-[34px] w-0.5">
            <Progress
              orientation="vertical"
              value={percent}
              aria-label="Experience timeline progress"
              className="bg-ink-800/80"
              indicatorClassName="bg-gradient-to-b from-accent-300 via-accent-400 to-accent-600 transition-none"
            />
            {/* glowing tip at the leading edge */}
            <span
              aria-hidden="true"
              className={cn(
                'absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-300 shadow-[0_0_14px_4px_rgba(34,205,242,0.55)] transition-opacity duration-300',
                drawing ? 'opacity-100' : 'opacity-0'
              )}
              style={{ top: `${percent}%` }}
            />
          </div>

          <ol className="space-y-14">
            {experiences.map((exp, i) => (
              <li
                key={`${exp.company}-${exp.period}`}
                className="reveal relative"
                style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
              >
                <TimelineNode active={i < reached} />
                <ExperienceCard experience={exp} active={i < reached} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
