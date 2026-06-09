import { motion } from 'framer-motion';
import { NumberTicker } from '@/components/ui/number-ticker';

const StatsSection = () => {
  return (
    <section className="relative py-[120px] px-4 bg-[#05080f] overflow-hidden sz-noise" aria-label="Key statistics">
      {/* Teal gradient fade dividers */}
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C2A8]/40 to-transparent" />
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C2A8]/40 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-[#00C2A8]/[0.04] blur-[110px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-display font-semibold text-white leading-none text-6xl md:text-8xl lg:text-[96px] tracking-tight">
              <NumberTicker value={200} suffix="+" duration={1.8} />
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-[rgba(255,255,255,0.35)]">Languages</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-display font-semibold text-white leading-none text-6xl md:text-8xl lg:text-[96px] tracking-tight">
              <NumberTicker value={50} suffix="+" duration={1.8} />
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-[rgba(255,255,255,0.35)]">Allergens Detected</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-display font-semibold leading-none text-6xl md:text-8xl lg:text-[96px] tracking-tight text-[#00C2A8]">
              <NumberTicker value={7} suffix="" duration={1.8} />
              <span className="text-4xl md:text-5xl align-top">-Day</span>
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-[rgba(255,255,255,0.35)]">Free Trial</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-display font-semibold text-white leading-none text-6xl md:text-8xl lg:text-[96px] tracking-tight">
              <NumberTicker value={5} decimals={1} suffix="★" duration={2} />
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-[rgba(255,255,255,0.35)]">Rating</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
