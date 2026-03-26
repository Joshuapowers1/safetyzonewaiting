'use client';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  ({ value, suffix = '', prefix = '', decimals = 0, duration = 2, className }, _forwardedRef) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [displayValue, setDisplayValue] = useState(0);
    const [showSuffix, setShowSuffix] = useState(false);

    useEffect(() => {
      if (!isInView) return;
      let startTime: number;
      let frame: number;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const elapsed = (time - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(eased * value);
        if (progress < 1) { frame = requestAnimationFrame(animate); } else { setShowSuffix(true); }
      };
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [isInView, value, duration]);

    return (
      <span ref={ref} className={cn('tabular-nums', className)}>
        {prefix}
        {displayValue.toFixed(decimals)}
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={showSuffix ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          {suffix}
        </motion.span>
      </span>
    );
  }
);
AnimatedCounter.displayName = 'AnimatedCounter';
