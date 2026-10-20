import { useEffect, useRef } from 'react';
import { HasFinePointer, PrefersReducedMotion } from '@/frontend/lib/motion-preference';

/**
 * Tilts the referenced element in 3D towards the cursor while hovered.
 * Mouse / trackpad only; off under reduced motion.
 */
export function useTilt<T extends HTMLElement = HTMLElement>(maxDeg = 5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || PrefersReducedMotion() || !HasFinePointer()) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const ry = ((e.clientX - r.left) / r.width - 0.5) * maxDeg * 2;
      const rx = -((e.clientY - r.top) / r.height - 0.5) * maxDeg * 1.6;
      el.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg)`;
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
  }, [maxDeg]);

  return ref;
}
