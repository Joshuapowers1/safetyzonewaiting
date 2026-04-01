import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import { Apple, Smartphone, Star } from 'lucide-react';
import screenHome from '@/assets/screen-home.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const HeroWave = lazy(() => import('@/components/ui/dynamic-wave-canvas-background'));

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* Background */}
      {isMobile ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,4%)] via-[hsl(220,20%,7%)] to-[hsl(220,25%,4%)]" />
      ) : (
        <Suspense fallback={<div className="absolute inset-0 bg-[hsl(220,25%,4%)]" />}>
          <HeroWave />
        </Suspense>
      )}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 flex items-center min-h-[100dvh] pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left content */}
            <div className="space-y-7 max-w-xl">
              {/* Social proof badge — Cal AI style */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08]"
              >
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[hsl(220,25%,4%)] bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-[9px] font-bold text-white"
                    >
                      {['SZ', '★', '♥'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-white/70">
                  Loved by users with{' '}
                  <span className="text-amber-400">⭐</span>{' '}
                  <span className="font-semibold text-white">4.9 rating</span>
                </span>
              </motion.div>

              <div>
                <TextEffect
                  per="word"
                  as="h1"
                  preset="blur"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight font-bold text-white"
                >
                  Meet SafetyZone
                </TextEffect>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight font-bold mt-1"
                >
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Eat safely
                  </span>{' '}
                  <span className="text-white">with AI</span>
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base md:text-lg text-white/45 leading-relaxed max-w-md"
              >
                Meet SafetyZone, the AI-powered app for food allergy safety. Scan a menu, share your allergy card, or find safe recipes — all in seconds.
              </motion.p>

              {/* App Store badges — Cal AI style */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="glow" size="lg" className="h-14 px-7 text-base rounded-xl gap-2.5">
                    <Apple className="w-5 h-5" />
                    Download on iOS
                  </Button>
                </a>
                <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <Smartphone className="w-5 h-5 text-white/30" />
                  <div className="text-left">
                    <div className="text-[10px] text-white/30 uppercase tracking-wider leading-none">Coming Soon</div>
                    <div className="text-sm font-medium text-white/50">Google Play</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — Dual phone mockup like Cal AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[500px] sm:h-[580px] md:h-[640px]">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 rounded-full blur-[80px]" />

                {/* Back phone (slightly rotated) */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotate: 5 }}
                  animate={{ opacity: 1, x: 0, rotate: 6 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="absolute right-0 top-0 w-[200px] sm:w-[240px] md:w-[260px]"
                >
                  <div className="rounded-[2.2rem] border-[5px] border-white/[0.08] bg-black overflow-hidden shadow-2xl shadow-black/50">
                    <img
                      src={screenNutriscan}
                      alt="SafetyZone NutriScan AI"
                      className="w-full aspect-[9/19.5] object-cover"
                    />
                  </div>
                </motion.div>

                {/* Front phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="absolute left-0 top-8 sm:top-12 w-[210px] sm:w-[250px] md:w-[270px] z-10"
                >
                  <div className="rounded-[2.4rem] border-[5px] border-white/[0.1] bg-black overflow-hidden shadow-2xl shadow-primary/10">
                    <img
                      src={screenHome}
                      alt="SafetyZone Home Dashboard"
                      className="w-full aspect-[9/19.5] object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
