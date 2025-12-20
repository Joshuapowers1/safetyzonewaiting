import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import SocialLinks from './SocialLinks';

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
              "0 0 20px hsl(185 100% 50% / 0.3)",
              "0 0 40px hsl(185 100% 50% / 0.5)",
              "0 0 20px hsl(185 100% 50% / 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center"
        >
          <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
        </motion.div>
      </motion.div>

      {/* Coming Soon Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-6"
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
        className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-8"
      >
        The future of safety is almost here. Be among the first to experience 
        <span className="text-primary"> revolutionary protection</span>.
      </motion.p>

      {/* Timeline Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-sm text-muted-foreground tracking-wider uppercase">
          Expected Launch: <span className="text-accent font-semibold">Q1 2025</span>
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
