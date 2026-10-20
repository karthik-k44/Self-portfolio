import type { ReactNode } from 'react';
import { useScrollReveal } from '@/frontend/hooks/use-scroll-reveal';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Spotlight from './components/Spotlight';

type ShellProps = {
  children: ReactNode;
};

/** Page frame: preloader, ambient layers, navbar, the sections and the footer — with the scroll-reveal observer over all of them. */
export default function Shell({ children }: ShellProps) {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <Preloader />
      <Spotlight />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
