import { cn } from '@/frontend/lib/utils';
import { craftBand, techBand } from '../lib/about-content';

type BandProps = {
  items: string[];
  tone: 'aurora' | 'ink';
};

function Band({ items, tone }: BandProps) {
  return (
    <div
      className={cn(
        '-mx-10 flex overflow-hidden',
        tone === 'aurora'
          ? '-rotate-[2.2deg] bg-aurora text-ink-950'
          : '-mt-2 rotate-[1.6deg] border-y border-ink-800 bg-ink-900 text-ink-300'
      )}
    >
      <div
        className={cn(
          'flex w-max animate-marquee',
          tone === 'ink' && '[animation-direction:reverse] [animation-duration:40s]'
        )}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-[34px] whitespace-nowrap py-4 pl-[34px] font-display text-[clamp(18px,2.4vw,26px)] font-bold tracking-[-0.02em] after:text-[0.7em] after:opacity-55 after:content-['✦']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two tilted marquees running in opposite directions between the hero and About. */
export default function TechBands() {
  return (
    <div aria-hidden="true" className="relative z-[2] overflow-hidden py-8">
      <Band items={techBand} tone="aurora" />
      <Band items={craftBand} tone="ink" />
    </div>
  );
}
