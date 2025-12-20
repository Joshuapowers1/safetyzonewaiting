import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import SocialLinks from './SocialLinks';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  return (
    <div className="relative z-10 text-center px-4 py-8 md:py-16">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px hsl(174 72% 46% / 0.3)",
              "0 0 40px hsl(174 72% 46% / 0.5)",
              "0 0 20px hsl(174 72% 46% / 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="rounded-2xl overflow-hidden"
        >
          <img 
            src={logo} 
            alt="Safety Zone Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Coming Soon Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6"
      >
        <motion.span
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.span>
        <span className="text-sm font-medium tracking-wider uppercase">Coming Soon</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
      >
        <span className="text-foreground">SAFETY</span>{' '}
        <span className="text-primary glow-text">ZONE</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8"
      >
        Your AI-powered dietary companion. Navigate food allergies and restrictions with 
        <span className="text-primary"> intelligent, personalized guidance</span>.
      </motion.p>

      {/* Timeline Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-sm text-muted-foreground tracking-wider uppercase">
          Expected Launch: <span className="text-accent font-semibold">January 20, 2026</span>
        </span>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-12"
      >
        <CountdownTimer />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-sm text-muted-foreground mb-4">Follow our journey</p>
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default HeroSection;
