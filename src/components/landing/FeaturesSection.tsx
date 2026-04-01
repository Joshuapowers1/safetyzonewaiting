import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ScanLine, Barcode, Camera, ChefHat, Users, QrCode,
  Shield, Globe, Zap, ArrowRight, Infinity, ChevronDown,
  Pill, MapPin, Check, Clock
} from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimatedBorderCard } from '@/components/ui/animated-border-card';
import { DrawIcon } from '@/components/ui/draw-icon';

const features = [
  {
    icon: QrCode,
    title: 'QR Allergy Cards',
    description: 'Your digital allergy card. Scannable, auto-translated into 200+ languages, always current.',
    stat: '200+',
    statLabel: 'Languages',
    status: 'live' as const,
    details: {
      howItWorks: 'Generate a personal QR code that contains your complete allergy and dietary profile. Show it to restaurant staff, event caterers, or anyone preparing your food. They scan it and instantly see exactly what you need to avoid, displayed clearly in their language.',
      whatPowersIt: 'Your QR code dynamically links to your up-to-date profile and auto-translates into 200+ languages, eliminating the communication barrier that makes dining abroad or at unfamiliar restaurants so stressful.',
      whyItMatters: 'Explaining a complex allergy profile to a new server, especially across language barriers, is exhausting and error-prone. Your QR Dietary Profile communicates everything clearly and accurately in seconds, so the kitchen gets it right the first time.',
    },
  },
  {
    icon: MapPin,
    title: 'Travel Allergen',
    description: 'Get destination-specific safety tips, local allergen databases, and translated allergy cards for international travel.',
    stat: '100+',
    statLabel: 'Countries',
    status: 'live' as const,
    details: {
      howItWorks: 'Select your travel destination and instantly receive region-specific allergen information, common local ingredients to watch for, and pre-translated allergy communication cards tailored to local cuisine and language.',
      whatPowersIt: 'Our global database maps regional food practices, labeling laws, and common allergen sources across 100+ countries, combined with real-time translation and local food intelligence.',
      whyItMatters: 'Traveling with food allergies is stressful. Different countries use different ingredients, labeling standards, and food preparation practices. Travel Allergen removes the guesswork so you can explore the world safely.',
    },
  },
  {
    icon: Camera,
    title: 'NutriScan AI',
    description: 'AI-powered calorie and macro analysis from any food photo. No manual logging required.',
    stat: '99.5%',
    statLabel: 'Accuracy',
    status: 'live' as const,
    details: {
      howItWorks: 'Take a photo of any meal, whether home-cooked, restaurant, or packaged, and NutriScan uses AI-powered image recognition to estimate calories, macros (protein, carbs, fat), and key micronutrients in seconds.',
      whatPowersIt: 'Advanced computer vision analyzes portion sizes, identifies individual ingredients, and maps them against nutritional databases to deliver accurate breakdowns without manual logging.',
      whyItMatters: 'For people managing food allergies, nutrition tracking goes hand-in-hand with safety. NutriScan makes it effortless to stay on top of both. No more guessing portions or manually searching every ingredient. Just snap and know.',
    },
  },
  {
    icon: ChefHat,
    title: 'Recipe AI',
    description: 'Transform any recipe with safe, taste-matched substitutions. Infinite possibilities for every dish.',
    stat: '∞',
    statLabel: 'Recipes',
    useInfinityIcon: true,
    status: 'live' as const,
    details: {
      howItWorks: 'Paste any recipe or URL and Recipe AI instantly identifies every allergen risk and generates safe, taste-matched ingredient substitutions tailored to your profile. Get an entirely transformed version of the recipe you can follow step-by-step.',
      whatPowersIt: 'Our AI doesn\'t just swap ingredients. It understands cooking chemistry. It accounts for binding agents, texture, flavor profiles, and baking ratios so your allergen-free version actually tastes right and works in practice.',
      whyItMatters: 'Living with food allergies shouldn\'t mean giving up the recipes you love. Whether it\'s a family recipe passed down for generations or a trending dish you found online, Recipe AI makes every recipe yours, safely, with infinite possibilities.',
    },
  },
  {
    icon: Pill,
    title: 'EpiPen & Medication Tracker',
    description: 'Track expiration dates, set automatic reminders, and never be caught without your life-saving medications.',
    stat: 'Auto',
    statLabel: 'Reminders',
    status: 'live' as const,
    details: {
      howItWorks: 'Add your EpiPens, antihistamines, and other allergy medications with their expiration dates. SafetyZone sends automatic reminders before they expire so you can replace them in time. Track multiple medications across family profiles.',
      whatPowersIt: 'Smart notification scheduling with customizable reminder windows ensures you never miss an expiration date, while family profile integration keeps everyone\'s medications organized in one place.',
      whyItMatters: 'An expired EpiPen in an emergency is as dangerous as having none at all. This feature ensures your life-saving medications are always current, giving you peace of mind every day.',
    },
  },
  {
    icon: ScanLine,
    title: 'Menu Scanner',
    description: 'Snap a photo, scan a QR code, or paste a URL and get personalized safety ratings in under 3 seconds.',
    stat: '< 3s',
    statLabel: 'Scan Speed',
    status: 'coming_soon' as const,
    details: {
      howItWorks: 'Snap a photo of any restaurant menu, scan a QR code menu, or paste a URL. SafetyZone\'s triple-verified AI instantly cross-references every dish against your personal allergy profile. Each item receives a color-coded safety rating (Safe, Caution, Avoid) so you can order with confidence, not anxiety.',
      whatPowersIt: 'Our AI engine analyzes ingredient lists against FDA allergen databases, USDA nutrition data, and published medical research, then layers in your unique dietary restrictions for a personalized result every time.',
      whyItMatters: 'No more flagging down a server, hoping they checked with the kitchen, and still feeling uncertain. Menu Scanner puts verified allergen intelligence directly in your hands in under 3 seconds, in 200+ languages.',
    },
  },
  {
    icon: Barcode,
    title: 'Barcode Scanner',
    description: 'Instantly identify hidden allergens, cross-contamination risks, and buried advisory warnings.',
    stat: '10K+',
    statLabel: 'Products',
    status: 'coming_soon' as const,
    details: {
      howItWorks: 'Point your camera at any packaged product\'s barcode and instantly receive a full allergen breakdown, including hidden allergens, cross-contamination risks, and advisory warnings that manufacturers often bury in fine print.',
      whatPowersIt: 'SafetyZone cross-references barcode data against continuously updated product databases, FDA recall alerts, and manufacturer ingredient disclosures to flag risks that standard labels miss.',
      whyItMatters: 'Food labels are confusing by design. "May contain" warnings, shared facility disclosures, and unfamiliar chemical names make grocery shopping stressful. Barcode Scanner translates all of it into a simple, personalized safety rating so every trip to the store feels safe, not overwhelming.',
    },
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Individual profiles for every household member. Switch instantly when scanning.',
    stat: '5+',
    statLabel: 'Profiles',
    status: 'coming_soon' as const,
    details: {
      howItWorks: 'Create individual allergy and dietary profiles for every member of your household, each with their own unique restrictions, severity levels, and preferences. Switch between profiles instantly when scanning menus, products, or recipes.',
      whatPowersIt: 'SafetyZone stores each family member\'s complete dietary profile securely, so every scan and recommendation is personalized to whoever is eating. No re-entering information, no mix-ups.',
      whyItMatters: 'In families managing multiple food allergies, one wrong assumption can be dangerous. Family Profiles ensure that Mom\'s dairy-free needs, Dad\'s shellfish allergy, and your child\'s peanut and tree nut restrictions are all tracked separately, because safety isn\'t one-size-fits-all.',
    },
  },
];

const trustFeatures = [
  { icon: Shield, title: 'HIPAA-Level Privacy', description: 'Medical-grade security for your dietary data.' },
  { icon: Zap, title: '99.5% Accuracy', description: 'Triple-verified AI with zero-tolerance for missed allergens.' },
  { icon: Globe, title: '200+ Languages', description: 'Global accessibility for travelers and diverse communities.' },
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLive = feature.status === 'live';

  return (
    <FadeInSection delay={index * 0.1}>
      <TiltCard className="h-full rounded-2xl">
        <div
          className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 h-full overflow-hidden hover:border-primary/30 transition-colors duration-300 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Status badge */}
          <div className="absolute top-4 right-4">
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                <Check className="w-3 h-3" />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
                <Clock className="w-3 h-3" />
                Coming Soon
              </span>
            )}
          </div>

          <DrawIcon delay={index * 0.1}>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <feature.icon className="w-7 h-7 text-primary" />
            </div>
          </DrawIcon>

          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-white/60 leading-relaxed mb-4">{feature.description}</p>

          <div className="flex items-baseline gap-2">
            {feature.useInfinityIcon ? (
              <Infinity className="w-8 h-8 text-primary" strokeWidth={2.5} />
            ) : (
              <span className="text-2xl font-bold text-primary">{feature.stat}</span>
            )}
            <span className="text-xs text-white/40 uppercase tracking-wider">{feature.statLabel}</span>
          </div>

          <div className="flex items-center gap-2 mt-4 text-primary font-medium">
            <span className="text-sm">{isExpanded ? 'Show less' : 'Learn more'}</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-white/10 space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-1">How It Works</h4>
                    <p className="text-white/50 leading-relaxed">{feature.details.howItWorks}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">What Powers It</h4>
                    <p className="text-white/50 leading-relaxed">{feature.details.whatPowersIt}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Why It Matters</h4>
                    <p className="text-white/50 leading-relaxed">{feature.details.whyItMatters}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </TiltCard>
    </FadeInSection>
  );
};

const FeaturesSection = () => {
  const liveFeatures = features.filter(f => f.status === 'live');
  const comingSoonFeatures = features.filter(f => f.status === 'coming_soon');

  return (
    <section id="features" className="py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,25%,5%)] via-[hsl(215,30%,7%)] to-[hsl(200,25%,5%)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedBadge className="mb-4">Available Now</AnimatedBadge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white pb-2 leading-snug">
            Everything you need to eat{' '}
            <GradientText className="italic font-bold">safely</GradientText>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mt-6">
            Our triple-verified AI Scanner analyzes menus, product labels, and food photos, cross-referencing FDA allergen databases, USDA nutrition data, and published medical research.
          </p>
        </FadeInSection>

        {/* Live Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {liveFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Coming Soon */}
        {comingSoonFeatures.length > 0 && (
          <>
            <FadeInSection className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white/80">
                Coming Soon
              </h3>
              <p className="text-white/40 mt-2">More powerful features on the way</p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {comingSoonFeatures.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index + liveFeatures.length} />
              ))}
            </div>
          </>
        )}

        <FadeInSection>
          <AnimatedBorderCard>
            <div className="grid md:grid-cols-3 gap-10 p-4 md:p-8">
              {trustFeatures.map((feature, index) => (
                <FadeInSection key={feature.title} delay={index * 0.1} className="text-center">
                  <DrawIcon delay={index * 0.15}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </DrawIcon>
                   <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </FadeInSection>
              ))}
            </div>
          </AnimatedBorderCard>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
