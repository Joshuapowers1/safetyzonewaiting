import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Apple, Play, ChevronDown } from 'lucide-react';
import IPhoneFrame from '@/components/ui/iphone-frame';
import { TextRotate } from '@/components/ui/text-rotate';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

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

  const phoneBackY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const phoneFrontY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-[#05080f] overflow-hidden"
      aria-label="SafetyZone food allergy app hero"
    >
      {/* Breathing aurora behind the phones */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[72%] top-[48%] w-[820px] h-[820px] rounded-full blur-[130px]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,194,168,0.22) 0%, rgba(0,229,255,0.10) 42%, transparent 72%)',
            animation: 'sz-aurora 12s ease-in-out infinite',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="absolute -top-40 left-1/3 w-[700px] h-[420px] bg-[#00C2A8]/[0.07] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[400px] bg-[#00E5FF]/[0.05] rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
          }}
        />
      </div>

      <div className="relative z-10 flex items-center min-h-[100dvh] pt-24 pb-20 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div style={{ y: contentY, opacity: contentOpacity }} className="space-y-8">
              <motion.div {...fallIn(0)}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#00C2A8]/25 bg-[#00C2A8]/[0.07] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#00C2A8]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2A8] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C2A8]" />
                  </span>
                  AI-Powered Food Safety
                </span>
              </motion.div>

              <div className="space-y-3">
                <motion.h1
                  {...fallIn(0.05)}
                  className="font-display text-5xl md:text-7xl leading-[1.04] tracking-tight font-semibold text-white"
                >
                  Meet{' '}
                  <span className="bg-gradient-to-r from-[#00C2A8] to-[#00E5FF] bg-clip-text text-transparent">
                    My SafetyZone.
                  </span>
                </motion.h1>
                <motion.h2
                  {...fallIn(0.15)}
                  className="font-display text-4xl md:text-6xl leading-[1.12] tracking-tight font-semibold text-white/90"
                >
                  Finally eat{' '}
                  <TextRotate
                    texts={['safely anywhere.', 'without fear.', 'with confidence.']}
                    interval={2500}
                    className="text-[#00C2A8] align-bottom"
                  />
                </motion.h2>
              </div>

              <motion.p
                {...fallIn(0.25)}
                className="text-lg md:text-xl font-medium text-[#00C2A8] max-w-xl leading-relaxed"
              >
                AI-powered allergy protection, nutrition tracking, and safe dining in one app.
              </motion.p>

              <motion.p
                {...riseUp(0.35)}
                className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
              >
                Whether you have a peanut allergy, celiac disease, or any dietary restriction, My SafetyZone has your back. Get allergen-free recipes, carry a digital allergy card in 200+ languages, track your nutrition, and never miss an EpiPen expiry. Free to download with a 7-day free trial.
              </motion.p>

              <motion.div
                {...riseUp(0.45)}
                className="flex items-center gap-4 flex-wrap pt-2"
                role="group"
                aria-label="Download SafetyZone food allergy app"
              >
                {/* App Store — glassy white */}
                <motion.a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                  className="group inline-flex items-center gap-3 rounded-2xl bg-white/95 px-6 py-3.5 text-[#05080f] shadow-[0_8px_32px_-8px_rgba(255,255,255,0.25)] backdrop-blur-xl border border-white/40 hover:shadow-[0_8px_40px_-6px_rgba(0,194,168,0.5)] transition-shadow"
                >
                  <Apple className="w-6 h-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium opacity-70">Download on the</span>
                    <span className="block text-base font-semibold">App Store</span>
                  </span>
                </motion.a>

                {/* Google Play — outlined */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.15] bg-white/[0.03] px-6 py-3.5 text-white/70 backdrop-blur-xl cursor-default hover:border-[#00C2A8]/40 hover:shadow-[0_8px_40px_-10px_rgba(0,194,168,0.4)] transition-all"
                  aria-label="Coming soon on Google Play"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium opacity-60 uppercase tracking-wide">Coming soon on</span>
                    <span className="block text-base font-semibold">Google Play</span>
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right — overlapping framed phones with depth */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative w-full max-w-md h-[640px]">
                {/* Back phone — smaller, -3deg, delayed bob */}
                <motion.div
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ y: phoneBackY }}
                  className="absolute right-0 top-20 w-[205px] -rotate-3"
                >
                  <div className="sz-bob-delayed">
                    <IPhoneFrame>
                      <img
                        src="/screenshots/allergen-card.png"
                        alt="SafetyZone digital allergy card in 200+ languages"
                        className="w-full aspect-[9/19.5] object-contain bg-white"
                        width="205"
                        height="444"
                      />
                    </IPhoneFrame>
                  </div>
                </motion.div>

                {/* Front phone — larger, +2deg, bob */}
                <motion.div
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ y: phoneFrontY }}
                  className="absolute left-0 top-6 w-[240px] z-10 rotate-2"
                >
                  <div className="sz-bob">
                    <IPhoneFrame>
                      <img
                        src="/screenshots/home-screen.png"
                        alt="SafetyZone app home dashboard"
                        className="w-full aspect-[9/19.5] object-contain bg-white"
                        width="240"
                        height="520"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </IPhoneFrame>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile phones */}
          <div className="lg:hidden flex justify-center items-center mt-12 mb-8">
            <div className="relative w-full max-w-xs h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-14 w-[150px] -rotate-3"
              >
                <div className="sz-bob-delayed">
                  <IPhoneFrame>
                    <img
                      src="/screenshots/allergen-card.png"
                      alt="SafetyZone digital allergy card"
                      className="w-full aspect-[9/19.5] object-contain bg-white"
                      width="150"
                      height="325"
                    />
                  </IPhoneFrame>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-4 w-[175px] z-10 rotate-2"
              >
                <div className="sz-bob">
                  <IPhoneFrame>
                    <img
                      src="/screenshots/home-screen.png"
                      alt="SafetyZone app home dashboard"
                      className="w-full aspect-[9/19.5] object-contain bg-white"
                      width="175"
                      height="379"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </IPhoneFrame>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouncing scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-[#00C2A8]/70" />
        </motion.div>
      </motion.div>

      {/* Gradient fade divider into next section */}
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-[#05080f] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
