import { Terminal } from 'lucide-react';
import { profile } from '@/frontend/config/profile';

type BrandMarkProps = {
  onClick: () => void;
};

export default function BrandMark({ onClick }: BrandMarkProps) {
  return (
    <button onClick={onClick} className="group flex items-center gap-2 text-ink-50" aria-label="Back to top">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/60 group-hover:text-accent-300">
        <Terminal size={18} />
      </span>
      <span className="font-display text-sm font-semibold tracking-tight">{profile.firstName}</span>
    </button>
  );
}
