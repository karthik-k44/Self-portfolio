import type { ReactNode } from 'react';
import { useScrollReveal } from '@/frontend/hooks/use-scroll-reveal';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

type ShellProps = {
  children: ReactNode;
};

/** Page frame: navbar, the sections, footer — and the scroll-reveal observer over all of them. */
export default function Shell({ children }: ShellProps) {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
