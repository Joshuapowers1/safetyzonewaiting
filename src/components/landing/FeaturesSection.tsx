import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ScanLine, Barcode, Camera, ChefHat, Users, QrCode,
  Shield, Globe, Zap, ChevronDown,
  Pill, MapPin, Check, Clock, Sparkles
} from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';

const features = [
  {
    icon: QrCode,
    title: 'QR Allergy Cards',
    description: 'Your digital allergy card — scannable, auto-translated into 200+ languages, always current.',
    stat: '200+',
    statLabel: 'Languages',
    status: 'live' as const,
    details: 'Generate a personal QR code with your complete allergy profile. Show it to restaurant staff anywhere in the world — they scan it and see exactly what you need to avoid, in their language.',
  },
  {
    icon: MapPin,
    title: 'Travel Allergen',
    description: 'Destination-specific safety tips, local allergen databases, and translated cards for international travel.',
    stat: '100+',
    statLabel: 'Countries',
    status: 'live' as const,
    details: 'Select your destination and instantly receive region-specific allergen warnings, common ingredients to watch for, and pre-translated allergy cards tailored to local cuisine.',
  },
  {
    icon: Camera,
    title: 'NutriScan AI',
    description: 'AI-powered calorie and macro analysis from any food photo. No manual logging required.',
    stat: '99.5%',
    statLabel: 'Accuracy',
    status: 'live' as const,
    details: 'Take a photo of any meal and NutriScan uses AI image recognition to estimate calories, macros, and key micronutrients in seconds — no manual entry.',
  },
  {
    icon: ChefHat,
    title: 'Recipe AI',
    description: 'Transform any recipe with safe, taste-matched substitutions. Infinite possibilities.',
    stat: '∞',
    statLabel: 'Recipes',
    status: 'live' as const,
    details: 'Paste any recipe or URL and Recipe AI identifies every allergen risk and generates safe, taste-matched substitutions — accounting for cooking chemistry, not just ingredients.',
  },
  {
    icon: Pill,
    title: 'EpiPen & Med Tracker',
    description: 'Track expiration dates, set auto reminders, never be caught without life-saving meds.',
    stat: 'Auto',
    statLabel: 'Reminders',
    status: 'live' as const,
    details: 'Add your EpiPens and allergy medications with expiration dates. SafetyZone sends automatic reminders before they expire so you can replace them in time.',
  },
  {
    icon: ScanLine,
    title: 'Menu Scanner',
    description: 'Snap a photo of any menu and get personalized safety ratings in under 3 seconds.',
    stat: '< 3s',
    statLabel: 'Scan Speed',
    status: 'coming_soon' as const,
    details: 'Photograph any restaurant menu and SafetyZone cross-references every dish against your allergy profile with color-coded safety ratings.',
  },
  {
    icon: Barcode,
    title: 'Barcode Scanner',
    description: 'Instantly identify hidden allergens and cross-contamination risks in packaged products.',
    stat: '10K+',
    statLabel: 'Products',
    status: 'coming_soon' as const,
    details: 'Point your camera at any barcode for a full allergen breakdown including hidden allergens and advisory warnings.',
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Individual profiles for every household member. Switch instantly when scanning.',
    stat: '5+',
    statLabel: 'Profiles',
    status: 'coming_soon' as const,
    details: 'Create separate allergy profiles for every family member, each with their own restrictions and severity levels.',
  },
];

const trustFeatures = [
  { icon: Shield, title: 'HIPAA-Level Privacy', description: 'Medical-grade data security.' },
  { icon: Zap, title: '99.5% Accuracy', description: 'Triple-verified AI engine.' },
  { icon: Globe, title: '200+ Languages', description: 'Global accessibility.' },
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLive = feature.status === 'live';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 cursor-pointer"
    >
      {/* Status */}
      <div className="absolute top-4 right-4">
        {isLive ? (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Check className="w-2.5 h-2.5" />
            Live
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.04] text-white/30 border border-white/[0.06]">
            <Clock className="w-2.5 h-2.5" />
            Soon
          </span>
        )}
      </div>

      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <feature.icon className="w-5 h-5 text-primary" />
      </div>

      <h3 className="text-base font-semibold text-white mb-1.5">{feature.title}</h3>
      <p className="text-sm text-white/40 leading-relaxed mb-4">{feature.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold text-primary">{feature.stat}</span>
          <span className="text-[10px] text-white/30 uppercase tracking-wider">{feature.statLabel}</span>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <p className="text-sm text-white/40 leading-relaxed">{feature.details}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const liveFeatures = features.filter(f => f.status === 'live');
  const comingSoonFeatures = features.filter(f => f.status === 'coming_soon');

  return (
    <section id="features" className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-white/60 mb-6">
            <Sparkles className="w-3 h-3" />
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Everything you need to eat{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">safely</span>
          </h2>
          <p className="text-lg text-white/40">
            AI-powered scanning, cross-referencing FDA allergen databases, USDA nutrition data, and published medical research.
          </p>
        </FadeInSection>

        {/* Live features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {liveFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Coming Soon */}
        {comingSoonFeatures.length > 0 && (
          <>
            <FadeInSection className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white/60">Coming Soon</h3>
            </FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {comingSoonFeatures.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index + liveFeatures.length} />
              ))}
            </div>
          </>
        )}

        {/* Trust strip */}
        <FadeInSection>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-xs text-white/40">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
