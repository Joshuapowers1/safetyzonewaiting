import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, ScanLine, Flame, ChefHat, Sparkles, QrCode, CheckCircle, BookOpen, Apple } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimatedBadge } from '@/components/ui/animated-badge';

import screenHome from '@/assets/screen-home.png';
import screenScan from '@/assets/screen-scan.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import screenRecipe from '@/assets/screen-recipe.png';
import screenGenerateRecipe from '@/assets/screen-generate-recipe.png';
import screenQrProfile from '@/assets/screen-qr-profile.png';
import screenRecipeResult from '@/assets/screen-recipe-result.png';
import screenCookingSteps from '@/assets/screen-cooking-steps.png';
import screenNutrition from '@/assets/screen-nutrition.png';

const screens = [
  { image: screenHome, title: 'Home Dashboard', description: 'Quick actions, allergy card, and recent scans at a glance.', icon: Home },
  { image: screenScan, title: 'Smart Scanner', description: 'Scan anything: photos, barcodes, menus, and even skincare products.', icon: ScanLine },
  { image: screenNutriscan, title: 'NutriScan', description: 'AI-powered calorie and macro tracking from any food photo.', icon: Flame },
  { image: screenRecipe, title: 'Recipe AI', description: 'Transform any recipe to be safe for your dietary needs.', icon: ChefHat },
  { image: screenGenerateRecipe, title: 'Generate Recipes', description: 'Create allergen-safe recipes from scratch with AI.', icon: Sparkles },
  { image: screenRecipeResult, title: 'Recipe Results', description: 'Safe substitutions with Grade A allergen-free ratings.', icon: CheckCircle },
  { image: screenCookingSteps, title: 'Cooking Instructions', description: 'Step-by-step guidance with pro tips and timing.', icon: BookOpen },
  { image: screenNutrition, title: 'Nutrition Breakdown', description: 'Full macros, calories, and storage tips per serving.', icon: Apple },
  { image: screenQrProfile, title: 'QR Dietary Profile', description: 'Your digital allergy card in 206+ languages.', icon: QrCode },
];

const AppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback((newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  }, [activeIndex]);

  const next = useCallback(() => {
    const newIndex = (activeIndex + 1) % screens.length;
    setDirection(1);
    setActiveIndex(newIndex);
  }, [activeIndex]);

  const prev = useCallback(() => {
    const newIndex = (activeIndex - 1 + screens.length) % screens.length;
    setDirection(-1);
    setActiveIndex(newIndex);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,25%,5%)] via-[hsl(210,30%,7%)] to-[hsl(200,25%,5%)]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center mb-16">
          <AnimatedBadge className="mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            App Preview
          </AnimatedBadge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            See SafetyZone in{' '}
            <GradientText className="italic font-bold">action</GradientText>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Every feature designed to keep you and your family safe, wherever you eat.
          </p>
        </FadeInSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Phone mockup */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[660px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20 rounded-[3rem] blur-3xl scale-110 opacity-50" />
              <div className="relative w-full h-full rounded-[2.5rem] border-[6px] border-white/10 bg-black overflow-hidden shadow-2xl shadow-primary/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-2xl z-20" />
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={screens[activeIndex].image}
                    alt={screens[activeIndex].title}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Feature list */}
          <div className="flex-1 space-y-3">
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={screen.title}
                  onClick={() => navigate(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 border-primary/40 shadow-lg shadow-primary/10'
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/40'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-sm transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
                        {screen.title}
                      </div>
                      <div className={`text-xs mt-0.5 transition-colors ${isActive ? 'text-white/60' : 'text-white/30'}`}>
                        {screen.description}
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1.5 h-8 bg-primary rounded-full"
                      />
                    )}
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="mt-3 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full origin-left"
                      transition={{ duration: 3, ease: 'linear' }}
                      key={`progress-${activeIndex}`}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => navigate(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-6 bg-primary' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
