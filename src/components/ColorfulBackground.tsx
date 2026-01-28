import { motion } from 'framer-motion';

const ColorfulBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large gradient blobs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-accent/25 via-accent/10 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-[700px] h-[400px] rounded-full bg-gradient-to-t from-secondary/20 via-primary/10 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full bg-gradient-to-l from-accent/20 to-transparent blur-3xl"
      />

      {/* Floating circles */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-4 h-4 rounded-full bg-primary/40"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-[20%] w-6 h-6 rounded-full bg-accent/30"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] w-5 h-5 rounded-full bg-secondary/40"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-primary/50"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-[20%] left-[40%] w-2 h-2 rounded-full bg-accent/60"
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-[35%] right-[30%] w-4 h-4 rounded-full bg-primary/35"
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
};

export default ColorfulBackground;
