import * as React from 'react';
import { cn } from '@/frontend/lib/utils';

// shadcn/ui Skeleton.
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-ink-800/60', className)} {...props} />;
}

export { Skeleton };
