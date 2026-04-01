import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle, Apple, Smartphone } from 'lucide-react';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { TextEffect } from '@/components/ui/text-effect';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const benefits = [
  'Free to download',
  'AI-powered allergen detection',
  'Works in 200+ languages',
];

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,25%,5%)] via-[hsl(215,30%,8%)] to-[hsl(200,25%,5%)]">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 border border-white/10 shadow-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            >
              <Heart className="w-10 h-10 text-white fill-white" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Every meal is a{' '}
              <GradientText className="italic font-bold">life-or-death</GradientText>
              {' '}question.
            </h2>

            <TextEffect
              per="word"
              preset="fade"
              delay={0.3}
              className="text-lg text-white/60 mb-8 max-w-2xl mx-auto"
            >
              Be ready. Download SafetyZone now and protect your family every time you eat.
            </TextEffect>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
                <ButtonColorful label="Download on iOS" className="h-14 px-10 text-base" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-10">
              <Smartphone className="w-4 h-4" />
              <span>Google Play coming soon</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Shield className="w-5 h-5 text-primary" />
                <span>HIPAA-Level Privacy</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Heart className="w-5 h-5 text-primary" />
                <span>Medical-Grade AI</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-white/40 text-center mt-8 max-w-lg mx-auto">
            AI recommendations are informational only. Always verify with restaurant staff and healthcare providers.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
