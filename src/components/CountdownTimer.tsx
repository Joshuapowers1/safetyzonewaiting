import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-02-04T23:59:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 justify-center">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            className="w-14 h-14 md:w-16 md:h-16 bg-card rounded-xl flex items-center justify-center border border-border shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -4px hsl(174 72% 38% / 0.2)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.span 
              key={block.value}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-xl md:text-2xl font-bold text-primary tabular-nums"
            >
              {String(block.value).padStart(2, '0')}
            </motion.span>
          </motion.div>
          <span className="text-xs text-muted-foreground mt-1.5 font-medium">
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
