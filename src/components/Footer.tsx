import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Apple, Smartphone } from 'lucide-react';
import logoWhite from '@/assets/logo-white.png';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(220,25%,3%)] border-t border-white/[0.04]">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoWhite} alt="SafetyZone" className="w-8 h-8 object-contain" />
              <span className="text-lg font-semibold text-white">SafetyZone</span>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed">
              AI-powered food safety for 200M+ people with dietary restrictions worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/safetyzoneofficial" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/mysafetyzone/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:joshua@mysafetyzone.com" className="text-white/20 hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-sm text-white/30 hover:text-white/60 transition-colors">Features</a>
              </li>
              <li>
                <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white/30 hover:text-white/60 transition-colors inline-flex items-center gap-1.5">
                  <Apple className="w-3 h-3" />
                  Download for iOS
                </a>
              </li>
              <li>
                <span className="text-sm text-white/15 inline-flex items-center gap-1.5">
                  <Smartphone className="w-3 h-3" />
                  Google Play — Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-sm text-white/30 hover:text-white/60 transition-colors">About</a></li>
              <li><Link to="/contact" className="text-sm text-white/30 hover:text-white/60 transition-colors">Contact</Link></li>
              <li><Link to="/support" className="text-sm text-white/30 hover:text-white/60 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[11px] text-white/20">
              © {currentYear} Powers Solutions USA LLC. All rights reserved.
            </p>
            <p className="text-[11px] text-white/20 text-center">
              AI recommendations are informational only. Always verify with restaurant staff and healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
