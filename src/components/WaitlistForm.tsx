import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, Loader2, ArrowRight, Sparkles } from 'lucide-react';

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  heardFrom: z.string().optional(),
  interest: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const heardFromOptions = [
  { label: "Social Media", emoji: "📱" },
  { label: "Friend", emoji: "👋" },
  { label: "Search", emoji: "🔍" },
  { label: "Healthcare", emoji: "🏥" },
  { label: "Other", emoji: "✨" },
];

const featureOptions = [
  { label: "Allergy Alerts", emoji: "🚨" },
  { label: "Menu Scanning", emoji: "📋" },
  { label: "Ingredient Check", emoji: "🔬" },
  { label: "Meal Ideas", emoji: "🍽️" },
  { label: "Grocery Help", emoji: "🛒" },
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
  const { toast } = useToast();

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
        title: "You're on the list! 🥗",
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

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-2xl border border-border p-8 text-center shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </motion.div>
        <h3 className="text-xl font-bold text-foreground mb-2">You're on the list! 🎉</h3>
        <p className="text-muted-foreground">
          Thanks, <span className="text-primary font-semibold">{formData.name}</span>. We'll be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5 shadow-lg"
    >
      <div className="text-center mb-2">
        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">Join the Waitlist</h2>
        </div>
        <p className="text-muted-foreground text-sm">
          Be first to try Safety Zone
        </p>
      </div>

      <div className="space-y-4">
        {/* Name Field */}
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-foreground text-sm font-medium">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`h-11 bg-secondary/50 border-border focus:border-primary ${errors.name ? "border-destructive" : ""}`}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
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
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-foreground text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`h-11 bg-secondary/50 border-border focus:border-primary ${errors.email ? "border-destructive" : ""}`}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
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
        <div className="space-y-2">
          <Label className="text-foreground text-sm font-medium">
            How did you find us?
          </Label>
          <div className="flex flex-wrap gap-2">
            {heardFromOptions.map((option) => (
              <motion.button
                key={option.label}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData({ ...formData, heardFrom: option.label })}
                className={`px-3 py-2 text-sm rounded-lg border transition-all flex items-center gap-1.5 ${
                  formData.heardFrom === option.label
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-secondary/50 border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                <span>{option.emoji}</span>
                <span>{option.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feature interest */}
        <div className="space-y-2">
          <Label className="text-foreground text-sm font-medium">
            Most excited about?
          </Label>
          <div className="flex flex-wrap gap-2">
            {featureOptions.map((option) => (
              <motion.button
                key={option.label}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData({ ...formData, interest: option.label })}
                className={`px-3 py-2 text-sm rounded-lg border transition-all flex items-center gap-1.5 ${
                  formData.interest === option.label
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-secondary/50 border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                <span>{option.emoji}</span>
                <span>{option.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Button
          type="submit"
          className="w-full h-12 font-semibold text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default WaitlistForm;
