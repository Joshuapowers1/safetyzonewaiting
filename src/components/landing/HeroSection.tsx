import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import IPhoneFrame from '@/components/ui/iphone-frame';
import { TextRotate } from '@/components/ui/text-rotate';

const fallIn = (delay: number) => ({
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const riseUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms — phones drift at different speeds, content fades up
  const phoneBackY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const phoneFrontY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-5, -14]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-slate-950 overflow-hidden"
      aria-label="SafetyZone food allergy app hero"
    >
      {/* Ambient glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ scale: glowScale }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-500/[0.13] rounded-full blur-[140px]"
        />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[400px] bg-cyan-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-emerald-500/[0.06] rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
          }}
        />
      </div>

      <div className="relative z-10 flex items-center min-h-[100dvh] pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div style={{ y: contentY, opacity: contentOpacity }} className="space-y-8">
              <motion.div {...fallIn(0)}>
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/[0.08] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-teal-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                  </span>
                  AI-Powered Food Safety
                </span>
              </motion.div>

              <div className="space-y-3">
                <motion.h1
                  {...fallIn(0.05)}
                  className="text-5xl md:text-7xl leading-[1.05] tracking-tight font-[800] text-white"
                >
                  Meet{' '}
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                    My SafetyZone.
                  </span>
                </motion.h1>
                <motion.h2
                  {...fallIn(0.15)}
                  className="text-5xl md:text-7xl leading-[1.15] tracking-tight font-[800] text-white/90"
                >
                  Finally eat{' '}
                  <TextRotate
                    texts={['without fear.', 'with confidence.', 'anywhere.', 'safely.']}
                    interval={2600}
                    className="text-teal-300 align-bottom"
                  />
                </motion.h2>
              </div>

              <motion.p
                {...fallIn(0.25)}
                className="text-lg md:text-xl font-medium text-teal-300 max-w-xl leading-relaxed"
              >
                AI-powered allergy protection, nutrition tracking, and safe dining in one app.
              </motion.p>

              <motion.p
                {...riseUp(0.35)}
                className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
              >
                Whether you have a peanut allergy, celiac disease, or any dietary restriction, My SafetyZone has your back. Get allergen-free recipes, carry a digital allergy card in 200+ languages, track your nutrition, and never miss an EpiPen expiry. Free to download with a 7-day free trial.
              </motion.p>

              <motion.div
                {...riseUp(0.45)}
                className="flex items-center gap-4 flex-wrap pt-2"
                role="group"
                aria-label="Download SafetyZone food allergy app"
              >
                <AppStoreBadge />
                <GooglePlayBadge comingSoon />
              </motion.div>
            </motion.div>

            {/* Right - Phone mockups (desktop) with parallax */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative w-full max-w-md h-[620px]">
                <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[420px] bg-teal-400/[0.14] rounded-full blur-[100px]" />

                {/* Back phone - parallax fast */}
                <motion.div
                  initial={{ opacity: 0, y: -60, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ y: phoneBackY, rotate: phoneRotate }}
                  className="absolute right-0 top-16 w-[210px] drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
                >
                  <IPhoneFrame>
                    <img
                      src="/screenshots/allergen-card.png"
                      alt="SafetyZone digital allergy card in 200+ languages"
                      className="w-full aspect-[9/19.5] object-contain bg-white"
                      width="210"
                      height="455"
                    />
                  </IPhoneFrame>
                </motion.div>

                {/* Front phone - parallax slow */}
                <motion.div
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ y: phoneFrontY }}
                  className="absolute left-0 top-8 w-[230px] z-10 drop-shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
                >
                  <IPhoneFrame>
                    <img
                      src="/screenshots/home-screen.png"
                      alt="SafetyZone app home dashboard"
                      className="w-full aspect-[9/19.5] object-contain bg-white"
                      width="230"
                      height="498"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </IPhoneFrame>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile phone mockups */}
          <div className="lg:hidden flex justify-center items-center mt-12 mb-8">
            <div className="relative w-full max-w-xs h-[480px]">
              <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[320px] bg-teal-400/[0.12] rounded-full blur-[80px]" />
              <motion.div
                initial={{ opacity: 0, y: -50, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-12 w-[150px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                <IPhoneFrame>
                  <img
                    src="/screenshots/allergen-card.png"
                    alt="SafetyZone digital allergy card"
                    className="w-full aspect-[9/19.5] object-contain bg-white"
                    width="150"
                    height="325"
                  />
                </IPhoneFrame>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-6 w-[170px] z-10 drop-shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
              >
                <IPhoneFrame>
                  <img
                    src="/screenshots/home-screen.png"
                    alt="SafetyZone app home dashboard"
                    className="w-full aspect-[9/19.5] object-contain bg-white"
                    width="170"
                    height="368"
                    fetchPriority="high"
                    decoding="async"
                  />
                </IPhoneFrame>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-teal-300" />
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
