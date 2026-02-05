import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import appScreenshot from '@/assets/app-screenshot-qr.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">Now Available on iOS & Android</span>
              </motion.div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Eat with <span className="text-primary italic">confidence</span>,<br />
                not caution.
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                SafetyZone is an AI-powered food safety platform for the 200+ million people managing dietary restrictions worldwide. Scan menus, products, and recipes with 99.5% accuracy.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">99.5%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5M+</div>
                <div className="text-sm text-muted-foreground">Products Scanned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div id="download" className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 bg-black hover:bg-black/90 text-white">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="w-5 h-5 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl opacity-50 rounded-full" />
              
              {/* Phone image */}
              <img
                src={appScreenshot}
                alt="SafetyZone App - Personal QR Profile"
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
