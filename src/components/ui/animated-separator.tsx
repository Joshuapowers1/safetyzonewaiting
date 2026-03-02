'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSeparatorProps {
  className?: string;
  gradient?: boolean;
}

export function AnimatedSeparator({ className, gradient = true }: AnimatedSeparatorProps) {
  return (
    <div className={cn('relative w-full h-px my-12', className)}>
      {gradient ? (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      ) : (
        <div className="absolute inset-0 bg-border" />
      )}
      {/* Animated glow dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)] animate-pulse" />
    </div>
  );
}
