'use client';
import React, { forwardRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRotateProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export const TextRotate = forwardRef<HTMLSpanElement, TextRotateProps>(
  ({ texts, className, interval = 3000 }, ref) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % texts.length);
      }, interval);
      return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
      <span ref={ref} className={cn('relative inline-flex overflow-hidden', className)}>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="block"
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    );
  }
);
TextRotate.displayName = 'TextRotate';
