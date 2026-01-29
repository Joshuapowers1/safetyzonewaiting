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
        <title>Food Allergies App | Safety Zone - AI-Powered Allergy & Dietary Restriction Management</title>
        <meta name="description" content="The #1 food allergies app. Safety Zone uses AI to help you navigate food allergies, dietary restrictions, celiac disease, lactose intolerance, nut allergies, gluten sensitivity, and more. Scan ingredients, find safe restaurants, and eat confidently. Launching February 4, 2026 - Join the waitlist!" />
        <meta name="keywords" content="food allergies, food allergy app, allergy management, dietary restrictions, food intolerance, allergen scanner, AI food assistant, gluten free, nut allergy, dairy free, food safety app, celiac disease, lactose intolerance, egg allergy, shellfish allergy, soy allergy, wheat allergy, peanut allergy, tree nut allergy, sesame allergy, food sensitivity, elimination diet, allergy friendly restaurants, ingredient scanner, food label reader, cross contamination, anaphylaxis prevention, epipen reminder, allergy tracker, meal planning allergies, safe eating, food allergy management, kids food allergies, baby food allergies, allergy free recipes, vegan diet, vegetarian diet, kosher food, halal food, fodmap diet, autoimmune diet, anti inflammatory diet" />
        <link rel="canonical" href="https://mysafetyzone.com" />
        <meta property="og:title" content="Food Allergies App | Safety Zone - AI-Powered Allergy Management" />
        <meta property="og:description" content="The #1 food allergies app. Navigate allergies, intolerances, and dietary restrictions with AI-powered guidance. Launching February 4, 2026." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mysafetyzone.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food Allergies App | Safety Zone" />
        <meta name="twitter:description" content="The #1 food allergies app. AI-powered allergy management launching February 4, 2026." />
        <meta name="twitter:site" content="@SafetyZoneApp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Safety Zone",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "description": "AI-powered food allergy and dietary restriction management app. Helps users navigate food allergies, scan ingredients, find safe restaurants, and manage dietary needs.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/PreOrder"
            },
            "author": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC"
            },
            "keywords": "food allergies, dietary restrictions, allergy app, gluten free, nut allergy, celiac, lactose intolerance, food intolerance, allergen scanner"
          })}
        </script>
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
