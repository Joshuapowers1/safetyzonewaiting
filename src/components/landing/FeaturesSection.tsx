import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ScanLine, Barcode, Users } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';

const showcaseFeatures = [
  {
    id: 'nutriscan',
    screenshot: '/screenshots/nutriscan.png',
    title: 'NutriScan AI',
    subtitle: 'Snap a photo. Get instant calories, macros, and allergen detection.',
    cards: [
      { title: 'AI Calorie & Macro Tracking', description: 'Set daily goals, log meals with a photo, and track protein, carbs, and fat in real time.' },
      { title: 'Allergen Detection', description: 'Automatically flags allergens in your meals so you never have to guess.' },
      { title: 'Unlimited Scans', description: 'Scan as many meals as you want — free to download, no limits on core features.' },
    ],
  },
  {
    id: 'recipe',
    screenshot: '/screenshots/recipe.png',
    title: 'Recipe AI',
    subtitle: 'Transform any recipe to be safe for your dietary needs.',
    cards: [
      { title: '2M+ Verified Recipes', description: 'Browse a massive database of allergen-safe, verified recipes.' },
      { title: 'Smart Substitutions', description: 'AI replaces unsafe ingredients while keeping the flavor and nutrition intact.' },
      { title: 'Paste, Upload, or Snap', description: 'Enter recipes by text, URL, photo, or camera — whatever\'s easiest.' },
    ],
  },
  {
    id: 'allergen-card',
    screenshot: '/screenshots/allergen-card.png',
    title: 'Digital QR Allergen Card',
    subtitle: 'Your allergies in 200+ languages. Show it anywhere.',
    cards: [
      { title: '200+ Languages', description: 'Communicate your allergies clearly no matter where you travel.' },
      { title: 'Family Profiles', description: 'Create individual allergy cards for every member of your family.' },
      { title: 'Kitchen & Restaurant Ready', description: 'Works for chefs, waitstaff, and anyone preparing your food.' },
    ],
  },
  {
    id: 'travel',
    screenshot: '/screenshots/travel.png',
    title: 'Travel Mode',
    subtitle: 'AI travel guides with local phrases and safe restaurants.',
    cards: [
      { title: 'Safe Restaurant Finder', description: 'Discover allergy-friendly restaurants at your destination.' },
      { title: 'Local Phrases', description: 'Essential allergy phrases translated for ordering food abroad.' },
      { title: 'Emergency Info', description: 'Nearby hospitals and emergency contacts auto-populated for your trip.' },
    ],
  },
];

const comingSoon = [
  { icon: ScanLine, title: 'Menu Scanner', description: 'Scan restaurant menus for personalized allergen safety ratings.' },
  { icon: Barcode, title: 'Barcode Scanner', description: 'Instant allergen detection on packaged food via barcode scan.' },
  { icon: Users, title: 'Family Profiles', description: 'Individual allergy profiles for every family member.' },
];

const FeaturesSection = () => {
  const [activeId, setActiveId] = useState(showcaseFeatures[0].id);
  const active = showcaseFeatures.find(f => f.id === activeId)!;

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-gray-950" aria-label="SafetyZone features">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to eat safely
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Packed with the features that matter most.
          </p>
        </FadeInSection>

        {/* Interactive showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left: Phone mockup */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start shrink-0">
              <div className="relative w-[240px] sm:w-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-black/40 bg-gray-100 dark:bg-gray-800">
                      <img
                        src={active.screenshot}
                        alt={`${active.title} screenshot`}
                        className="w-full aspect-[9/19] object-cover"
                        width="280"
                        height="590"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Accordion-style feature list */}
            <div className="flex-1 space-y-3 w-full">
              {showcaseFeatures.map((feature) => {
                const isActive = feature.id === activeId;
                return (
                  <div key={feature.id}>
                    {/* Clickable header */}
                    <button
                      onClick={() => setActiveId(feature.id)}
                      className={`w-full text-left rounded-2xl border transition-all duration-300 px-6 py-5 group ${
                        isActive
                          ? 'bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/15 shadow-md'
                          : 'bg-transparent border-gray-200 dark:border-white/8 hover:bg-gray-50/60 dark:hover:bg-white/[0.03] hover:border-gray-300 dark:hover:border-white/12'
                      }`}
                    >
                      <h3 className={`text-lg md:text-xl font-bold transition-colors duration-200 ${
                        isActive
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm mt-1 transition-colors duration-200 ${
                        isActive
                          ? 'text-gray-600 dark:text-gray-300'
                          : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400'
                      }`}>
                        {feature.subtitle}
                      </p>
                    </button>

                    {/* Expanded cards */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 space-y-2">
                            {feature.cards.map((card, ci) => (
                              <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: ci * 0.08 }}
                                className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl px-5 py-4"
                              >
                                <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1">
                                  {card.title}
                                </h4>
                                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                  {card.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-6xl mx-auto mt-24 md:mt-32">
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
