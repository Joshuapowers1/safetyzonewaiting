import { motion } from 'framer-motion';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import IPhoneFrame from '@/components/ui/iphone-frame';

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
  return (
    <section
      className="relative min-h-[100dvh] bg-white overflow-hidden"
      aria-label="SafetyZone food allergy app hero"
    >
      <div className="relative z-10 flex items-center min-h-[100dvh] pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <motion.h1
                  {...fallIn(0.05)}
                  className="text-5xl md:text-7xl leading-[1.1] tracking-tight font-[800] text-black"
                >
                  Meet{' '}
                  <span className="text-teal-400">My SafetyZone.</span>
                </motion.h1>
                <motion.h2
                  {...fallIn(0.15)}
                  className="text-5xl md:text-7xl leading-[1.1] tracking-tight font-[800] text-black"
                >
                  Finally eat without fear.
                </motion.h2>
              </div>

              <motion.p
                {...fallIn(0.25)}
                className="text-lg md:text-xl font-medium text-teal-400 max-w-xl leading-relaxed"
              >
                AI-powered allergy protection, nutrition tracking, and safe dining in one app.
              </motion.p>

              <motion.p
                {...riseUp(0.35)}
                className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed"
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
            </div>

            {/* Right - Phone mockups (desktop) */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative w-full max-w-md h-[620px]">
                {/* Back phone - Allergen card */}
                <motion.div
                  initial={{ opacity: 0, y: -60, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-16 w-[210px]"
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

                {/* Front phone - Home screen */}
                <motion.div
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-8 w-[230px] z-10"
                >
                  <IPhoneFrame>
                    <img
                      src="/screenshots/home-screen.png"
                      alt="SafetyZone app home dashboard"
                      className="w-full aspect-[9/19.5] object-contain bg-white"
                      width="230"
                      height="498"
                    />
                  </IPhoneFrame>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile phone mockups */}
          <div className="lg:hidden flex justify-center items-center mt-12 mb-8">
            <div className="relative w-full max-w-xs h-[480px]">
              <motion.div
                initial={{ opacity: 0, y: -50, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-12 w-[150px]"
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
                className="absolute left-0 top-6 w-[170px] z-10"
              >
                <IPhoneFrame>
                  <img
                    src="/screenshots/home-screen.png"
                    alt="SafetyZone app home dashboard"
                    className="w-full aspect-[9/19.5] object-contain bg-white"
                    width="170"
                    height="368"
                  />
                </IPhoneFrame>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
