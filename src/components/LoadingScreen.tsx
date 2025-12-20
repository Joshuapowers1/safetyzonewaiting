import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(185_100%_50%_/_0.15)_0%,_transparent_70%)]" />
      
      {/* Animated rings */}
      <div className="absolute">
        <motion.div
          className="w-48 h-48 rounded-full border border-primary/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
      <div className="absolute">
        <motion.div
          className="w-48 h-48 rounded-full border border-secondary/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
      </div>
      
      {/* Logo */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          animate={{ 
            boxShadow: [
              "0 0 20px hsl(185 100% 50% / 0.3)",
              "0 0 60px hsl(185 100% 50% / 0.6)",
              "0 0 20px hsl(185 100% 50% / 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
            <Shield className="w-12 h-12 text-primary-foreground" />
          </div>
        </motion.div>
        
        <motion.h1
          className="font-display text-3xl font-bold tracking-wider glow-text text-primary"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          SAFETY ZONE
        </motion.h1>
        
        {/* Loading bar */}
        <motion.div
          className="w-48 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
