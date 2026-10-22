import { Badge } from '@/frontend/components/badge/Badge';
import { cn } from '@/frontend/lib/utils';
import type { ProjectType } from '../types';
import InProgressBadge from './InProgressBadge';
import ProjectGlimpse from './ProjectGlimpse';
import ProjectLinks from './ProjectLinks';

type ProjectShowcaseProps = {
  project: ProjectType;
  index: number;
};

/** A featured project: large live preview on one side, story on the other — sides alternate. */
export default function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const flip = index % 2 === 1;

  return (
    <article
      className={cn(
        'grid items-center gap-8 lg:gap-16',
        flip ? 'lg:grid-cols-[1fr_1.35fr]' : 'lg:grid-cols-[1.35fr_1fr]'
      )}
    >
      <div className={cn('reveal relative', flip && 'lg:order-2')}>
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-x-[6%] -bottom-[6%] top-[12%] -z-10 rounded-[40px] bg-gradient-to-br opacity-35 blur-[60px]',
            project.glow
          )}
        />
        <ProjectGlimpse project={project} />
      </div>

      <div className="reveal" style={{ ['--reveal-delay' as string]: '120ms' }}>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="text-outline block font-display text-[clamp(54px,7vw,92px)] font-extrabold leading-[0.9] tracking-[-0.05em] [-webkit-text-stroke-color:#40475e]">
            {String(index + 1).padStart(2, '0')}
          </span>
          {project.inProgress && <InProgressBadge />}
        </div>
        <h3 className="mt-2.5 font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink-50">
          {project.title}
        </h3>
        <p className="mt-3.5 font-mono text-[13px] text-accent-400">{project.kind}</p>
        <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-300">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="rounded-full px-3 py-1 text-[12.5px]">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
