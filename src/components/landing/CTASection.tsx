import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle, Apple, Smartphone, ArrowRight } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { Button } from '@/components/ui/button';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const benefits = [
  'Free to download',
  'AI-powered allergen detection',
  'Works in 200+ languages',
];

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="max-w-3xl mx-auto">
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-white/[0.06] text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <Heart className="w-8 h-8 text-white fill-white" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Every meal is a{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                life-or-death
              </span>
              {' '}question.
            </h2>

            <p className="text-lg text-white/40 mb-8 max-w-xl mx-auto">
              Be ready. Download SafetyZone now and protect your family every time you eat.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-1.5 text-sm text-white/50">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Button asChild variant="glow" size="lg" className="h-14 px-10 text-base rounded-xl">
                <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
                  <Apple className="w-5 h-5" />
                  Download for iOS
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-white/30 mb-10">
              <Smartphone className="w-4 h-4" />
              <span>Google Play coming soon</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs text-white/40">
                <Shield className="w-4 h-4 text-primary/60" />
                <span>HIPAA-Level Privacy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <Heart className="w-4 h-4 text-primary/60" />
                <span>Medical-Grade AI</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-white/25 text-center mt-6 max-w-lg mx-auto">
            AI recommendations are informational only. Always verify with restaurant staff and healthcare providers.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
