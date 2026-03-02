import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle } from 'lucide-react';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { Marquee } from '@/components/ui/marquee';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextEffect } from '@/components/ui/text-effect';

const benefits = [
  'Free to join',
  'Be first to access the beta',
  'Shape the product with your feedback',
];

const testimonials = [
  '🥜 "Finally, an app that gets food allergies right!"',
  '🌿 "Perfect for my vegan family."',
  '🍞 "As a celiac, this is life-changing."',
  '🧀 "No more guessing at restaurants!"',
  '💪 "Love the calorie tracking feature."',
  '🌍 "Works in any language — amazing for travel."',
];

const CTASection = () => {
  return (
    <AuroraBackground className="py-28">
      <div className="container mx-auto px-4 relative z-10">
        {/* Marquee testimonials */}
        <div className="mb-16 overflow-hidden">
          <Marquee pauseOnHover speed={35} className="mb-4">
            {testimonials.map((t) => (
              <div key={t} className="mx-4 px-6 py-3 rounded-full bg-card/80 backdrop-blur border border-border text-sm text-muted-foreground whitespace-nowrap">
                {t}
              </div>
            ))}
          </Marquee>
        </div>

        <FadeInSection className="max-w-4xl mx-auto">
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

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Every meal is a{' '}
              <GradientText className="italic font-bold">life-or-death</GradientText>
              {' '}question.
            </h2>

            <TextEffect
              per="word"
              preset="fade"
              delay={0.3}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Be ready. Join 2,000+ families already on the SafetyZone waitlist.
            </TextEffect>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-10">
              <a href="#waitlist">
                <ButtonColorful label="Protect Your Family" className="h-14 px-10 text-base" />
              </a>
            </div>

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

          <p className="text-xs text-muted-foreground text-center mt-8 max-w-lg mx-auto">
            AI recommendations are informational only. Always verify with restaurant staff and healthcare providers.
          </p>
        </FadeInSection>
      </div>
    </AuroraBackground>
  );
};

export default CTASection;
