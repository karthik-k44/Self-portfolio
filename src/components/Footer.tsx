import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-ink-800/80 bg-ink-950/60">
      <div className="container-narrow px-6 py-12 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollTop}
              className="group inline-flex items-center gap-2 text-ink-50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/60 group-hover:text-accent-300">
                <Terminal size={18} />
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                {profile.firstName}
              </span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-ink-400">
              {profile.role} building scalable, beautiful web applications with the MERN stack.
            </p>
          </div>

          {/* quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() =>
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-sm text-ink-400 transition-colors hover:text-accent-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* socials + top */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-ink-300 transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-300"
              >
                <s.icon size={17} />
              </a>
            ))}
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-500/40 bg-accent-500/10 text-accent-300 transition-all hover:-translate-y-0.5 hover:bg-accent-500/20"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-800/80 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
