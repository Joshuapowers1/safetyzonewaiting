import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AppStoreBadge } from '@/components/ui/store-badges';
import logoWhite from '@/assets/logo-white.png';

const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Support', path: '/support' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,25%,4%)]/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoWhite} alt="SafetyZone" className="w-8 h-8 object-contain" />
            <span className="text-lg font-semibold text-white">SafetyZone</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive(link.path) ? 'text-white' : 'text-white/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
              Admin
            </Link>
            <Button asChild size="sm" className="rounded-lg bg-white text-black hover:bg-white/90 font-medium h-9 px-4">
              <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
                <Apple className="w-3.5 h-3.5" />
                Download
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-white/70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(220,25%,4%)]/95 backdrop-blur-xl border-b border-white/[0.04]"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`block text-sm font-medium transition-colors py-1 ${
                    isActive(link.path) ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-white/50 py-1"
              >
                Admin
              </Link>
              <Button asChild size="sm" className="w-full rounded-lg bg-white text-black hover:bg-white/90 font-medium">
                <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
                  <Apple className="w-3.5 h-3.5" />
                  Download App
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
