'use client';
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSeparatorProps {
  className?: string;
  gradient?: boolean;
}

export const AnimatedSeparator = forwardRef<HTMLDivElement, AnimatedSeparatorProps>(
  ({ className, gradient = true }, ref) => {
    return (
      <div ref={ref} className={cn('relative w-full h-px my-12', className)}>
        {gradient ? (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        ) : (
          <div className="absolute inset-0 bg-border" />
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)] animate-pulse" />
      </div>
    );
  }
);
AnimatedSeparator.displayName = 'AnimatedSeparator';
