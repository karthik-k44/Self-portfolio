import { Briefcase, CalendarDays, CheckCircle2, MapPin } from 'lucide-react';
import { Badge } from '@/frontend/components/badge/Badge';
import { Card, CardDescription, CardTitle } from '@/frontend/components/card/Card';
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
        'card-hover p-6 duration-500 sm:p-7',
        active && 'border-accent-500/25 bg-ink-900/70'
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <CardTitle>{experience.role}</CardTitle>
          <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-2 text-accent-300">
              <Briefcase size={14} />
              {experience.company}
            </span>
            {experience.location && (
              <span className="inline-flex items-center gap-1.5 text-ink-400">
                <MapPin size={13} />
                {experience.location}
              </span>
            )}
          </p>
        </div>
        <Badge variant="pill">
          <CalendarDays size={12} className="text-accent-400" />
          {experience.period}
        </Badge>
      </div>

      <CardDescription className="mt-4">{experience.description}</CardDescription>

      <ul className="mt-5 space-y-2.5">
        {experience.achievements.map((a, j) => (
          <li key={j} className="flex items-start gap-3 text-sm text-ink-300">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-500" />
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-800/80 pt-4">
        {experience.stack.map((s) => (
          <Badge key={s} variant="secondary">
            {s}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
