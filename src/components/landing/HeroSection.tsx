import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { TextRotate } from '@/components/ui/text-rotate';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import logoWhite from '@/assets/logo-white.png';

const HeroWave = lazy(() => import('@/components/ui/dynamic-wave-canvas-background'));

const HeroSection = () => {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    supabase.rpc('get_waitlist_count').then(({ data }) => {
      if (data !== null) setWaitlistCount(data);
    });
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <HeroWave />
      </Suspense>
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="relative z-10 flex items-center justify-center min-h-[100dvh] pt-20 pb-16 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6">
            <TextShimmer
              duration={1.5}
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] [--base-color:hsl(174,72%,60%)] [--base-gradient-color:hsl(168,70%,80%)]"
            >
              Beta coming soon
            </TextShimmer>

            <TextEffect
              per="word"
              as="h1"
              preset="blur"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-bold text-white"
            >
              Safety in every bite.
            </TextEffect>

            <motion.img
              src={logoWhite}
              alt="SafetyZone"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[420px] drop-shadow-[0_0_60px_rgba(0,180,160,0.4)] my-2 sm:my-4"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-sm sm:text-base flex items-center justify-center gap-2 min-h-[2rem]"
            >
              <span className="text-white/40">→</span>
              <TextRotate
                texts={[
                  'Scan any menu in seconds',
                  'Detect hidden allergens instantly',
                  'Translate menus in 200+ languages',
                  'Share your allergy card anywhere',
                ]}
                className="font-medium text-primary"
                interval={3500}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="leading-relaxed text-sm sm:text-base text-white/60 max-w-md px-2"
            >
              The best AI-powered food safety app for anyone with allergies, dietary restrictions, or simply striving to eat better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <a href="#waitlist" className="w-full sm:w-auto">
                <ButtonColorful label="Join the Waitlist" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2.5 border border-white/10 hover:bg-white/10 text-white h-12 px-6 rounded-lg transition-all duration-200 font-medium text-sm backdrop-blur w-full sm:w-auto"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <AnimatedBadge pulse={false} className="bg-white/5 border-white/10 text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                AI-Powered Protection
              </AnimatedBadge>

              {waitlistCount !== null && waitlistCount > 0 && (
                <AnimatedBadge className="bg-white/5 border-white/10 text-white/80">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  {waitlistCount.toLocaleString()} on the waitlist
                </AnimatedBadge>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
