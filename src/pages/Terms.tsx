import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SafetyZone - AI Food Safety Platform</title>
        <meta name="description" content="SafetyZone Terms of Service - Read our terms and conditions for using the SafetyZone AI-powered food allergen scanning app." />
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-2">Last Updated: March 2026</p>
            <p className="text-muted-foreground mb-8">
              Please also review our{' '}
              <Link to="/privacy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>

            <div className="prose prose-lg max-w-none text-foreground space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using the SafetyZone mobile application and services (the "Service") provided by Powers Solutions USA LLC ("SafetyZone," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. Continued use of SafetyZone after any modifications to these Terms constitutes your acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  SafetyZone is an AI-powered food allergen scanning application designed to help users manage dietary restrictions by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Scanning restaurant menus and product labels for allergen detection</li>
                  <li>Providing personalized safety ratings based on user-defined dietary profiles</li>
                  <li>Offering recipe transformations with safe ingredient substitutions</li>
                  <li>Generating shareable QR Dietary Profiles</li>
                  <li>Providing calorie, macro, and nutrition analysis via NutriScan AI</li>
                  <li>Translating allergy information into 200+ languages</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Important Medical Disclaimer</h2>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                  <p className="text-foreground font-medium mb-4">
                    SAFETYZONE PROVIDES INFORMATIONAL ANALYSIS ONLY AND IS NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>AI-generated allergen analysis is for informational purposes only</li>
                    <li><strong className="text-foreground">Always verify allergen information directly with restaurant staff</strong> and read all product labels before consuming food</li>
                    <li>Consult with your physician, allergist, or dietitian before making any dietary decisions</li>
                    <li>In case of a suspected allergic reaction, seek immediate medical attention and use prescribed emergency medication</li>
                    <li>SafetyZone is <strong className="text-foreground">not FDA-cleared, CE-marked, or classified as a medical device</strong> under any jurisdiction</li>
                    <li>Do not rely solely on SafetyZone for life-threatening allergy management</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">As a user of SafetyZone, you are responsible for:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Verifying all allergen information</strong> with restaurant staff, food manufacturers, and product labels before consumption</li>
                  <li>Carrying prescribed emergency medication (e.g., EpiPen, antihistamines) at all times if directed by your physician</li>
                  <li>Consulting your physician or allergist for dietary guidance and allergy management</li>
                  <li>Keeping your dietary profile accurate and up to date</li>
                  <li>Using the Service in compliance with all applicable laws and regulations</li>
                  <li>Not misusing, reverse-engineering, or attempting to manipulate the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. AI Limitations</h2>
                <div className="bg-secondary border border-border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    SafetyZone uses artificial intelligence to analyze food items. Users should be aware of the following limitations:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong className="text-foreground">Cross-contamination cannot be detected</strong>. AI analysis is based on listed ingredients only and cannot account for kitchen preparation practices</li>
                    <li><strong className="text-foreground">Recipes and formulations may change</strong>. Manufacturers and restaurants may alter ingredients without notice</li>
                    <li><strong className="text-foreground">Image quality affects accuracy</strong>. Blurry, low-resolution, or poorly lit photos may produce less accurate results</li>
                    <li>AI accuracy rates are based on internal benchmarks and may vary with real-world conditions, language, and menu formatting</li>
                    <li>The Service may not recognize every allergen in every language or regional naming convention</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Account Terms</h2>
                <p className="text-muted-foreground mb-4">To use certain features of SafetyZone, you must create an account. You agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Keep your login credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Not create multiple accounts or share your account with others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Subscription & Billing</h2>
                <p className="text-muted-foreground mb-4">
                  SafetyZone offers free and premium subscription tiers. For paid subscriptions:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Subscriptions <strong className="text-foreground">auto-renew</strong> at the end of each billing period unless cancelled before the renewal date</li>
                  <li>You authorize us to charge your selected payment method on a recurring basis</li>
                  <li>Cancellations take effect at the end of the current billing period. You retain access until then</li>
                  <li>Refunds are handled according to the policies of the respective app store (Apple App Store or Google Play)</li>
                  <li>We reserve the right to modify pricing with reasonable advance notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The Service, including all content, features, functionality, algorithms, designs, trademarks, and technology, is owned by Powers Solutions USA LLC and is protected by copyright, trademark, patent, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works based on any part of SafetyZone without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                  <p className="text-foreground font-medium mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>SafetyZone and its affiliates shall not be liable for any allergic reactions, medical emergencies, personal injury, or health consequences arising from use of or reliance on the Service</li>
                    <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Our total liability for any claim arising from the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim</li>
                    <li>You use SafetyZone at your own risk and acknowledge the inherent limitations of AI-based food analysis</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without prior notice, for conduct that we believe violates these Terms, is harmful to other users, us, or third parties, or for any other reason. Upon termination, your right to use the Service ceases immediately, though certain provisions of these Terms will survive termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may modify these Terms at any time. We will notify users of material changes through the app, by email, or by posting the updated Terms on our website. Your continued use of SafetyZone after changes are posted constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Texas, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-secondary border border-border rounded-lg p-6">
                  <p className="text-foreground font-semibold">Powers Solutions USA LLC</p>
                  <p className="text-muted-foreground mt-2">
                    Email:{' '}
                    <a href="mailto:support@mysafetyzone.com" className="text-primary hover:underline">
                      support@mysafetyzone.com
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Also see our{' '}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    for information on how we handle your data.
                  </p>
                </div>
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
