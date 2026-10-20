import * as React from 'react';
import { cn } from '@/frontend/lib/utils';

// shadcn/ui Input.
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-xl border border-input bg-ink-950/60 px-4 py-3 text-sm text-ink-100 transition-colors placeholder:text-ink-500 focus-visible:border-accent-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/20 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { Input };
