'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Aurora layers */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -inset-[10px] opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.3), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -inset-[10px] opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 70% 10%, hsl(var(--accent) / 0.25), transparent 60%)',
          }}
          animate={{
            x: [0, 30, -20, 0],
            opacity: [0.3, 0.5, 0.35, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -inset-[10px] opacity-30"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 30% 50%, hsl(174 72% 45% / 0.2), transparent 70%)',
          }}
          animate={{
            y: [0, -20, 10, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {children}
    </div>
  );
}
