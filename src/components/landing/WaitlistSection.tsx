import { motion } from 'framer-motion';
import { Bell, Users, Sparkles } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-28 bg-muted/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Bell className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Stay Updated</span>
              </span>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Join our{' '}
                <span className="text-primary italic">community</span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Be the first to know about new features, updates, and exclusive early access to premium tools.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Early access to new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Join a community of food safety advocates</span>
                </div>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-3xl p-8 border border-border shadow-xl"
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
