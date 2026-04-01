import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { QrCode, ChefHat, Flame, Camera } from 'lucide-react';

import screenQrProfile from '@/assets/screen-qr-profile.png';
import screenRecipe from '@/assets/screen-recipe.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import screenCookingSteps from '@/assets/screen-cooking-steps.png';

const showcaseFeatures = [
  {
    title: 'Scan Your Allergy Card Anywhere',
    description: 'Generate a personal QR code with your complete allergy and dietary profile. Show it to restaurant staff anywhere — they scan it and instantly see what you need to avoid, in their own language.',
    image: screenQrProfile,
    icon: QrCode,
    badge: '200+ Languages',
  },
  {
    title: 'AI-Powered Recipe Substitutions',
    description: 'Paste any recipe or URL and Recipe AI identifies every allergen risk. It generates safe, taste-matched substitutions — accounting for cooking chemistry, not just swapping ingredients.',
    image: screenRecipe,
    icon: ChefHat,
    badge: 'Infinite Recipes',
  },
  {
    title: 'Track Calories With Just a Picture',
    description: 'Take a photo of any meal and NutriScan uses AI image recognition to estimate calories, protein, carbs, fat, and key micronutrients in seconds — no manual logging.',
    image: screenNutriscan,
    icon: Camera,
    badge: '99.5% Accuracy',
  },
  {
    title: 'Step-by-Step Safe Cooking',
    description: 'Get detailed cooking instructions with allergen-free ingredients already substituted. Follow along step-by-step, knowing every ingredient is safe for you.',
    image: screenCookingSteps,
    icon: Flame,
    badge: 'Allergen-Free',
  },
];

const PhoneMockup = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-[2.2rem] border-[5px] border-white/[0.06] bg-black overflow-hidden shadow-2xl shadow-black/30">
    <img src={src} alt={alt} loading="lazy" className="w-full aspect-[9/19.5] object-cover" />
  </div>
);

const AppShowcase = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-white/60 mb-6">
            📱 What does SafetyZone include?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Powerful features,{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              beautiful design
            </span>
          </h2>
        </FadeInSection>

        {/* Cal AI-style alternating feature rows */}
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
                    <PhoneMockup src={feature.image} alt={feature.title} />
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
      </div>
    </section>
  );
};

export default AppShowcase;
