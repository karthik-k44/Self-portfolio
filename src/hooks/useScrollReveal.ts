import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to any descendant element carrying the
 * `reveal` / `reveal-scale` class once it scrolls into view.
 * Re-scans the subtree on every render so dynamically added nodes
 * (e.g. mapped list items) are picked up automatically.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const nodes = root.querySelectorAll('.reveal, .reveal-scale');
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  });

  return containerRef;
}
