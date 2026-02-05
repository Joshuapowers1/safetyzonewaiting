import { motion } from 'framer-motion';
import { 
  ScanLine, 
  Barcode, 
  Camera, 
  ChefHat, 
  Users, 
  QrCode,
  Shield,
  Globe,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: ScanLine,
    title: 'Menu Scanner',
    description: 'Scan any menu via photo, QR code, or URL and receive personalized safety ratings in under 3 seconds.',
  },
  {
    icon: Barcode,
    title: 'Barcode Scanner',
    description: 'Instantly identify product ingredients and hidden allergens across 5M+ products.',
  },
  {
    icon: Camera,
    title: 'CalorieSnap',
    description: 'AI-powered calorie and macro analysis from food photos for health-conscious users tracking nutrition.',
  },
  {
    icon: ChefHat,
    title: 'Recipe AI',
    description: 'Transform any recipe to match your dietary restrictions with safe ingredient substitutions.',
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Create multi-person family profiles with different restrictions for everyone in your household.',
  },
  {
    icon: QrCode,
    title: 'QR Dietary Profile',
    description: 'Generate shareable QR Dietary Profiles that restaurant staff can scan to understand your needs.',
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: 'HIPAA-Level Privacy',
    description: 'Medical-grade security for your dietary data.',
  },
  {
    icon: Zap,
    title: '99.5% Accuracy',
    description: 'Triple-verified AI with zero-tolerance for missed allergens.',
  },
  {
    icon: Globe,
    title: '200+ Languages',
    description: 'Global accessibility for travelers and diverse communities.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to eat <span className="text-primary italic">safely</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our triple-verified AI Scanner analyzes menus, product labels, and food photos, cross-referencing FDA allergen databases, USDA nutrition data, and published medical research.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary/10 via-background to-accent/10 rounded-3xl p-8 md:p-12 border border-border"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
