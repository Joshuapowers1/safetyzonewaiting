import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AppStoreBadge } from '@/components/ui/store-badges';
import tealLogo from '@/assets/teal-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#05080f]/80 backdrop-blur-xl border-white/[0.08] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]'
          : 'bg-[#05080f]/40 backdrop-blur-md border-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00C2A8]/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={tealLogo} alt="My SafetyZone" className="relative w-10 h-10 object-contain" />
            </div>
            <span className="font-display text-xl font-semibold tracking-tight text-white">My SafetyZone</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#00C2A8]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://apps.apple.com/us/app/my-safetyzone/id6758567664"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#00C2A8] px-5 py-2 text-sm font-semibold text-[#05080f] shadow-[0_0_24px_-6px_rgba(0,194,168,0.7)] hover:bg-[#00E5FF] hover:shadow-[0_0_32px_-4px_rgba(0,229,255,0.8)] transition-all"
            >
              Download Free
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-[#00C2A8] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated gradient sweep line */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[1.5px] sz-sweep-line opacity-70" />
      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] origin-left bg-gradient-to-r from-[#00C2A8] to-[#00E5FF]"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#05080f]/95 backdrop-blur-xl border-b border-white/[0.08]"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`block text-sm font-medium transition-colors py-1 ${
                    isActive(link.path) ? 'text-[#00C2A8]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.08]">
                <AppStoreBadge className="h-9" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
