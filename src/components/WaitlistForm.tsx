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
  "Friend",
  "Search",
  "Healthcare",
  "Other",
];

const featureOptions = [
  "Allergy Alerts",
  "Menu Scanning",
  "Ingredient Check",
  "Meal Ideas",
  "Grocery Help",
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
        className="clean-card p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </motion.div>
        <h3 className="text-lg font-semibold text-foreground mb-2">You're on the list!</h3>
        <p className="text-muted-foreground text-sm">
          Thanks, <span className="text-foreground font-medium">{formData.name}</span>. We'll be in touch soon.
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
      className="clean-card p-6 md:p-8 space-y-5"
    >
      <div className="text-center mb-1">
        <h2 className="text-lg font-semibold text-foreground mb-1">Join the Waitlist</h2>
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
            className={`h-11 ${errors.name ? "border-destructive" : ""}`}
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
            className={`h-11 ${errors.email ? "border-destructive" : ""}`}
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
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, heardFrom: option })}
                className={`px-3 py-1.5 text-sm rounded-md border transition-all ${
                  formData.heardFrom === option
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {option}
              </button>
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
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, interest: option })}
                className={`px-3 py-1.5 text-sm rounded-md border transition-all ${
                  formData.interest === option
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
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
        className="w-full h-11 font-medium"
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
