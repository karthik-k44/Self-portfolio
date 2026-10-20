import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/frontend/lib/utils';

type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
  /** vertical bars fill from the top down */
  orientation?: 'horizontal' | 'vertical';
  indicatorClassName?: string;
};

// shadcn/ui Progress, extended with a vertical orientation.
const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, indicatorClassName, value, orientation = 'horizontal', ...props }, ref) => {
    const hidden = 100 - (value ?? 0);
    return (
      <ProgressPrimitive.Root
        ref={ref}
        value={value}
        data-orientation={orientation}
        className={cn(
          'relative overflow-hidden rounded-full bg-ink-800',
          orientation === 'horizontal' ? 'h-2 w-full' : 'h-full w-0.5',
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn('h-full w-full flex-1 bg-primary transition-transform', indicatorClassName)}
          style={{
            transform:
              orientation === 'horizontal' ? `translateX(-${hidden}%)` : `translateY(-${hidden}%)`,
          }}
        />
      </ProgressPrimitive.Root>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
