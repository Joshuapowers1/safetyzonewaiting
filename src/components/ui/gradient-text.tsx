'use client';
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({
    children,
    className,
    from = 'hsl(var(--primary))',
    via = 'hsl(var(--accent))',
    to = 'hsl(var(--primary))',
    animate = true,
  }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-block bg-clip-text text-transparent',
          animate && 'bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite]',
          className
        )}
        style={{
          backgroundImage: `linear-gradient(90deg, ${from}, ${via}, ${to}, ${from})`,
        }}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';
