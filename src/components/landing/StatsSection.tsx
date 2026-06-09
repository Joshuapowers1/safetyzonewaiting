import { motion } from 'framer-motion';

const stats = [
  { value: '200+', label: 'Languages' },
  { value: '50+', label: 'Allergens Detected' },
  { value: '7-Day', label: 'Free Trial' },
  { value: '5.0★', label: 'Only 5-Star Reviews' },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-slate-950 relative overflow-hidden" aria-label="Key statistics">
      <div className="max-w-4xl mx-auto relative">
        <div aria-hidden="true" className="absolute inset-x-10 top-1/2 -translate-y-1/2 h-40 bg-teal-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.7)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="w-full md:flex-1 py-6 md:py-0 md:px-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
