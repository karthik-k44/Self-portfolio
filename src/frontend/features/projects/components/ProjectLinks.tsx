import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { useMagnetic } from '@/frontend/hooks/use-magnetic';
import type { ProjectType } from '../types';

type ProjectLinksProps = {
  project: ProjectType;
};

export default function ProjectLinks({ project }: ProjectLinksProps) {
  const demoRef = useMagnetic<HTMLAnchorElement>(0.2);

  return (
    <div className="flex flex-wrap gap-2.5">
      {project.live && (
        <Button size="sm" asChild>
          <a ref={demoRef} href={project.demo} target="_blank" rel="noopener noreferrer">
            Live demo
            <ArrowUpRight size={15} />
          </a>
        </Button>
      )}
      <Button variant="outline" size="sm" asChild>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Github size={15} />
          Code
        </a>
      </Button>
    </div>
  );
}
