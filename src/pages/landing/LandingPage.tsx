import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppStoreBadge, GooglePlayBadge } from '@/components/ui/store-badges';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { landingConfigs, landingSlugs } from './configs';

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const config = slug ? landingConfigs[slug] : undefined;

  if (!config) return <Navigate to="/404" replace />;

  const url = `https://mysafetyzone.com/${config.slug}`;

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:site_name" content="My SafetyZone" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: config.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mysafetyzone.com' },
              { '@type': 'ListItem', position: 2, name: config.h1, item: url },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url,
            name: config.title,
            description: config.metaDescription,
            about: { '@type': 'Thing', name: config.keyword },
            audience: { '@type': 'PeopleAudience', name: config.audience },
            isPartOf: { '@type': 'WebSite', name: 'My SafetyZone', url: 'https://mysafetyzone.com' },
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {config.h1}{' '}
              <span className="text-teal-500">{config.h1Accent}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {config.intro}
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <AppStoreBadge />
              <GooglePlayBadge comingSoon />
            </div>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Built for {config.audience.split(',')[0]}.
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {config.benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-teal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {config.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-gray-200 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 font-semibold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA + internal links */}
        <section className="bg-teal-500 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Eat without fear. Free on iOS.
              </h2>
              <div className="flex items-center gap-4 flex-wrap justify-center mb-10">
                <AppStoreBadge />
                <GooglePlayBadge comingSoon />
              </div>
            </div>
          </div>
        </section>

        {/* Related pages — internal linking is huge for SEO */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Explore related guides
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {landingSlugs
                .filter((s) => s !== config.slug)
                .map((s) => (
                  <Link
                    key={s}
                    to={`/${s}`}
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/30 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {landingConfigs[s].h1}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" />
                  </Link>
                ))}
              <Link
                to="/"
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/30 transition-colors group"
              >
                <span className="text-sm font-medium text-gray-900">My SafetyZone home</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
