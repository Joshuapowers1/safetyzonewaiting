import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { AlertTriangle, Globe, Zap, Users } from 'lucide-react';

const stats = [
  { value: 33, suffix: 'M+', label: 'Americans with food allergies', icon: Users },
  { value: 200, suffix: 'K+', label: 'ER visits from allergic reactions yearly', icon: AlertTriangle },
  { value: 200, suffix: '+', label: 'Languages for allergy translation', icon: Globe },
  { value: 50, suffix: 'ms', label: 'AI allergen detection speed', prefix: '< ', icon: Zap },
];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(220,25%,4%)]" aria-label="Food allergy statistics and SafetyZone allergen detection performance">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Food allergies affect millions — SafetyZone protects them
          </h2>
          <p className="text-sm text-white/30 mt-3 max-w-xl mx-auto">
            Over 200 million people worldwide live with food allergies, celiac disease, and food intolerances. SafetyZone is the app built to keep them safe.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <FadeInSection key={stat.label} delay={index * 0.1} className="text-center">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    className="text-white"
                    duration={2.5}
                  />
                </div>

                <div className="text-xs text-white/40 font-medium max-w-[140px]">
                  {stat.label}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
};

export default StatsSection;
