'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DrawIconProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function DrawIcon({ children, className, delay = 0 }: DrawIconProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: -180 }}
      animate={isInView ? { scale: 1, rotate: 0 } : {}}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay,
      }}
      className={cn('inline-flex', className)}
    >
      {children}
    </motion.div>
  );
}
