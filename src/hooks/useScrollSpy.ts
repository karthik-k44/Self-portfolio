import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently in view as the user scrolls,
 * so the navbar can highlight the active link. Uses IntersectionObserver
 * with a rootMargin that favours the top third of the viewport.
 */
export function useScrollSpy(ids: string[], offset = '0px 0px -60% 0px') {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: offset, threshold: [0, 0.25, 0.5, 1] }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
