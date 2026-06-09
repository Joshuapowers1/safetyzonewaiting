import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Apple, Smartphone } from 'lucide-react';
import tealLogo from '@/assets/teal-logo.png';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const socialBtn =
  'inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.07] bg-white/[0.03] backdrop-blur-[20px] text-white/60 hover:text-[#00C2A8] hover:border-[#00C2A8]/40 hover:shadow-[0_0_24px_-6px_rgba(0,194,168,0.6)] transition-all';

const headerCls = 'text-xs font-semibold text-[#00C2A8] uppercase tracking-[0.18em]';
const linkCls = 'text-sm text-white/60 hover:text-white transition-colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05080f] sz-dot-grid" role="contentinfo">
      {/* Glowing teal divider */}
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C2A8]/60 to-transparent shadow-[0_0_16px_rgba(0,194,168,0.5)]" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-5 md:col-span-2">
            <Link to="/" className="flex items-center gap-3" aria-label="My SafetyZone food allergy app home">
              <img src={tealLogo} alt="My SafetyZone food allergy app logo" className="w-11 h-11 object-contain" width="44" height="44" />
              <span className="font-display text-xl font-semibold text-white">My SafetyZone</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              The #1 AI-powered food allergy app. Allergen detection, QR allergy cards, EpiPen tracker, FDA recall alerts, and safe recipe AI for 500M+ people with food allergies and dietary restrictions worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/safetyzoneofficial" target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label="My SafetyZone on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/mysafetyzone/" target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label="My SafetyZone on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:joshua@mysafetyzone.com" className={socialBtn} aria-label="Email My SafetyZone support">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <nav className="space-y-4" aria-label="Product links">
            <h4 className={headerCls}>Product</h4>
            <ul className="space-y-2.5">
              <li><a href="/#features" className={linkCls}>Food Allergy App Features</a></li>
              <li>
                <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-1.5`}>
                  <Apple className="w-3 h-3" />
                  Download for iOS
                </a>
              </li>
              <li>
                <span className="text-sm text-white/35 inline-flex items-center gap-1.5">
                  <Smartphone className="w-3 h-3" />
                  Google Play (Coming Soon)
                </span>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav className="space-y-4" aria-label="Company links">
            <h4 className={headerCls}>Company</h4>
            <ul className="space-y-2.5">
              <li><a href="/#about" className={linkCls}>About My SafetyZone</a></li>
              <li><Link to="/contact" className={linkCls}>Contact Us</Link></li>
              <li><Link to="/support" className={linkCls}>Support</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="space-y-4" aria-label="Legal links">
            <h4 className={headerCls}>Legal</h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className={linkCls}>Privacy Policy</Link></li>
              <li><Link to="/terms" className={linkCls}>Terms of Service</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.07]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[11px] text-white/35">
              &copy; {currentYear} Powers Solutions USA LLC. All rights reserved. My SafetyZone&trade; is the #1 food allergy app.
            </p>
            <p className="text-[11px] text-white/35 text-center">
              AI allergen detection recommendations are informational only. Always verify with restaurant staff and healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
