'use client';
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}

export const AnimatedBorderCard = forwardRef<HTMLDivElement, AnimatedBorderCardProps>(
  ({ children, className, borderClassName }, ref) => {
    return (
      <div ref={ref} className={cn('relative rounded-2xl p-[1px] overflow-hidden group', className)}>
        <div
          className={cn(
            'absolute inset-0 bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite] rounded-2xl',
            borderClassName
          )}
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))`,
          }}
        />
        <div className="relative bg-card rounded-[calc(1rem-1px)] p-6 h-full">
          {children}
        </div>
      </div>
    );
  }
);
AnimatedBorderCard.displayName = 'AnimatedBorderCard';
