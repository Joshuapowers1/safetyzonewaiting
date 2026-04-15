import { motion } from 'framer-motion';
import screenHome from '@/assets/screen-home.png';
import screenQrProfile from '@/assets/screen-qr-profile.png';
import { useIsMobile } from '@/hooks/use-mobile';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[hsl(220,25%,4%)]" aria-label="SafetyZone food allergy app hero">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 flex items-center min-h-[100dvh] pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 max-w-xl"
            >
              <div className="space-y-5">
                <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-bold text-white">
                  Safety in{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    every bite.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-md">
                  The app for food allergies, celiac disease, dietary restrictions, and nutrition tracking. QR allergy cards in 200+ languages, medication tracking, FDA recall alerts, and more. Free to download.
                </p>
              </div>

              <div
                className="flex items-center gap-3 flex-wrap"
                role="group"
                aria-label="Download SafetyZone food allergy app"
              >
                <AppStoreBadge />
                <GooglePlayBadge comingSoon />
              </div>
            </motion.div>

            {/* Right - Phone screens */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-[340px] sm:w-[420px] md:w-[500px] h-[440px] sm:h-[520px] md:h-[600px]">
                {/* Back phone - QR Allergy Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="absolute right-0 top-0 w-[200px] sm:w-[240px] md:w-[260px]"
                  style={{ transform: 'rotate(6deg)' }}
                >
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60">
                    <img
                      src={screenQrProfile}
                      alt="SafetyZone QR allergy card translated into 200+ languages for restaurant staff"
                      className="w-full aspect-[9/19.5] object-cover"
                      width="260"
                      height="563"
                    />
                  </div>
                </motion.div>

                {/* Front phone - Home */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="absolute left-0 top-10 sm:top-14 w-[210px] sm:w-[250px] md:w-[270px] z-10"
                >
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60">
                    <img
                      src={screenHome}
                      alt="SafetyZone food allergy app home dashboard"
                      className="w-full aspect-[9/19.5] object-cover"
                      width="270"
                      height="585"
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
