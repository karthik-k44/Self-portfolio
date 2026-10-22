import { cn } from '@/frontend/lib/utils';

type InProgressBadgeProps = {
  className?: string;
};

/** Pulsing amber pill marking a project that is still being actively built. */
export default function InProgressBadge({ className }: InProgressBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/[0.08] py-1 pl-2.5 pr-3 text-[12.5px] text-amber-100',
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
      </span>
      Currently building
    </span>
  );
}
