import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
const nutriscan = '/screenshots/nutriscan.png';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="w-full bg-teal-500 py-20 px-4" aria-label="Download SafetyZone">
      <div className="max-w-5xl mx-auto">
        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Your safety starts with one download.
          </h2>

          <p className="text-lg md:text-xl text-white mb-8">
            Free on iOS and Android. No credit card required.
          </p>

          {/* Store Badges */}
          <div className="flex items-center justify-center gap-4 mb-12" role="group" aria-label="Download options">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="w-[220px] sm:w-[280px]">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-black bg-black">
              <img
                src={nutriscan}
                alt="SafetyZone app screenshot"
                className="w-full aspect-[9/19.5] object-cover"
                loading="lazy"
                width="280"
                height="600"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
