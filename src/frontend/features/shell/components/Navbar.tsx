import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { navLinks, ScrollToSection } from '@/frontend/config/navigation';
import { useScrollProgress } from '@/frontend/hooks/use-scroll-progress';
import { useScrollSpy } from '@/frontend/hooks/use-scroll-spy';
import { cn } from '@/frontend/lib/utils';
import BrandMark from './BrandMark';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    ScrollToSection(id);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        scrolled
          ? 'border-ink-800/80 bg-ink-950/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      )}
    >
      {/* scroll progress bar */}
      <div
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />

      <nav className="container-narrow flex h-16 items-center justify-between px-6 md:px-10 lg:px-16">
        <BrandMark onClick={() => handleNav('home')} />

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.id}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNav(link.id)}
                  className={cn('relative px-3.5', active && 'text-accent-300 hover:text-accent-300')}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent-400 transition-all duration-300',
                      active ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </Button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button variant="soft" size="sm" onClick={() => handleNav('contact')} className="font-medium">
            Let&apos;s talk
          </Button>
        </div>

        {/* mobile toggle */}
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 text-ink-200 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-ink-800/80 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.id}>
                <Button
                  variant="ghost"
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    'h-auto w-full justify-start rounded-lg px-3 py-2.5',
                    active ? 'bg-accent-500/10 text-accent-300' : 'hover:bg-ink-900'
                  )}
                >
                  {link.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
