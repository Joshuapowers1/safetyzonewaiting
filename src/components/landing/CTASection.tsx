import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="w-full bg-white py-20 px-4 border-t border-gray-100" aria-label="Download My SafetyZone">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Your safety starts with the{' '}
            <span className="text-teal-500">download.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 mb-8">
            Free to download · 7-day free trial · 5-star rated · Free on iOS, coming soon on Android.
          </p>

          {/* Store Badges */}
          <div className="flex items-center justify-center gap-4" role="group" aria-label="Download options">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
