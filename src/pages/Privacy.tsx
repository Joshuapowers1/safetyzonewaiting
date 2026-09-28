import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SafetyZone - AI Food Safety Platform</title>
        <meta name="description" content="SafetyZone Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://mysafetyzone.com/privacy-policy" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: February 5, 2026</p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Powers Solutions USA LLC ("SafetyZone," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
                </p>
                <p className="text-muted-foreground">
                  We treat your dietary and health-related information with HIPAA-level privacy standards, implementing medical-grade security measures to protect sensitive data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Name and email address</li>
                  <li>Dietary restrictions and food allergies</li>
                  <li>Health-related dietary preferences (e.g., diabetes management, celiac disease)</li>
                  <li>Family member profiles and their dietary needs</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">Usage Information</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Menu and product scans</li>
                  <li>Food photos analyzed through CalorieSnap</li>
                  <li>Recipe transformations and ingredient searches</li>
                  <li>App usage patterns and preferences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide personalized food safety assessments and allergen detection</li>
                  <li>Improve our AI algorithms for better accuracy</li>
                  <li>Send important safety updates and feature announcements</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>End-to-end encryption for all sensitive data</li>
                  <li>Secure cloud infrastructure with regular security audits</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Regular vulnerability assessments</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Service providers who assist in operating our platform</li>
                  <li>Legal authorities when required by law</li>
                  <li>Restaurant staff only when you explicitly share your QR Dietary Profile</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and download your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your dietary profiles</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our Service is not intended for children under 13. Family profiles for children may only be created and managed by a parent or guardian. We do not knowingly collect personal information from children under 13 without parental consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">Powers Solutions USA LLC</strong><br />
                  Email: <a href="mailto:joshua@mysafetyzone.com" className="text-primary hover:underline">joshua@mysafetyzone.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
