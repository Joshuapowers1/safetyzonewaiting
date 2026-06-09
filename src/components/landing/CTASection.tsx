import { motion } from 'framer-motion';
import { Apple, Play, BadgeCheck, CalendarClock, Star, Languages, CreditCard } from 'lucide-react';
import IPhoneFrame from '@/components/ui/iphone-frame';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const trustSignals = [
  { icon: BadgeCheck, label: 'Free to Download' },
  { icon: CalendarClock, label: '7-Day Free Trial' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Languages, label: '200+ Languages' },
  { icon: CreditCard, label: 'No Credit Card' },
];

const CTASection = () => {
  return (
    <section
      className="relative w-full py-[120px] px-4 overflow-hidden"
      aria-label="Download My SafetyZone"
    >
      {/* Rich navy → teal gradient + radial burst */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #060a14 0%, #07131c 45%, #042e2a 100%)' }} />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(0,194,168,0.16) 0%, rgba(0,229,255,0.05) 45%, transparent 75%)' }} />
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C2A8]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr_auto] items-center gap-10">
          {/* Left phone */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-[185px] -rotate-[8deg]"
          >
            <div className="sz-bob">
              <IPhoneFrame>
                <img
                  src="/screenshots/home-screen.png"
                  alt="SafetyZone app home dashboard"
                  className="w-full aspect-[9/19.5] object-contain bg-white"
                  width="185"
                  height="401"
                  loading="lazy"
                />
              </IPhoneFrame>
            </div>
          </motion.div>

          {/* Center content */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight"
            >
              Your safety starts with the{' '}
              <span className="bg-gradient-to-r from-[#00C2A8] to-[#00E5FF] bg-clip-text text-transparent">download.</span>
            </motion.h2>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-x-7 gap-y-3 flex-wrap my-8 text-sm text-white/60"
            >
              {trustSignals.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#00C2A8]" strokeWidth={1.75} />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Store buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-4 flex-wrap"
              role="group"
              aria-label="Download options"
            >
              <motion.a
                href={IOS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                className="inline-flex items-center gap-3 rounded-2xl bg-white/95 px-8 py-4 text-[#05080f] shadow-[0_8px_32px_-8px_rgba(255,255,255,0.3)] backdrop-blur-xl border border-white/40 hover:shadow-[0_8px_48px_-6px_rgba(0,194,168,0.55)] transition-shadow"
              >
                <Apple className="w-7 h-7" />
                <span className="text-left leading-tight">
                  <span className="block text-[11px] font-medium opacity-70">Download on the</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </span>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.15] bg-white/[0.03] px-8 py-4 text-white/70 backdrop-blur-xl cursor-default hover:border-[#00C2A8]/40 hover:shadow-[0_8px_48px_-10px_rgba(0,194,168,0.45)] transition-all"
                aria-label="Coming soon on Google Play"
              >
                <Play className="w-6 h-6 fill-current" />
                <span className="text-left leading-tight">
                  <span className="block text-[11px] font-medium opacity-60 uppercase tracking-wide">Coming soon on</span>
                  <span className="block text-lg font-semibold">Google Play</span>
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-[185px] rotate-[8deg]"
          >
            <div className="sz-bob-delayed">
              <IPhoneFrame>
                <img
                  src="/screenshots/allergen-card.png"
                  alt="SafetyZone digital QR allergy card"
                  className="w-full aspect-[9/19.5] object-contain bg-white"
                  width="185"
                  height="401"
                  loading="lazy"
                />
              </IPhoneFrame>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
