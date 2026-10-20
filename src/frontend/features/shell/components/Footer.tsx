import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { navLinks, ScrollToSection } from '@/frontend/config/navigation';
import { profile } from '@/frontend/config/profile';
import BrandMark from './BrandMark';

const socials = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-ink-800/80 bg-ink-950/60">
      <div className="container-narrow px-6 py-12 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <BrandMark onClick={scrollTop} />
            <p className="mt-3 max-w-xs text-sm text-ink-400">
              {profile.role} building scalable, beautiful web applications with the MERN stack.
            </p>
          </div>

          {/* quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="link"
                onClick={() => ScrollToSection(link.id)}
                className="font-normal text-ink-400"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* socials + top */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <Button
                key={s.label}
                variant="outline"
                size="icon"
                asChild
                className="text-ink-300 hover:-translate-y-0.5 hover:text-accent-300"
              >
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <s.icon size={17} />
                </a>
              </Button>
            ))}
            <Button
              variant="soft"
              size="icon"
              onClick={scrollTop}
              aria-label="Back to top"
              className="text-accent-300 hover:-translate-y-0.5"
            >
              <ArrowUp size={17} />
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-800/80 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with React, TypeScript, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
