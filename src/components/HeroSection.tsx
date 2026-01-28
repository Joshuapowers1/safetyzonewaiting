import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import SocialLinks from './SocialLinks';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  return (
    <div className="relative z-10 text-center px-4">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        <img 
          src={logo} 
          alt="Safety Zone Logo" 
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
        />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-tight text-foreground"
      >
        Safety Zone
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed"
      >
        Your AI-powered dietary companion. Navigate food allergies with personalized guidance.
      </motion.p>

      {/* Coming Soon Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6"
      >
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Launching January 31, 2026
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
