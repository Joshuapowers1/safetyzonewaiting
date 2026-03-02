'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function ScanLineEffect() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] z-20 pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.8), transparent)',
        boxShadow: '0 0 15px hsl(var(--primary) / 0.5)',
      }}
      animate={{ top: ['10%', '90%', '10%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
