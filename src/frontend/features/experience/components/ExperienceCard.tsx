import { MapPin } from 'lucide-react';
import { Badge } from '@/frontend/components/badge/Badge';
import { Card } from '@/frontend/components/card/Card';
import { cn } from '@/frontend/lib/utils';
import type { ExperienceType } from '../types';

type ExperienceCardProps = {
  experience: ExperienceType;
  /** true once the timeline line has reached this entry */
  active: boolean;
};

export default function ExperienceCard({ experience, active }: ExperienceCardProps) {
  return (
    <Card
      className={cn(
        'card-hover grid gap-5 rounded-[22px] bg-ink-900/85 p-6 duration-500 sm:p-8 md:grid-cols-[200px_1fr] md:gap-8',
        active && 'border-accent-500/30 bg-gradient-to-r from-accent-500/[0.06] via-ink-900/85 to-ink-900/85'
      )}
    >
      {/* meta */}
      <div>
        <p className="font-mono text-[13px] text-ink-400">{experience.period}</p>
        <p className="mt-2 font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-ink-50">
          {experience.company}
        </p>
        {experience.location && (
          <p className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-ink-500">
            <MapPin size={12} />
            {experience.location}
          </p>
        )}
        {experience.current && (
          <Badge className="mt-3.5 flex w-fit rounded-full border-emerald-400/30 bg-emerald-400/[0.07] px-2.5 py-1 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Current role
          </Badge>
        )}
      </div>

      {/* role */}
      <div>
        <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-ink-50">
          {experience.role}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">{experience.description}</p>

        <ul className="mt-4 grid gap-2.5">
          {experience.achievements.map((a, j) => (
            <li
              key={j}
              className="relative pl-6 text-[14.5px] leading-relaxed text-ink-300 before:absolute before:left-0.5 before:top-[0.62em] before:h-2 before:w-2 before:rounded-[3px] before:bg-aurora before:content-['']"
            >
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.stack.map((s) => (
            <Badge key={s} variant="outline" className="rounded-full px-3 py-1 text-[12.5px]">
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
