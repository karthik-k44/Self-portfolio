import { useCountUp } from '@/frontend/hooks/use-count-up';
import { HERO_ENTRANCE_DELAY, heroStats } from '../lib/hero-content';

function Stat({ value, suffix, label }: (typeof heroStats)[number]) {
  const current = useCountUp(value, { delay: HERO_ENTRANCE_DELAY + 300 });
  return (
    <div>
      <b className="block font-display text-[clamp(26px,3vw,34px)] font-bold leading-none tracking-[-0.03em] text-ink-50">
        {Math.round(current)}
        {suffix}
      </b>
      <span className="mt-2 block text-[10.5px] uppercase tracking-[0.1em] text-ink-400 sm:text-xs sm:tracking-[0.14em]">
        {label}
      </span>
    </div>
  );
}

export default function HeroStats() {
  return (
    <div className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-ink-800 pt-7 sm:w-fit sm:gap-9 md:mx-auto lg:mx-0">
      {heroStats.map((stat) => (
        <Stat key={stat.label} {...stat} />
      ))}
    </div>
  );
}
