import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { QrCode, ChefHat, Flame, Camera } from 'lucide-react';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import IPhoneFrame from '@/components/ui/iphone-frame';

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
    featured: true,
  },
  {
    title: 'Recipe: Allergen-Free Substitutions',
    description: 'Paste any recipe and get safe, taste-matched substitutions tailored to your allergy profile. Understands cooking chemistry so your allergen-free version actually works.',
    image: screenRecipe,
    icon: ChefHat,
    badge: 'Infinite Recipes',
    alt: 'SafetyZone Recipe feature showing allergen-free recipe substitutions for peanut allergy, gluten free, dairy free cooking',
    featured: false,
  },
  {
    title: 'NutriScan: Calories From a Photo',
    description: 'Snap a photo of any meal and get instant calorie, macro, and micronutrient estimates. No manual logging required.',
    image: screenNutriscan,
    icon: Camera,
    badge: 'Photo-Powered',
    alt: 'SafetyZone NutriScan calorie tracker showing instant nutrition analysis from food photo',
    featured: false,
  },
  {
    title: 'Step-by-Step Safe Cooking',
    description: 'Follow detailed cooking instructions with allergen-free ingredients already substituted. Every ingredient checked against your profile.',
    image: screenCookingSteps,
    icon: Flame,
    badge: 'Allergen-Free',
    alt: 'SafetyZone allergen-free cooking steps with safe ingredient substitutions for food allergies',
    featured: false,
  },
];

/* No longer needed, using IPhoneFrame instead */

const AppShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[hsl(240,22%,5%)]" aria-label="My SafetyZone food allergy app features showcase">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-xs font-medium text-[#00D4AA] mb-6">
            📱 My SafetyZone App Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The most powerful{' '}
            <span className="text-[#00D4AA]">
              food allergy &amp; nutrition app
            </span>{' '}
            on iOS
          </h2>
          <p className="text-base text-[#A0AEC0] mt-4 max-w-2xl mx-auto">
            Built for food allergies, celiac disease, EOE, alpha-gal syndrome, FPIES, dietary restrictions, calorie counting, macro tracking, and 50+ sensitivities
          </p>
        </FadeInSection>

        {/* Featured card spans full width; remaining 3 in 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {showcaseFeatures.map((feature, i) => {
            if (feature.featured) {
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="md:col-span-2 flex flex-col items-center text-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl rounded-2xl p-6 md:p-10 hover:border-[rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,212,170,0.15)] transition-all duration-300"
                >
                  {/* Floating iPhone with teal glow */}
                  <div className="relative mb-8">
                    <div className="absolute inset-x-0 bottom-0 h-[120px] bg-[#00D4AA]/[0.18] rounded-full blur-[60px] translate-y-6" />
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 w-[180px] sm:w-[220px] md:w-[260px]"
                    >
                      <IPhoneFrame>
                        <img
                          src={feature.image}
                          alt={feature.alt}
                          className="w-full aspect-[9/19.5] object-contain bg-white"
                          width="260"
                          height="564"
                          loading="lazy"
                        />
                      </IPhoneFrame>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 max-w-xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-xs font-semibold text-[#00D4AA]">
                      <feature.icon className="w-3 h-3" />
                      {feature.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#A0AEC0] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl rounded-2xl p-5 hover:border-[rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,170,0.1)] transition-all duration-300"
              >
                {/* Small phone preview */}
                <div className="shrink-0 w-[100px] sm:w-[120px]">
                  <IPhoneFrame>
                    <img src={feature.image} alt={feature.alt} loading="lazy" className="w-full aspect-[9/19.5] object-contain bg-white" width="120" height="260" />
                  </IPhoneFrame>
                </div>

                {/* Content */}
                <div className="space-y-2.5 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-[10px] font-semibold text-[#00D4AA]">
                    <feature.icon className="w-2.5 h-2.5" />
                    {feature.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#A0AEC0] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Download badges below showcase */}
        <FadeInSection className="flex flex-col items-center gap-4 mt-14">
          <p className="text-sm text-[#A0AEC0] font-medium">Download the best food allergy app, free on iOS</p>
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
