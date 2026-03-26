'use client';
import React, { forwardRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const Typewriter = forwardRef<HTMLSpanElement, TypewriterProps>(
  ({ words, className, cursorClassName, typingSpeed = 80, deletingSpeed = 50, delayBetweenWords = 1500 }, ref) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const word = words[currentWordIndex];
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
      return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
      <span ref={ref} className={cn('inline-flex', className)}>
        {currentText}
        <span className={cn('inline-block w-[2px] h-[1em] bg-primary ml-0.5 animate-[blink_1s_step-end_infinite]', cursorClassName)} />
      </span>
    );
  }
);
Typewriter.displayName = 'Typewriter';
