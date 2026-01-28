import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_65%_42%_/_0.12)_0%,_transparent_70%)]" />
      
      {/* Soft animated ring */}
      <div className="absolute">
        <motion.div
          className="w-40 h-40 rounded-full border border-primary/15"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
      
      {/* Logo */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-glow-md"
          animate={{ 
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={logo} 
            alt="Safety Zone Logo" 
            className="w-24 h-24 object-contain"
          />
        </motion.div>
        
        <motion.h1
          className="text-2xl font-bold tracking-wide text-primary"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Safety Zone
        </motion.h1>
        
        {/* Loading bar */}
        <motion.div
          className="w-40 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
