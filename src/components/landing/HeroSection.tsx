import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { TextRotate } from '@/components/ui/text-rotate';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { Users } from 'lucide-react';
import HeroWave from '@/components/ui/dynamic-wave-canvas-background';
import { supabase } from '@/integrations/supabase/client';
import logoWhite from '@/assets/logo-white.png';

const HeroSection = () => {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    supabase.rpc('get_waitlist_count').then(({ data }) => {
      if (data !== null) setWaitlistCount(data);
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroWave />
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            <TextShimmer
              duration={1.5}
              className="text-sm font-semibold uppercase tracking-[0.2em] [--base-color:hsl(174,72%,60%)] [--base-gradient-color:hsl(168,70%,80%)]"
            >
              Beta coming soon
            </TextShimmer>

            <TextEffect
              per="word"
              as="h1"
              preset="blur"
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-bold text-white"
            >
              Safety in every bite.
            </TextEffect>

            <motion.img
              src={logoWhite}
              alt="SafetyZone"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-[280px] md:w-[350px] lg:w-[420px] drop-shadow-[0_0_80px_rgba(0,180,160,0.4)] my-4"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base flex items-center justify-center gap-2 min-h-[2rem]"
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
              transition={{ delay: 0.5, duration: 0.5 }}
              className="leading-relaxed text-base text-white/60 max-w-md"
            >
              The best AI-powered food safety app for anyone with allergies, dietary restrictions, or simply striving to eat better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-2"
            >
              <a href="#waitlist">
                <ButtonColorful label="Join the Waitlist" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2.5 border border-white/10 hover:bg-white/10 text-white h-12 px-6 rounded-lg transition-all font-medium text-sm backdrop-blur"
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
              <AnimatedBadge className="bg-white/5 border-white/10 text-white/80">
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
