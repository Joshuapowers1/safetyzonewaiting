import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  CheckCircle2, 
  Loader2, 
  ArrowRight, 
  Users, 
  Shield, 
  Zap,
  Bell,
  Scan,
  Search,
  Salad,
  ShoppingCart,
  Sparkles,
  Heart,
  Star
} from 'lucide-react';

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  heardFrom: z.string().optional(),
  interest: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const heardFromOptions = [
  { label: "Social Media", icon: Heart },
  { label: "Friend", icon: Users },
  { label: "Search", icon: Search },
  { label: "Other", icon: Star },
];

const featureOptions = [
  { label: "Allergy Alerts", icon: Bell, color: "text-rose-500" },
  { label: "Menu Scanner", icon: Scan, color: "text-blue-500" },
  { label: "Ingredient Check", icon: Search, color: "text-amber-500" },
  { label: "Meal Ideas", icon: Salad, color: "text-green-500" },
  { label: "Grocery Help", icon: ShoppingCart, color: "text-purple-500" },
];

const WaitlistForm = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    heardFrom: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof WaitlistFormData, string>>>({});
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const { toast } = useToast();

  // Fetch waitlist count with realtime updates
  useEffect(() => {
    const fetchCount = async () => {
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
      if (count !== null) {
        setWaitlistCount(count);
      }
    };
    fetchCount();

    // Subscribe to realtime changes
    const channel = supabase
      .channel('waitlist-count')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'waitlist' },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = waitlistSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof WaitlistFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof WaitlistFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('waitlist').insert({
        name: result.data.name,
        email: result.data.email,
        heard_from: result.data.heardFrom || null,
        interest: result.data.interest || null,
      });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already registered!",
            description: "This email is already on our waitlist.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      setIsSuccess(true);
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when we launch.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Refetch count on success
  useEffect(() => {
    if (isSuccess) {
      const fetchCount = async () => {
        const { count } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true });
        if (count !== null) {
          setWaitlistCount(count);
        }
      };
      fetchCount();
    }
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-3xl border border-border p-8 md:p-10 text-center shadow-xl relative overflow-hidden"
      >
        {/* Celebration particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: '50%',
                y: '50%'
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5],
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
              }}
              transition={{ 
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ['hsl(174, 72%, 38%)', 'hsl(168, 70%, 42%)', 'hsl(45, 93%, 58%)', 'hsl(280, 70%, 60%)'][i % 4]
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <CheckCircle2 className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-2xl font-semibold text-foreground mb-2 italic"
        >
          Welcome aboard, {formData.name}!
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground mb-6"
        >
          You're officially on the waitlist. We'll email you as soon as Safety Zone launches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
        >
          <Users className="w-4 h-4" />
          {waitlistCount !== null && `${waitlistCount.toLocaleString()} people on the waitlist`}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 px-6 py-5 border-b border-border">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="font-display text-xl font-semibold text-foreground italic">Join the Waitlist</h2>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          Be among the first to experience personalized dietary guidance
        </p>
        {waitlistCount !== null && waitlistCount > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mt-3"
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-card"
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              <span className="text-primary font-semibold">{waitlistCount.toLocaleString()}</span> already joined
            </span>
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
        <div className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground text-sm font-medium flex items-center gap-2">
              What should we call you?
            </Label>
            <Input
              id="name"
              placeholder="Your first name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`h-12 bg-secondary/30 border-border focus:border-primary transition-all ${errors.name ? "border-destructive" : ""}`}
            />
            <AnimatePresence mode="wait">
              {errors.name && (
                <motion.p
                  key="name-error"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-destructive text-xs"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground text-sm font-medium">
              Where can we reach you?
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-12 bg-secondary/30 border-border focus:border-primary transition-all ${errors.email ? "border-destructive" : ""}`}
            />
            <AnimatePresence mode="wait">
              {errors.email && (
                <motion.p
                  key="email-error"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-destructive text-xs"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* How did you find us */}
          <div className="space-y-3">
            <Label className="text-foreground text-sm font-medium">
              How did you discover us?
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {heardFromOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.label}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({ ...formData, heardFrom: option.label })}
                    className={`p-3 text-sm rounded-xl border transition-all flex items-center gap-2 ${
                      formData.heardFrom === option.label
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-secondary/30 border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Feature interest */}
          <div className="space-y-3">
            <Label className="text-foreground text-sm font-medium">
              What feature excites you most?
            </Label>
            <div className="grid grid-cols-1 gap-2">
              {featureOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.label}
                    type="button"
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setFormData({ ...formData, interest: option.label })}
                    className={`p-3 text-sm rounded-xl border transition-all flex items-center gap-3 ${
                      formData.interest === option.label
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-secondary/30 border-border text-foreground hover:border-primary/50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      formData.interest === option.label ? 'bg-white/20' : 'bg-secondary'
                    }`}>
                      <Icon className={`w-4 h-4 ${formData.interest === option.label ? 'text-white' : option.color}`} />
                    </div>
                    <span className="font-medium">{option.label}</span>
                    {formData.interest === option.label && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <Button
            type="submit"
            className="w-full h-14 font-semibold text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg rounded-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Joining...
              </>
            ) : (
              <>
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span>No spam, ever</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>Launch updates only</span>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default WaitlistForm;
