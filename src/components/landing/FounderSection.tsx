import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import joshHeadshot from '@/assets/josh-headshot.png';
import { FadeInSection } from '@/components/ui/fade-in-section';

const FounderSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  return (
    <section ref={sectionRef} id="about" className="py-28 relative overflow-hidden bg-slate-950" aria-label="About SafetyZone founder Joshua Powers - food allergy app built from personal experience">
      <motion.div
        aria-hidden="true"
        style={{ opacity: glowOpacity }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/[0.12] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Photo with scroll parallax */}
            <div className="md:col-span-2 flex justify-center">
              <motion.div style={{ y: photoY }}>
                <FadeInSection delay={0.2}>
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1.05, 1.18, 1.05], opacity: [0.4, 0.6, 0.4] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-gradient-to-br from-teal-400/40 to-cyan-400/20 rounded-full blur-3xl"
                    />
                    <img
                      src={joshHeadshot}
                      alt="Joshua Powers - Founder and CEO of SafetyZone food allergy app, living with anaphylactic peanut and dairy allergies"
                      loading="lazy"
                      className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-[3px] border-teal-400/30 shadow-[0_24px_80px_-16px_rgba(0,0,0,0.8)]"
                      width="256"
                      height="256"
                    />
                  </div>
                </FadeInSection>
              </motion.div>
            </div>

            {/* Story */}
            <div className="md:col-span-3 space-y-6">
              <FadeInSection direction="right" delay={0.2}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-medium text-slate-300 mb-4">
                  Why We Built My SafetyZone
                </span>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                  A food allergy app built from{' '}
                  <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                    lived experience
                  </span>
                </h2>

                <div className="relative pl-6 border-l-2 border-teal-400/30 space-y-4">
                  <Quote className="absolute -left-3 -top-1 w-6 h-6 text-teal-400/50 bg-slate-950" />
                  <p className="text-base text-slate-400 leading-relaxed">
                    My SafetyZone was founded by Joshua Powers, who has lived with{' '}
                    <span className="text-white font-medium">anaphylactic food allergies</span>{' '}
                    to dairy, eggs, and nuts his entire life. Years of anxiety-filled dining experiences, emergency room visits, and life-threatening allergic reactions inspired him to build the most comprehensive food allergy management app available.
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    My SafetyZone's AI technology detects hidden allergens, cross-contamination risks, and ingredient derivatives that other food allergy apps miss. It supports{' '}
                    <span className="text-slate-300 font-medium">200+ languages</span> for global food allergy safety and travel protection.
                  </p>
                </div>

                <div className="h-px bg-white/[0.08] my-6" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-sm font-bold text-teal-300">
                    JP
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Joshua Powers</div>
                    <div className="text-xs text-slate-500">Founder & CEO, My SafetyZone</div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
