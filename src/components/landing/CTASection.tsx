import { motion } from 'framer-motion';
import { Apple, Play, Shield, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Free to download',
  'No credit card required',
  'Cancel anytime',
];

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 border border-border shadow-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            >
              <Heart className="w-10 h-10 text-white fill-white" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Start eating with{' '}
              <span className="text-primary italic">confidence</span> today
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the growing community of people taking control of their dietary safety with AI-powered food scanning.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button size="lg" className="gap-3 bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Button>
              <Button size="lg" variant="outline" className="gap-3 h-14 px-8 rounded-xl border-2 hover:bg-muted/50 transition-all">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>HIPAA-Level Privacy</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span>Medical-Grade AI</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-8 max-w-lg mx-auto">
            AI recommendations are informational only. Always verify with restaurant staff and healthcare providers. SafetyZone is not a substitute for professional medical advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
