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
  Zap,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: ScanLine,
    title: 'Menu Scanner',
    description: 'Scan any menu via photo, QR code, or URL and receive personalized safety ratings in under 3 seconds.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Barcode,
    title: 'Barcode Scanner',
    description: 'Instantly identify product ingredients and hidden allergens across millions of products.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Camera,
    title: 'CalorieSnap',
    description: 'AI-powered calorie and macro analysis from food photos for health-conscious nutrition tracking.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: ChefHat,
    title: 'Recipe AI',
    description: 'Transform any recipe to match your dietary restrictions with safe ingredient substitutions.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Create multi-person family profiles with different restrictions for everyone in your household.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: QrCode,
    title: 'QR Dietary Profile',
    description: 'Generate shareable QR codes that restaurant staff can scan to understand your needs.',
    color: 'from-indigo-500 to-blue-500',
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
    <section id="features" className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Everything you need to eat{' '}
            <span className="text-primary italic">safely</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our triple-verified AI Scanner analyzes menus, product labels, and food photos, cross-referencing FDA allergen databases, USDA nutrition data, and published medical research.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-background rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 mt-4 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary/5 via-background to-accent/5 rounded-[2rem] p-10 md:p-14 border border-border/50 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-10">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
