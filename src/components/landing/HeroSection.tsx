import { motion } from 'framer-motion';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { FallingPattern } from '@/components/ui/falling-pattern';
import { TextEffect } from '@/components/ui/text-effect';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { TextRotate } from '@/components/ui/text-rotate';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import logoWhite from '@/assets/logo-white.png';

const HeroSection = () => {
  return (
    <BackgroundGradientAnimation
      containerClassName="min-h-screen"
      className="flex items-center justify-center min-h-screen pt-20 pb-16"
      interactive={true}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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

            {/* Rotating value props */}
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

            {/* CTA */}
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

            {/* AI badge */}
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

          {/* Right Content - Logo with Falling Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] md:w-[420px] lg:w-[500px] h-[320px] md:h-[420px] lg:h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20">
              {/* Falling pattern background */}
              <FallingPattern
                color="hsl(174, 72%, 45%)"
                backgroundColor="hsl(220, 20%, 6%)"
                duration={120}
                blurIntensity="0.5em"
                className="absolute inset-0"
              />

              {/* Logo centered on top */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.img
                  src={logoWhite}
                  alt="SafetyZone"
                  className="w-[180px] md:w-[240px] lg:w-[300px] drop-shadow-[0_0_60px_rgba(0,180,160,0.4)]"
                  animate={{
                    scale: [1, 1.03, 1],
                    filter: [
                      'drop-shadow(0 0 40px rgba(0,180,160,0.3))',
                      'drop-shadow(0 0 80px rgba(0,180,160,0.5))',
                      'drop-shadow(0 0 40px rgba(0,180,160,0.3))',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Radial glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;
