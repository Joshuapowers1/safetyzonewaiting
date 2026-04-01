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


const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>SafetyZone - #1 Food Allergy App 2026 | AI Allergen Scanner, EpiPen Tracker & QR Allergy Card</title>
        <meta name="description" content="SafetyZone is the #1 rated food allergy app for 2026. AI-powered allergen scanner detects peanut, gluten, dairy, tree nut, shellfish, egg, soy & sesame allergies in menus, recipes & barcodes with 99.5% accuracy. Features QR allergy cards in 200+ languages, EpiPen tracker, inhaler tracker, medical device expiration tracker, FDA recall alerts, NutriScan AI calorie counter & Recipe AI. Free download on iOS App Store. Best app for celiac disease, food intolerance, anaphylaxis prevention & dietary restrictions including halal, kosher, vegan & vegetarian." />
        <meta name="keywords" content="food allergy app, best food allergy app, food allergy app 2026, SafetyZone, SafetyZone app, safety zone app, my safetyzone, allergy scanner app, allergen detector app, menu scanner allergy, restaurant allergy app, barcode allergen scanner, food label scanner allergy, peanut allergy app, peanut allergy scanner, tree nut allergy app, nut allergy detector, gluten free app, gluten free scanner, gluten free restaurant app, celiac disease app, celiac app, dairy allergy app, dairy free app, lactose intolerance app, milk allergy app, egg allergy app, soy allergy app, soy free scanner, shellfish allergy app, fish allergy app, wheat allergy app, sesame allergy app, food intolerance app, food sensitivity app, multiple food allergies app, top 14 allergens app, allergen detection app, AI food scanner, AI allergy scanner, AI allergen detector, AI menu scanner, dietary restriction app, diet restriction tracker, halal food app, halal food finder, halal scanner, kosher food app, kosher scanner, vegan food scanner, vegan app, vegetarian food app, food safety app, food safety scanner, EpiPen tracker app, EpiPen expiration tracker, EpiPen reminder app, epinephrine auto-injector tracker, inhaler tracker app, inhaler expiration reminder, medical device tracker, medication tracker app, medication expiration tracker, FDA food recall app, FDA recall alerts, food recall notification app, food recall tracker, QR allergy card, allergy card app, allergy translation card, allergy card restaurant, allergy card 200 languages, travel allergy card, travel food allergy app, international allergy app, allergy translation app, calorie tracker allergy, calorie counter food allergy, NutriScan, nutrition tracker, macro tracker, AI calorie counter, recipe allergy checker, recipe allergen scanner, recipe substitution app, allergen free recipe app, safe recipe app, allergy safe cooking, anaphylaxis prevention app, anaphylaxis app, allergic reaction prevention, food allergy management app, allergy management, allergy tracker, allergy diary app, cross contamination app, cross contamination detector, food allergy kids app, child food allergy app, kids allergy app, family allergy app, parent allergy app, school allergy app, allergy app for parents, food allergy iOS app, food allergy iPhone app, food allergy iPad app, best allergy app iOS, best allergy app iPhone, best food safety app, best allergen scanner, best allergy scanner app, top food allergy app, top rated allergy app, number one allergy app, food allergy technology, allergy tech app, food allergy solution, eat safely app, safe eating app, allergy free eating, dining with allergies app, restaurant safety app, eating out allergy app, travel with allergies, travel allergy safety, allergy abroad app, food allergy awareness, allergy awareness app, food allergy community, allergy support app" />
        <link rel="canonical" href="https://mysafetyzone.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mysafetyzone.com" />
        <meta property="og:title" content="SafetyZone - #1 AI Food Allergy App 2026 | Free Download iOS" />
        <meta property="og:description" content="The best food allergy app with AI allergen scanner, QR allergy cards in 200+ languages, EpiPen tracker, FDA recall alerts & Recipe AI. Detects peanut, gluten, dairy, nut, shellfish, egg & soy allergies. Free on iOS." />
        <meta property="og:site_name" content="SafetyZone" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/nEcjojHa9EVFIDIZCStgDsGp4NE3/social-images/social-1766274742323-Black_SZ_logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mysafetyzone.com" />
        <meta name="twitter:title" content="SafetyZone - #1 AI Food Allergy App | EpiPen Tracker & QR Allergy Card" />
        <meta name="twitter:description" content="AI-powered food allergy scanner detecting peanut, gluten, dairy & 50+ allergens with 99.5% accuracy. QR allergy cards in 200+ languages. EpiPen & inhaler tracker. FDA recall alerts. Free on iOS." />
        <meta name="twitter:site" content="@SafetyZoneApp" />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/nEcjojHa9EVFIDIZCStgDsGp4NE3/social-images/social-1766274742323-Black_SZ_logo.png" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Powers Solutions USA LLC" />
        <meta name="theme-color" content="#2dd4bf" />
        <meta name="apple-itunes-app" content="app-id=6758567664" />
        <meta name="application-name" content="SafetyZone" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="SafetyZone" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#2dd4bf" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="revisit-after" content="3 days" />
        <meta name="subject" content="Food Allergy Management App with AI Allergen Detection" />
        <meta name="classification" content="Health, Food Safety, Allergy Management, Medical" />
        <meta name="category" content="Health & Fitness" />
        <meta name="topic" content="Food Allergies, Allergen Detection, Dietary Restrictions, EpiPen Tracking" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SafetyZone",
            "alternateName": ["Safety Zone", "SafetyZone App", "Safety Zone App", "My SafetyZone", "SafetyZone Food Allergy App", "SafetyZone Allergy Scanner"],
            "applicationCategory": "HealthApplication",
            "applicationSubCategory": "Food Allergy Management",
            "operatingSystem": "iOS 16.0 or later",
            "description": "SafetyZone is the #1 AI-powered food allergy app for iOS. Scan menus, barcodes, and recipes to detect allergens including peanuts, tree nuts, dairy, eggs, wheat, gluten, soy, fish, shellfish, and sesame with 99.5% accuracy. Features QR Allergy Cards translated into 200+ languages, Travel Allergen destination safety guides, NutriScan AI calorie and macro tracking from food photos, Recipe AI with allergen-free substitutions, EpiPen expiration tracker with auto-reminders, Inhaler tracker, Medical Device tracker, and real-time FDA food recall alerts. Built for people with food allergies, celiac disease, food intolerance, anaphylaxis risk, and dietary restrictions including halal, kosher, vegan, and vegetarian. Free to download.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "downloadUrl": IOS_APP_URL,
            "installUrl": IOS_APP_URL,
            "url": "https://mysafetyzone.com",
            "author": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC",
              "url": "https://mysafetyzone.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC"
            },
            "featureList": [
              "QR Allergy Cards in 200+ Languages",
              "Travel Allergen Safety Guides",
              "NutriScan AI Calorie & Macro Tracking",
              "Recipe AI with Allergen-Free Substitutions",
              "EpiPen Expiration Tracker with Auto-Reminders",
              "Inhaler Tracker",
              "Medical Device Expiration Tracker",
              "Real-Time FDA Food Recall Alerts",
              "AI Menu Scanner (Coming Soon)",
              "Barcode Allergen Scanner (Coming Soon)",
              "Family Allergy Profiles (Coming Soon)"
            ],
            "screenshot": "https://mysafetyzone.com/screenshots/home.png",
            "softwareVersion": "1.0",
            "datePublished": "2026-01-01",
            "inLanguage": ["en", "es", "fr", "de", "ja", "zh", "ko", "ar", "hi", "pt"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {"@type": "Person", "name": "Allergy Parent"},
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "reviewBody": "This app is a lifesaver for my son with peanut and tree nut allergies. The QR card feature makes dining out so much less stressful."
              }
            ]
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafetyZone",
            "alternateName": ["Safety Zone", "My SafetyZone", "SafetyZone App"],
            "url": "https://mysafetyzone.com",
            "logo": "https://mysafetyzone.com/logo.png",
            "description": "SafetyZone is the leading AI-powered food allergy and dietary safety platform helping 200M+ people with food allergies, celiac disease, and dietary restrictions eat safely worldwide. Features include QR allergy cards, EpiPen tracking, inhaler tracking, FDA recall alerts, and AI-powered allergen detection.",
            "foundingDate": "2025",
            "founder": {
              "@type": "Person",
              "name": "Joshua Powers",
              "jobTitle": "Founder & CEO"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "joshua@mysafetyzone.com",
              "contactType": "customer support"
            },
            "sameAs": [
              "https://instagram.com/safetyzoneofficial",
              "https://www.linkedin.com/company/mysafetyzone/",
              "https://apps.apple.com/us/app/my-safetyzone/id6758567664"
            ],
            "knowsAbout": ["Food Allergies", "Allergen Detection", "Celiac Disease", "Anaphylaxis", "EpiPen Management", "Dietary Restrictions", "Food Safety"]
          })}
        </script>

        {/* Structured Data - WebSite with SearchAction */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SafetyZone - Food Allergy App",
            "alternateName": ["Safety Zone", "SafetyZone", "My SafetyZone"],
            "url": "https://mysafetyzone.com",
            "description": "The #1 AI-powered food allergy app. Scan menus, share QR allergy cards, track EpiPens, and get FDA recall alerts.",
            "publisher": {
              "@type": "Organization",
              "name": "Powers Solutions USA LLC"
            }
          })}
        </script>

        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mysafetyzone.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Features",
                "item": "https://mysafetyzone.com/#features"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "About",
                "item": "https://mysafetyzone.com/#about"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Download",
                "item": "https://apps.apple.com/us/app/my-safetyzone/id6758567664"
              }
            ]
          })}
        </script>

        {/* Structured Data - FAQPage (expanded) */}
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
                  "text": "SafetyZone is the #1 AI-powered food allergy app for iOS in 2026. It helps people with food allergies, celiac disease, food intolerances, and dietary restrictions eat safely everywhere. Key features include QR Allergy Cards that translate into 200+ languages, Travel Allergen safety guides, NutriScan AI calorie tracking from food photos, Recipe AI with allergen-free substitutions, EpiPen expiration tracker, Inhaler tracker, Medical Device tracker, and real-time FDA food recall alerts."
                }
              },
              {
                "@type": "Question",
                "name": "Is SafetyZone free to download?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone is completely free to download on the iOS App Store. All core features including QR Allergy Cards, Travel Allergen guides, NutriScan AI, Recipe AI, EpiPen tracking, Inhaler tracking, Medical Device tracking, and FDA Recall Alerts are available to all users at no cost."
                }
              },
              {
                "@type": "Question",
                "name": "Is SafetyZone available on Android?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone is currently available on iOS through the Apple App Store. The Google Play version for Android devices is coming soon in 2026."
                }
              },
              {
                "@type": "Question",
                "name": "What food allergies does SafetyZone detect?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone detects all major food allergens including peanuts, tree nuts (almonds, cashews, walnuts, pecans, pistachios, macadamia nuts, Brazil nuts, hazelnuts), milk and dairy, eggs, wheat and gluten, soy, fish, shellfish (shrimp, crab, lobster), and sesame. It also supports 50+ additional sensitivities and dietary preferences including halal, kosher, vegan, vegetarian, paleo, keto, and custom restrictions."
                }
              },
              {
                "@type": "Question",
                "name": "How does the QR Allergy Card work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone generates a personal QR code containing your complete allergy and dietary profile. When you show it to restaurant staff, they scan it with any phone camera and instantly see exactly what allergens you need to avoid, automatically translated into their native language. The QR Allergy Card supports 200+ languages, making it invaluable for international travel and dining at restaurants with non-English-speaking staff."
                }
              },
              {
                "@type": "Question",
                "name": "Can SafetyZone track my EpiPen expiration date?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone includes a dedicated EpiPen Tracker that monitors your epinephrine auto-injector expiration dates and sends automatic reminders before they expire. It also tracks inhalers and other medical devices, ensuring you're never caught with expired life-saving medication."
                }
              },
              {
                "@type": "Question",
                "name": "Does SafetyZone send FDA food recall alerts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone provides real-time FDA food recall notifications and alerts so you're always informed about potentially unsafe food products. This feature helps protect you and your family from consuming recalled items that may contain undeclared allergens."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is SafetyZone's allergen detection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone's AI allergen detection system achieves 99.5% accuracy by triple-verifying ingredients against FDA allergen databases, USDA nutritional data, and published medical research. The AI identifies hidden allergens, cross-contamination risks, and ingredient derivatives that other apps miss."
                }
              },
              {
                "@type": "Question",
                "name": "Is SafetyZone safe for children with food allergies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. SafetyZone is designed to protect the entire family, including children with food allergies. Parents can set up detailed allergy profiles, generate QR cards for school and daycare, track EpiPen and medication expiration dates, and receive FDA recall alerts. The app uses HIPAA-level encryption to protect all health data."
                }
              },
              {
                "@type": "Question",
                "name": "What is NutriScan AI in SafetyZone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NutriScan AI is SafetyZone's AI-powered calorie and nutrition tracker. Simply take a photo of any meal — home-cooked, restaurant, or packaged food — and NutriScan instantly estimates calories, macronutrients (protein, carbs, fat), and key micronutrients. No manual food logging required."
                }
              },
              {
                "@type": "Question",
                "name": "How does Recipe AI work in SafetyZone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recipe AI lets you paste any recipe or URL, and it automatically identifies every allergen risk based on your profile. It then generates safe, taste-matched ingredient substitutions that account for cooking chemistry, binding agents, texture, flavor profiles, and baking ratios — so your allergen-free version actually tastes great."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use SafetyZone when traveling internationally?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafetyZone is built for international travel safety. The Travel Allergen feature provides destination-specific allergy safety tips, local allergen databases, and cultural dining guidance. Combined with QR Allergy Cards that auto-translate into 200+ languages, you can communicate your allergies to restaurant staff anywhere in the world."
                }
              },
              {
                "@type": "Question",
                "name": "What makes SafetyZone better than other food allergy apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafetyZone is the most comprehensive food allergy app available, combining 8 live features in one app: QR Allergy Cards (200+ languages), Travel Allergen guides, Recipe AI, NutriScan AI calorie tracking, EpiPen Tracker, Inhaler Tracker, Medical Device Tracker, and FDA Recall Alerts. Unlike other apps, SafetyZone was built by someone with anaphylactic food allergies who understands the daily challenges. It uses HIPAA-level encryption, achieves 99.5% allergen detection accuracy, and is completely free to download."
                }
              }
            ]
          })}
        </script>

        {/* Structured Data - HowTo */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Use SafetyZone Food Allergy App",
            "description": "Learn how to set up SafetyZone to protect yourself and your family from food allergens when dining out, cooking, or traveling.",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Download SafetyZone",
                "text": "Download SafetyZone for free from the iOS App Store and create your account."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Set Up Your Allergy Profile",
                "text": "Add your food allergies, dietary restrictions, and sensitivities to your personal profile. SafetyZone supports peanuts, tree nuts, dairy, eggs, wheat, gluten, soy, fish, shellfish, sesame, and 50+ additional allergens."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Generate Your QR Allergy Card",
                "text": "Create a personal QR allergy card that automatically translates your allergies into 200+ languages. Show it to restaurant staff anywhere in the world."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Track Your EpiPens and Medications",
                "text": "Add your EpiPens, inhalers, and medical devices to receive automatic expiration reminders so you're never caught with expired medication."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Eat Safely Everywhere",
                "text": "Use Recipe AI for safe cooking, NutriScan AI for calorie tracking, Travel Allergen for international trips, and FDA Recall Alerts to stay informed about unsafe products."
              }
            ]
          })}
        </script>

        {/* Structured Data - MobileApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "SafetyZone - Food Allergy App",
            "operatingSystem": "iOS",
            "applicationCategory": "HealthApplication",
            "contentRating": "Everyone",
            "downloadUrl": IOS_APP_URL,
            "installUrl": IOS_APP_URL,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "150"
            }
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
          
          <SecurityErrorBoundary fallback={null}><FounderSection /></SecurityErrorBoundary>
          <SecurityErrorBoundary fallback={null}><CTASection /></SecurityErrorBoundary>
        </main>

        <SecurityErrorBoundary fallback={null}><Footer /></SecurityErrorBoundary>
      </div>
    </>
  );
};

export default Index;
