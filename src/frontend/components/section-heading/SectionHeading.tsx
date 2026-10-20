import type { ReactNode } from 'react';
import { cn } from '@/frontend/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="eyebrow reveal">
        <span className="h-px w-7 bg-accent-400/60" />
        {eyebrow}
      </span>
      <h2
        className="reveal mt-5 font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-ink-50 sm:text-5xl lg:text-[64px]"
        style={{ ['--reveal-delay' as string]: '80ms' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'reveal mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg',
            centered && 'mx-auto'
          )}
          style={{ ['--reveal-delay' as string]: '140ms' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
