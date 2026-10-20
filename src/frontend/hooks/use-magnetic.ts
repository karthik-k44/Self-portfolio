import { useEffect, useRef } from 'react';
import { HasFinePointer, PrefersReducedMotion } from '@/frontend/lib/motion-preference';

/**
 * Pulls the referenced element towards the cursor while hovered and lets it
 * spring back on leave. Mouse / trackpad only; off under reduced motion.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.25) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || PrefersReducedMotion() || !HasFinePointer()) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength * 1.4;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [strength]);

  return ref;
}
