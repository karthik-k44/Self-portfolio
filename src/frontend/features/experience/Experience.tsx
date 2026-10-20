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
    <section id="experience" className="section-padding relative overflow-hidden pt-0 md:pt-0">
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              The journey, <span className="aurora-text">drawn as you scroll.</span>
            </>
          }
        />

        <div ref={trackRef} className="relative mt-16 pl-10 sm:pl-14">
          {/* scroll-drawn line: centred on the nodes, from the first node to the end of the track */}
          <div className="absolute bottom-8 left-[7px] top-[38px] w-0.5 sm:top-[42px]">
            <Progress
              orientation="vertical"
              value={percent}
              aria-label="Experience timeline progress"
              className="bg-ink-800/80"
              indicatorClassName="bg-aurora-vertical transition-none"
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

          <ol className="space-y-6">
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
