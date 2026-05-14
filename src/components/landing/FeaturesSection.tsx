import { motion } from 'framer-motion';
import { useState } from 'react';
import { Pill, AlertTriangle, MessageCircle } from 'lucide-react';
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

        {/* Also included — editorial list */}
        <div className="max-w-4xl mx-auto mt-24 md:mt-32">
          <FadeInSection className="mb-10 md:mb-14">
            <div className="flex items-baseline justify-between gap-6 border-b border-gray-200 pb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Also included
              </h3>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
                In every download
              </span>
            </div>
          </FadeInSection>

          <ul className="divide-y divide-gray-200">
            {moreFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_2fr] gap-x-6 md:gap-x-10 gap-y-2 py-7 md:py-8 items-baseline"
                >
                  <span className="text-xs font-mono text-gray-400 tabular-nums pt-1">
                    0{i + 1}
                  </span>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <Icon className="w-4 h-4 text-teal-500 shrink-0" strokeWidth={2.25} />
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed col-start-2 md:col-start-3 max-w-md">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Coming soon — inline roadmap chips */}
        <div className="max-w-4xl mx-auto mt-20 md:mt-24">
          <FadeInSection>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 px-6 md:px-10 py-8 md:py-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-xs font-medium text-teal-600 uppercase tracking-[0.2em] mb-2">
                    On the roadmap
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    What's coming next
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {comingSoon.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-full pl-3 pr-4 py-2"
                        title={item.description}
                      >
                        <Icon className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{item.title}</span>
                        <ArrowUpRight className="w-3 h-3 text-gray-300" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
