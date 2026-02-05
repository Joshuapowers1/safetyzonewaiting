import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import appScreenshot1 from '@/assets/app-screenshot-qr.png';
import appScreenshot2 from '@/assets/app-screenshot-recipe.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-accent/20 via-background to-primary/10">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px] opacity-60" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.2] tracking-tight">
                The only app that{' '}
                <span className="block font-semibold text-primary">
                  keeps your food safe
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                Eat with confidence, not caution.
              </p>
            </div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              id="download"
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://apps.apple.com/us/app/safetyzone-allergy-scanner/id6746200992"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground hover:bg-foreground/90 text-background h-14 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safetyzone.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground hover:bg-foreground/90 text-background h-14 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Play className="w-7 h-7 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">GET IT ON</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[600px] h-[500px] md:h-[600px]">
              {/* Back phone - Recipe AI */}
              <motion.img
                src={appScreenshot2}
                alt="SafetyZone Recipe AI Feature"
                className="absolute top-0 right-0 w-[240px] md:w-[280px] drop-shadow-2xl z-10"
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              {/* Front phone - QR Profile */}
              <motion.img
                src={appScreenshot1}
                alt="SafetyZone Personal QR Profile"
                className="absolute bottom-0 left-0 md:left-8 w-[260px] md:w-[300px] drop-shadow-2xl z-20"
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
