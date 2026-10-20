import { ArrowUp } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { profile } from '@/frontend/config/profile';

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-800/80">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 px-4 py-7 text-[13px] text-ink-500 sm:flex-row sm:px-6 md:px-10 lg:px-16">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-center">Designed &amp; built with React, Tailwind &amp; shadcn/ui</p>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="h-9 w-9 text-ink-300 hover:-translate-y-0.5"
        >
          <ArrowUp size={15} />
        </Button>
      </div>
    </footer>
  );
}
