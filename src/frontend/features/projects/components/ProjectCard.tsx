import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/frontend/components/badge/Badge';
import { Button } from '@/frontend/components/button/Button';
import { Card, CardDescription, CardFooter, CardTitle } from '@/frontend/components/card/Card';
import type { ProjectType } from '../types';
import ProjectGlimpse from './ProjectGlimpse';

type ProjectCardProps = {
  project: ProjectType;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      className="reveal-scale group relative flex flex-col overflow-hidden p-6 duration-500 hover:border-accent-500/40 hover:bg-ink-900/80 hover:shadow-[0_0_50px_-16px_rgba(34,205,242,0.4)]"
      style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
    >
      {/* accent glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <ProjectGlimpse project={project} />

      <div className="flex items-baseline gap-4">
        <span className="font-display text-4xl font-extrabold leading-none text-ink-800 transition-colors duration-500 group-hover:text-ink-700">
          {String(index + 1).padStart(2, '0')}
        </span>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </div>

      <CardDescription className="mt-3 flex-1">{project.description}</CardDescription>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>

      <CardFooter className="mt-6 gap-5 border-t border-ink-800/80 p-0 pt-4">
        <Button variant="link" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={15} />
            Code
          </a>
        </Button>
        {project.live && (
          <>
            <span className="h-3 w-px bg-ink-700" />
            <Button variant="link" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} />
                Live demo
              </a>
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
