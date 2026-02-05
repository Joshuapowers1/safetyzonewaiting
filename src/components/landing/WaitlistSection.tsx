import { motion } from 'framer-motion';
import WaitlistForm from '@/components/WaitlistForm';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Coming Soon: New Features</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join our <span className="text-primary italic">community</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Be the first to know about new features, updates, and exclusive early access to premium tools.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
