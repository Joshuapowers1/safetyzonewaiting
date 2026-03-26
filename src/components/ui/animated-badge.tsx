'use client';
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export const AnimatedBadge = forwardRef<HTMLSpanElement, AnimatedBadgeProps>(
  ({ children, className, pulse = true }, ref) => {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary',
          className
        )}
      >
        {pulse && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
        )}
        {children}
      </motion.span>
    );
  }
);

AnimatedBadge.displayName = 'AnimatedBadge';
