import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import ColorfulBackground from '@/components/ColorfulBackground';
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
        <link rel="canonical" href="https://mysafetyzone.com" />
      </Helmet>

      <AnimatePresence>
        {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-background overflow-hidden relative">
        {/* Moving Background */}
        <ColorfulBackground />

        {/* Admin Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="fixed top-4 right-4 z-30"
        >
          <Link
            to="/auth"
            className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
          >
            <Lock className="w-3 h-3" />
            <span>Admin</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center py-12"
        >
          <div className="w-full max-w-xl space-y-8">
            <HeroSection />
            <WaitlistForm />
          </div>
        </motion.main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-4 left-0 right-0 text-center z-10"
        >
          <p className="text-xs text-muted-foreground">
            © 2025 Powers Solutions USA LLC. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </>
  );
};

export default Index;
