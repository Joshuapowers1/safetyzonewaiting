import { motion } from 'framer-motion';
import phoneQRProfile from '@/assets/phone-qr-profile.png';
import phoneRecipeAI from '@/assets/phone-recipe-ai.png';
import { Spotlight } from '@/components/ui/spotlight';
import { TextEffect } from '@/components/ui/text-effect';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { TextRotate } from '@/components/ui/text-rotate';
import { ParallaxFloat } from '@/components/ui/parallax-float';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { AnimatedBadge } from '@/components/ui/animated-badge';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(174, 72%, 45%)" />

      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Teal accent shape on right */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, hsl(174, 60%, 80%) 50%, hsl(174, 65%, 75%) 100%)',
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Floating particles behind phones */}
      <FloatingParticles count={15} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 max-w-lg"
          >
            <TextShimmer
              duration={1.5}
              className="text-sm font-semibold uppercase tracking-widest [--base-color:hsl(174,72%,38%)] [--base-gradient-color:hsl(168,70%,60%)] dark:[--base-color:hsl(174,72%,45%)] dark:[--base-gradient-color:hsl(168,70%,70%)]"
            >
              Beta coming soon
            </TextShimmer>

            <TextEffect
              per="word"
              as="h1"
              preset="blur"
              className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] tracking-tight font-light text-foreground"
            >
              Safety in every bite.
            </TextEffect>

            {/* Rotating value props */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base text-primary flex items-center gap-2 min-h-[2rem]"
            >
              <span className="text-muted-foreground">→</span>
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
              className="leading-relaxed text-sm text-muted-foreground"
            >
              The best AI-powered food safety app for anyone with allergies, dietary restrictions, or simply striving to eat better.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a href="#waitlist">
                <ButtonColorful label="Join the Waitlist" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2.5 border border-border hover:bg-muted/50 text-foreground h-12 px-6 rounded-lg transition-all font-medium text-sm"
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
              <AnimatedBadge className="mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                AI-Powered Protection
              </AnimatedBadge>
            </motion.div>
          </motion.div>

          {/* Right Content - Parallax Phone Mockups */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <ParallaxFloat intensity={10}>
              <div className="relative w-[320px] md:w-[420px] lg:w-[500px] h-[450px] md:h-[550px] lg:h-[650px]">
                {/* Back phone */}
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 8 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute top-0 right-0 z-10"
                >
                  <div className="relative">
                    <img src={phoneRecipeAI} alt="SafetyZone Recipe AI" className="w-[220px] md:w-[280px] lg:w-[320px] drop-shadow-2xl" />
                  </div>
                </motion.div>

                {/* Front phone */}
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: -8 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-0 left-0 z-20"
                >
                  <img src={phoneQRProfile} alt="SafetyZone Personal QR Profile" className="w-[220px] md:w-[280px] lg:w-[320px] drop-shadow-2xl" />
                </motion.div>
              </div>
            </ParallaxFloat>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
