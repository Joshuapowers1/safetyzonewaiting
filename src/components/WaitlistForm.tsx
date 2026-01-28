import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  heardFrom: z.string().optional(),
  interest: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const heardFromOptions = [
  "Social Media",
  "Friend or Family",
  "Search Engine",
  "Healthcare Provider",
  "Other",
];

const hopingForOptions = [
  "Allergy Alerts",
  "Menu Scanning",
  "Ingredient Analysis",
  "Meal Recommendations",
  "Grocery Helper",
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
        title: "Welcome aboard! 🥗",
        description: "You're on the list. We'll notify you when we launch!",
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="soft-card p-8 text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </motion.div>
        <h3 className="text-xl font-bold text-foreground mb-2">You're In!</h3>
        <p className="text-muted-foreground">
          Thanks for joining, <span className="text-primary font-medium">{formData.name}</span>! We'll be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="soft-card p-6 md:p-8 max-w-md mx-auto space-y-6"
    >
      <div className="text-center mb-2">
        <h2 className="text-xl font-bold text-foreground mb-2">Join the Waitlist</h2>
        <p className="text-muted-foreground text-sm">
          Be the first to experience AI-powered dietary assistance
        </p>
      </div>

      <div className="space-y-5">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            Your Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`h-12 ${errors.name ? "border-destructive" : ""}`}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-destructive text-sm"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email Address <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`h-12 ${errors.email ? "border-destructive" : ""}`}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-destructive text-sm"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* How did you hear about us */}
        <div className="space-y-3">
          <Label className="text-foreground font-medium">
            How did you find us?
          </Label>
          <p className="text-muted-foreground text-xs -mt-1">Select one option</p>
          <div className="flex flex-wrap gap-2">
            {heardFromOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, heardFrom: option })}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                  formData.heardFrom === option
                    ? 'bg-primary/20 border-primary text-primary font-medium'
                    : 'bg-muted/40 border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* What features are you interested in */}
        <div className="space-y-3">
          <Label className="text-foreground font-medium">
            Which feature excites you most?
          </Label>
          <p className="text-muted-foreground text-xs -mt-1">This helps us prioritize development</p>
          <div className="flex flex-wrap gap-2">
            {hopingForOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, interest: option })}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                  formData.interest === option
                    ? 'bg-accent/20 border-accent text-accent font-medium'
                    : 'bg-muted/40 border-border text-muted-foreground hover:border-accent/40 hover:text-foreground'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
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
    </motion.form>
  );
};

export default WaitlistForm;
