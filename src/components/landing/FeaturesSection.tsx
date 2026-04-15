import { motion } from 'framer-motion';
import { useState } from 'react';
import { ScanLine, Barcode, Pill, AlertTriangle, MessageCircle } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';
import IPhoneFrame from '@/components/ui/iphone-frame';

const showcaseFeatures = [
  {
    id: 'nutriscan',
    screenshot: '/screenshots/nutriscan.png',
    title: 'NutriScan AI',
    description: 'Snap a photo of any meal to instantly estimate calories, macros, and detect allergens with AI-powered analysis. Set daily goals and track everything in real time.',
  },
  {
    id: 'recipe',
    screenshot: '/screenshots/recipe.png',
    title: 'Recipe AI',
    description: 'Transform any recipe to be safe for your dietary needs. AI-powered ingredient substitution with full nutritional analysis from 2M+ verified recipes.',
  },
  {
    id: 'allergen-card',
    screenshot: '/screenshots/allergen-card.png',
    title: 'Digital QR Allergen Card',
    description: 'Your allergies translated into 200+ languages on a scannable digital card. Show it at any restaurant, kitchen, or food counter anywhere in the world.',
  },
  {
    id: 'travel',
    screenshot: '/screenshots/travel.png',
    title: 'Travel Mode',
    description: 'AI generates a complete allergy travel guide with local phrases, safe restaurants, packing lists, and emergency info for your destination.',
  },
];

const moreFeatures = [
  {
    icon: Pill,
    title: 'Medication & Device Tracker',
    description: 'Get reminders before your EpiPen, inhaler, or any medical device expires.',
  },
  {
    icon: AlertTriangle,
    title: 'FDA Recall Alerts',
    description: 'Real-time safety alerts personalized to your specific allergens.',
  },
  {
    icon: MessageCircle,
    title: 'In-App Chat Support',
    description: 'Get instant answers from our AI assistant anytime you need help.',
  },
];

const comingSoon = [
  { icon: ScanLine, title: 'Menu Scanner', description: 'Scan restaurant menus for personalized allergen safety ratings.' },
  { icon: Barcode, title: 'Barcode Scanner', description: 'Instant allergen detection on packaged food via barcode scan.' },
];

const FeaturesSection = () => {
  const [activeId, setActiveId] = useState(showcaseFeatures[0].id);

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-white" aria-label="SafetyZone features">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to eat safely
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Packed with the features that matter most.
          </p>
        </FadeInSection>

        {/* Cal AI-style: phone left, stacked cards right */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
            {/* Left: Phone mockup with iPhone frame */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start shrink-0 lg:sticky lg:top-32">
              <div className="relative w-[250px] sm:w-[290px]">
                {showcaseFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="absolute inset-0 transition-opacity duration-200"
                    style={{
                      opacity: feature.id === activeId ? 1 : 0,
                      pointerEvents: feature.id === activeId ? 'auto' : 'none',
                    }}
                  >
                    <IPhoneFrame>
                      <img
                        src={feature.screenshot}
                        alt={`${feature.title} screenshot`}
                        className="w-full aspect-[9/19] object-contain bg-white"
                        width="290"
                        height="612"
                      />
                    </IPhoneFrame>
                  </div>
                ))}
                {/* Spacer */}
                <div className="invisible">
                  <IPhoneFrame>
                    <div className="w-full aspect-[9/19]" />
                  </IPhoneFrame>
                </div>
              </div>
            </div>

            {/* Right: Feature cards */}
            <div className="flex-1 space-y-4 w-full">
              {showcaseFeatures.map((feature) => {
                const isActive = feature.id === activeId;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveId(feature.id)}
                    className={`w-full text-left rounded-2xl border transition-all duration-200 px-6 py-6 ${
                      isActive
                        ? 'bg-teal-50 border-teal-300 shadow-md ring-1 ring-teal-200'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-150 ${
                      isActive ? 'text-teal-900' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed transition-colors duration-150 ${
                      isActive ? 'text-teal-700/80' : 'text-gray-500'
                    }`}>
                      {feature.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional features */}
        <div className="max-w-6xl mx-auto mt-20 md:mt-28">
          <FadeInSection className="text-center mb-10">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Also Included
            </h3>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-gray-200 bg-gray-50/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-6xl mx-auto mt-20 md:mt-28">
          <FadeInSection className="text-center mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Coming Soon
            </h3>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
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
                  <div className="w-6 h-6 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-gray-700">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
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
