import { motion } from 'framer-motion';
import { 
  ScanLine, Barcode, Camera, ChefHat, Users, QrCode,
  Shield, Globe, Zap, AlertTriangle,
  Pill, MapPin, Sparkles, Heart, Wind, Stethoscope
} from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';

const liveFeatures = [
  {
    icon: QrCode,
    title: 'Allergen QR Cards',
    description: 'Shareable QR allergy cards auto-translated into 200+ languages for restaurants and travel.',
  },
  {
    icon: MapPin,
    title: 'Travel Allergen',
    description: 'Destination-specific safety tips, local allergen databases, and translated cards for safe travel.',
  },
  {
    icon: ChefHat,
    title: 'Recipe AI',
    description: 'Transform any recipe with safe, taste-matched allergen-free substitutions powered by AI.',
  },
  {
    icon: Camera,
    title: 'NutriScan AI',
    description: 'AI calorie and macro tracking from any food photo. No manual logging required.',
  },
  {
    icon: Pill,
    title: 'EpiPen Tracker',
    description: 'Track your EpiPen expiration dates with automatic reminders before they expire.',
  },
  {
    icon: Wind,
    title: 'Inhaler Tracker',
    description: 'Monitor your inhaler expiration and usage. Never be caught without a working inhaler.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Device Tracker',
    description: 'Track expiration dates for all your medical devices and medications in one place.',
  },
  {
    icon: AlertTriangle,
    title: 'FDA Recall Alerts',
    description: 'Real-time FDA food recall notifications so you are always aware of unsafe products.',
  },
];

const comingSoon = [
  {
    icon: ScanLine,
    title: 'Menu Scanner',
    description: 'Personalized safety ratings from any restaurant menu photo.',
  },
  {
    icon: Barcode,
    title: 'Barcode Scanner',
    description: 'Instant allergen detection on packaged products.',
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Individual profiles for every household member.',
  },
];

const whyChoose = [
  {
    icon: Shield,
    title: 'HIPAA-Level Privacy',
    description: 'Your dietary and medical data is protected with medical-grade encryption and security protocols.',
  },
  {
    icon: Zap,
    title: '99.5% Accuracy',
    description: 'Triple-verified AI cross-references FDA allergen databases, USDA data, and published medical research.',
  },
  {
    icon: Globe,
    title: '200+ Languages',
    description: 'Travel anywhere and communicate your allergies clearly with auto-translated allergy cards.',
  },
  {
    icon: Heart,
    title: 'Built by Allergy Sufferers',
    description: 'Founded by someone with anaphylactic food allergies. We understand because we live it.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Why choose SafetyZone */}
        <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-white/60 mb-6">
            <Sparkles className="w-3 h-3" />
            Why choose SafetyZone?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The most advanced{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              food allergy app
            </span>
          </h2>
          <p className="text-base text-white/40">
            Built to protect you and your family from hidden allergens, every meal, everywhere.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-4 mb-24 max-w-4xl mx-auto">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Live features */}
        <FadeInSection className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Available now on iOS
          </h3>
          <p className="text-sm text-white/30 mt-2">8 powerful features, all live and ready to keep you safe</p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-16">
          {liveFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  LIVE
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-white/35 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <FadeInSection className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white/50">Coming Soon</h3>
        </FadeInSection>

        <div className="grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {comingSoon.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 bg-white/[0.015] border border-white/[0.04] rounded-xl p-4 opacity-60"
            >
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                <feature.icon className="w-3.5 h-3.5 text-white/30" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm font-semibold text-white/60">{feature.title}</h4>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-white/[0.04] text-white/30 border border-white/[0.06]">
                    SOON
                  </span>
                </div>
                <p className="text-xs text-white/25 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
