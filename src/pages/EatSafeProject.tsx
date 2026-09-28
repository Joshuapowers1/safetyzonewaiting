import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EatSafeProject() {
  const url = "https://mysafetyzone.com/eat-safe-project";
  return (
    <>
      <Helmet>
        <title>The Eat Safe Project | My SafetyZone</title>
        <meta name="description" content="The Eat Safe Project brings food allergy stories and advocacy together to encourage safer, more inclusive food service." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="The Eat Safe Project | My SafetyZone" />
        <meta property="og:description" content="Share your food allergy story and help encourage safer, more inclusive food service." />
        <meta property="og:image" content="https://mysafetyzone.com/social-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mysafetyzone.com/social-preview.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage", name: "The Eat Safe Project", url,
          description: "A food allergy storytelling and advocacy campaign encouraging safer, more inclusive food service.",
          isPartOf: { "@type": "WebSite", name: "My SafetyZone", url: "https://mysafetyzone.com" },
        })}</script>
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-[#f8f9f5] pt-24 text-[#173f36]">
        <section className="mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-[#168c93]">Community advocacy</p>
          <h1 className="font-serif text-5xl leading-[.95] tracking-[-.05em] md:text-8xl">The Eat Safe Project.</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#61736c]">Food allergy stories can help change how restaurants, schools, hospitals, venues, and communities prepare. This project creates space for those experiences to be seen and shared.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="https://instagram.com/safetyzoneofficial" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#173f36] px-6 py-3 text-sm font-bold text-white">Share your story <ArrowUpRight size={16} /></a>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[#bdcbbf] px-6 py-3 text-sm font-bold"><ArrowLeft size={16} /> My SafetyZone</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
