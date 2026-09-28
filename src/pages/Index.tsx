import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Helmet } from "react-helmet-async";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useHomeMotion } from "@/hooks/use-home-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ChefHat,
  Globe2,
  Heart,
  Menu,
  Plus,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Utensils,
  X,
} from "lucide-react";
import { AppStoreBadge } from "@/components/ui/store-badges";
import FeaturePreview from "@/components/FeaturePreview";
import logo from "@/assets/teal-logo.png";
import "./home.css";

const APP_URL = "https://apps.apple.com/us/app/my-safetyzone/id6758567664";
const FOUNDER_IMAGE = "/joshua-powers-founder.jpg";
const features = [
  {
    label: "Allergy card",
    icon: QrCode,
    eyebrow: "LESS EXPLAINING. MORE ENJOYING.",
    title: "Your needs.\nClearly understood.",
    description:
      "Keep your dietary needs in one personal, shareable allergy card. Show it to your server and start a clearer conversation, wherever you find yourself.",
    points: [
      "Your allergy profile, in your pocket",
      "Share with a simple QR code",
      "Translations for dining abroad",
    ],
    image: "/screenshots/allergen-card.png",
    alt: "SafetyZone digital allergy card creation screen",
    color: "mint",
  },
  {
    label: "Travel mode",
    icon: Globe2,
    eyebrow: "GO FURTHER. FEEL MORE PREPARED.",
    title: "New places.\nA familiar companion.",
    description:
      "Bring your allergy information along for the adventure. Explore destination guidance and communicate your needs when you’re far from home.",
    points: [
      "Destination-specific allergen guidance",
      "Communicate across languages",
      "Keep your dietary needs close",
    ],
    image: "/screenshots/travel-mode.png",
    alt: "SafetyZone travel mode and destination guidance",
    color: "sand",
  },
  {
    label: "Recipe AI",
    icon: ChefHat,
    eyebrow: "A LITTLE INSPIRATION. A LOT OF POSSIBILITY.",
    title: "Make room for\nsomething delicious.",
    description:
      "Find fresh inspiration for your kitchen. Explore recipe ideas and ingredient substitutions around your dietary needs, then make them your own.",
    points: [
      "Ideas shaped around your preferences",
      "Ingredient substitution suggestions",
      "Step-by-step cooking inspiration",
    ],
    image: "/screenshots/recipe-ai.png",
    alt: "SafetyZone Recipe AI screen",
    color: "peach",
  },
  {
    label: "NutriScan",
    icon: Sparkles,
    eyebrow: "YOUR DAILY PICTURE, A LITTLE CLEARER.",
    title: "A snapshot of\nyour everyday nutrition.",
    description:
      "Turn a meal photo into an estimated nutrition breakdown. Keep calories, macros, and your daily goals together in one simple place.",
    points: [
      "Photo-based nutrition estimates",
      "Calories and macros at a glance",
      "A daily view of your nutrition",
    ],
    image: "/screenshots/nutriscan.png",
    alt: "SafetyZone NutriScan nutrition screen",
    color: "lilac",
  },
 ] as const;
const questions = [
  {
    question: "What is My SafetyZone?",
    answer:
      "My SafetyZone is an iOS companion for life with food allergies and dietary restrictions. It brings together a digital allergy card, travel guidance, recipe inspiration, nutrition tracking, medication reminders, and FDA recall information.",
  },
  {
    question: "Is the app free to download?",
    answer:
      "Yes, My SafetyZone is free to download from the App Store. Check the current App Store listing and in-app subscription screen for plan details, trial availability, and pricing.",
  },
  {
    question: "Can I use it on Android?",
    answer:
      "My SafetyZone is currently available on iOS. An Android version is coming soon. Follow SafetyZone on Instagram for release updates.",
  },
  {
    question: "Does SafetyZone guarantee a meal is safe?",
    answer:
      "No. SafetyZone supports your food decisions, but it cannot guarantee that a meal is allergen-free or detect kitchen cross-contact. Always check ingredients, confirm preparation with staff, and follow your clinician’s advice. AI recipe and nutrition suggestions may be inaccurate.",
  },
  {
    question: "Are menu and barcode scanners available?",
    answer:
      "Menu, product, and barcode scanning are coming soon. You can already explore allergy cards, travel tools, Recipe AI, NutriScan, medication tracking, and recall information in the app.",
  },
];
const testimonials = [
  { title: "Life-changing", author: "OscyBooBear", date: "Apr 1", quote: "SafteyZone is revolutionary for those with allergies. It just came out and the features are out of this world. The app makes traveling, going out, and eating not as daunting. It’s given me hope. 10/10 would recommend to anyone." },
  { title: "Great app", author: "Bethay P", date: "Apr 2", quote: "My daughter has food allergies and this helps us with language barriers and travel. I also use it to track my calories to lose weight. Great app all around." },
  { title: "Blessing", author: "Dominic Doerr", date: "May 11", quote: "This app made me feel safe to eat at restaurants internationally, and locally. SafetyZone changed not only my information on the food I was eating, but also cleaned up my diet. So thankful for this app!" },
];
function Brand() {
  return (
    <a href="/" className="home-brand" aria-label="My SafetyZone home">
      <img src={logo} alt="" width="40" height="40" />
      <span>
        SafetyZone<span className="brand-dot">.</span>
      </span>
    </a>
  );
}
function Phone({
  image,
  alt,
  className = "",
  eager = false,
}: {
  image: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`home-phone ${className}`}>
      <div className="phone-camera" aria-hidden="true" />
      <img
        src={image}
        alt={alt}
        width="945"
        height="1920"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
      <div className="phone-button" aria-hidden="true" />
    </div>
  );
}
export default function Index() {
  const root = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const phoneY = useTransform(scrollY, [0, 700], [0, -48]);
  const phoneRotate = useTransform(scrollY, [0, 700], [-4, 1]);
  useHomeMotion(root, reducedMotion);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const feature = features[selectedFeature];
  useEffect(() => {
    document.body.classList.add("safetyzone-home");
    return () => document.body.classList.remove("safetyzone-home");
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const navigateFeature = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % features.length;
    else if (event.key === "ArrowLeft")
      next = (index + features.length - 1) % features.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = features.length - 1;
    else return;
    event.preventDefault();
    setSelectedFeature(next);
    document.getElementById(`feature-tab-${next}`)?.focus();
  };
  return (
    <div className="sz-home" ref={root}>
      <Helmet>
        <title>My SafetyZone — A little more confidence in every bite.</title>
        <meta
          name="description"
          content="Your everyday companion for food allergies and dietary needs. Discover digital allergy cards, travel tools, recipes, and medication reminders. Download My SafetyZone for iOS."
        />
        <link rel="canonical" href="https://mysafetyzone.com/" />
        <meta name="theme-color" content="#f8f9f5" />
        <meta name="apple-itunes-app" content="app-id=6758567664" />
        <meta
          property="og:title"
          content="My SafetyZone — A little more confidence in every bite."
        />
        <meta
          property="og:description"
          content="Food allergies are personal. Your everyday companion should be too. Meet My SafetyZone for iOS."
        />
        <meta
          name="twitter:title"
          content="My SafetyZone — A little more confidence in every bite."
        />
        <meta
          name="twitter:description"
          content="Allergy cards, travel tools, recipe inspiration, and medication reminders. One thoughtful companion for your everyday."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://mysafetyzone.com/#organization",
                name: "Powers Solutions USA LLC",
                alternateName: "My SafetyZone",
                url: "https://mysafetyzone.com/",
                email: "joshpowersbiz@gmail.com",
                founder: { "@id": "https://mysafetyzone.com/#founder" },
                sameAs: [
                  "https://instagram.com/safetyzoneofficial",
                  "https://www.linkedin.com/company/mysafetyzone/",
                  APP_URL,
                ],
              },
              {
                "@type": "Person",
                "@id": "https://mysafetyzone.com/#founder",
                name: "Joshua Powers",
                jobTitle: "Founder & CEO",
                image: "https://mysafetyzone.com/joshua-powers-founder.jpg",
                worksFor: { "@id": "https://mysafetyzone.com/#organization" },
              },
              {
                "@type": "WebSite",
                "@id": "https://mysafetyzone.com/#website",
                name: "My SafetyZone",
                url: "https://mysafetyzone.com/",
                publisher: { "@id": "https://mysafetyzone.com/#organization" },
                inLanguage: "en-US",
              },
              {
                "@type": "MobileApplication",
                "@id": "https://mysafetyzone.com/#app",
                name: "My SafetyZone",
                applicationCategory: "HealthApplication",
                applicationSubCategory: "Food allergy and dietary companion",
                operatingSystem: "iOS",
                url: "https://mysafetyzone.com/",
                downloadUrl: APP_URL,
                installUrl: APP_URL,
                isAccessibleForFree: true,
                description:
                  "A food allergy and dietary companion with digital allergy cards, travel guidance, recipe inspiration, nutrition estimates, medication reminders, and FDA recall alerts.",
                featureList: [
                  "QR allergy cards in 150 languages",
                  "Travel allergen guidance",
                  "Recipe ideas and allergen-aware substitutions",
                  "EpiPen and medication expiration reminders",
                  "FDA food recall alerts",
                ],
                screenshot: [
                  "https://mysafetyzone.com/screenshots/home-screen.png",
                  "https://mysafetyzone.com/screenshots/allergen-card.png",
                  "https://mysafetyzone.com/screenshots/travel-mode.png",
                ],
                author: { "@id": "https://mysafetyzone.com/#organization" },
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                review: testimonials.map((review) => ({
                  "@type": "Review",
                  author: { "@type": "Person", name: review.author },
                  name: review.title,
                  reviewBody: review.quote,
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                })),
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: questions.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          })}
        </script>
      </Helmet>
      <a className="home-skip" href="#main-content">
        Skip to content
      </a>
      <header className="home-header">
        <motion.div
          className="reading-progress"
          style={{ scaleX: reducedMotion ? scrollYProgress : progress }}
          aria-hidden="true"
        />
        <div className="home-shell home-nav">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            <a href="#features">The app</a>
            <a href="#how-it-works">How it works</a>
            <a href="#about">Our story</a>
          </nav>
          <div className="nav-actions">
            <a
              href="https://menu.mysafetyzone.com"
              className="business-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              For restaurants <ArrowUpRight size={14} />
            </a>
            <a
              className="home-button button-small"
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the app <ArrowUpRight size={16} />
            </a>
            <button
              ref={menuButton}
              className="mobile-menu-button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
          >
            <a href="#features" onClick={() => setMenuOpen(false)}>
              The app <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works <ArrowRight size={18} />
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Our story <ArrowRight size={18} />
            </a>
            <a
              href="https://menu.mysafetyzone.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              For restaurants <ArrowUpRight size={18} />
            </a>
          </nav>
        )}
      </header>
      <main id="main-content">
        <section className="home-hero home-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="home-eyebrow">
              <span className="status-dot" /> YOUR EVERYDAY FOOD COMPANION
            </div>
            <h1 id="hero-title">
              A little more
              <br />
              confidence.
              <br />
              <em>In every bite.</em>
            </h1>
            <p>
              For the everyday meals. The faraway places.
              <br className="desktop-break" /> And everything you want to try
              next.
            </p>
            <p className="hero-description">
              Allergy cards, travel tools, and thoughtful daily support.
              <br className="desktop-break" /> One app that understands your
              dietary needs.
            </p>
            <div className="hero-actions">
              <AppStoreBadge />
              <a className="text-link" href="#features">
                Meet your new companion <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-note">
              <Check size={14} /> Free to download <span /> Available on iOS
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="A preview of the SafetyZone app"
          >
            <div className="hero-halo" aria-hidden="true" />
            <motion.div
              className="hero-device"
              style={
                reducedMotion ? undefined : { y: phoneY, rotate: phoneRotate }
              }
            >
              <Phone
                image="/screenshots/home-screen.png"
                alt="My SafetyZone home screen with travel, safety card, medication, nutrition, and recipe tools"
                className="hero-phone"
                eager
              />
            </motion.div>
            <div className="hero-device-caption">
              <span className="status-dot" /> YOUR WORLD. A LITTLE MORE OPEN.
            </div>
          </div>
        </section>
        <div className="home-reassurance">
          <div className="home-shell reassurance-inner">
            <span>THOUGHTFULLY BUILT AROUND YOU</span>
            <div>
              <QrCode /> Share your needs
            </div>
            <div>
              <Globe2 /> Explore with confidence
            </div>
            <div>
              <Heart /> Feel more prepared
            </div>
            <a href="#about">
              Built from lived experience <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <section
          id="features"
          className="home-shell home-section feature-section"
          aria-labelledby="features-title"
        >
          <div className="section-heading">
            <div>
              <div className="home-eyebrow">
                SMALL TOOLS. MEANINGFUL DIFFERENCE.
              </div>
              <h2 id="features-title">
                Life is full of possibilities.
                <br />
                <em>Let’s make room for them.</em>
              </h2>
            </div>
            <p>
              From your own kitchen to somewhere new,
              <br className="desktop-break" /> find a little more support for
              the moments
              <br className="desktop-break" /> that make life yours.
            </p>
          </div>
          <div
            className="feature-tabs"
            role="tablist"
            aria-label="Explore app features"
          >
            {features.map((item, index) => (
              <button
                key={item.label}
                id={`feature-tab-${index}`}
                role="tab"
                aria-selected={selectedFeature === index}
                aria-controls="feature-panel"
                tabIndex={selectedFeature === index ? 0 : -1}
                onClick={() => setSelectedFeature(index)}
                onKeyDown={(event) => navigateFeature(event, index)}
              >
                {selectedFeature === index && (
                  <motion.span
                    className="feature-tab-indicator"
                    layoutId="active-feature"
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 34 }
                    }
                  />
                )}
                <item.icon size={19} />
                <span>{item.label}</span>
                <ArrowUpRight className="tab-arrow" size={17} />
              </button>
            ))}
          </div>
          <div
            id="feature-panel"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`feature-tab-${selectedFeature}`}
            className={`feature-panel ${feature.color}`}
          >
            <motion.div
              className="feature-copy"
              key={feature.label}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="home-eyebrow">{feature.eyebrow}</span>
              <h3>
                {feature.title.split("\n").map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h3>
              <p>{feature.description}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>
                    <Check size={16} />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                className="text-link"
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore in the app <ArrowUpRight size={18} />
              </a>
            </motion.div>
            <div className="feature-visual">
              <FeaturePreview key={feature.label} label={feature.label} image={feature.image} alt={feature.alt} />
            </div>
          </div>
          <div className="everyday-tools">
            <article>
              <span className="tool-icon">
                <Bell size={21} />
              </span>
              <div>
                <h3>One less thing to remember.</h3>
                <p>
                  Track EpiPen, inhaler, and medical device expiry dates with
                  helpful reminders.
                </p>
              </div>
            </article>
            <article>
              <span className="tool-icon">
                <ShieldCheck size={21} />
              </span>
              <div>
                <h3>Stay a little more informed.</h3>
                <p>
                  Keep up with FDA food recalls, right alongside your everyday
                  allergy tools.
                </p>
              </div>
            </article>
            <article>
              <span className="tool-icon">
                <Heart size={21} />
              </span>
              <div>
                <h3>Find people who understand.</h3>
                <p>
                  Connect with a community that knows what life with dietary
                  restrictions feels like.
                </p>
              </div>
            </article>
          </div>
          <p className="coming-next">
            <Sparkles size={15} />
            <strong>More on the way</strong>
            <span>Menu, product, and barcode scanning — coming soon.</span>
          </p>
        </section>
        <section
          id="how-it-works"
          className="how-section home-section"
          aria-labelledby="how-title"
        >
          <div className="home-shell">
            <div className="section-heading centered">
              <div className="home-eyebrow">
                A LITTLE SETUP. A NEW KIND OF EVERYDAY.
              </div>
              <h2 id="how-title">
                Make it <em>your SafetyZone.</em>
              </h2>
              <p>Start with you. Take it from there.</p>
            </div>
            <div className="steps-grid">
              <article>
                <div className="step-number">
                  01 <span />
                  <Smartphone size={25} />
                </div>
                <h3>Meet your companion.</h3>
                <p>
                  Download My SafetyZone on your iPhone and get to know your
                  everyday toolkit.
                </p>
              </article>
              <article>
                <div className="step-number">
                  02 <span />
                  <Heart size={25} />
                </div>
                <h3>Make it personal.</h3>
                <p>
                  Add your food allergies and dietary needs. Create an allergy
                  card that speaks for you.
                </p>
              </article>
              <article>
                <div className="step-number">
                  03 <span />
                  <Utensils size={25} />
                </div>
                <h3>Bring it to the table.</h3>
                <p>
                  Share your card, explore a recipe, or prepare for your next
                  trip. It’s all there when you need it.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="home-shell home-section founder-section"
          aria-labelledby="founder-title"
        >
          <div className="founder-portrait">
            <img
              src={FOUNDER_IMAGE}
              alt="Joshua Powers, founder and CEO of My SafetyZone"
              width="1198"
              height="1313"
              loading="lazy"
            />
            <div className="founder-caption">
              <span className="status-dot" /> BUILT WITH PURPOSE. AND PERSONAL
              EXPERIENCE.
            </div>
          </div>
          <div className="founder-copy">
            <div className="home-eyebrow">
              A PERSONAL REASON. A SHARED PURPOSE.
            </div>
            <h2 id="founder-title">
              Because we know
              <br />
              it’s <em>more than a meal.</em>
            </h2>
            <p className="founder-intro">
              It’s saying yes to dinner. Planning that trip.
              <br />
              Feeling understood at the table.
            </p>
            <p>
              Our founder, Joshua Powers, has lived with anaphylactic food
              allergies his entire life. He knows the questions, the extra
              planning, and the moments other people don’t always see.
            </p>
            <p>
              SafetyZone grew from that experience: a thoughtful companion to
              help make everyday life with dietary needs feel a little less
              complicated.
            </p>
            <div className="founder-signature">
              <span>Joshua Powers</span>
              <div>Founder, My SafetyZone</div>
            </div>
            <a className="text-link" href="mailto:joshpowersbiz@gmail.com">
              Say hello <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section className="home-section reviews-section" aria-labelledby="reviews-title">
          <div className="home-shell">
            <div className="section-heading centered">
              <div className="home-eyebrow">REAL EXPERIENCES. SHARED OPENLY.</div>
              <h2 id="reviews-title">A little more <em>confidence.</em></h2>
              <p>Recent five-star App Store reviews from people using My SafetyZone.</p>
            </div>
            <div className="reviews-grid">
              {testimonials.map((review) => (
                <figure key={review.author}>
                  <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption><strong>{review.title}</strong><span>{review.author} · {review.date}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="restaurant-section home-shell">
          <div className="restaurant-icon">
            <Utensils size={27} />
          </div>
          <div>
            <div className="home-eyebrow">ON THE OTHER SIDE OF THE TABLE?</div>
            <h2>
              Make every guest feel <em>welcome.</em>
            </h2>
            <p>
              Discover allergen-aware digital menus for your restaurant, hotel,
              or venue.
            </p>
          </div>
          <a
            className="home-button button-outline"
            href="https://menu.mysafetyzone.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            SafetyZone for businesses <ArrowUpRight size={17} />
          </a>
        </section>
        <section className="campaign-section home-shell">
          <div>
            <div className="home-eyebrow">STORIES CAN MOVE SAFETY FORWARD.</div>
            <h2>The Eat Safe <em>Project.</em></h2>
            <p>Help make food service safer and more inclusive by sharing the experiences that shaped you.</p>
          </div>
          <a className="home-button" href="/eat-safe-project">Explore the project <ArrowUpRight size={17} /></a>
        </section>
        <section
          className="home-shell home-section faq-section"
          aria-labelledby="faq-title"
        >
          <div>
            <div className="home-eyebrow">GOOD QUESTIONS.</div>
            <h2 id="faq-title">
              A little more
              <br />
              <em>clarity.</em>
            </h2>
            <p>Something else on your mind?</p>
            <a className="text-link" href="/support">
              We’re here to help <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="faq-list">
            {questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <Plus size={20} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="download" className="download-section">
          <div className="download-orbit" aria-hidden="true" />
          <div className="home-shell download-inner">
            <span className="download-mark">
              <ShieldCheck size={32} strokeWidth={1.4} />
            </span>
            <div className="home-eyebrow">HERE’S TO WHAT’S NEXT.</div>
            <h2>
              A bigger world.
              <br />
              <em>A little more confidence.</em>
            </h2>
            <p>Your next meal. Your next adventure. Your SafetyZone.</p>
            <AppStoreBadge />
            <span className="download-note">
              Available on iOS · Android coming soon
            </span>
          </div>
        </section>
      </main>
      <a className="mobile-download-cta" href={APP_URL} target="_blank" rel="noopener noreferrer">
        <span><strong>My SafetyZone</strong><small>Free to download on iOS</small></span>
        <span>Get the app <ArrowUpRight size={16} /></span>
      </a>
      <footer className="home-footer home-shell">
        <div className="footer-main">
          <div>
            <Brand />
            <p>
              A thoughtful companion.
              <br />
              For a life that’s entirely yours.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <a href="#features">The app</a>
              <a href="#about">Our story</a>
              <a
                href="https://menu.mysafetyzone.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                For businesses <ArrowUpRight size={13} />
              </a>
            </div>
            <div>
              <span>LET’S CONNECT</span>
              <a href="mailto:joshpowersbiz@gmail.com">Email us</a>
              <a href="/support">Support</a>
              <a
                href="https://instagram.com/safetyzoneofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} My SafetyZone · Powers Solutions USA
            LLC
          </span>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="#main-content">Back to top ↑</a>
          </div>
        </div>
        <p className="footer-disclaimer">
          A companion for informed decisions, not a guarantee of food safety.
          Always verify ingredients and preparation with staff. AI suggestions
          and nutrition estimates may be inaccurate. Follow your healthcare
          professional’s guidance.
        </p>
      </footer>
    </div>
  );
}
