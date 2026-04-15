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
    question: "What is SafetyZone?",
    answer: "My SafetyZone is an AI-powered food safety platform designed to help the 500+ million people worldwide with food allergies and dietary restrictions eat safely. Our app translates allergen information, provides safe recipes, tracks medical devices, and more."
  },
  {
    question: "How does the AI allergen detection work?",
    answer: "Our AI analyzes menu items, ingredient lists, and restaurant data to identify potential allergens. It cross-references your dietary profile to flag items that may be unsafe. Note: AI recommendations are informational only. Always verify with restaurant staff and healthcare providers."
  },
  {
    question: "Which allergens does SafetyZone support?",
    answer: "SafetyZone supports all major allergens including peanuts, tree nuts, dairy, eggs, wheat/gluten, soy, fish, shellfish, sesame, and more. You can customize your profile to track any specific dietary restrictions."
  },
  {
    question: "Is SafetyZone available on iOS and Android?",
    answer: "SafetyZone is currently in development. Join our waitlist to be among the first to access the app when it launches on both iOS and Android."
  },
  {
    question: "How do I join the waitlist?",
    answer: "You can join the waitlist directly from our homepage by scrolling to the waitlist section and entering your information. You'll receive updates about our launch and early access opportunities."
  },
  {
    question: "Is my health data secure?",
    answer: "Absolutely. We take data privacy extremely seriously. All personal and health data is encrypted, and we follow strict privacy practices. Please review our Privacy Policy for full details on how we protect your information."
  },
  {
    question: "Can I use SafetyZone for someone else (e.g., my child)?",
    answer: "Yes! SafetyZone is designed for parents, caregivers, and anyone managing dietary restrictions for themselves or others. You can set up profiles for multiple family members."
  },
  {
    question: "Does SafetyZone work internationally?",
    answer: "SafetyZone includes real-time menu translation and allergen detection across multiple languages, making it ideal for international travel and dining."
  },
  {
    question: "How accurate are the AI recommendations?",
    answer: "Our AI is trained on extensive food safety data and continuously improves. However, AI assessments are informational only and not a substitute for medical advice. Always confirm with restaurant staff and consult your healthcare provider for serious allergies."
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
        <title>Support & FAQ | SafetyZone - AI Food Safety</title>
        <meta name="description" content="Find answers to frequently asked questions about SafetyZone's AI-powered food safety platform, allergen detection, and more." />
        <link rel="canonical" href="https://mysafetyzone.com/support" />
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
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Help & <span className="text-primary italic">FAQ</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about SafetyZone. Can't find what you're looking for? Reach out to us directly.
              </p>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted/30 border border-border rounded-xl px-6 data-[state=open]:bg-muted/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still need help */}
            <div className="mt-12 text-center p-8 bg-muted/30 rounded-2xl border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h2>
              <p className="text-muted-foreground mb-4">
                We're happy to help. Reach out and we'll get back to you within 24 to 48 hours.
              </p>
              <a
                href="mailto:joshua@mysafetyzone.com"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
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
