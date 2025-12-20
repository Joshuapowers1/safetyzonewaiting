import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/safetyzoneofficial',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/mysafetyzone/',
      icon: Linkedin,
    },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm"
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          
          {/* Hover tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {link.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
