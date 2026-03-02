import { motion } from 'framer-motion';
import { NumberTicker } from '@/components/ui/number-ticker';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';

const stats = [
  { value: 33, suffix: 'M+', label: 'Americans with food allergies' },
  { value: 3, suffix: 'M+', label: 'Living with celiac disease' },
  { value: 450, suffix: 'K+', label: 'With EoE & alpha-gal syndrome' },
  { value: 20, suffix: 'M+', label: 'Following plant-based diets' },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Built for the community that needs it most
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeInSection key={stat.label} delay={index * 0.1} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-3">
                <NumberTicker value={stat.value} suffix={stat.suffix} className="text-primary-foreground" />
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80 font-medium">
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
