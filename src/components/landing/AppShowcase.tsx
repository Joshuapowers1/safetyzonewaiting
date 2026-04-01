import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { Sparkles, QrCode, ChefHat, Home, Flame, BookOpen } from 'lucide-react';

import screenHome from '@/assets/screen-home.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import screenRecipe from '@/assets/screen-recipe.png';
import screenQrProfile from '@/assets/screen-qr-profile.png';
import screenRecipeResult from '@/assets/screen-recipe-result.png';
import screenCookingSteps from '@/assets/screen-cooking-steps.png';

const featuredScreens = [
  {
    image: screenQrProfile,
    title: 'QR Dietary Profile',
    subtitle: '200+ languages',
    icon: QrCode,
    color: 'from-violet-500/20 to-purple-600/20',
    borderColor: 'border-violet-500/20',
  },
  {
    image: screenHome,
    title: 'Home Dashboard',
    subtitle: 'Everything at a glance',
    icon: Home,
    color: 'from-primary/20 to-accent/20',
    borderColor: 'border-primary/20',
  },
  {
    image: screenRecipe,
    title: 'Recipe AI',
    subtitle: 'Safe substitutions',
    icon: ChefHat,
    color: 'from-amber-500/20 to-orange-600/20',
    borderColor: 'border-amber-500/20',
  },
];

const secondaryScreens = [
  { image: screenNutriscan, title: 'NutriScan', icon: Flame },
  { image: screenRecipeResult, title: 'Recipe Results', icon: Sparkles },
  { image: screenCookingSteps, title: 'Cooking Steps', icon: BookOpen },
];

const PhoneMockup = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className={`relative rounded-[2rem] border-[5px] border-white/10 bg-black overflow-hidden shadow-2xl ${className ?? ''}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[22px] bg-black rounded-b-2xl z-20" />
    <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
  </div>
);

const AppShowcase = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,25%,5%)] via-[hsl(210,30%,7%)] to-[hsl(200,25%,5%)]">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-20">
          <AnimatedBadge className="mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            App Preview
          </AnimatedBadge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
            Designed to keep you{' '}
            <GradientText className="italic font-bold">safe</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features wrapped in a beautiful, intuitive interface.
          </p>
        </FadeInSection>

        {/* Featured 3-phone hero row */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-20">
          {featuredScreens.map((screen, i) => {
            const isCenter = i === 1;
            return (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                className={`flex flex-col items-center ${isCenter ? 'z-10' : 'z-0 hidden sm:flex'}`}
              >
                <div className={`relative ${isCenter ? 'scale-100 md:scale-110' : 'scale-90 opacity-80'}`}>
                  <div className={`absolute -inset-4 bg-gradient-to-b ${screen.color} rounded-[3rem] blur-2xl`} />
                  <PhoneMockup
                    src={screen.image}
                    alt={screen.title}
                    className={`relative w-[220px] md:w-[260px] h-[460px] md:h-[540px] ${screen.borderColor}`}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="mt-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <screen.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{screen.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{screen.subtitle}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary screens - horizontal strip */}
        <FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {secondaryScreens.map((screen, i) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-all"
              >
                <div className="relative mx-auto w-[160px] h-[340px] mb-4">
                  <PhoneMockup src={screen.image} alt={screen.title} className="w-full h-full" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <screen.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{screen.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AppShowcase;
