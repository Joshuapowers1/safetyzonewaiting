import { FadeInSection } from '@/components/ui/fade-in-section';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import screenHome from '@/assets/screen-home.png';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[hsl(220,25%,4%)]" aria-label="Download SafetyZone food allergy app">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Download SafetyZone.{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Eat fearlessly.
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/40 mb-10 max-w-lg mx-auto">
            Join thousands of families who eat with confidence. QR allergy cards, medication tracking, FDA alerts, calorie counting, and more — free to download.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12" role="group" aria-label="Download SafetyZone">
            <AppStoreBadge />
            <GooglePlayBadge comingSoon />
          </div>

          {/* App preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-[200px] sm:w-[240px]">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src={screenHome}
                  alt="SafetyZone app home screen"
                  className="w-full aspect-[9/19.5] object-cover"
                  loading="lazy"
                  width="240"
                  height="520"
                />
              </div>
            </div>
          </motion.div>
        </FadeInSection>

        <p className="text-[10px] text-white/15 text-center mt-12 max-w-md mx-auto">
          SafetyZone — recommendations are informational only. Always verify allergens with restaurant staff and consult healthcare providers for medical advice.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
