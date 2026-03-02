import { motion } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';
import joshHeadshot from '@/assets/josh-headshot.png';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimatedSeparator } from '@/components/ui/animated-separator';

const FounderSection = () => {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            {/* Image */}
            <div className="md:col-span-2 flex justify-center">
              <FadeInSection delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-3xl opacity-50 scale-110" />
                  <div className="relative">
                    <img
                      src={joshHeadshot}
                      alt="Joshua Powers - Founder of SafetyZone"
                      className="relative z-10 w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-background shadow-2xl"
                    />
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <Heart className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                    </motion.div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              <FadeInSection direction="right" delay={0.2}>
                <AnimatedBadge pulse={false} className="mb-4">Our Story</AnimatedBadge>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Built from{' '}
                  <GradientText className="italic font-bold">personal experience</GradientText>
                </h2>

                <div className="relative pl-8 border-l-4 border-primary/30 space-y-4">
                  <Quote className="absolute -left-4 -top-2 w-8 h-8 text-primary/30 bg-background" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    SafetyZone was founded by Joshua Powers, who has lived with <span className="text-foreground font-medium">anaphylactic food allergies</span> to dairy, eggs, and nuts his entire life. Years of anxiety-filled dining and life-threatening reactions inspired the creation of this platform.
                  </p>
                   <p className="text-muted-foreground leading-relaxed">
                     Our technology detects hidden allergens, cross-contamination risks, and ingredient derivatives that others miss, supporting <span className="text-foreground font-medium">200+ languages</span> for global accessibility.
                   </p>
                </div>

                <AnimatedSeparator className="my-8" />

                <div className="pt-2 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-bold text-primary">
                    JP
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">Joshua Powers</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO, SafetyZone</div>
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
