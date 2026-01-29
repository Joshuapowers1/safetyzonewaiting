import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import SocialLinks from './SocialLinks';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  return (
    <div className="relative z-10 text-center px-4">
      {/* Logo with glow effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px hsl(174 72% 38% / 0.2)",
              "0 0 30px hsl(174 72% 38% / 0.3)",
              "0 0 20px hsl(174 72% 38% / 0.2)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl overflow-hidden"
        >
          <img 
            src={logo} 
            alt="Safety Zone Logo" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Main Heading - Cursive font */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-3"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground italic">
          Safety Zone
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed"
      >
        Your <span className="text-primary font-medium">AI-powered</span> dietary companion. Navigate food allergies with personalized guidance.
      </motion.p>

      {/* Coming Soon Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Launching February 4, 2026
        </span>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8"
      >
        <CountdownTimer />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default HeroSection;
