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
import screenHome from '@/assets/screen-home.png';
import screenScan from '@/assets/screen-scan.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import screenHome from '@/assets/screen-home.png';
import screenScan from '@/assets/screen-scan.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';

const phoneScreens = [
  { src: screenScan, alt: 'Scanner', rotate: -12, x: -60, z: 0, delay: 0.7 },
  { src: screenHome, alt: 'Home Screen', rotate: 0, x: 0, z: 10, delay: 0.5 },
  { src: screenNutriscan, alt: 'NutriScan', rotate: 12, x: 60, z: 0, delay: 0.9 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroWave />
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-7 max-w-xl"
            >
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

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base flex items-center gap-2 min-h-[2rem]"
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
                className="flex flex-wrap gap-4 pt-2"
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
              >
                <AnimatedBadge className="mt-2 bg-white/5 border-white/10 text-white/80">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  AI-Powered Protection
                </AnimatedBadge>
              </motion.div>
            </motion.div>

            {/* Right Content - Logo + Fanned Phone Screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex flex-col items-center lg:items-end gap-6"
            >
              {/* Large Logo */}
              <motion.img
                src={logoWhite}
                alt="SafetyZone"
                className="w-[280px] md:w-[350px] lg:w-[420px] drop-shadow-[0_0_80px_rgba(0,180,160,0.4)]"
                animate={{
                  scale: [1, 1.03, 1],
                  filter: [
                    'drop-shadow(0 0 60px rgba(0,180,160,0.3))',
                    'drop-shadow(0 0 120px rgba(0,180,160,0.5))',
                    'drop-shadow(0 0 60px rgba(0,180,160,0.3))',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Fanned phone mockups */}
              <div className="relative w-[340px] md:w-[400px] h-[280px] md:h-[340px]">
                {/* Glow behind phones */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] scale-110" />

                {phoneScreens.map((screen, i) => (
                  <motion.div
                    key={screen.alt}
                    initial={{ opacity: 0, y: 60, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: screen.rotate }}
                    transition={{
                      delay: screen.delay,
                      duration: 0.7,
                      type: 'spring',
                      stiffness: 120,
                      damping: 15,
                    }}
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 origin-bottom"
                    style={{
                      marginLeft: `${screen.x - 55}px`,
                      zIndex: screen.z,
                    }}
                  >
                    <motion.div
                      className="w-[110px] md:w-[130px] rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl shadow-black/40 bg-black"
                      whileHover={{ y: -8, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {/* Mini notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[8px] bg-black rounded-b-lg z-10" />
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
