'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  from = 'hsl(var(--primary))',
  via = 'hsl(var(--accent))',
  to = 'hsl(var(--primary))',
  animate = true,
}: GradientTextProps) {
  return (
    <span
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
