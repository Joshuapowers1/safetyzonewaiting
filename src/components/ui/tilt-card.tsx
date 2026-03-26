'use client';
import React, { forwardRef, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}

export const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({ children, className, glareColor }, _forwardedRef) => {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 15;
      const rotateY = (x - 0.5) * 15;
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
      setGlarePos({ x: x * 100, y: y * 100 });
    };

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
      setIsHovered(false);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={cn('relative transition-shadow duration-300', className)}
        style={{ transform, transition: 'transform 0.15s ease-out' }}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-20"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor || 'hsl(var(--primary) / 0.4)'}, transparent 60%)`,
            }}
          />
        )}
        {children}
      </motion.div>
    );
  }
);

TiltCard.displayName = 'TiltCard';
