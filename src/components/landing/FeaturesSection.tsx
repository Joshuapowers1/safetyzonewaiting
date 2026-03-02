import { motion } from 'framer-motion';
import { 
  ScanLine, Barcode, Camera, ChefHat, Users, QrCode,
  Shield, Globe, Zap, ArrowRight
} from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimatedBorderCard } from '@/components/ui/animated-border-card';
import { DrawIcon } from '@/components/ui/draw-icon';

const features = [
  {
    icon: ScanLine,
    title: 'Menu Scanner',
    description: 'Scan any menu via photo, QR code, or URL and receive personalized safety ratings in under 3 seconds.',
    stat: '< 3s',
    statLabel: 'Scan Speed',
  },
  {
    icon: Barcode,
    title: 'Barcode Scanner',
    description: 'Instantly identify product ingredients and hidden allergens across millions of products.',
    stat: '10K+',
    statLabel: 'Products',
  },
  {
    icon: Camera,
    title: 'CalorieSnap',
    description: 'AI-powered calorie and macro analysis from food photos for health-conscious nutrition tracking.',
    stat: '99.5%',
    statLabel: 'Accuracy',
  },
  {
    icon: ChefHat,
    title: 'Recipe AI',
    description: 'Transform any recipe to match your dietary restrictions with safe ingredient substitutions.',
    stat: '1000+',
    statLabel: 'Recipes',
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Create multi-person family profiles with different restrictions for everyone in your household.',
    stat: '5+',
    statLabel: 'Profiles',
  },
  {
    icon: QrCode,
    title: 'QR Dietary Profile',
    description: 'Generate shareable QR codes that restaurant staff can scan to understand your needs.',
    stat: '200+',
    statLabel: 'Languages',
  },
];

const trustFeatures = [
  { icon: Shield, title: 'HIPAA-Level Privacy', description: 'Medical-grade security for your dietary data.' },
  { icon: Zap, title: '99.5% Accuracy', description: 'Triple-verified AI with zero-tolerance for missed allergens.' },
  { icon: Globe, title: '200+ Languages', description: 'Global accessibility for travelers and diverse communities.' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedBadge className="mb-4">Powerful Features</AnimatedBadge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Everything you need to eat{' '}
            <GradientText className="italic font-bold">safely</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our triple-verified AI Scanner analyzes menus, product labels, and food photos, cross-referencing FDA allergen databases, USDA nutrition data, and published medical research.
          </p>
        </FadeInSection>

        {/* Main Features Grid with 3D Tilt Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FadeInSection key={feature.title} delay={index * 0.1}>
              <TiltCard className="h-full rounded-2xl">
                <div className="group relative bg-card border border-border rounded-2xl p-6 h-full overflow-hidden hover:border-primary/30 transition-colors duration-300">
                  {/* Icon with draw animation */}
                  <DrawIcon delay={index * 0.1}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                  </DrawIcon>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

                  {/* Stat counter */}
                  <div className="flex items-baseline gap-2 mt-auto">
                    <span className="text-2xl font-bold text-primary">{feature.stat}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{feature.statLabel}</span>
                  </div>

                  {/* Hover arrow */}
                  <div className="flex items-center gap-2 mt-4 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </TiltCard>
            </FadeInSection>
          ))}
        </div>

        {/* Trust Features */}
        <FadeInSection>
          <AnimatedBorderCard>
            <div className="grid md:grid-cols-3 gap-10 p-4 md:p-8">
              {trustFeatures.map((feature, index) => (
                <FadeInSection key={feature.title} delay={index * 0.1} className="text-center">
                  <DrawIcon delay={index * 0.15}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </DrawIcon>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </FadeInSection>
              ))}
            </div>
          </AnimatedBorderCard>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
