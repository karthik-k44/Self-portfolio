import { useEffect, useState } from 'react';
import { PrefersReducedMotion } from '@/frontend/lib/motion-preference';

type CountUpOptions = {
  duration?: number;
  /** ms to wait before counting — e.g. until the preloader has gone */
  delay?: number;
};

/** Counts from 0 up to `end` with an ease-out curve. Jumps straight to `end` under reduced motion. */
export function useCountUp(end: number, { duration = 1400, delay = 0 }: CountUpOptions = {}) {
  const [value, setValue] = useState(() => (PrefersReducedMotion() ? end : 0));

  useEffect(() => {
    if (PrefersReducedMotion()) return;
    let frame = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const k = Math.min(Math.max((now - start) / duration, 0), 1);
      setValue(end * (1 - Math.pow(1 - k, 3)));
      if (k < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, delay]);

  return value;
}
