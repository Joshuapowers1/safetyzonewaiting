import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import { Apple, Smartphone, ArrowRight, Shield, Star } from 'lucide-react';
import screenHome from '@/assets/screen-home.png';
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

      {/* Subtle grid overlay like Cal.ai */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex items-center min-h-[100dvh] pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left content */}
            <div className="space-y-8 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm text-white/70 hover:bg-white/[0.1] transition-colors group"
                >
                  <Apple className="w-4 h-4 text-primary" />
                  <span>Available now on the App Store</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

              <TextEffect
                per="word"
                as="h1"
                preset="blur"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-bold text-white"
              >
                Eat with confidence, not caution.
              </TextEffect>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-white/50 leading-relaxed max-w-lg"
              >
                SafetyZone uses AI to detect hidden allergens, scan menus, and keep your family safe — all through one beautiful app.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-3"
              >
                <Button asChild variant="glow" size="lg" className="h-14 px-8 text-base rounded-xl">
                  <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
                    <Apple className="w-5 h-5" />
                    Download for iOS
                  </a>
                </Button>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 border border-white/10 hover:bg-white/[0.06] text-white/80 h-14 px-8 rounded-xl transition-all duration-200 font-medium text-base"
                >
                  Explore Features
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 pt-2"
              >
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span>4.9 on App Store</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/40">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  <span>HIPAA-level privacy</span>
                </div>
              </motion.div>
            </div>

            {/* Right phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Ambient glow */}
                <div className="absolute -inset-20 bg-gradient-to-br from-primary/20 via-transparent to-accent/15 rounded-full blur-[100px]" />

                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[300px] md:w-[320px]">
                  <div className="rounded-[2.5rem] border-[6px] border-white/[0.08] bg-black overflow-hidden shadow-2xl shadow-primary/10">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-2xl z-20" />
                    <img
                      src={screenHome}
                      alt="SafetyZone App - Home Dashboard"
                      className="w-full aspect-[9/19.5] object-cover"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-4 sm:-left-12 top-1/3 bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Allergen Free</div>
                      <div className="text-[10px] text-white/40">Safe to eat ✓</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Google Play badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -right-4 sm:-right-8 bottom-1/4 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-white/50" />
                    <span className="text-xs text-white/50">Google Play soon</span>
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
