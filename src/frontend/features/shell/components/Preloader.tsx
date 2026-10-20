import { useEffect, useState } from 'react';
import { PrefersReducedMotion } from '@/frontend/lib/motion-preference';

/** Types `>_ karthik.dev`, then lifts away to reveal the hero (≈2.3s). */
export default function Preloader() {
  const [show, setShow] = useState(() => !PrefersReducedMotion());

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] grid animate-lift place-items-center bg-ink-950"
    >
      <div className="font-mono text-xl text-ink-300">
        <span className="text-accent-400">&gt;_</span>{' '}
        <span className="inline-block w-0 animate-type overflow-hidden whitespace-nowrap align-bottom">
          karthik.dev
        </span>
        <span className="ml-1 inline-block h-[1.1em] w-[9px] translate-y-[3px] animate-blink bg-accent-400" />
      </div>
    </div>
  );
}
