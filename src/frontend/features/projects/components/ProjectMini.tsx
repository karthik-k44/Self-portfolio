import { Card } from '@/frontend/components/card/Card';
import type { ProjectType } from '../types';
import ProjectGlimpse from './ProjectGlimpse';
import ProjectLinks from './ProjectLinks';

type ProjectMiniProps = {
  project: ProjectType;
  index: number;
};

/** A compact project card for the non-featured work. */
export default function ProjectMini({ project, index }: ProjectMiniProps) {
  return (
    <Card
      className="reveal card-hover flex flex-col rounded-[22px] bg-ink-900/90 p-4"
      style={{ ['--reveal-delay' as string]: `${index * 100}ms` }}
    >
      <ProjectGlimpse project={project} compact />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink-50">{project.title}</h3>
          <span className="font-mono text-xs text-accent-400">{project.kind}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">{project.description}</p>
        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </Card>
  );
}
