'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className, glowColor }: GlowCardProps) {
  return (
    <div
      className={cn(
        'relative group rounded-2xl bg-card border border-border p-6 transition-all duration-500',
        'hover:border-primary/40 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.25)]',
        className
      )}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{
          background: glowColor || `radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
