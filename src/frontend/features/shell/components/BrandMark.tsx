import { profile } from '@/frontend/config/profile';

type BrandMarkProps = {
  onClick: () => void;
};

export default function BrandMark({ onClick }: BrandMarkProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2.5 rounded-full text-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Back to top"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-ink-700 bg-ink-900 font-mono text-[13px] text-accent-400 transition-colors group-hover:border-accent-500/60 group-hover:text-accent-300">
        &gt;_
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight">{profile.firstName}</span>
    </button>
  );
}
