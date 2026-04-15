import { motion } from 'framer-motion';

const stats = [
  { value: '200+', label: 'Languages' },
  { value: 'AI-Powered', label: 'Detection' },
  { value: '7-Day', label: 'Free Trial' },
  { value: '5.0★', label: 'Rating' },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4" aria-label="Key statistics">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-teal-500/10 rounded-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="w-full md:flex-1 py-6 md:py-0 md:px-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
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
