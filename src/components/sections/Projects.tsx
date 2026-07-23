import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ImageCarousel from '@/components/ImageCarousel';
import { projects } from '@/data/portfolio';
import { projectImageMap } from '@/data/projectImages';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent-700/10 blur-[140px]" />
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've built & shipped."
          description="From AI-powered platforms to games and health trackers — each one a full end-to-end build."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="reveal-scale group relative flex flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/60 p-6 transition-all duration-500 hover:border-accent-500/40 hover:bg-ink-900/80 hover:shadow-[0_0_50px_-16px_rgba(34,205,242,0.4)]"
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
            >
              {/* accent glow */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* image carousel */}
              {projectImageMap[project.title] && (
                <ImageCarousel
                  images={projectImageMap[project.title]}
                  alt={project.title}
                />
              )}

              {/* number badge */}
              <span className="font-display text-5xl font-extrabold leading-none text-ink-800 transition-colors duration-500 group-hover:text-ink-700">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-ink-50">
                  {project.title}
                </h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-700 text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent-500/50 group-hover:text-accent-300">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-ink-800 bg-ink-950/60 px-2 py-0.5 text-xs font-medium text-ink-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3 border-t border-ink-800/80 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-accent-300"
                >
                  <Github size={15} />
                  Code
                </a>
                <span className="h-3 w-px bg-ink-700" />
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-accent-300"
                >
                  <ExternalLink size={15} />
                  Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
