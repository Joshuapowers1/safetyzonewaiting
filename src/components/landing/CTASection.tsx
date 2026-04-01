import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle, Smartphone, Star } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="max-w-2xl mx-auto text-center">
          {/* Star rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-white/40">Rated 4.9/5 on the App Store</p>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Download SafetyZone.{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Eat fearlessly.
            </span>
          </h2>

          <p className="text-base text-white/40 mb-10 max-w-lg mx-auto">
            Join thousands of families who eat with confidence. Free on iOS.
          </p>

          {/* Real store badges */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <AppStoreBadge />
            <GooglePlayBadge comingSoon />
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/[0.05]">
            <div className="flex items-center gap-1.5 text-xs text-white/30">
              <Shield className="w-3.5 h-3.5 text-primary/50" />
              HIPAA-Level Privacy
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/30">
              <CheckCircle className="w-3.5 h-3.5 text-primary/50" />
              Free to Download
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/30">
              <Heart className="w-3.5 h-3.5 text-primary/50" />
              Medical-Grade AI
            </div>
          </div>
        </FadeInSection>

        <p className="text-[10px] text-white/15 text-center mt-8 max-w-md mx-auto">
          AI recommendations are informational only. Always verify with restaurant staff and healthcare providers.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
