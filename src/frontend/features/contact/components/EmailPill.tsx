import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { profile } from '@/frontend/config/profile';
import { useMagnetic } from '@/frontend/hooks/use-magnetic';

export default function EmailPill() {
  const helloRef = useMagnetic<HTMLAnchorElement>();

  return (
    <div className="mx-auto mt-9 flex w-full max-w-full flex-col items-stretch gap-2.5 rounded-[26px] border border-ink-700 bg-ink-900/70 p-4 backdrop-blur-md sm:w-fit sm:flex-row sm:items-center sm:gap-4 sm:rounded-full sm:py-3 sm:pl-6 sm:pr-3">
      <span className="truncate text-center font-mono text-[14px] text-ink-100 sm:text-[clamp(14px,1.6vw,18px)]">
        {profile.email}
      </span>
      <Button asChild>
        <a ref={helloRef} href={`mailto:${profile.email}`}>
          Say hello
          <ArrowUpRight size={16} />
        </a>
      </Button>
    </div>
  );
}
