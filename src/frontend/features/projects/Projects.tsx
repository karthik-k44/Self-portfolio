import SectionHeading from '@/frontend/components/section-heading/SectionHeading';
import ProjectMini from './components/ProjectMini';
import ProjectShowcase from './components/ProjectShowcase';
import { projects } from './lib/projects';

const featured = projects.filter((p) => p.featured);
const more = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative pt-0 md:pt-0">
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              <span className="aurora-text">Live products </span>
            </>
          }
          description="Every frame below is a live capture of the deployed site."
        />

        <div className="mt-16 grid gap-[clamp(64px,9vw,120px)]">
          {featured.map((project, i) => (
            <ProjectShowcase key={project.title} project={project} index={i} />
          ))}

          {more.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {more.map((project, i) => (
                <ProjectMini key={project.title} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
