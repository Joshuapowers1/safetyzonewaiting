import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Apple, Smartphone } from 'lucide-react';
import tealLogo from '@/assets/teal-logo.png';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2" aria-label="My SafetyZone food allergy app home">
              <img src={tealLogo} alt="My SafetyZone food allergy app logo" className="w-8 h-8 object-contain" width="32" height="32" />
              <span className="text-lg font-semibold text-gray-900">My SafetyZone</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              The #1 AI-powered food allergy app. Allergen detection, QR allergy cards, EpiPen tracker, FDA recall alerts, and safe recipe AI for 500M+ people with food allergies and dietary restrictions worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/safetyzoneofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="My SafetyZone on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/mysafetyzone/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="My SafetyZone on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:joshua@mysafetyzone.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Email My SafetyZone support">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <nav className="space-y-3" aria-label="Product links">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Food Allergy App Features</a>
              </li>
              <li>
                <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5">
                  <Apple className="w-3 h-3" />
                  Download for iOS
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-300 inline-flex items-center gap-1.5">
                  <Smartphone className="w-3 h-3" />
                  Google Play (Coming Soon)
                </span>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav className="space-y-3" aria-label="Company links">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About My SafetyZone</a></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link></li>
              <li><Link to="/support" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Support</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="space-y-3" aria-label="Legal links">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[11px] text-gray-400">
              &copy; {currentYear} Powers Solutions USA LLC. All rights reserved. My SafetyZone&trade; is the #1 food allergy app.
            </p>
            <p className="text-[11px] text-gray-400 text-center">
              AI allergen detection recommendations are informational only. Always verify with restaurant staff and healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
