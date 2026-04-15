import { motion } from 'framer-motion';
import {
  Camera, ChefHat, Plane, QrCode, Pill, AlertTriangle,
  MessageCircle, ScanLine, Barcode, Users,
} from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';

const features = [
  {
    id: 'nutriscan',
    icon: Camera,
    title: 'NutriScan AI',
    description: 'Snap a photo. Get instant calories, macros, and allergen detection.',
    featured: true,
  },
  {
    id: 'recipe',
    icon: ChefHat,
    title: 'Recipe AI',
    description: 'Transform any recipe to be safe for your dietary needs.',
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'Travel Mode',
    description: 'AI travel guides with local phrases and safe restaurants.',
  },
  {
    id: 'allergen-card',
    icon: QrCode,
    title: 'Digital Allergen Card',
    description: 'Your allergies in 200+ languages. Show it anywhere.',
  },
  {
    id: 'medication',
    icon: Pill,
    title: 'Medication Tracker',
    description: 'Never lose track of your EpiPen expiry dates.',
  },
  {
    id: 'recall-alerts',
    icon: AlertTriangle,
    title: 'FDA Recall Alerts',
    description: 'Real-time safety alerts for food recalls.',
  },
  {
    id: 'chat',
    icon: MessageCircle,
    title: 'In-App Chat',
    description: 'Get answers from our AI assistant anytime.',
  },
];

const comingSoon = [
  { icon: ScanLine, title: 'Menu Scanner', description: 'Scan restaurant menus for personalized allergen safety ratings.' },
  { icon: Barcode, title: 'Barcode Scanner', description: 'Instant allergen detection on packaged food via barcode scan.' },
  { icon: Users, title: 'Family Profiles', description: 'Individual allergy profiles for every family member.' },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;

  if (feature.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-3 col-span-full"
      >
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-10 hover:shadow-lg dark:hover:shadow-black/20 transition-shadow duration-300 group">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-black/20 transition-shadow duration-300 group h-full flex flex-col">
        <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const regularFeatures = features.filter(f => !f.featured);

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-gray-950" aria-label="SafetyZone features">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to eat safely
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            One app. Seven powerful features. Zero compromises.
          </p>
        </FadeInSection>

        {/* Featured card (NutriScan) + regular cards grid */}
        <div className="max-w-6xl mx-auto mb-20 md:mb-28">
          {/* Featured card */}
          <div className="mb-6">
            <FeatureCard feature={features[0]} index={0} />
          </div>

          {/* Regular 2-col (mobile) / 3-col (desktop) grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {regularFeatures.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Coming Soon
            </h3>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {comingSoon.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 opacity-60"
                >
                  <div className="w-6 h-6 rounded-lg bg-gray-200 dark:bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gray-400 dark:text-white/40" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
