/** True when the visitor has asked the OS for reduced motion. */
export function PrefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True on devices with a precise pointer (mouse / trackpad) — where hover effects make sense. */
export function HasFinePointer() {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
}
