import { motion } from 'framer-motion';

const ColorfulBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient - warm sophisticated tones */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, hsl(174 72% 38% / 0.08), transparent 50%),
            radial-gradient(ellipse 80% 120% at 100% 50%, hsl(168 70% 42% / 0.06), transparent 40%),
            radial-gradient(ellipse 80% 120% at 0% 80%, hsl(35 80% 55% / 0.05), transparent 40%),
            hsl(var(--background))
          `,
        }}
      />

      {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(174 72% 38% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating orbs - refined and subtle */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[15%] w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(174 72% 45% / 0.12), hsl(174 72% 38% / 0.04) 60%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 70% 70%, hsl(168 70% 42% / 0.1), hsl(168 70% 42% / 0.03) 60%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[50%] left-[60%] w-[250px] h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, hsl(35 80% 55% / 0.08), transparent 60%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Geometric accent rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] w-48 h-48"
      >
        <div className="absolute inset-0 rounded-full border border-primary/10" />
        <div className="absolute inset-4 rounded-full border border-dashed border-primary/8" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] right-[8%] w-56 h-56"
      >
        <div className="absolute inset-0 rounded-full border border-accent/10" />
        <div className="absolute inset-6 rounded-full border border-accent/8" />
        <div className="absolute inset-12 rounded-full border border-dashed border-accent/6" />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[25%] w-8 h-8 border border-primary/20 rounded-lg rotate-45"
      />

      <motion.div
        animate={{ 
          y: [0, 12, 0],
          rotate: [45, 40, 45],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[65%] left-[20%] w-6 h-6 border border-accent/20 rounded rotate-45"
      />

      <motion.div
        animate={{ 
          y: [0, -10, 0],
          x: [0, 8, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[20%] left-[40%] w-4 h-4 bg-primary/10 rounded-full"
      />

      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[35%] right-[35%] w-3 h-3 bg-accent/15 rounded-full"
      />

      {/* Subtle crossing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174 72% 38%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(174 72% 38%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(174 72% 38%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(168 70% 42%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(168 70% 42%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(168 70% 42%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0" y1="30%" x2="100%" y2="70%"
          stroke="url(#lineGrad1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.line
          x1="100%" y1="20%" x2="0" y2="60%"
          stroke="url(#lineGrad2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <div className="absolute top-8 left-0 w-16 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute top-0 left-8 w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
        <div className="absolute bottom-8 right-0 w-16 h-px bg-gradient-to-l from-accent/40 to-transparent" />
        <div className="absolute bottom-0 right-8 w-px h-16 bg-gradient-to-t from-accent/40 to-transparent" />
      </div>

      {/* Animated glow pulse */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, hsl(174 72% 38% / 0.15), transparent 50%)',
        }}
      />
    </div>
  );
};

export default ColorfulBackground;
