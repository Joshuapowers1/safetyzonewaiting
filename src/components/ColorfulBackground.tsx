import { motion } from 'framer-motion';
import { Leaf, Apple, Carrot, Heart, Shield, Sparkles } from 'lucide-react';

const ColorfulBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/15 via-primary/8 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/12 via-primary/6 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-emerald-400/10 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full bg-gradient-to-l from-teal-400/8 to-transparent blur-3xl"
      />

      {/* Floating food/health icons */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[8%] text-primary/20"
      >
        <Leaf className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[25%] right-[12%] text-emerald-500/20"
      >
        <Apple className="w-10 h-10" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] left-[5%] text-orange-400/20"
      >
        <Carrot className="w-7 h-7" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[40%] right-[6%] text-rose-400/20"
      >
        <Heart className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-[20%] right-[15%] text-primary/15"
      >
        <Shield className="w-9 h-9" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[60%] left-[10%] text-yellow-400/20"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      {/* Decorative circles */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-primary/25"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[35%] right-[25%] w-4 h-4 rounded-full bg-emerald-400/20"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[35%] left-[25%] w-2 h-2 rounded-full bg-teal-400/30"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[55%] right-[18%] w-3 h-3 rounded-full bg-primary/20"
      />
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-[25%] right-[30%] w-2 h-2 rounded-full bg-emerald-500/25"
      />

      {/* Subtle decorative lines */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[15%] w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[40%] right-[20%] w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent -rotate-45"
      />
    </div>
  );
};

export default ColorfulBackground;
