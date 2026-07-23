import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-800/80 bg-ink-950/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      {/* scroll progress bar */}
      <div
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />

      <nav className="container-narrow flex h-16 items-center justify-between px-6 md:px-10 lg:px-16">
        <button
          onClick={() => handleNav('home')}
          className="group flex items-center gap-2 text-ink-50"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/60 group-hover:text-accent-300">
            <Terminal size={18} />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            {profile.firstName}
          </span>
        </button>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? 'text-accent-300' : 'text-ink-300 hover:text-ink-100'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent-400 transition-all duration-300 ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() => handleNav('contact')}
            className="rounded-lg border border-accent-500/40 bg-accent-500/10 px-4 py-2 text-sm font-medium text-accent-200 transition-all hover:border-accent-400 hover:bg-accent-500/20 hover:text-accent-100"
          >
            Let&apos;s talk
          </button>
        </div>

        {/* mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-ink-200 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-800/80 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    active
                      ? 'bg-accent-500/10 text-accent-300'
                      : 'text-ink-300 hover:bg-ink-900 hover:text-ink-100'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
