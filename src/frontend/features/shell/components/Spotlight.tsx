import { useEffect, useRef } from 'react';
import { HasFinePointer, PrefersReducedMotion } from '@/frontend/lib/motion-preference';

/** A soft cyan glow that follows the cursor, plus a faint film grain over the page. */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || PrefersReducedMotion() || !HasFinePointer()) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty('--mx', `${e.clientX}px`);
      el.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(520px circle at var(--mx, 70%) var(--my, 20%), rgba(34, 205, 242, 0.07), transparent 60%)',
        }}
      />
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />
    </>
  );
}
