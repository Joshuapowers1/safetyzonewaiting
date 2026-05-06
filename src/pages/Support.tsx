import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HelpCircle, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is My SafetyZone?",
    answer: "My SafetyZone is an AI-powered food allergy and nutrition app available now on iOS. It helps the 500+ million people worldwide with food allergies and dietary restrictions eat safely with features like QR allergy cards, allergen-free recipe AI, NutriScan calorie tracking, EpiPen and inhaler trackers, FDA recall alerts, and more."
  },
  {
    question: "Where can I download My SafetyZone?",
    answer: "My SafetyZone is free to download on the iOS App Store with a 7-day free trial. Android support via Google Play is coming soon."
  },
  {
    question: "What features are included?",
    answer: "The app includes NutriScan AI (photo-based calorie and macro tracking), Recipe AI (allergen-free recipe substitutions from 2M+ recipes), QR Allergy Cards translated into 200+ languages, Travel Mode with destination-specific allergy guides, EpiPen and inhaler expiration trackers, medical device reminders, FDA recall alerts, family profiles, and in-app chat support."
  },
  {
    question: "How does NutriScan AI work?",
    answer: "Snap a photo of any meal and NutriScan AI instantly estimates calories, macros (protein, carbs, fat), and detects potential allergens. No manual food logging required."
  },
  {
    question: "How does Recipe AI work?",
    answer: "Paste any recipe or URL and Recipe AI automatically identifies allergen risks based on your profile. It then generates safe, taste-matched ingredient substitutions that account for cooking chemistry so your allergen-free version actually works."
  },
  {
    question: "What is the QR Allergy Card?",
    answer: "The QR Allergy Card is a digital card with your complete allergy profile that translates into 200+ languages. Show it or let restaurant staff scan it anywhere in the world so they can see exactly what you need to avoid, in their language."
  },
  {
    question: "Which allergens does My SafetyZone support?",
    answer: "My SafetyZone supports all major allergens including peanuts, tree nuts, dairy, eggs, wheat/gluten, soy, fish, shellfish, sesame, and 50+ additional allergens and dietary restrictions. You can fully customize your profile."
  },
  {
    question: "Can I use it for my child or family?",
    answer: "Yes. My SafetyZone supports family profiles so you can manage allergy profiles for your children, partner, or anyone you care for, all from one account."
  },
  {
    question: "Is my health data secure?",
    answer: "Absolutely. All personal and health data is encrypted and we follow strict privacy practices. Please review our Privacy Policy for full details on how we protect your information."
  },
  {
    question: "Does My SafetyZone work internationally?",
    answer: "Yes. The QR Allergy Card translates into 200+ languages and Travel Mode provides destination-specific allergy safety tips, local phrases, safe restaurant suggestions, and emergency information for wherever you're headed."
  },
  {
    question: "How much does it cost?",
    answer: "My SafetyZone is free to download with a 7-day free trial that gives you full access to all features. After the trial, you can choose a subscription plan to continue."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us at joshua@mysafetyzone.com or visit our Contact page. We typically respond within 24 to 48 hours."
  },
];

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support & FAQ | My SafetyZone - AI Food Allergy App</title>
        <meta name="description" content="Find answers to frequently asked questions about My SafetyZone, the #1 AI-powered food allergy app on iOS. Get help with features, your account, and more." />
        <link rel="canonical" href="https://mysafetyzone.com/support" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mysafetyzone.com/support" />
        <meta property="og:title" content="Support & FAQ | My SafetyZone Food Allergy App" />
        <meta property="og:description" content="Frequently asked questions about My SafetyZone — the #1 AI-powered food allergy app on iOS." />
        <meta property="og:site_name" content="My SafetyZone" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support & FAQ | My SafetyZone" />
        <meta name="twitter:description" content="Frequently asked questions about My SafetyZone, the #1 food allergy app on iOS." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mysafetyzone.com" },
              { "@type": "ListItem", "position": 2, "name": "Support", "item": "https://mysafetyzone.com/support" }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-teal-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Help & <span className="text-teal-500">FAQ</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Find answers to common questions about My SafetyZone. Can't find what you're looking for? Reach out to us directly.
              </p>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-6 data-[state=open]:bg-teal-50/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-teal-500 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still need help */}
            <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h2>
              <p className="text-gray-500 mb-4">
                We're happy to help. Reach out and we'll get back to you within 24 to 48 hours.
              </p>
              <a
                href="mailto:joshua@mysafetyzone.com"
                className="inline-flex items-center gap-2 text-teal-500 hover:underline font-medium"
              >
                <Mail className="w-4 h-4" />
                joshua@mysafetyzone.com
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Support;
