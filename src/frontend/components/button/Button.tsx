import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/frontend/lib/utils';

// shadcn/ui Button, restyled for the portfolio's ink / accent theme.
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-aurora bg-[length:160%_100%] bg-left text-ink-950 shadow-[0_10px_40px_-12px_rgba(99,102,241,0.7)] hover:bg-right hover:shadow-[0_14px_50px_-10px_rgba(34,205,242,0.7)]',
        outline:
          'border border-ink-700 bg-ink-900/60 text-ink-100 backdrop-blur-sm hover:border-accent-500/50 hover:text-accent-200',
        soft: 'border border-accent-500/40 bg-accent-500/10 text-accent-200 hover:border-accent-400 hover:bg-accent-500/20 hover:text-accent-100',
        ghost: 'font-medium text-ink-300 hover:text-ink-50',
        link: 'h-auto px-0 font-medium text-ink-300 hover:text-accent-300',
      },
      size: {
        default: 'h-12 px-6',
        sm: 'h-10 px-[18px] text-[13px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
