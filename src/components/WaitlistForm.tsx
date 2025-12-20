import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react';

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

const interestOptions = [
  "Food Allergies",
  "Dietary Restrictions",
  "Restaurant Scanning",
  "Meal Planning",
  "Recipe Suggestions",
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card gradient-border p-8 text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </motion.div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">You're In!</h3>
        <p className="text-muted-foreground">
          Thanks for joining, <span className="text-primary">{formData.name}</span>! We'll be in touch soon.
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
      className="glass-card gradient-border p-6 md:p-8 max-w-md mx-auto space-y-5"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-3">
          <Sparkles className="w-4 h-4" />
          <span>Join the Waitlist</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Be the first to experience AI-powered dietary assistance
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">Name *</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? "border-destructive" : ""}
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

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "border-destructive" : ""}
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

        <div className="space-y-2">
          <Label className="text-foreground">How did you hear about us?</Label>
          <div className="flex flex-wrap gap-2">
            {heardFromOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, heardFrom: option })}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 ${
                  formData.heardFrom === option
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-muted/30 border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">What feature interests you most?</Label>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, interest: option })}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 ${
                  formData.interest === option
                    ? 'bg-accent/20 border-accent text-accent'
                    : 'bg-muted/30 border-border text-muted-foreground hover:border-accent/50'
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
        variant="glow"
        className="w-full font-display tracking-wider"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Joining...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            Join the Waitlist
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default WaitlistForm;
