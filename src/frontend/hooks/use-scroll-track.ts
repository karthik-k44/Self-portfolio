import { useEffect, useRef, useState } from 'react';

type ScrollTrackState = {
  /** 0–1: how far the scroll tip has travelled down the element */
  progress: number;
  /** how many `[data-track-marker]` descendants the tip has passed */
  reached: number;
};

/**
 * Tracks a scroll "tip" — a fixed line at `anchor` × viewport height — as it
 * travels down the referenced element, for scroll-drawn timelines.
 * Measures once per animation frame and only re-renders when something changed.
 * With reduced motion the track reports itself fully drawn.
 */
export function useScrollTrack<T extends HTMLElement = HTMLElement>(anchor = 0.55) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<ScrollTrackState>({ progress: 0, reached: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const markers = () => el.querySelectorAll<HTMLElement>('[data-track-marker]');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setState({ progress: 1, reached: markers().length });
      return;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const tip = window.innerHeight * anchor - rect.top;
      const progress = rect.height > 0 ? Math.min(Math.max(tip / rect.height, 0), 1) : 0;
      let reached = 0;
      markers().forEach((marker) => {
        const m = marker.getBoundingClientRect();
        if (m.top + m.height / 2 - rect.top <= tip) reached += 1;
      });
      setState((prev) =>
        Math.abs(prev.progress - progress) < 0.001 && prev.reached === reached
          ? prev
          : { progress, reached }
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [anchor]);

  return { ref, ...state };
}
