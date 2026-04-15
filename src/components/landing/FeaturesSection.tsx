import { motion } from 'framer-motion';
import {
  QrCode, MapPin, ChefHat, Camera, Pill, AlertTriangle,
  MessageCircle, ScanLine, Barcode, Users,
  Shield, Zap, Globe, Heart
} from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';

import screenQrProfile from '@/assets/screen-qr-profile.png';
import screenNutriscan from '@/assets/screen-nutriscan.png';
import screenRecipe from '@/assets/screen-recipe.png';
import screenHome from '@/assets/screen-home.png';

const showcaseFeatures = [
  {
    title: 'QR Allergy Cards in 200+ Languages',
    description: 'Generate a personal QR code with your complete allergy profile. Restaurant staff scan it and instantly see your allergens, auto-translated into their language. The best allergy card for international travel.',
    image: screenQrProfile,
    alt: 'SafetyZone QR allergy card translated for restaurant staff worldwide',
  },
  {
    title: 'Calorie & Macro Counter',
    description: 'Snap a photo of any meal for instant calories, protein, carbs, fat, and micronutrients. The fastest nutrition tracker built for people with food allergies and dietary restrictions.',
    image: screenNutriscan,
    alt: 'SafetyZone NutriScan AI calorie and macro counter from food photo',
  },
  {
    title: 'Allergen-Free Recipe Substitutions',
    description: 'Paste any recipe and get safe, taste-matched ingredient swaps for your specific allergies. Covers peanut-free, gluten-free, dairy-free, nut-free, and 50+ more restrictions.',
    image: screenRecipe,
    alt: 'SafetyZone Recipe AI with allergen-free ingredient substitutions',
  },
  {
    title: 'Medication & FDA Recall Tracking',
    description: 'Track EpiPen, inhaler, and medical device expiration dates with auto-reminders. Get real-time FDA food recall alerts for undeclared allergens. Never miss a critical update.',
    image: screenHome,
    alt: 'SafetyZone medication tracker and FDA recall alerts dashboard',
  },
];

const moreFeatures = [
  {
    icon: MapPin,
    title: 'Travel Allergen',
    description: 'Destination-specific food safety tips and local allergen databases for safe dining abroad.',
  },
  {
    icon: MessageCircle,
    title: 'In-App Chat Support',
    description: 'Have a question? Chat directly inside the app and get answers fast.',
  },
];

const comingSoon = [
  { icon: ScanLine, title: 'AI Menu Scanner', description: 'Scan restaurant menus for personalized allergen safety ratings.' },
  { icon: Barcode, title: 'Barcode Scanner', description: 'Instant allergen detection on packaged food via barcode scan.' },
  { icon: Users, title: 'Family Profiles', description: 'Individual allergy profiles for every family member.' },
];

const whyChoose = [
  { icon: Shield, title: 'HIPAA-Level Privacy', description: 'Your health data protected with medical-grade encryption.' },
  { icon: Zap, title: '99.5% Accuracy', description: 'Triple-verified against FDA, USDA, and medical research databases.' },
  { icon: Globe, title: '200+ Languages', description: 'Communicate your allergies clearly anywhere in the world.' },
  { icon: Heart, title: 'Built by Allergy Sufferers', description: 'Founded by someone with anaphylactic food allergies.' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]" aria-label="SafetyZone features">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What does{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SafetyZone
            </span>{' '}
            include?
          </h2>
          <p className="text-base text-white/40 max-w-xl mx-auto">
            Everything you need for food allergies, celiac disease, EOE, alpha-gal, dietary restrictions, and calorie tracking. Free to download.
          </p>
        </FadeInSection>

        {/* Alternating feature rows with screenshots */}
        <div className="space-y-32 max-w-5xl mx-auto mb-28">
          {showcaseFeatures.map((feature, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <FadeInSection key={feature.title} className="w-full">
                <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'md:direction-rtl' : ''}`}>
                  {/* Text */}
                  <div className={`space-y-4 ${isReversed ? 'md:order-2' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base text-white/45 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Screenshot */}
                  <div className={`flex ${isReversed ? 'md:order-1 justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="w-[220px] sm:w-[260px]"
                    >
                      <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50">
                        <img
                          src={feature.image}
                          alt={feature.alt}
                          className="w-full aspect-[9/19.5] object-cover"
                          loading="lazy"
                          width="260"
                          height="563"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* Additional live features */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-20">
          {moreFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-base font-semibold text-white mb-1">{feature.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <FadeInSection className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white/50">Coming Soon</h3>
        </FadeInSection>
        <div className="grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-28">
          {comingSoon.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 bg-white/[0.015] border border-white/[0.04] rounded-xl p-4 opacity-60"
            >
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                <feature.icon className="w-3.5 h-3.5 text-white/30" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm font-semibold text-white/60">{feature.title}</h4>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-white/[0.04] text-white/30 border border-white/[0.06]">SOON</span>
                </div>
                <p className="text-xs text-white/25 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why choose SafetyZone */}
        <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Why choose{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SafetyZone?
            </span>
          </h2>
          <p className="text-sm text-white/35">
            The most advanced food allergy and nutrition app available.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
