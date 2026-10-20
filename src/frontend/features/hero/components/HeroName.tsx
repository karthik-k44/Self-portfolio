import { HERO_ENTRANCE_DELAY } from '../lib/hero-content';

type HeroNameProps = {
  first: string;
  last: string;
};

const LETTER_STAGGER = 45;

/** Big display name; each letter rises out of a mask, staggered. */
export default function HeroName({ first, last }: HeroNameProps) {
  const letters = (word: string, line: number) =>
    [...word].map((ch, i) => (
      <span
        key={i}
        className="inline-block translate-y-[105%] animate-rise"
        style={{ animationDelay: `${HERO_ENTRANCE_DELAY + line * 160 + i * LETTER_STAGGER}ms` }}
      >
        {ch}
      </span>
    ));

  return (
    <h1
      aria-label={`${first} ${last}`}
      className="mt-3.5 font-display text-[clamp(56px,10.5vw,148px)] font-extrabold leading-[0.9] tracking-[-0.035em] text-ink-50"
    >
      <span aria-hidden="true" className="block overflow-hidden pb-[0.06em]">
        {letters(first, 0)}
      </span>
      <span
        aria-hidden="true"
        className="text-outline mt-[0.08em] block overflow-hidden whitespace-nowrap pb-[0.06em] text-[0.58em] tracking-[-0.02em]"
      >
        {letters(last, 1)}
      </span>
    </h1>
  );
}
