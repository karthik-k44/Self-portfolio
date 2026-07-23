import { useEffect, useRef } from 'react';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      // progress: 0 when timeline bottom enters view, 1 when top leaves view
      const total = rect.height + viewport * 0.6;
      const scrolled = viewport - rect.top;
      const progress = Math.max(0, Math.min(scrolled / total, 1));
      el.style.setProperty('--timeline-progress', progress.toFixed(3));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-700/10 blur-[140px]" />
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building & shipping."
          description="How I've grown as a developer — scroll to watch the journey draw itself."
        />

        <div ref={trackRef} className="relative mt-16 pl-8 sm:pl-12">
          {/* track background */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-ink-800 sm:left-4" />
          {/* scroll-draw progress line — sticky-tall gradient that fills with scroll */}
          <div
            className="absolute left-0 top-2 w-px bg-gradient-to-b from-accent-300 via-accent-400 to-accent-600 sm:left-4"
            style={{
              height: 'calc(var(--timeline-progress, 0) * 100%)',
              transition: 'height 0.1s linear',
            }}
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal relative"
                style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
              >
                {/* node */}
                <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent-400 bg-ink-950 sm:-left-12">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                </span>

                <div className="card card-hover p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-50">
                        {exp.role}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-2 text-sm text-accent-300">
                        <Briefcase size={14} />
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-900/70 px-3 py-1 text-xs font-medium text-ink-300">
                      <MapPin size={12} className="text-accent-400" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-300">
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-ink-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-accent-500"
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-800/80 pt-4">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-ink-800/60 px-2 py-0.5 text-xs font-medium text-ink-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
