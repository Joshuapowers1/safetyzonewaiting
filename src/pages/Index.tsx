import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import StatsSection from '@/components/landing/StatsSection';
import FounderSection from '@/components/landing/FounderSection';
import WaitlistSection from '@/components/landing/WaitlistSection';
import CTASection from '@/components/landing/CTASection';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>SafetyZone - AI-Powered Food Allergy & Dietary Safety App | Scan Menus & Products</title>
        <meta name="description" content="SafetyZone is the #1 AI food safety app for 200M+ people with allergies, celiac, diabetes & dietary restrictions. Scan menus, barcodes & recipes with 99.5% accuracy. HIPAA-level privacy. Download free!" />
        <meta name="keywords" content="food allergy app, allergy scanner, menu scanner, barcode allergen scanner, celiac app, gluten free scanner, dairy allergy, peanut allergy app, food safety, dietary restrictions, halal food app, kosher food app, vegan scanner, calorie tracker, nutrition app, AI food scanner" />
        <link rel="canonical" href="https://mysafetyzone.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mysafetyzone.com" />
        <meta property="og:title" content="SafetyZone - AI Food Safety for Allergies & Dietary Restrictions" />
        <meta property="og:description" content="Scan menus, products & recipes with 99.5% accuracy. Built for 200M+ people with food allergies, celiac, diabetes & dietary needs." />
        <meta property="og:site_name" content="SafetyZone" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mysafetyzone.com" />
        <meta name="twitter:title" content="SafetyZone - AI Food Allergy & Safety App" />
        <meta name="twitter:description" content="The #1 AI-powered food safety platform. Scan menus, barcodes & recipes. Trusted by millions with dietary restrictions." />
        <meta name="twitter:site" content="@SafetyZoneApp" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Powers Solutions USA LLC" />
        <meta name="theme-color" content="#2dd4bf" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SafetyZone",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "iOS, Android",
            "description": "AI-powered food safety platform for managing dietary restrictions, allergies, and special diets with 99.5% accuracy.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC"
            },
            "featureList": "Menu Scanner, Barcode Scanner, CalorieSnap, Recipe AI, Family Profiles, QR Dietary Profiles"
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafetyZone",
            "url": "https://mysafetyzone.com",
            "logo": "https://mysafetyzone.com/logo.png",
            "description": "AI-powered food safety platform for dietary restrictions",
            "founder": {
              "@type": "Person",
              "name": "Joshua Powers"
            },
            "sameAs": [
              "https://instagram.com/safetyzoneofficial",
              "https://www.linkedin.com/company/mysafetyzone/"
            ]
          })}
        </script>
      </Helmet>

      <AnimatePresence>
        {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <StatsSection />
          <FounderSection />
          <WaitlistSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
