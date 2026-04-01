import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import screenHome from '@/assets/screen-home.png';
import screenQrProfile from '@/assets/screen-qr-profile.png';
import { useIsMobile } from '@/hooks/use-mobile';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';

const HeroWave = lazy(() => import('@/components/ui/dynamic-wave-canvas-background'));

/* Modern iPhone-style phone frame */
const IPhoneFrame = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className ?? ''}`}>
    {/* Outer titanium frame */}
    <div className="rounded-[3rem] bg-gradient-to-b from-[hsl(220,10%,25%)] via-[hsl(220,10%,18%)] to-[hsl(220,10%,12%)] p-[3px] shadow-2xl shadow-black/60">
      {/* Inner bezel */}
      <div className="rounded-[2.85rem] bg-black p-[6px]">
        {/* Screen area */}
        <div className="rounded-[2.5rem] overflow-hidden relative">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[90px] h-[28px] bg-black rounded-b-[16px]" />
          {children}
        </div>
      </div>
    </div>
    {/* Side button accent */}
    <div className="absolute right-[-2px] top-[28%] w-[3px] h-[40px] rounded-r-full bg-[hsl(220,10%,22%)]" />
    <div className="absolute left-[-2px] top-[22%] w-[3px] h-[24px] rounded-l-full bg-[hsl(220,10%,22%)]" />
    <div className="absolute left-[-2px] top-[32%] w-[3px] h-[40px] rounded-l-full bg-[hsl(220,10%,22%)]" />
    <div className="absolute left-[-2px] top-[42%] w-[3px] h-[40px] rounded-l-full bg-[hsl(220,10%,22%)]" />
  </div>
);

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden" aria-label="SafetyZone food allergy app hero">
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
                  The #1 Food Allergy App
                </TextEffect>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight font-bold mt-1"
                >
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Eat with confidence,
                  </span>{' '}
                  <span className="text-white">not caution</span>
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base md:text-lg text-white/45 leading-relaxed max-w-md"
              >
                SafetyZone protects families with peanut, gluten, dairy, tree nut, shellfish, egg, soy, and sesame allergies. Share your QR allergy card in 200+ languages, track your EpiPens and inhalers, get FDA recall alerts, find allergen-free recipes, and track calories. All in one free app.
              </motion.p>

              {/* Real App Store badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center gap-3 flex-wrap"
                role="group"
                aria-label="Download SafetyZone food allergy app"
              >
                <AppStoreBadge />
                <GooglePlayBadge comingSoon />
              </motion.div>

              {/* SEO keyword-rich trust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.7 }}
                className="text-xs text-white/25 max-w-sm"
              >
                Best food allergy app for celiac disease, food intolerance, anaphylaxis prevention, halal, kosher, vegan & vegetarian diets
              </motion.p>
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
                  <IPhoneFrame>
                    <img
                      src={screenQrProfile}
                      alt="SafetyZone QR allergy card translated into 200+ languages for restaurant staff - food allergy translation card app"
                      className="w-full aspect-[9/19.5] object-cover"
                      width="260"
                      height="563"
                    />
                  </IPhoneFrame>
                </motion.div>

                {/* Front phone - Home */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="absolute left-0 top-8 sm:top-12 w-[210px] sm:w-[250px] md:w-[270px] z-10"
                >
                  <IPhoneFrame>
                    <img
                      src={screenHome}
                      alt="SafetyZone food allergy app home dashboard showing EpiPen tracker, allergen scanner, NutriScan calorie counter, and FDA recall alerts"
                      className="w-full aspect-[9/19.5] object-cover"
                      width="270"
                      height="585"
                    />
                  </IPhoneFrame>
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
