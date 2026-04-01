import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { QrCode, ChefHat, Flame, MapPin, Pill } from 'lucide-react';

import screenHome from '@/assets/screen-home.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import screenRecipe from '@/assets/screen-recipe.png';
import screenQrProfile from '@/assets/screen-qr-profile.png';
import screenRecipeResult from '@/assets/screen-recipe-result.png';
import screenCookingSteps from '@/assets/screen-cooking-steps.png';

const screens = [
  { image: screenQrProfile, title: 'QR Allergy Cards', desc: '200+ languages', icon: QrCode },
  { image: screenHome, title: 'Home Dashboard', desc: 'Everything at a glance', icon: MapPin },
  { image: screenRecipe, title: 'Recipe AI', desc: 'Safe substitutions', icon: ChefHat },
  { image: screenNutriscan, title: 'NutriScan AI', desc: 'Calorie tracking', icon: Flame },
  { image: screenRecipeResult, title: 'Recipe Results', desc: 'Step-by-step', icon: ChefHat },
  { image: screenCookingSteps, title: 'Cooking Steps', desc: 'Follow along', icon: Pill },
];

const PhoneMockup = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-[2rem] border-[4px] border-white/[0.06] bg-black overflow-hidden shadow-xl">
    <img src={src} alt={alt} loading="lazy" className="w-full aspect-[9/19.5] object-cover" />
  </div>
);

const AppShowcase = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-white/60 mb-6">
            📱 App Preview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Beautifully designed.{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerfully built.
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Every screen crafted to keep you safe without getting in your way.
          </p>
        </FadeInSection>

        {/* Scrolling phone gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="group"
            >
              <div className="relative mb-3">
                <div className="absolute -inset-2 bg-primary/[0.04] rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <PhoneMockup src={screen.image} alt={screen.title} />
              </div>
              <div className="flex items-center gap-2 justify-center">
                <screen.icon className="w-3.5 h-3.5 text-primary/70" />
                <span className="text-xs font-medium text-white/60">{screen.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
