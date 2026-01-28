import { motion } from 'framer-motion';

const ColorfulBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base mesh gradient - modern premium colors */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 20%, rgba(139, 92, 246, 0.15), transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(6, 182, 212, 0.12), transparent 50%),
              radial-gradient(ellipse 70% 60% at 70% 80%, rgba(244, 114, 182, 0.1), transparent 50%),
              radial-gradient(ellipse 80% 70% at 10% 80%, rgba(34, 211, 238, 0.08), transparent 50%),
              radial-gradient(ellipse 100% 100% at 50% 50%, rgba(99, 102, 241, 0.05), transparent 60%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.25), rgba(139, 92, 246, 0.05) 40%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.2), rgba(34, 211, 238, 0.05) 40%, transparent 60%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(244, 114, 182, 0.18), rgba(244, 114, 182, 0.04) 40%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15), rgba(129, 140, 248, 0.04) 40%, transparent 60%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Subtle animated gradient wave */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, transparent 40%, rgba(6, 182, 212, 0.03) 60%, transparent 100%)',
        }}
      />

      {/* Noise texture overlay for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.02) 100%)',
        }}
      />

      {/* Floating accent dots */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[15%] w-2 h-2 rounded-full bg-violet-400/40"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-cyan-400/30"
      />
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-pink-400/35"
      />
      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[40%] right-[35%] w-1.5 h-1.5 rounded-full bg-indigo-400/40"
      />

      {/* Subtle geometric accents */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[10%] w-32 h-32"
      >
        <div className="absolute inset-0 rounded-full border border-violet-400/10" />
        <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/8" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] left-[8%] w-24 h-24"
      >
        <div className="absolute inset-0 rounded-full border border-pink-400/10" />
        <div className="absolute inset-3 rounded-full border border-indigo-400/8" />
      </motion.div>
    </div>
  );
};

export default ColorfulBackground;
