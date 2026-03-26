import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';

const FeaturesSection = lazy(() => import('@/components/landing/FeaturesSection'));
const StatsSection = lazy(() => import('@/components/landing/StatsSection'));
const FounderSection = lazy(() => import('@/components/landing/FounderSection'));
const WaitlistSection = lazy(() => import('@/components/landing/WaitlistSection'));
const CTASection = lazy(() => import('@/components/landing/CTASection'));
const TranslationDemo = lazy(() => import('@/components/landing/TranslationDemo'));
const AppShowcase = lazy(() => import('@/components/landing/AppShowcase'));

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>SafetyZone - #1 Food Allergy App | AI Menu Scanner & Allergen Detector</title>
        <meta name="description" content="SafetyZone is the best food allergy app for 200M+ people with peanut allergy, celiac disease, gluten intolerance, dairy allergy & dietary restrictions. AI-powered menu scanner, barcode allergen detector & recipe analyzer with 99.5% accuracy. Free download." />
        <meta name="keywords" content="food allergy app, SafetyZone, safety zone, allergy scanner, menu scanner, barcode allergen scanner, peanut allergy app, gluten free app, celiac app, dairy free scanner, nut allergy app, food intolerance app, allergen detector, AI food scanner, dietary restriction app, halal food app, kosher food app, vegan scanner, food label scanner, allergy management, anaphylaxis prevention, egg allergy, soy allergy, shellfish allergy, wheat allergy, tree nut allergy, food safety app, calorie tracker, nutrition app" />
        <link rel="canonical" href="https://mysafetyzone.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mysafetyzone.com" />
        <meta property="og:title" content="SafetyZone - #1 AI Food Allergy App | Scan Menus & Barcodes" />
        <meta property="og:description" content="The best food allergy app. Scan menus, products & recipes with AI to detect allergens. Built for peanut, gluten, dairy, nut allergies & more." />
        <meta property="og:site_name" content="SafetyZone" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mysafetyzone.com" />
        <meta name="twitter:title" content="SafetyZone - #1 AI Food Allergy Scanner App" />
        <meta name="twitter:description" content="Scan menus, barcodes & recipes to detect hidden allergens with 99.5% accuracy. Free food allergy app for peanut, gluten, dairy & nut allergies." />
        <meta name="twitter:site" content="@SafetyZoneApp" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Powers Solutions USA LLC" />
        <meta name="theme-color" content="#2dd4bf" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SafetyZone",
            "alternateName": ["Safety Zone", "SafetyZone App", "Safety Zone App"],
            "applicationCategory": "HealthApplication",
            "applicationSubCategory": "Food Allergy Management",
            "operatingSystem": "iOS, Android",
            "description": "Eat with confidence, not caution. SafetyZone is the most advanced food allergy app, powered by AI to keep you and your family safe. Scan menus, products, and barcodes instantly to detect allergens before you eat. Features: AI Menu Scanner, Product & Barcode Scanner, Recipe Transformer, QR Allergy Cards in 200+ languages, Family Profiles with EpiPen reminders, Travel Mode with destination-specific safety tips, FDA recall alerts, NutriScan AI calorie tracking, and cross-reactivity warnings. Supports peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish, sesame, and 50+ additional sensitivities.",
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
            "featureList": "AI Menu Scanner, Product & Barcode Scanner, Recipe Transformer, QR Allergy Cards in 200+ Languages, Family Allergy Profiles, EpiPen Expiration Reminders, Travel Mode, FDA Recall Alerts, NutriScan AI Calorie Tracking, Cross-Reactivity Warnings, Restaurant Recommendations, Personal Eating Analytics",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "150",
              "bestRating": "5"
            }
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafetyZone",
            "alternateName": "Safety Zone",
            "url": "https://mysafetyzone.com",
            "logo": "https://mysafetyzone.com/logo.png",
            "description": "AI-powered food allergy and dietary safety platform helping 200M+ people eat safely worldwide",
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

        {/* Structured Data - WebSite with SearchAction */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SafetyZone",
            "alternateName": "Safety Zone",
            "url": "https://mysafetyzone.com"
          })}
        </script>

        {/* Structured Data - FAQPage for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is SafetyZone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone is the #1 AI-powered food allergy app that helps people with food allergies, celiac disease, and dietary restrictions eat safely. It scans restaurant menus, product barcodes, and recipes to detect hidden allergens with 99.5% accuracy."
                }
              },
              {
                "@type": "Question",
                "name": "How does the SafetyZone food allergy scanner work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone uses AI to scan restaurant menus, food product barcodes, and ingredient lists. It cross-references FDA, USDA, and medical databases to detect allergens like peanuts, tree nuts, gluten, dairy, soy, eggs, shellfish, and wheat in seconds."
                }
              },
              {
                "@type": "Question",
                "name": "Is SafetyZone free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone offers a free tier with core allergy scanning features. You can scan menus, check barcodes, and create allergy profiles at no cost. Premium features include family profiles, unlimited recipe analysis, and QR dietary cards."
                }
              },
              {
                "@type": "Question",
                "name": "What food allergies does SafetyZone detect?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone detects all major food allergens including peanuts, tree nuts, milk/dairy, eggs, wheat/gluten, soy, fish, shellfish, and sesame. It also supports dietary preferences like halal, kosher, vegan, vegetarian, and custom restrictions."
                }
              },
              {
                "@type": "Question",
                "name": "Can SafetyZone translate restaurant menus for food allergies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone translates restaurant menus in over 200 languages while simultaneously scanning for your specific allergens. It also generates shareable QR allergy cards that restaurant staff can scan in their language."
                }
              }
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
          <Suspense fallback={null}>
            <WaitlistSection />
            <AppShowcase />
            <FeaturesSection />
            <StatsSection />
            <TranslationDemo />
            <FounderSection />
            <CTASection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
