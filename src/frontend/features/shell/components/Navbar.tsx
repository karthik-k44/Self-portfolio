import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { navLinks, ScrollToSection } from '@/frontend/config/navigation';
import { useMagnetic } from '@/frontend/hooks/use-magnetic';
import { useScrollProgress } from '@/frontend/hooks/use-scroll-progress';
import { useScrollSpy } from '@/frontend/hooks/use-scroll-spy';
import { cn } from '@/frontend/lib/utils';
import BrandMark from './BrandMark';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const progress = useScrollProgress();
  const ctaRef = useMagnetic<HTMLButtonElement>();

  const handleNav = (id: string) => {
    setMenuOpen(false);
    ScrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-[18px]">
      {/* scroll progress */}
      <div
        className="fixed left-0 top-0 h-0.5 bg-aurora transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />

      {/* same content box as the sections, so the pill's edges line up with the page content */}
      <div className="container-narrow">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-ink-500/15 bg-ink-900/60 py-2 pl-3 pr-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:py-2.5 sm:pl-4 sm:pr-2.5">
          <BrandMark onClick={() => handleNav('home')} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    'h-9 px-3.5 text-sm',
                    activeId === link.id && 'bg-ink-100 text-ink-950 hover:text-ink-950'
                  )}
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              ref={ctaRef}
              size="sm"
              onClick={() => handleNav('contact')}
              className="hidden sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight size={15} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </nav>

        {/* mobile / tablet menu */}
        <div
          className={cn(
            'mt-2 overflow-hidden rounded-3xl border border-ink-500/15 bg-ink-900/90 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden',
            menuOpen ? 'max-h-[28rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
          )}
        >
          <ul className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Button
                  variant="ghost"
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    'h-11 w-full justify-start rounded-2xl px-4',
                    activeId === link.id ? 'bg-accent-500/10 text-accent-300' : 'hover:bg-ink-800/60'
                  )}
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
