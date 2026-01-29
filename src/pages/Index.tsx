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
        <title>Best Food Allergy Management App 2026 | Safety Zone - #1 AI Allergy Tracker</title>
        <meta name="description" content="Safety Zone is the best food allergy management platform. Track allergies, scan ingredients, find allergy-friendly restaurants, and manage dietary restrictions with AI. Trusted by families managing peanut allergies, celiac disease, lactose intolerance & more. Free to join - Launching February 4, 2026!" />
        <meta name="keywords" content="best food allergy app, food allergy management platform, allergy tracker app, food allergy management app, best allergy app 2026, food allergy tracker, allergy management software, food allergy management system, allergy friendly app, food sensitivity app, allergen detection app, food allergy diary, allergy journal app, food allergy log, peanut allergy app, tree nut allergy tracker, celiac disease app, gluten free app, lactose intolerance app, dairy allergy management, egg allergy tracker, shellfish allergy app, soy allergy management, wheat allergy tracker, sesame allergy app, food intolerance tracker, elimination diet app, fodmap tracker, autoimmune protocol app, AIP diet app, ingredient scanner app, food label scanner, barcode allergy scanner, restaurant allergy finder, allergy friendly restaurants near me, safe dining allergies, cross contamination checker, anaphylaxis prevention app, epipen reminder app, emergency allergy app, kids allergy app, child food allergy tracker, baby allergy management, family allergy app, allergy meal planner, allergy recipe app, allergy free cooking, allergy safe recipes, vegan meal tracker, vegetarian food app, kosher food finder, halal food app, dietary restriction manager, special diet app, personalized nutrition app, AI food assistant, smart allergy app" />
        <link rel="canonical" href="https://mysafetyzone.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mysafetyzone.com" />
        <meta property="og:title" content="Safety Zone - Best Food Allergy Management Platform | AI-Powered" />
        <meta property="og:description" content="The #1 food allergy management app. Track allergies, scan ingredients, find safe restaurants. Trusted by thousands of families. Join free!" />
        <meta property="og:site_name" content="Safety Zone" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mysafetyzone.com" />
        <meta name="twitter:title" content="Safety Zone - Best Food Allergy Management App 2026" />
        <meta name="twitter:description" content="The #1 AI-powered food allergy tracker. Manage peanut allergies, celiac, lactose intolerance & more. Join the waitlist!" />
        <meta name="twitter:site" content="@SafetyZoneApp" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Powers Solutions USA LLC" />
        <meta name="publisher" content="Powers Solutions USA LLC" />
        <meta name="application-name" content="Safety Zone" />
        <meta name="apple-mobile-web-app-title" content="Safety Zone" />
        <meta name="theme-color" content="#2dd4bf" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Safety Zone",
            "alternateName": "Safety Zone Food Allergy App",
            "applicationCategory": "HealthApplication",
            "applicationSubCategory": "Food Allergy Management",
            "operatingSystem": "Web, iOS, Android",
            "description": "The best food allergy management platform. AI-powered app to track allergies, scan ingredients, find safe restaurants, and manage dietary restrictions for the whole family.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/PreOrder"
            },
            "author": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC",
              "url": "https://mysafetyzone.com"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "1",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": "Allergy Tracking, Ingredient Scanning, Restaurant Finder, AI Recommendations, Family Profiles, Emergency Alerts",
            "keywords": "food allergy management, allergy tracker, ingredient scanner, dietary restrictions, celiac, peanut allergy, lactose intolerance"
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Safety Zone",
            "url": "https://mysafetyzone.com",
            "logo": "https://mysafetyzone.com/logo.png",
            "description": "Leading food allergy management platform powered by AI",
            "foundingDate": "2025",
            "founder": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC"
            },
            "sameAs": [
              "https://twitter.com/SafetyZoneApp"
            ]
          })}
        </script>
        
        {/* Structured Data - WebSite with SearchAction */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Safety Zone",
            "url": "https://mysafetyzone.com",
            "description": "Best food allergy management platform - AI-powered allergy tracking and dietary restriction management",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://mysafetyzone.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Structured Data - FAQPage for common questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best food allergy management app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Safety Zone is the best food allergy management app, using AI to help you track allergies, scan ingredients, find allergy-friendly restaurants, and manage dietary restrictions for your whole family."
                }
              },
              {
                "@type": "Question",
                "name": "How do I track my food allergies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Safety Zone makes tracking food allergies easy with personalized profiles, ingredient scanning, restaurant recommendations, and AI-powered guidance for managing peanut allergies, celiac disease, lactose intolerance, and more."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a free food allergy app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Safety Zone offers free food allergy management features. Join the waitlist now to get early access when we launch on February 4, 2026."
                }
              }
            ]
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
