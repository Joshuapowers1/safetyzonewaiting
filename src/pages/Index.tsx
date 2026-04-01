import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SecurityErrorBoundary from '@/components/SecurityErrorBoundary';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import StatsSection from '@/components/landing/StatsSection';
import FounderSection from '@/components/landing/FounderSection';
import CTASection from '@/components/landing/CTASection';
import AppShowcase from '@/components/landing/AppShowcase';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>SafetyZone - #1 Food Allergy App | AI Menu Scanner & Allergen Detector</title>
        <meta name="description" content="SafetyZone is the best food allergy app for 200M+ people with peanut allergy, celiac disease, gluten intolerance, dairy allergy & dietary restrictions. AI-powered menu scanner, barcode allergen detector & recipe analyzer with 99.5% accuracy. Download free on iOS." />
        <meta name="keywords" content="food allergy app, SafetyZone, safety zone, allergy scanner, menu scanner, barcode allergen scanner, peanut allergy app, gluten free app, celiac app, dairy free scanner, nut allergy app, food intolerance app, allergen detector, AI food scanner, dietary restriction app, halal food app, kosher food app, vegan scanner, food label scanner, allergy management, anaphylaxis prevention, egg allergy, soy allergy, shellfish allergy, wheat allergy, tree nut allergy, food safety app, calorie tracker, nutrition app" />
        <link rel="canonical" href="https://mysafetyzone.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mysafetyzone.com" />
        <meta property="og:title" content="SafetyZone - #1 AI Food Allergy App | Download Free on iOS" />
        <meta property="og:description" content="The best food allergy app. Scan menus, products & recipes with AI to detect allergens. Available now on iOS. Built for peanut, gluten, dairy, nut allergies & more." />
        <meta property="og:site_name" content="SafetyZone" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mysafetyzone.com" />
        <meta name="twitter:title" content="SafetyZone - #1 AI Food Allergy Scanner App" />
        <meta name="twitter:description" content="Scan menus, barcodes & recipes to detect hidden allergens with 99.5% accuracy. Download free on iOS. Google Play coming soon." />
        <meta name="twitter:site" content="@SafetyZoneApp" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Powers Solutions USA LLC" />
        <meta name="theme-color" content="#2dd4bf" />
        <meta name="apple-itunes-app" content="app-id=6758567664" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SafetyZone",
            "alternateName": ["Safety Zone", "SafetyZone App", "Safety Zone App", "My SafetyZone"],
            "applicationCategory": "HealthApplication",
            "applicationSubCategory": "Food Allergy Management",
            "operatingSystem": "iOS",
            "description": "Eat with confidence, not caution. SafetyZone is the most advanced food allergy app, powered by AI to keep you and your family safe. Scan menus, products, and barcodes instantly to detect allergens before you eat. Features: QR Allergy Cards in 200+ languages, Travel Allergen with destination-specific safety tips, NutriScan AI calorie tracking, Recipe AI with infinite safe substitutions, EpiPen & Medication Tracker with auto reminders. Supports peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish, sesame, and 50+ additional sensitivities.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "downloadUrl": IOS_APP_URL,
            "installUrl": IOS_APP_URL,
            "author": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC"
            },
            "featureList": "QR Allergy Cards in 200+ Languages, Travel Allergen Feature, NutriScan AI Calorie Tracking, Recipe AI with Safe Substitutions, EpiPen & Medication Tracker, Cross-Reactivity Warnings",
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

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SafetyZone",
            "alternateName": "Safety Zone",
            "url": "https://mysafetyzone.com"
          })}
        </script>

        {/* Structured Data - FAQPage */}
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
                  "text": "SafetyZone is the #1 AI-powered food allergy app available on iOS that helps people with food allergies, celiac disease, and dietary restrictions eat safely. It features QR Allergy Cards, Travel Allergen guides, NutriScan AI calorie tracking, Recipe AI, and EpiPen tracking."
                }
              },
              {
                "@type": "Question",
                "name": "Is SafetyZone free to download?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone is free to download on the App Store. Core features including QR Allergy Cards, Travel Allergen, NutriScan AI, Recipe AI, and EpiPen tracking are available to all users."
                }
              },
              {
                "@type": "Question",
                "name": "Is SafetyZone available on Android?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone is currently available on iOS through the App Store. The Google Play version for Android is coming soon."
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
                "name": "Can SafetyZone translate my allergy card into other languages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone generates shareable QR allergy cards that auto-translate your dietary needs into 200+ languages so restaurant staff worldwide can keep you safe."
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
        <SecurityErrorBoundary fallback={null}><Navbar /></SecurityErrorBoundary>

        <main>
          <SecurityErrorBoundary fallback={null}><HeroSection /></SecurityErrorBoundary>
          <SecurityErrorBoundary fallback={null}><AppShowcase /></SecurityErrorBoundary>
          <SecurityErrorBoundary fallback={null}><FeaturesSection /></SecurityErrorBoundary>
          <SecurityErrorBoundary fallback={null}><StatsSection /></SecurityErrorBoundary>
          <SecurityErrorBoundary fallback={null}><TranslationDemo /></SecurityErrorBoundary>
          <SecurityErrorBoundary fallback={null}><FounderSection /></SecurityErrorBoundary>
          <SecurityErrorBoundary fallback={null}><CTASection /></SecurityErrorBoundary>
        </main>

        <SecurityErrorBoundary fallback={null}><Footer /></SecurityErrorBoundary>
      </div>
    </>
  );
};

export default Index;
