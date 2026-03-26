'use client';
import React, { forwardRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  trigger?: boolean;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const ScrambleText = forwardRef<HTMLSpanElement, ScrambleTextProps>(
  ({ text, className, duration = 800, trigger = true }, ref) => {
    const [display, setDisplay] = useState(text);

    useEffect(() => {
      if (!trigger) { setDisplay(text); return; }
      let frame: number;
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const result = text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          const charProgress = progress * text.length;
          if (i < charProgress) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        setDisplay(result);
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [text, duration, trigger]);

    return <span ref={ref} className={cn('', className)}>{display}</span>;
  }
);
ScrambleText.displayName = 'ScrambleText';
