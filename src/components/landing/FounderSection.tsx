import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import joshHeadshot from '@/assets/josh-headshot.png';

const FounderSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="about" className="py-[120px] relative overflow-hidden bg-[#05080f]" aria-label="About SafetyZone founder Joshua Powers - food allergy app built from personal experience">
      <div aria-hidden="true" className="absolute top-1/2 left-0 w-96 h-96 bg-[#00C2A8]/[0.08] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Cinematic 3:4 photo */}
            <div className="md:col-span-2 flex justify-center">
              <motion.div style={{ y: photoY }} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-64 md:w-72 aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.07] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9)]"
                >
                  <img
                    src={joshHeadshot}
                    alt="Joshua Powers - Founder and CEO of SafetyZone food allergy app, living with anaphylactic peanut and dairy allergies"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    width="288"
                    height="384"
                  />
                  {/* Teal gradient overlay + vignette */}
                  <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,194,168,0.28) 0%, transparent 38%)' }} />
                  <div aria-hidden="true" className="absolute inset-0" style={{ boxShadow: 'inset 0 0 90px rgba(0,0,0,0.55)' }} />
                </motion.div>

                {/* Floating Founder badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -right-4 top-6 rounded-full border border-[#00C2A8]/30 bg-[#05080f]/80 backdrop-blur-[20px] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#00C2A8] shadow-[0_8px_32px_-8px_rgba(0,194,168,0.5)]"
                >
                  Founder
                </motion.div>
              </motion.div>
            </div>

            {/* Story */}
            <div className="md:col-span-3">
              <motion.span
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#00C2A8] mb-6"
              >
                Why We Built My SafetyZone
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span aria-hidden="true" className="absolute -left-2 -top-8 font-display text-7xl text-[#00C2A8]/40 select-none">“</span>
                <p className="text-[26px] md:text-[32px] leading-snug italic text-white/90 font-light">
                  Years of anxiety-filled dining, ER visits, and life-threatening reactions inspired the most comprehensive food allergy app available.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 space-y-4"
              >
                <p className="text-base text-white/60 leading-relaxed">
                  My SafetyZone was founded by Joshua Powers, who has lived with{' '}
                  <span className="text-white font-medium">anaphylactic food allergies</span>{' '}
                  to dairy, eggs, and nuts his entire life. Its AI detects hidden allergens, cross-contamination risks, and ingredient derivatives other apps miss — in{' '}
                  <span className="text-white/80 font-medium">200+ languages</span> for safety anywhere on earth.
                </p>

                <div className="pt-4">
                  <div className="font-display font-semibold text-white">Joshua Powers</div>
                  <div className="h-px w-24 bg-gradient-to-r from-[#00C2A8]/60 to-transparent my-2" />
                  <div className="text-sm text-[rgba(255,255,255,0.35)]">Founder & CEO, My SafetyZone</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
