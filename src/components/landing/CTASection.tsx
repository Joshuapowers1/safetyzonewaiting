import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import { motion } from 'framer-motion';
import { FloatingParticles } from '@/components/ui/floating-particles';

const CTASection = () => {
  return (
    <section className="w-full bg-slate-950 py-24 px-4 relative overflow-hidden" aria-label="Download My SafetyZone">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-6 py-16 md:py-24 overflow-hidden"
        >
          {/* Pulsing glow inside the card */}
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.15, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-400/[0.15] rounded-full blur-[100px] pointer-events-none"
          />
          <FloatingParticles count={10} />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
            >
              Your safety starts with the{' '}
              <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">download.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-slate-400 mb-10"
            >
              Free to download · 7-day free trial · 5-star rated · Free on iOS, coming soon on Android.
            </motion.p>

            {/* Store Badges */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-4 flex-wrap"
              role="group"
              aria-label="Download options"
            >
              <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}>
                <AppStoreBadge />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <GooglePlayBadge />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
