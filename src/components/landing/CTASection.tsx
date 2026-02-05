import { motion } from 'framer-motion';
import { Apple, Play, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Start eating with <span className="text-primary italic">confidence</span> today
          </h2>

          <p className="text-lg text-muted-foreground">
            Download SafetyZone and join the community of people taking control of their dietary safety.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
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

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>HIPAA-Level Privacy</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Medical-Grade AI</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground max-w-lg mx-auto pt-8">
            AI recommendations are informational only. Always verify with restaurant staff and healthcare providers. SafetyZone is not a substitute for professional medical advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
