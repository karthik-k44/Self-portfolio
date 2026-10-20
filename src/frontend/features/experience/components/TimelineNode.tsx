import { cn } from '@/frontend/lib/utils';

type TimelineNodeProps = {
  /** true once the scroll line has reached this node */
  active: boolean;
};

export default function TimelineNode({ active }: TimelineNodeProps) {
  return (
    <span
      data-track-marker
      aria-hidden="true"
      className={cn(
        'absolute -left-10 top-[26px] flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-500 sm:-left-14',
        active
          ? 'scale-110 border-accent-400 bg-ink-950 shadow-[0_0_0_4px_rgba(34,205,242,0.12),0_0_18px_2px_rgba(34,205,242,0.45)]'
          : 'border-ink-700 bg-ink-950'
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full transition-colors duration-500',
          active ? 'bg-accent-300' : 'bg-ink-700'
        )}
      />
    </span>
  );
}
