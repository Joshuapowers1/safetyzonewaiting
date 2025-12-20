import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import WaitlistForm from '@/components/WaitlistForm';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>Safety Zone - AI Dietary Restriction App | Coming Soon</title>
        <meta name="description" content="Join the waitlist for Safety Zone - your AI-powered dietary companion. Navigate food allergies and restrictions with intelligent, personalized guidance. Launching January 2026." />
        <meta name="keywords" content="dietary restrictions, food allergies, AI assistant, meal planning, allergy scanner, food safety" />
        <link rel="canonical" href="https://safetyzone.app" />
      </Helmet>

      <AnimatePresence>
        {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-background overflow-hidden relative">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Gradient overlays */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(174_72%_46%_/_0.1)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(170_80%_55%_/_0.08)_0%,_transparent_50%)]" />
        </div>

        {/* Admin Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed top-4 right-4 z-30"
        >
          <Link
            to="/auth"
            className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
          >
            <Lock className="w-3 h-3" />
            <span>Admin</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center py-12"
        >
          <div className="w-full max-w-4xl space-y-12">
            <HeroSection />
            <WaitlistForm />
          </div>
        </motion.main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-4 left-0 right-0 text-center z-10"
        >
          <p className="text-xs text-muted-foreground">
            © 2024 Safety Zone. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </>
  );
};

export default Index;
