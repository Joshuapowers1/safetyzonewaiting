import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { QrCode, ChefHat, Flame, Camera } from 'lucide-react';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';

import screenQrProfile from '@/assets/screen-qr-profile.png';
import screenRecipe from '@/assets/screen-recipe.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import screenCookingSteps from '@/assets/screen-cooking-steps.png';

const showcaseFeatures = [
  {
    title: 'QR Allergy Card — Share Your Allergies in 200+ Languages',
    description: 'Generate a personal QR code with your complete food allergy and dietary profile. Show it to restaurant staff anywhere in the world — they scan it and instantly see exactly what allergens you need to avoid, displayed clearly in their native language. The best allergy translation card for international travel, dining out with peanut allergy, gluten intolerance, dairy allergy, tree nut allergy, shellfish allergy, and all dietary restrictions.',
    image: screenQrProfile,
    icon: QrCode,
    badge: '200+ Languages',
    alt: 'SafetyZone QR allergy card feature showing food allergy profile translated for restaurant staff in multiple languages - best allergy card app',
  },
  {
    title: 'Recipe AI — Allergen-Free Recipe Substitutions',
    description: 'Paste any recipe or URL and SafetyZone Recipe AI identifies every allergen risk and generates safe, taste-matched ingredient substitutions tailored to your allergy profile. It understands cooking chemistry — binding agents, texture, flavor profiles, and baking ratios — so your peanut-free, gluten-free, dairy-free, or egg-free version actually works and tastes great.',
    image: screenRecipe,
    icon: ChefHat,
    badge: 'Infinite Recipes',
    alt: 'SafetyZone Recipe AI showing allergen-free recipe substitutions for peanut allergy, gluten free, dairy free cooking',
  },
  {
    title: 'NutriScan AI — Calorie Tracker With Just a Photo',
    description: 'Snap a photo of any meal — home-cooked, restaurant, or packaged food — and SafetyZone NutriScan uses AI-powered image recognition to estimate calories, macros (protein, carbs, fat), and key micronutrients in seconds. The fastest AI calorie counter and nutrition tracker for people with food allergies and dietary restrictions. No manual food logging required.',
    image: screenNutriscan,
    icon: Camera,
    badge: 'AI-Powered',
    alt: 'SafetyZone NutriScan AI calorie tracker showing instant nutrition analysis from food photo - best AI calorie counter app',
  },
  {
    title: 'Step-by-Step Allergen-Free Cooking Instructions',
    description: 'Get detailed cooking instructions with allergen-free ingredients already substituted based on your food allergy profile. Follow along step-by-step, knowing every single ingredient has been checked for peanuts, tree nuts, dairy, eggs, wheat, gluten, soy, fish, shellfish, and sesame. Cook with confidence — safe recipes for celiac disease, food intolerance, and all allergies.',
    image: screenCookingSteps,
    icon: Flame,
    badge: 'Allergen-Free',
    alt: 'SafetyZone allergen-free cooking steps with safe ingredient substitutions for food allergies',
  },
];

const PhoneMockup = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-[2.2rem] border-[5px] border-white/[0.06] bg-black overflow-hidden shadow-2xl shadow-black/30">
    <img src={src} alt={alt} loading="lazy" className="w-full aspect-[9/19.5] object-cover" width="260" height="563" />
  </div>
);

const AppShowcase = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]" aria-label="SafetyZone food allergy app features showcase">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-white/60 mb-6">
            📱 SafetyZone App Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The most powerful{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              food allergy app
            </span>{' '}
            on iOS
          </h2>
          <p className="text-base text-white/35 mt-4 max-w-2xl mx-auto">
            AI-powered allergen detection for peanut allergy, celiac disease, dairy allergy, tree nut allergy, shellfish allergy, egg allergy, soy allergy, and 50+ sensitivities
          </p>
        </FadeInSection>

        {/* Alternating feature rows */}
        <div className="space-y-24 md:space-y-32">
          {showcaseFeatures.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${isReversed ? 'md:[direction:rtl]' : ''}`}
              >
                {/* Phone */}
                <div className={`flex justify-center ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                  <div className="relative w-[220px] sm:w-[260px]">
                    <div className="absolute -inset-10 bg-primary/[0.04] rounded-full blur-[60px]" />
                    <PhoneMockup src={feature.image} alt={feature.alt} />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-5 ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                    <feature.icon className="w-3 h-3" />
                    {feature.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/40 leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Download badges below showcase */}
        <FadeInSection className="flex flex-col items-center gap-4 mt-20">
          <p className="text-sm text-white/30 font-medium">Download the best food allergy app — free on iOS</p>
          <div className="flex items-center gap-4">
            <AppStoreBadge />
            <GooglePlayBadge comingSoon />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AppShowcase;
