import { motion } from 'framer-motion';
import {
  Pill, AlertTriangle, MessageCircle, Users, QrCode, Camera,
  ChefHat, Plane, ScanBarcode, BellRing, Apple as AppleIcon,
} from 'lucide-react';
import IPhoneFrame from '@/components/ui/iphone-frame';
import { Marquee } from '@/components/ui/marquee';

const tickerItems = [
  'Community', 'FDA Recall Alerts', 'Medication Tracker', 'In-App Chat Support',
  'Barcode Scanner', 'EpiPen Reminders', 'Travel Mode', 'Recipe AI', 'Nutrition Tracking',
];

const spotlights = [
  {
    icon: Users,
    title: 'A community that gets it',
    description: 'Swap safe restaurants and real-world advice with people who share your restrictions.',
  },
  {
    icon: Pill,
    title: 'Never carry expired protection',
    description: 'Automatic reminders before your EpiPen, inhaler, or medical device expires.',
  },
  {
    icon: AlertTriangle,
    title: 'Recalls, before they reach you',
    description: 'Real-time FDA alerts personalized to your exact allergen profile.',
  },
];

const glass = 'border border-white/[0.07] bg-white/[0.03] backdrop-blur-[20px]';

const cardReveal = (i: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const FeaturesSection = () => {
  return (
    <section id="features" className="py-[120px] relative overflow-hidden bg-[#05080f]" aria-label="SafetyZone features">
      {/* Ambient glow + top gradient divider */}
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C2A8]/30 to-transparent" />
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00C2A8]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[rgba(255,255,255,0.35)] mb-4"
          >
            <span className="text-[#00C2A8]">Features</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4"
          >
            Everything you need to eat safely
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-white/60"
          >
            Packed with the features that matter most.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
          {/* Large featured card — QR Allergen Card, spans 2x2 */}
          <motion.div
            {...cardReveal(0)}
            className={`relative md:col-span-2 lg:row-span-2 rounded-3xl ${glass} p-8 overflow-hidden group hover:border-[#00C2A8]/30 transition-colors`}
          >
            <div aria-hidden="true" className="absolute -top-16 -right-16 w-64 h-64 bg-[#00C2A8]/[0.1] rounded-full blur-[80px]" />
            <div className="relative flex flex-col h-full">
              <QrCode className="w-7 h-7 text-[#00C2A8] mb-4" strokeWidth={1.75} />
              <h3 className="font-display text-2xl font-semibold text-white mb-2">Digital QR Allergen Card</h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-sm mb-8">
                Your allergies translated into 200+ languages on a scannable card. Show it at any restaurant, kitchen, or food counter anywhere in the world.
              </p>
              <div className="flex-1 flex items-end justify-center">
                <div className="w-[200px] md:w-[220px]">
                  <IPhoneFrame>
                    <img
                      src="/screenshots/allergen-card.png"
                      alt="SafetyZone digital QR allergy card"
                      className="w-full aspect-[9/19.5] object-contain bg-white"
                      width="220"
                      height="477"
                      loading="lazy"
                    />
                  </IPhoneFrame>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium — Nutrition */}
          <motion.div
            {...cardReveal(1)}
            className={`relative md:col-span-2 lg:col-span-2 rounded-3xl ${glass} p-8 overflow-hidden hover:border-[#00C2A8]/30 transition-colors`}
          >
            <div aria-hidden="true" className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#00E5FF]/[0.07] rounded-full blur-[70px]" />
            <Camera className="w-7 h-7 text-[#00C2A8] mb-4" strokeWidth={1.75} />
            <h3 className="font-display text-xl font-semibold text-white mb-2">Nutrition, from a photo</h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Snap any meal for instant AI analysis — calories, macros, water, and hydration goals logged in one place.
            </p>
          </motion.div>

          {/* Medium — Recipe AI */}
          <motion.div
            {...cardReveal(2)}
            className={`relative md:col-span-1 lg:col-span-1 rounded-3xl ${glass} p-8 overflow-hidden hover:border-[#00C2A8]/30 transition-colors`}
          >
            <ChefHat className="w-7 h-7 text-[#00C2A8] mb-4" strokeWidth={1.75} />
            <h3 className="font-display text-xl font-semibold text-white mb-2">Recipe AI</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Transform any recipe to be safe for you, with substitutions from 2M+ verified recipes.
            </p>
          </motion.div>

          {/* Small — Travel Mode */}
          <motion.div
            {...cardReveal(3)}
            className={`relative md:col-span-1 lg:col-span-1 rounded-3xl ${glass} p-8 overflow-hidden hover:border-[#00C2A8]/30 transition-colors`}
          >
            <Plane className="w-7 h-7 text-[#00C2A8] mb-4" strokeWidth={1.75} />
            <h3 className="font-display text-xl font-semibold text-white mb-2">Travel Mode</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              AI travel guides with local phrases, safe restaurants, and emergency info for your destination.
            </p>
          </motion.div>
        </div>

        {/* ===== Also included ===== */}
        <div className="max-w-6xl mx-auto mt-[120px]">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight text-center mb-10"
          >
            Also in every download
          </motion.h3>

          {/* Infinite marquee ticker */}
          <div
            aria-hidden="true"
            className="mb-14"
            style={{
              maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <Marquee speed={38}>
              {tickerItems.map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.03] backdrop-blur-[20px] px-6 py-2.5 text-sm text-white/60"
                >
                  {item}
                </span>
              ))}
            </Marquee>
          </div>

          {/* 3 spotlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {spotlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...cardReveal(i)}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-3xl ${glass} p-8 overflow-hidden transition-shadow hover:shadow-[0_24px_64px_-16px_rgba(0,194,168,0.25)]`}
                  style={{
                    backgroundImage:
                      'linear-gradient(#05080f, #05080f), linear-gradient(140deg, rgba(0,194,168,0.35), rgba(255,255,255,0.06) 40%, rgba(0,229,255,0.25))',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#00C2A8]/[0.1] border border-[#00C2A8]/25 mb-5"
                  >
                    <Icon className="w-6 h-6 text-[#00C2A8]" strokeWidth={1.75} />
                  </motion.div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Quiet capability row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex items-center justify-center gap-8 flex-wrap text-white/35 text-sm"
          >
            <span className="inline-flex items-center gap-2"><ScanBarcode className="w-4 h-4" /> Barcode Scanner</span>
            <span className="inline-flex items-center gap-2"><BellRing className="w-4 h-4" /> EpiPen Reminders</span>
            <span className="inline-flex items-center gap-2"><MessageCircle className="w-4 h-4" /> In-App Chat Support</span>
            <span className="inline-flex items-center gap-2"><AppleIcon className="w-4 h-4" /> Built for iOS</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
