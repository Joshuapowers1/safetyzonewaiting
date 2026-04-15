import { motion } from 'framer-motion';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import IPhoneFrame from '@/components/ui/iphone-frame';

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight font-[800] text-black">
                  Meet{' '}
                  <span className="text-[#2dd4bf]">My SafetyZone.</span>
                </h1>
                <h2 className="text-5xl md:text-7xl leading-[1.1] tracking-tight font-[800] text-black">
                  Finally eat without fear.
                </h2>
              </div>

              <p className="text-lg md:text-xl font-medium text-[#2dd4bf] max-w-xl leading-relaxed">
                AI-powered allergy protection, nutrition tracking & safe dining — all in one app.
              </p>

              <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                Whether it's a peanut allergy, celiac disease, or any dietary restriction — My SafetyZone has your back. Get allergen-free recipes, carry a digital allergy card in 200+ languages, track your nutrition, and never miss an EpiPen expiry. Free to download with a 7-day free trial.
              </p>

              <div
                className="flex items-center gap-4 flex-wrap pt-2"
                role="group"
                aria-label="Download SafetyZone food allergy app"
              >
                <AppStoreBadge />
                <GooglePlayBadge comingSoon />
              </div>
            </motion.div>

            {/* Right - Phone mockups (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-end items-center"
            >
              <div className="relative w-full max-w-md h-[620px]">
                {/* Back phone - Allergen card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="absolute right-0 top-16 w-[210px]"
                  style={{ transform: 'rotate(-5deg)' }}
                >
                  <IPhoneFrame>
                    <img
                      src="/screenshots/allergen-card.png"
                      alt="SafetyZone digital allergy card in 200+ languages"
                      className="w-full aspect-[9/19.5] object-cover object-top"
                      width="210"
                      height="455"
                    />
                  </IPhoneFrame>
                </motion.div>

                {/* Front phone - Home screen */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="absolute left-0 top-8 w-[230px] z-10"
                >
                  <IPhoneFrame>
                    <img
                      src="/screenshots/home-screen.png"
                      alt="SafetyZone app home dashboard"
                      className="w-full aspect-[9/19.5] object-cover object-top"
                      width="230"
                      height="498"
                    />
                  </IPhoneFrame>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile phone mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden flex justify-center items-center mt-12 mb-8"
          >
            <div className="relative w-full max-w-xs h-[480px]">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="absolute right-0 top-12 w-[150px]"
                style={{ transform: 'rotate(-5deg)' }}
              >
                <IPhoneFrame>
                  <img
                    src="/screenshots/allergen-card.png"
                    alt="SafetyZone digital allergy card"
                    className="w-full aspect-[9/19.5] object-cover object-top"
                    width="150"
                    height="325"
                  />
                </IPhoneFrame>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute left-0 top-6 w-[170px] z-10"
              >
                <IPhoneFrame>
                  <img
                    src="/screenshots/home-screen.png"
                    alt="SafetyZone app home dashboard"
                    className="w-full aspect-[9/19.5] object-cover object-top"
                    width="170"
                    height="368"
                  />
                </IPhoneFrame>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
