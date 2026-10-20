import { useState } from 'react';
import { ExternalLink, ImageOff, Lock, PowerOff } from 'lucide-react';
import { Badge } from '@/frontend/components/badge/Badge';
import { Skeleton } from '@/frontend/components/skeleton/Skeleton';
import { useTilt } from '@/frontend/hooks/use-tilt';
import { cn } from '@/frontend/lib/utils';
import { GlimpseUrl, HostOf } from '../lib/glimpse';
import type { GlimpseStatusType, ProjectType } from '../types';
import GlimpsePlaceholder from './GlimpsePlaceholder';

type ProjectGlimpseProps = {
  project: ProjectType;
  /** smaller chrome and a wider crop, for the compact cards */
  compact?: boolean;
  className?: string;
};

/** A browser-window frame showing a live screenshot of the project's deployed site; tilts towards the cursor. */
export default function ProjectGlimpse({ project, compact = false, className }: ProjectGlimpseProps) {
  const [status, setStatus] = useState<GlimpseStatusType>('loading');
  const tiltRef = useTilt<HTMLDivElement>(compact ? 3 : 5);

  const frame = (
    <>
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-ink-800 bg-[#10141c] px-3.5 py-2.5">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-lg bg-ink-950 px-3 py-1 font-mono text-[11px] text-ink-400">
          <Lock size={10} className="shrink-0 text-ink-500" />
          <span className="truncate">{HostOf(project.demo)}</span>
        </div>
        {project.live && (
          <ExternalLink size={13} className="shrink-0 text-ink-500 transition-colors group-hover/glimpse:text-accent-300" />
        )}
      </div>

      {/* viewport */}
      <div className={cn('relative overflow-hidden', compact ? 'aspect-video' : 'aspect-[16/10]')}>
        {!project.live ? (
          <GlimpsePlaceholder icon={PowerOff} title="Live demo is offline" body="The source code is still available on GitHub." />
        ) : status === 'failed' ? (
          <GlimpsePlaceholder icon={ImageOff} title="Preview unavailable" body="Open the live site to take a look." />
        ) : (
          <>
            {status === 'loading' && <Skeleton className="absolute inset-0 rounded-none" />}
            <img
              src={GlimpseUrl(project.demo, project.glimpseTheme)}
              alt={`Live preview of the ${project.title} website`}
              loading="lazy"
              decoding="async"
              onLoad={() => setStatus('ready')}
              onError={() => setStatus('failed')}
              className={cn(
                'h-full w-full object-cover object-top transition-opacity duration-700',
                status === 'ready' ? 'opacity-100' : 'opacity-0'
              )}
            />
            {status === 'ready' && (
              <Badge
                variant="pill"
                className="absolute bottom-3.5 left-3.5 border-ink-500/25 bg-ink-950/80 text-xs text-ink-100 backdrop-blur-md"
              >
                <span className="h-[7px] w-[7px] rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
                Live site
              </Badge>
            )}
          </>
        )}
      </div>
    </>
  );

  const frameClass =
    'group/glimpse block overflow-hidden rounded-[18px] border border-ink-500/25 bg-ink-900 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)] transition-[transform,border-color] duration-500 ease-out hover:border-accent-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

  return (
    <div ref={tiltRef} className={cn('transition-transform duration-500 ease-out', className)}>
      {project.live ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the live ${project.title} site`}
          className={frameClass}
        >
          {frame}
        </a>
      ) : (
        <div className={frameClass}>{frame}</div>
      )}
    </div>
  );
}
