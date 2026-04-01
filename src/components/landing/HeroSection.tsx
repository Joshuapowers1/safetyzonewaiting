import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import screenHome from '@/assets/screen-home.png';
import screenQrProfile from '@/assets/screen-qr-profile.png';
import { useIsMobile } from '@/hooks/use-mobile';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';

const HeroWave = lazy(() => import('@/components/ui/dynamic-wave-canvas-background'));

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
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
                The AI-powered food allergy app. Scan menus, share your QR allergy card in 200+ languages, find safe recipes, and track your EpiPens and medications. All in one app.
              </motion.p>

              {/* Real App Store badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <AppStoreBadge />
                <GooglePlayBadge comingSoon />
              </motion.div>
            </div>

            {/* Right - Dual phone: Home + QR Profile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[500px] sm:h-[580px] md:h-[640px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 rounded-full blur-[80px]" />

                {/* Back phone - QR Allergy Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotate: 5 }}
                  animate={{ opacity: 1, x: 0, rotate: 6 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="absolute right-0 top-0 w-[200px] sm:w-[240px] md:w-[260px]"
                >
                  <div className="rounded-[2.2rem] border-[5px] border-white/[0.08] bg-black overflow-hidden shadow-2xl shadow-black/50">
                    <img
                      src={screenQrProfile}
                      alt="SafetyZone QR Allergy Card"
                      className="w-full aspect-[9/19.5] object-cover"
                    />
                  </div>
                </motion.div>

                {/* Front phone - Home */}
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
