import { motion } from 'framer-motion';
import { ScanLine, Barcode, Users } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';

const showcaseFeatures = [
  {
    screenshot: '/screenshots/nutriscan.png',
    title: 'NutriScan AI',
    description: 'Snap a photo of any meal to instantly estimate calories, macros, and detect allergens with AI-powered analysis.',
    cards: [
      { title: 'AI Calorie & Macro Tracking', description: 'Set daily goals, log meals with a photo, and track protein, carbs, and fat in real time.' },
      { title: 'Allergen Detection', description: 'Automatically flags allergens in your meals so you never have to guess.' },
      { title: 'Unlimited Scans', description: 'Scan as many meals as you want — free to download, no limits on core features.' },
    ],
  },
  {
    screenshot: '/screenshots/recipe.png',
    title: 'Recipe AI',
    description: 'Transform any recipe to be safe for your dietary needs with AI-powered ingredient substitution and full nutritional analysis.',
    cards: [
      { title: '2M+ Verified Recipes', description: 'Browse a massive database of allergen-safe, verified recipes.' },
      { title: 'Smart Substitutions', description: 'AI replaces unsafe ingredients while keeping the flavor and nutrition intact.' },
      { title: 'Paste, Upload, or Snap', description: 'Enter recipes by text, URL, photo, or camera — whatever\'s easiest.' },
    ],
    reversed: true,
  },
  {
    screenshot: '/screenshots/allergen-card.png',
    title: 'Digital QR Allergen Card',
    description: 'Your allergies translated into 200+ languages on a scannable digital card. Show it at any restaurant, anywhere in the world.',
    cards: [
      { title: '200+ Languages', description: 'Communicate your allergies clearly no matter where you travel.' },
      { title: 'Family Profiles', description: 'Create individual allergy cards for every member of your family.' },
      { title: 'Kitchen & Restaurant Ready', description: 'Works for chefs, waitstaff, and anyone preparing your food.' },
    ],
  },
  {
    screenshot: '/screenshots/travel.png',
    title: 'Travel Mode',
    description: 'AI generates a complete allergy travel guide with local phrases, safe restaurants, packing lists, and emergency info.',
    cards: [
      { title: 'Safe Restaurant Finder', description: 'Discover allergy-friendly restaurants at your destination.' },
      { title: 'Local Phrases', description: 'Essential allergy phrases translated for ordering food abroad.' },
      { title: 'Emergency Info', description: 'Nearby hospitals and emergency contacts auto-populated for your trip.' },
    ],
    reversed: true,
  },
];

const comingSoon = [
  { icon: ScanLine, title: 'Menu Scanner', description: 'Scan restaurant menus for personalized allergen safety ratings.' },
  { icon: Barcode, title: 'Barcode Scanner', description: 'Instant allergen detection on packaged food via barcode scan.' },
  { icon: Users, title: 'Family Profiles', description: 'Individual allergy profiles for every family member.' },
];

const FeaturesSection = () => {
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

        {/* Alternating showcase rows */}
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {showcaseFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
            >
              {/* Phone mockup */}
              <div className="w-[240px] sm:w-[280px] shrink-0">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-black/40 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={feature.screenshot}
                    alt={`${feature.title} screenshot`}
                    className="w-full aspect-[9/19] object-cover"
                    loading="lazy"
                    width="280"
                    height="590"
                  />
                </div>
              </div>

              {/* Feature cards stack */}
              <div className="flex-1 space-y-4">
                {feature.cards.map((card, ci) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.1 }}
                    className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-black/20 transition-shadow duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
