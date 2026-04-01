import { Quote } from 'lucide-react';
import joshHeadshot from '@/assets/josh-headshot.png';
import { FadeInSection } from '@/components/ui/fade-in-section';

const FounderSection = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[hsl(220,25%,4%)]">
      <div className="absolute top-1/2 left-0 w-60 h-60 bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <FadeInSection delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl opacity-40 scale-110" />
                  <img
                    src={joshHeadshot}
                    alt="Joshua Powers - Founder of SafetyZone"
                    loading="lazy"
                    className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-[3px] border-white/[0.08] shadow-2xl"
                  />
                </div>
              </FadeInSection>
            </div>

            {/* Story */}
            <div className="md:col-span-3 space-y-6">
              <FadeInSection direction="right" delay={0.2}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-white/60 mb-4">
                  Our Story
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Built from{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    personal experience
                  </span>
                </h2>

                <div className="relative pl-6 border-l-2 border-primary/20 space-y-4">
                  <Quote className="absolute -left-3 -top-1 w-6 h-6 text-primary/30 bg-[hsl(220,25%,4%)]" />
                  <p className="text-base text-white/50 leading-relaxed">
                    SafetyZone was founded by Joshua Powers, who has lived with{' '}
                    <span className="text-white/80 font-medium">anaphylactic food allergies</span>{' '}
                    to dairy, eggs, and nuts his entire life. Years of anxiety-filled dining and life-threatening reactions inspired this platform.
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Our technology detects hidden allergens, cross-contamination risks, and ingredient derivatives that others miss — supporting{' '}
                    <span className="text-white/60 font-medium">200+ languages</span> for global accessibility.
                  </p>
                </div>

                <div className="h-px bg-white/[0.06] my-6" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    JP
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Joshua Powers</div>
                    <div className="text-xs text-white/40">Founder & CEO, SafetyZone</div>
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
