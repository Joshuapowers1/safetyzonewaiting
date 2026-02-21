import { motion } from 'framer-motion';
import phoneQRProfile from '@/assets/phone-qr-profile.png';
import phoneRecipeAI from '@/assets/phone-recipe-ai.png';
const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Teal accent shape on right - diagonal like Spendee */}
      <div className="absolute top-0 right-0 w-[55%] h-full" style={{
      background: 'linear-gradient(135deg, transparent 0%, hsl(174, 60%, 80%) 50%, hsl(174, 65%, 75%) 100%)',
      clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)'
    }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="space-y-6 max-w-lg">
            <p className="text-primary font-medium text-sm uppercase tracking-widest">Beta coming soon</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] tracking-tight">
              <span className="text-foreground text-5xl font-light">Safety in every bite.</span>
            </h1>

            <p className="leading-relaxed text-base text-primary">The best AI-powered food safety app for anyone with allergies, dietary restrictions, or simply striving to eat better.</p>

            {/* Waitlist CTA */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="flex flex-wrap gap-3 pt-2">
              <a href="#waitlist" className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 rounded-lg transition-all font-semibold text-sm shadow-lg">
                Join the Waitlist
              </a>
              <a href="#features" className="inline-flex items-center gap-2.5 border border-border hover:bg-muted/50 text-foreground h-12 px-6 rounded-lg transition-all font-medium text-sm">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Crossed Phone Mockups */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[420px] lg:w-[500px] h-[450px] md:h-[550px] lg:h-[650px]">
              {/* Back phone - tilted right */}
              <motion.div initial={{
              opacity: 0,
              rotate: 0
            }} animate={{
              opacity: 1,
              rotate: 8
            }} transition={{
              duration: 0.7,
              delay: 0.5
            }} className="absolute top-0 right-0 z-10">
                <img src={phoneRecipeAI} alt="SafetyZone Recipe AI" className="w-[220px] md:w-[280px] lg:w-[320px] drop-shadow-2xl" />
              </motion.div>
              
              {/* Front phone - tilted left, overlapping */}
              <motion.div initial={{
              opacity: 0,
              rotate: 0
            }} animate={{
              opacity: 1,
              rotate: -8
            }} transition={{
              duration: 0.7,
              delay: 0.3
            }} className="absolute bottom-0 left-0 z-20">
                <img src={phoneQRProfile} alt="SafetyZone Personal QR Profile" className="w-[220px] md:w-[280px] lg:w-[320px] drop-shadow-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;