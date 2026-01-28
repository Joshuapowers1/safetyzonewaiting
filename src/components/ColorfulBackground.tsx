import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ColorfulBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated gradient mesh - moves slowly */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, hsl(174 72% 38% / 0.15), transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 70%, hsl(168 70% 42% / 0.12), transparent 50%),
            radial-gradient(ellipse 70% 50% at 50% 50%, hsl(160 60% 45% / 0.08), transparent 60%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Floating transparent shapes */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full border border-primary/10"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] right-[15%] w-48 h-48 rounded-full border border-accent/10"
        style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }}
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[5%] w-32 h-32 rounded-full border border-primary/8"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[8%] w-40 h-40 rounded-full border border-primary/10"
      />

      {/* Moving gradient blobs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/8 to-transparent blur-3xl"
      />

      {/* Subtle moving dots */}
      <motion.div
        animate={{ y: [0, -100, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-primary/30"
      />
      <motion.div
        animate={{ y: [0, 80, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[25%] w-3 h-3 rounded-full bg-primary/25"
      />
      <motion.div
        animate={{ y: [0, -60, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[40%] left-[35%] w-2 h-2 rounded-full bg-accent/30"
      />
      <motion.div
        animate={{ y: [0, 70, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] left-[60%] w-2 h-2 rounded-full bg-primary/20"
      />

      {/* Animated lines */}
      <motion.div
        animate={{ 
          x: [-200, 200],
          opacity: [0, 0.15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <motion.div
        animate={{ 
          x: [200, -200],
          opacity: [0, 0.1, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
        className="absolute top-[65%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent"
      />
    </div>
  );
};

export default ColorfulBackground;
