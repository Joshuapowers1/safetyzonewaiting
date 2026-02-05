import { motion } from 'framer-motion';
import appScreenshot1 from '@/assets/app-screenshot-qr.png';
import appScreenshot2 from '@/assets/app-screenshot-recipe.png';
import appScreenshot3 from '@/assets/app-screenshot-calorie.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Clean gradient background - teal/mint on right side like Spendee */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[hsl(174,60%,85%)] via-[hsl(174,50%,90%)] to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Clean typography like Spendee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] tracking-tight">
              <span className="font-light text-foreground text-2xl md:text-3xl">Safety in every bite.</span>
              <br />
              <span className="font-semibold text-primary">Eat with confidence,</span>
              <br />
              <span className="font-semibold text-primary">not caution.</span>
            </h1>

            <p className="text-muted-foreground text-lg">
              AI-powered food safety for 200+ million people managing dietary restrictions.
            </p>

            {/* App Store Badges - Black style like Spendee */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              id="download"
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="https://apps.apple.com/us/app/safetyzone-allergy-scanner/id6746200992"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-foreground hover:bg-foreground/90 text-background h-12 px-5 rounded-lg transition-all"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] leading-none opacity-80 uppercase tracking-wide">Download on the</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safetyzone.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-foreground hover:bg-foreground/90 text-background h-12 px-5 rounded-lg transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.49l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] leading-none opacity-80 uppercase tracking-wide">Get it on</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3 Phone Mockups in a Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end items-end gap-2 md:gap-4"
          >
            {/* Phone 1 - QR Profile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src={appScreenshot1}
                alt="SafetyZone QR Profile"
                className="w-[140px] md:w-[180px] lg:w-[220px] drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Phone 2 - SnapCalorie (center, slightly elevated) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="-mb-4"
            >
              <img
                src={appScreenshot3}
                alt="SafetyZone SnapCalorie"
                className="w-[160px] md:w-[200px] lg:w-[240px] drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Phone 3 - Recipe AI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <img
                src={appScreenshot2}
                alt="SafetyZone Recipe AI"
                className="w-[140px] md:w-[180px] lg:w-[220px] drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
