import SectionHeading from '@/frontend/components/section-heading/SectionHeading';
import ProjectCard from './components/ProjectCard';
import { projects } from './lib/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent-700/10 blur-[140px]" />
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've built & shipped."
          description="From AI-powered platforms to games and health trackers — each one a full end-to-end build. Every preview is a live glimpse of the deployed site."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
