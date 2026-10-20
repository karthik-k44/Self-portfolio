import type { LucideIcon } from 'lucide-react';

type GlimpsePlaceholderProps = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export default function GlimpsePlaceholder({ icon: Icon, title, body }: GlimpsePlaceholderProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-grid px-6 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-ink-400">
        <Icon size={18} />
      </span>
      <div>
        <p className="font-display text-sm font-semibold text-ink-200">{title}</p>
        <p className="mt-1 text-xs text-ink-500">{body}</p>
      </div>
    </div>
  );
}
