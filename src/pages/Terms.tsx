import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SafetyZone - AI Food Safety Platform</title>
        <meta name="description" content="SafetyZone Terms of Service - Read our terms and conditions for using the SafetyZone app and services." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: February 5, 2026</p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using the SafetyZone mobile application and services (the "Service") provided by Powers Solutions USA LLC ("SafetyZone," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  SafetyZone is an AI-powered food safety platform that helps users manage dietary restrictions by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Scanning menus, product labels, and food photos for allergens and dietary concerns</li>
                  <li>Providing personalized safety ratings based on user-defined dietary profiles</li>
                  <li>Offering recipe transformations with safe ingredient substitutions</li>
                  <li>Generating shareable QR Dietary Profiles</li>
                  <li>Providing calorie and nutrition analysis</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Important Medical Disclaimer</h2>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-4">
                  <p className="text-foreground font-medium mb-4">
                    SAFETYZONE IS NOT A MEDICAL DEVICE AND IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE OR HEALTH CONDITION.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>AI recommendations are for informational purposes only</li>
                    <li>Always verify ingredient information with restaurant staff, food manufacturers, and product labels</li>
                    <li>Consult with your healthcare provider, allergist, or dietitian before making dietary decisions</li>
                    <li>In case of a suspected allergic reaction, seek immediate medical attention</li>
                    <li>Do not rely solely on SafetyZone for life-threatening allergy management</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">You agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate information about your dietary restrictions and allergies</li>
                  <li>Keep your dietary profile up to date</li>
                  <li>Verify all food safety information before consumption</li>
                  <li>Use the Service in compliance with all applicable laws</li>
                  <li>Not misuse or attempt to manipulate the Service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Account Registration</h2>
                <p className="text-muted-foreground">
                  To use certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Subscription and Payments</h2>
                <p className="text-muted-foreground mb-4">
                  Some features of SafetyZone may require a paid subscription. By subscribing:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You authorize us to charge your payment method on a recurring basis</li>
                  <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
                  <li>Refunds are handled according to the policies of the respective app store (Apple App Store or Google Play)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The Service, including its content, features, and functionality, is owned by Powers Solutions USA LLC and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAFETYZONE AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO PERSONAL INJURY, ALLERGIC REACTIONS, OR HEALTH CONSEQUENCES ARISING FROM USE OF THE SERVICE.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold harmless SafetyZone, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may modify these Terms at any time. We will notify users of material changes through the app or by email. Continued use of the Service after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Medical-Grade AI Disclaimer</h2>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground mb-4">
                    SafetyZone markets certain features as "medical-grade AI" or "HIPAA-level privacy." These terms describe the standard of care and security protocols we aspire to maintain, not a certification or regulatory designation.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>SafetyZone is <strong className="text-foreground">not FDA-cleared, CE-marked, or classified as a medical device</strong> under any jurisdiction</li>
                    <li>"Medical-grade" refers to the rigor of our data sourcing (FDA, USDA, and published research databases) and does not imply clinical validation or regulatory approval</li>
                    <li>"HIPAA-level privacy" describes our commitment to security best practices inspired by HIPAA standards; it does not mean SafetyZone is a HIPAA-covered entity or business associate</li>
                    <li>AI accuracy rates (e.g., 99.5%) are based on internal testing benchmarks and may vary with real-world conditions, image quality, language, and menu formatting</li>
                    <li>No output from SafetyZone should be treated as a substitute for professional medical advice, clinical allergy testing, or direct communication with food preparers</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Texas, without regard to conflict of law principles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may modify these Terms at any time. We will notify users of material changes through the app or by email. Continued use of the Service after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">Powers Solutions USA LLC</strong><br />
                  Email: <a href="mailto:legal@mysafetyzone.com" className="text-primary hover:underline">legal@mysafetyzone.com</a>
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

export default Terms;
