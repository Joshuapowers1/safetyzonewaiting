import { motion } from 'framer-motion';
import { Apple, Play, Shield, Sparkles, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import appScreenshot from '@/assets/app-screenshot-qr.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Food Safety</span>
              </motion.div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Eat with{' '}
                <span className="relative">
                  <span className="text-primary italic">confidence</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </span>
                ,<br />
                not caution.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                The AI platform for <span className="text-foreground font-medium">200+ million people</span> managing dietary restrictions. Scan menus, products, and recipes with{' '}
                <span className="text-primary font-semibold">99.5% accuracy</span>.
              </p>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">99.5% Accurate</div>
                  <div className="text-xs text-muted-foreground">Triple-verified AI</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">200+ Languages</div>
                  <div className="text-xs text-muted-foreground">Global accessibility</div>
                </div>
              </div>
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              id="download"
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button size="lg" className="gap-3 bg-foreground hover:bg-foreground/90 text-background h-14 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Button>
              <Button size="lg" variant="outline" className="gap-3 h-14 px-6 rounded-xl border-2 hover:bg-muted/50 transition-all">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 blur-[80px] opacity-60 rounded-full scale-75" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-80" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Shield className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Phone image */}
              <motion.img
                src={appScreenshot}
                alt="SafetyZone App - Personal QR Profile"
                className="relative z-10 w-full max-w-[340px] mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
