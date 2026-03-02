import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { ProgressRing } from '@/components/ui/progress-ring';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { DrawIcon } from '@/components/ui/draw-icon';
import { AlertTriangle, Globe, Zap, Users } from 'lucide-react';

const stats = [
  { value: 33, suffix: 'M+', label: 'Americans with food allergies', max: 50, icon: Users },
  { value: 200, suffix: 'K+', label: 'ER visits from allergic reactions yearly', max: 250, icon: AlertTriangle },
  { value: 200, suffix: '+', label: 'Languages supported', max: 250, icon: Globe },
  { value: 50, suffix: 'ms', label: 'Allergen detection speed', max: 100, prefix: '< ', icon: Zap },
];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[hsl(220,20%,8%)] via-[hsl(220,18%,10%)] to-[hsl(220,20%,8%)]">
      {/* Animated gradient wave */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent 40%, hsl(var(--accent) / 0.1) 60%, transparent)',
          backgroundSize: '200% 200%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built for the community that needs it most
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeInSection key={stat.label} delay={index * 0.15} className="text-center group">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col items-center"
              >
                {/* Icon with draw animation */}
                <DrawIcon delay={index * 0.15} className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </DrawIcon>

                {/* Progress ring + counter */}
                <ProgressRing value={stat.value} max={stat.max} size={100} strokeWidth={3}>
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      className="text-white"
                      duration={2.5}
                    />
                  </div>
                </ProgressRing>

                <div className="text-sm text-white/60 font-medium mt-4 max-w-[160px]">
                  {stat.label}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
