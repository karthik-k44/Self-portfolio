import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/frontend/lib/utils';

// shadcn/ui Badge, with the chip styles the portfolio uses for tags and stacks.
const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-ink-800 bg-ink-950/60 text-ink-400',
        secondary: 'border-transparent bg-ink-800/60 text-ink-300',
        outline:
          'rounded-lg border-ink-800 bg-ink-900/70 px-2.5 py-1 text-ink-300 hover:border-accent-500/40 hover:text-accent-200',
        pill: 'rounded-full border-ink-700 bg-ink-900/70 px-3 py-1 text-ink-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
