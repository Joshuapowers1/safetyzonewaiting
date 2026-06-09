import { motion } from 'framer-motion';
import { NumberTicker } from '@/components/ui/number-ticker';

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-slate-950 relative overflow-hidden" aria-label="Key statistics">
      <div className="max-w-4xl mx-auto relative">
        <div aria-hidden="true" className="absolute inset-x-10 top-1/2 -translate-y-1/2 h-40 bg-teal-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.7)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            <div className="w-full md:flex-1 py-6 md:py-0 md:px-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-teal-300">
                <NumberTicker value={200} suffix="+" duration={1.6} />
              </div>
              <div className="text-sm text-slate-400 font-medium">Languages</div>
            </div>
            <div className="w-full md:flex-1 py-6 md:py-0 md:px-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-teal-300">
                <NumberTicker value={50} suffix="+" duration={1.6} />
              </div>
              <div className="text-sm text-slate-400 font-medium">Allergens Detected</div>
            </div>
            <div className="w-full md:flex-1 py-6 md:py-0 md:px-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-teal-300">
                <NumberTicker value={7} suffix="-Day" duration={1.6} />
              </div>
              <div className="text-sm text-slate-400 font-medium">Free Trial</div>
            </div>
            <div className="w-full md:flex-1 py-6 md:py-0 md:px-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-teal-300">
                <NumberTicker value={5} decimals={1} suffix="★" duration={1.8} />
              </div>
              <div className="text-sm text-slate-400 font-medium">Only 5-Star Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
