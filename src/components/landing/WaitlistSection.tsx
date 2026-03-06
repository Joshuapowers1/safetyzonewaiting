import { motion } from 'framer-motion';
import { Bell, Users, Sparkles } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { Typewriter } from '@/components/ui/typewriter';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,25%,5%)] via-[hsl(210,30%,8%)] to-[hsl(200,25%,5%)]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(174 72% 45% / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left" className="space-y-6">
              <AnimatedBadge>
                <Bell className="w-3.5 h-3.5" />
                Stay Updated
              </AnimatedBadge>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                Join our{' '}
                <GradientText className="italic font-bold">community</GradientText>
              </h2>

              <p className="text-lg text-white/60">
                Be the first to{' '}
                <Typewriter
                  words={['scan menus safely', 'track allergens', 'protect your family', 'eat with confidence']}
                  className="text-primary font-medium"
                />
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/60">Early access to new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/60">Join a community of food safety advocates</span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
                <WaitlistForm />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
