import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { TextEffect } from '@/components/ui/text-effect';
import { ButtonColorful } from '@/components/ui/button-colorful';

const benefits = [
  'Free to join',
  'Be first to access the beta',
  'Shape the product with your feedback',
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
              Be the first to eat with{' '}
              <span className="text-primary italic">confidence</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              SafetyZone is launching soon. Join the waitlist to get early access and help shape the future of AI-powered food safety.
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

            {/* Waitlist CTA */}
            <div className="flex justify-center mb-10">
              <a href="#waitlist">
                <ButtonColorful label="Join the Waitlist" className="h-14 px-10 text-base" />
              </a>
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
