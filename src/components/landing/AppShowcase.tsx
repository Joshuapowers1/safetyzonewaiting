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
    title: 'QR Allergy Card in 200+ Languages',
    description: 'Generate a personal QR code with your complete allergy profile. Restaurant staff scan it and instantly see what you need to avoid, in their language.',
    image: screenQrProfile,
    icon: QrCode,
    badge: '200+ Languages',
    alt: 'SafetyZone QR allergy card feature showing food allergy profile translated for restaurant staff in multiple languages',
  },
  {
    title: 'Recipe: Allergen-Free Substitutions',
    description: 'Paste any recipe and get safe, taste-matched substitutions tailored to your allergy profile. Understands cooking chemistry so your allergen-free version actually works.',
    image: screenRecipe,
    icon: ChefHat,
    badge: 'Infinite Recipes',
    alt: 'SafetyZone Recipe feature showing allergen-free recipe substitutions for peanut allergy, gluten free, dairy free cooking',
  },
  {
    title: 'NutriScan: Calories From a Photo',
    description: 'Snap a photo of any meal and get instant calorie, macro, and micronutrient estimates. No manual logging required.',
    image: screenNutriscan,
    icon: Camera,
    badge: 'Photo-Powered',
    alt: 'SafetyZone NutriScan calorie tracker showing instant nutrition analysis from food photo',
  },
  {
    title: 'Step-by-Step Safe Cooking',
    description: 'Follow detailed cooking instructions with allergen-free ingredients already substituted. Every ingredient checked against your profile.',
    image: screenCookingSteps,
    icon: Flame,
    badge: 'Allergen-Free',
    alt: 'SafetyZone allergen-free cooking steps with safe ingredient substitutions for food allergies',
  },
];

/* Clean screen frame — no bezel */
const ScreenFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/50">
    {children}
  </div>
);

const AppShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50" aria-label="My SafetyZone food allergy app features showcase">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-medium text-teal-600 mb-6">
            📱 My SafetyZone App Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            The most powerful{' '}
            <span className="text-teal-500">
              food allergy &amp; nutrition app
            </span>{' '}
            on iOS
          </h2>
          <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
            Built for food allergies, celiac disease, EOE, alpha-gal syndrome, FPIES, dietary restrictions, calorie counting, macro tracking, and 50+ sensitivities
          </p>
        </FadeInSection>

        {/* Compact 2x2 grid on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {showcaseFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Small phone preview */}
              <div className="shrink-0 w-[100px] sm:w-[120px]">
                <ScreenFrame>
                  <img src={feature.image} alt={feature.alt} loading="lazy" className="w-full aspect-[9/19.5] object-cover" width="120" height="260" />
                </ScreenFrame>
              </div>

              {/* Content */}
              <div className="space-y-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary">
                  <feature.icon className="w-2.5 h-2.5" />
                  {feature.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download badges below showcase */}
        <FadeInSection className="flex flex-col items-center gap-4 mt-14">
          <p className="text-sm text-gray-400 font-medium">Download the best food allergy app, free on iOS</p>
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
