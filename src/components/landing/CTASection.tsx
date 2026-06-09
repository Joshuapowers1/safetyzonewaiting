import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="w-full bg-slate-950 py-24 px-4 relative overflow-hidden" aria-label="Download My SafetyZone">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-6 py-16 md:py-20 overflow-hidden"
        >
          {/* Glow inside the card */}
          <div aria-hidden="true" className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-400/[0.15] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              Your safety starts with the{' '}
              <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">download.</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-400 mb-10">
              Free to download · 7-day free trial · 5-star rated · Free on iOS, coming soon on Android.
            </p>

            {/* Store Badges */}
            <div className="flex items-center justify-center gap-4 flex-wrap" role="group" aria-label="Download options">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
