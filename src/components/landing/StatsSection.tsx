import { AnimatedCounter } from '@/components/ui/animated-counter';
import { FadeInSection } from '@/components/ui/fade-in-section';

const stats = [
  { value: 33, suffix: 'M+', label: 'Americans with food allergies' },
  { value: 200, suffix: 'K+', label: 'ER visits from allergic reactions yearly' },
  { value: 200, suffix: '+', label: 'Languages for allergy translation' },
  { value: 50, suffix: 'ms', label: 'AI allergen detection speed', prefix: '< ' },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[hsl(220,25%,4%)]" aria-label="Food allergy statistics">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <FadeInSection key={stat.label} delay={index * 0.1} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  className="text-white"
                  duration={2.5}
                />
              </div>
              <div className="text-xs text-white/35 font-medium">
                {stat.label}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
