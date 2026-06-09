import { motion } from 'framer-motion';
import { useState } from 'react';
import { Pill, AlertTriangle, MessageCircle, Users } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';
const showcaseFeatures = [
  {
    id: 'nutriscan',
    screenshot: '/screenshots/nutriscan.png',
    title: 'Nutrition',
    description: 'Track every health intake measure that keeps you well — calories, macros, water, hydration goals, and more. Snap a photo of any meal for instant AI analysis and log it all in one place.',
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
    icon: Users,
    title: 'Community',
    description: 'Connect with people who share your dietary restrictions, swap safe restaurants, and learn what works from others like you.',
  },
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
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-slate-950" aria-label="SafetyZone features">
      {/* Ambient glow */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-teal-300 mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Everything you need to eat safely
          </h2>
          <p className="text-base md:text-lg text-slate-400">
            Packed with the features that matter most.
          </p>
        </FadeInSection>

        {/* Phone left, stacked cards right */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
            {/* Left: Phone mockup */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start shrink-0 lg:sticky lg:top-32">
              <div className="relative w-[250px] sm:w-[290px]">
                <div aria-hidden="true" className="absolute inset-0 scale-110 bg-teal-400/[0.12] rounded-full blur-[80px] pointer-events-none" />
                {showcaseFeatures.map((feature) => (
                  <img
                    key={feature.id}
                    src={feature.screenshot}
                    alt={`${feature.title} screenshot`}
                    width="290"
                    height="612"
                    className="absolute inset-0 w-full aspect-[9/19] object-contain transition-opacity duration-200 drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
                    style={{
                      opacity: feature.id === activeId ? 1 : 0,
                      pointerEvents: feature.id === activeId ? 'auto' : 'none',
                    }}
                  />
                ))}
                {/* Spacer to preserve layout height */}
                <div className="invisible w-full aspect-[9/19]" />
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
                    className={`w-full text-left rounded-2xl border transition-all duration-200 px-6 py-6 backdrop-blur-sm ${
                      isActive
                        ? 'bg-teal-400/[0.08] border-teal-400/40 ring-1 ring-teal-400/30 shadow-[0_0_48px_-12px_rgba(45,212,191,0.45)]'
                        : 'bg-white/[0.03] border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.05]'
                    }`}
                  >
                    <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-150 ${
                      isActive ? 'text-teal-300' : 'text-white'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed transition-colors duration-150 ${
                      isActive ? 'text-slate-300' : 'text-slate-500'
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
            <div className="flex items-baseline justify-between gap-6 border-b border-white/[0.08] pb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Also included
              </h3>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em]">
                In every download
              </span>
            </div>
          </FadeInSection>

          <ul className="divide-y divide-white/[0.06]">
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
                  <span className="text-xs font-mono text-slate-600 tabular-nums pt-1">
                    0{i + 1}
                  </span>
                  <h4 className="text-lg md:text-xl font-semibold text-white flex items-center gap-3">
                    <Icon className="w-4 h-4 text-teal-300 shrink-0" strokeWidth={2.25} />
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed col-start-2 md:col-start-3 max-w-md">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
