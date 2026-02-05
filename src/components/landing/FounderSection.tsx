import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import joshHeadshot from '@/assets/josh-headshot.png';

const FounderSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-5 gap-12 items-center"
          >
            {/* Image */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl opacity-50" />
                <img
                  src={joshHeadshot}
                  alt="Joshua Powers - Founder of SafetyZone"
                  className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-primary/20"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Built from <span className="text-primary italic">personal experience</span>
              </h2>

              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/20" />
                <p className="text-lg text-muted-foreground pl-6">
                  SafetyZone was founded by Joshua Powers, who has lived with anaphylactic food allergies to dairy, eggs, and nuts his entire life. Years of anxiety-filled dining and life-threatening reactions inspired the creation of this platform.
                </p>
              </div>

              <p className="text-muted-foreground">
                Our technology detects hidden allergens, cross-contamination risks, and ingredient derivatives that others miss—supporting 200+ languages for global accessibility. We understand that for millions of people, food safety isn't just a preference—it's a matter of life and death.
              </p>

              <div className="pt-4">
                <div className="font-semibold text-foreground">Joshua Powers</div>
                <div className="text-sm text-muted-foreground">Founder & CEO, SafetyZone</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
