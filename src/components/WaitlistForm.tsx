import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { sanitizeText, isDisposableEmail, normalizeEmail, generateMathCaptcha } from '@/lib/security';
import {
  CheckCircle2,
  Loader2,
  ArrowRight,
  ArrowLeft,
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
  Star,
  Baby,
  User,
  ChefHat,
  Smartphone,
  Monitor,
  Tablet,
  AlertTriangle,
  Activity,
  ThermometerSun,
} from 'lucide-react';

// ── Schema ──
const waitlistSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
});

type WaitlistFormData = {
  name: string;
  email: string;
  managingFor: string;
  allergyTypes: string[];
  severity: string;
  interest: string;
  heardFrom: string;
  devicePreference: string;
};

// ── Option data ──
const managingForOptions = [
  { label: 'Myself', icon: User, description: 'I have food allergies' },
  { label: 'My Child', icon: Baby, description: 'Managing for my kid(s)' },
  { label: 'Family Member', icon: Users, description: 'Caring for someone else' },
  { label: 'Professional', icon: ChefHat, description: "I'm a chef or dietitian" },
];

const allergyOptions = [
  { label: 'Peanut', emoji: '🥜' },
  { label: 'Tree Nuts', emoji: '🌰' },
  { label: 'Dairy', emoji: '🥛' },
  { label: 'Gluten / Celiac', emoji: '🌾' },
  { label: 'Shellfish', emoji: '🦐' },
  { label: 'Eggs', emoji: '🥚' },
  { label: 'Soy', emoji: '🫘' },
  { label: 'Sesame', emoji: '🫓' },
  { label: 'Fish', emoji: '🐟' },
  { label: 'Other', emoji: '➕' },
];

const severityOptions = [
  { label: 'Mild', icon: ThermometerSun, description: 'Minor discomfort', color: 'text-yellow-400' },
  { label: 'Moderate', icon: Activity, description: 'Requires medication', color: 'text-orange-400' },
  { label: 'Severe', icon: AlertTriangle, description: 'Risk of anaphylaxis', color: 'text-red-400' },
];

const featureOptions = [
  { label: 'Allergy Alerts', icon: Bell, color: 'text-rose-500', description: 'Real-time notifications' },
  { label: 'Menu Scanner', icon: Scan, color: 'text-blue-500', description: 'Scan restaurant menus' },
  { label: 'Ingredient Check', icon: Search, color: 'text-amber-500', description: 'Analyze any product' },
  { label: 'Meal Ideas', icon: Salad, color: 'text-green-500', description: 'Safe recipe suggestions' },
  { label: 'Grocery Help', icon: ShoppingCart, color: 'text-purple-500', description: 'Shop with confidence' },
];

const heardFromOptions = [
  { label: 'Social Media', icon: Heart },
  { label: 'Friend / Family', icon: Users },
  { label: 'Google Search', icon: Search },
  { label: 'Other', icon: Star },
];

const deviceOptions = [
  { label: 'iPhone', icon: Smartphone },
  { label: 'Android', icon: Smartphone },
  { label: 'iPad / Tablet', icon: Tablet },
  { label: 'Desktop', icon: Monitor },
];

const TOTAL_STEPS = 6;

// ── Component ──
const WaitlistForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    managingFor: '',
    allergyTypes: [],
    severity: '',
    interest: '',
    heardFrom: '',
    devicePreference: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [consentError, setConsentError] = useState('');
  const { toast } = useToast();

  // Bot protection
  const [honeypot, setHoneypot] = useState('');
  const formLoadTime = useRef(Date.now());
  const [captcha, setCaptcha] = useState(() => generateMathCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // Realtime count
  useEffect(() => {
    const fetchCount = async () => {
      const { count } = await supabase.from('waitlist').select('*', { count: 'exact', head: true });
      if (count !== null) setWaitlistCount(count);
    };
    fetchCount();
    const channel = supabase
      .channel('waitlist-count')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'waitlist' }, () => fetchCount())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  // ── Step validation ──
  const validateStep = (): boolean => {
    setErrors({});
    setCaptchaError('');
    setConsentError('');

    if (step === 1) {
      const result = waitlistSchema.safeParse({ name: formData.name, email: formData.email });
      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
        });
        setErrors(fieldErrors);
        return false;
      }
      if (isDisposableEmail(normalizeEmail(formData.email))) {
        setErrors({ email: 'Please use a permanent email address.' });
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!formData.managingFor) {
        setErrors({ managingFor: "Please select who you're managing allergies for." });
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (formData.allergyTypes.length === 0) {
        setErrors({ allergyTypes: 'Please select at least one allergy or dietary need.' });
        return false;
      }
      return true;
    }
    // Steps 4, 5 are optional selections
    return true;
  };

  const goNext = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  // ── Submit ──
  const handleSubmit = async () => {
    // Honeypot
    if (honeypot) { setIsSuccess(true); return; }
    // Timing
    if (Date.now() - formLoadTime.current < 2000) {
      toast({ title: 'Please take your time', description: 'Fill out the form carefully.', variant: 'destructive' });
      return;
    }
    // Captcha
    if (parseInt(captchaAnswer, 10) !== captcha.answer) {
      setCaptchaError('Incorrect answer. Please try again.');
      setCaptcha(generateMathCaptcha());
      setCaptchaAnswer('');
      return;
    }
    // Consent
    if (!privacyConsent) {
      setConsentError('You must agree to the privacy policy to join.');
      return;
    }

    setIsSubmitting(true);
    try {
      const cleanName = sanitizeText(formData.name);
      const cleanEmail = normalizeEmail(formData.email);

      // Validate allergy types against known enum (mass assignment protection)
      const validAllergyLabels = allergyOptions.map(o => o.label);
      const sanitizedAllergies = formData.allergyTypes.filter(a => validAllergyLabels.includes(a));

      // Validate severity against known options
      const validSeverities = severityOptions.map(o => o.label);
      const sanitizedSeverity = validSeverities.includes(formData.severity) ? formData.severity : null;

      // Rate limit
      const { data: allowed, error: rlError } = await supabase.rpc('check_rate_limit', {
        p_action: 'waitlist_signup',
        p_identifier: cleanEmail,
        p_max_requests: 3,
        p_window_seconds: 60,
      });
      if (rlError || !allowed) {
        toast({ title: 'Too many attempts', description: 'Please wait a minute before trying again.', variant: 'destructive' });
        return;
      }

      // Only insert explicitly allowed fields (mass assignment protection)
      const { error } = await supabase.from('waitlist').insert({
        name: cleanName,
        email: cleanEmail,
        managing_for: formData.managingFor || null,
        allergy_types: sanitizedAllergies.length > 0 ? sanitizedAllergies : null,
        severity: sanitizedSeverity,
        interest: formData.interest || null,
        heard_from: formData.heardFrom || null,
        device_preference: formData.devicePreference || null,
        privacy_consent: true,
      });

      if (error) {
        if (error.code === '23505') {
          toast({ title: 'Already registered!', description: 'This email is already on our waitlist.', variant: 'destructive' });
        } else {
          throw error;
        }
        return;
      }

      // Clear sensitive form data from memory immediately after successful submission
      setFormData(prev => ({ ...prev, email: '', name: '' }));

      setIsSuccess(true);
      toast({ title: "You're on the list! 🎉", description: "We'll notify you when we launch." });
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again later.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Refetch count on success
  useEffect(() => {
    if (isSuccess) {
      supabase.from('waitlist').select('*', { count: 'exact', head: true }).then(({ count }) => {
        if (count !== null) setWaitlistCount(count);
      });
    }
  }, [isSuccess]);

  // ── Toggle allergy selection ──
  const toggleAllergy = (label: string) => {
    setFormData((prev) => ({
      ...prev,
      allergyTypes: prev.allergyTypes.includes(label)
        ? prev.allergyTypes.filter((a) => a !== label)
        : [...prev.allergyTypes, label],
    }));
  };

  // ── Success screen ──
  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-3xl border border-border p-8 md:p-10 text-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0, x: '50%', y: '50%' }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0.5], x: `${50 + (Math.random() - 0.5) * 100}%`, y: `${50 + (Math.random() - 0.5) * 100}%` }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
              className="absolute w-2 h-2 rounded-full"
              style={{ background: ['hsl(174, 72%, 38%)', 'hsl(168, 70%, 42%)', 'hsl(45, 93%, 58%)', 'hsl(280, 70%, 60%)'][i % 4] }}
            />
          ))}
        </div>
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="font-display text-2xl font-semibold text-foreground mb-2 italic">
          Welcome aboard, {sanitizeText(formData.name)}!
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-muted-foreground mb-6">
          You're officially on the waitlist. We'll email you as soon as Safety Zone launches.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Users className="w-4 h-4" />
          {waitlistCount !== null && `${waitlistCount.toLocaleString()} people on the waitlist`}
        </motion.div>
      </motion.div>
    );
  }

  // ── Progress bar ──
  const progress = (step / TOTAL_STEPS) * 100;

  // ── Render step content ──
  const renderStep = () => {
    const slideVariants = {
      enter: { opacity: 0, x: 30 },
      center: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -30 },
    };

    switch (step) {
      // ── Step 1: Basics ──
      case 1:
        return (
          <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="space-y-4">
            <div className="text-center mb-2">
              <p className="text-sm text-muted-foreground">Let's start with the basics</p>
            </div>
            {/* Honeypot */}
            <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
              <label htmlFor="website_url">Website</label>
              <input type="text" id="website_url" name="website_url" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" tabIndex={-1} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground text-sm font-medium">What should we call you?</Label>
              <Input id="name" placeholder="Your first name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                autoComplete="given-name"
                maxLength={100}
                className={`h-12 bg-background text-foreground border-border focus:border-primary transition-all ${errors.name ? 'border-destructive' : ''}`} />
              {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground text-sm font-medium">Where can we reach you?</Label>
              <Input id="email" type="email" placeholder="your@email.com" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                autoComplete="email"
                maxLength={255}
                className={`h-12 bg-background text-foreground border-border focus:border-primary transition-all ${errors.email ? 'border-destructive' : ''}`} />
              {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
            </div>
          </motion.div>
        );

      // ── Step 2: Who are you managing for? ──
      case 2:
        return (
          <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="space-y-4">
            <div className="text-center mb-2">
              <p className="text-sm text-muted-foreground">Who are you managing allergies for?</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {managingForOptions.map((opt) => {
                const Icon = opt.icon;
                const selected = formData.managingFor === opt.label;
                return (
                  <motion.button key={opt.label} type="button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => setFormData({ ...formData, managingFor: opt.label })}
                    className={`p-4 rounded-xl border text-left transition-all ${selected
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                      : 'bg-secondary/20 border-border text-foreground hover:border-primary/50'}`}>
                    <Icon className={`w-6 h-6 mb-2 ${selected ? 'text-primary-foreground' : 'text-primary'}`} />
                    <p className="font-medium text-sm">{opt.label}</p>
                    <p className={`text-xs mt-0.5 ${selected ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{opt.description}</p>
                  </motion.button>
                );
              })}
            </div>
            {errors.managingFor && <p className="text-destructive text-xs text-center">{errors.managingFor}</p>}
          </motion.div>
        );

      // ── Step 3: Allergy types (multi-select) ──
      case 3:
        return (
          <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="space-y-4">
            <div className="text-center mb-2">
              <p className="text-sm text-muted-foreground">Select your allergies or dietary needs</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Select all that apply</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {allergyOptions.map((opt) => {
                const selected = formData.allergyTypes.includes(opt.label);
                return (
                  <motion.button key={opt.label} type="button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => toggleAllergy(opt.label)}
                    className={`p-3 rounded-xl border text-sm transition-all flex items-center gap-2.5 ${selected
                      ? 'bg-primary text-primary-foreground border-primary shadow-md'
                      : 'bg-secondary/20 border-border text-foreground hover:border-primary/50'}`}>
                    <span className="text-lg">{opt.emoji}</span>
                    <span className="font-medium">{opt.label}</span>
                    {selected && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                  </motion.button>
                );
              })}
            </div>
            {errors.allergyTypes && <p className="text-destructive text-xs text-center">{errors.allergyTypes}</p>}
          </motion.div>
        );

      // ── Step 4: Severity + Feature Interest ──
      case 4:
        return (
          <motion.div key="step4" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">How severe are your allergies?</p>
              <div className="grid grid-cols-3 gap-2">
                {severityOptions.map((opt) => {
                  const Icon = opt.icon;
                  const selected = formData.severity === opt.label;
                  return (
                    <motion.button key={opt.label} type="button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      onClick={() => setFormData({ ...formData, severity: opt.label })}
                      className={`p-3 rounded-xl border text-center transition-all ${selected
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-secondary/20 border-border text-foreground hover:border-primary/50'}`}>
                      <Icon className={`w-5 h-5 mx-auto mb-1.5 ${selected ? 'text-primary-foreground' : opt.color}`} />
                      <p className="font-medium text-xs">{opt.label}</p>
                      <p className={`text-[10px] mt-0.5 ${selected ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{opt.description}</p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">What feature excites you most?</p>
              <div className="space-y-2">
                {featureOptions.map((opt) => {
                  const Icon = opt.icon;
                  const selected = formData.interest === opt.label;
                  return (
                    <motion.button key={opt.label} type="button" whileHover={{ scale: 1.01, x: 4 }} whileTap={{ scale: 0.99 }}
                      onClick={() => setFormData({ ...formData, interest: opt.label })}
                      className={`w-full p-3 text-sm rounded-xl border transition-all flex items-center gap-3 ${selected
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-secondary/20 border-border text-foreground hover:border-primary/50'}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${selected ? 'bg-white/20' : 'bg-secondary'}`}>
                        <Icon className={`w-4 h-4 ${selected ? 'text-white' : opt.color}`} />
                      </div>
                      <div className="text-left">
                        <span className="font-medium">{opt.label}</span>
                        <p className={`text-[10px] ${selected ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{opt.description}</p>
                      </div>
                      {selected && <CheckCircle2 className="w-4 h-4 ml-auto shrink-0" />}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );

      // ── Step 5: Discovery + Device ──
      case 5:
        return (
          <motion.div key="step5" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">How did you discover SafetyZone?</p>
              <div className="grid grid-cols-2 gap-2">
                {heardFromOptions.map((opt) => {
                  const Icon = opt.icon;
                  const selected = formData.heardFrom === opt.label;
                  return (
                    <motion.button key={opt.label} type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, heardFrom: opt.label })}
                      className={`p-3 text-sm rounded-xl border transition-all flex items-center gap-2 ${selected
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-secondary/20 border-border text-muted-foreground hover:text-foreground hover:border-primary/50'}`}>
                      <Icon className="w-4 h-4" />
                      <span>{opt.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">What device will you use SafetyZone on?</p>
              <div className="grid grid-cols-2 gap-2">
                {deviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const selected = formData.devicePreference === opt.label;
                  return (
                    <motion.button key={opt.label} type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, devicePreference: opt.label })}
                      className={`p-3 text-sm rounded-xl border transition-all flex items-center gap-2 ${selected
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-secondary/20 border-border text-muted-foreground hover:text-foreground hover:border-primary/50'}`}>
                      <Icon className="w-4 h-4" />
                      <span>{opt.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );

      // ── Step 6: Captcha + Consent + Submit ──
      case 6:
        return (
          <motion.div key="step6" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="space-y-4">
            <div className="text-center mb-2">
              <p className="text-sm text-muted-foreground">Almost there! One quick check.</p>
            </div>
            {/* Math Captcha */}
            <div className="space-y-2">
              <Label htmlFor="captcha" className="text-foreground text-sm font-medium">
                Quick check: {captcha.question}
              </Label>
              <Input id="captcha" type="text" inputMode="numeric" placeholder="Your answer" value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className={`h-12 bg-background text-foreground border-border focus:border-primary transition-all ${captchaError ? 'border-destructive' : ''}`} />
              {captchaError && <p className="text-destructive text-xs">{captchaError}</p>}
            </div>
            {/* Privacy Consent */}
            <div className="space-y-1">
              <div className="flex items-start gap-3">
                <Checkbox id="privacy-consent" checked={privacyConsent}
                  onCheckedChange={(checked) => { setPrivacyConsent(checked === true); setConsentError(''); }}
                  className="mt-0.5" />
                <Label htmlFor="privacy-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Privacy Policy</a>{' '}
                  and consent to SafetyZone storing my information to send launch updates.
                </Label>
              </div>
              {consentError && <p className="text-destructive text-xs pl-7">{consentError}</p>}
            </div>

            {/* Summary preview */}
            <div className="bg-secondary/20 rounded-xl p-4 space-y-1.5 border border-border">
              <p className="text-xs font-medium text-foreground mb-2">Your summary:</p>
              <p className="text-xs text-muted-foreground"><span className="text-foreground">Name:</span> {sanitizeText(formData.name)}</p>
              <p className="text-xs text-muted-foreground"><span className="text-foreground">Managing for:</span> {formData.managingFor || '—'}</p>
              <p className="text-xs text-muted-foreground"><span className="text-foreground">Allergies:</span> {formData.allergyTypes.length > 0 ? formData.allergyTypes.join(', ') : '—'}</p>
              {formData.severity && <p className="text-xs text-muted-foreground"><span className="text-foreground">Severity:</span> {formData.severity}</p>}
              {formData.interest && <p className="text-xs text-muted-foreground"><span className="text-foreground">Excited about:</span> {formData.interest}</p>}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 px-6 py-5 border-b border-border">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="font-display text-xl font-semibold text-foreground italic">Join the Waitlist</h2>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          {step === 1 && 'Be among the first to experience personalized dietary guidance'}
          {step === 2 && 'Help us personalize your experience'}
          {step === 3 && 'Tell us about your dietary needs'}
          {step === 4 && 'What matters most to you?'}
          {step === 5 && 'A few more details'}
          {step === 6 && 'Review and join!'}
        </p>
        {waitlistCount !== null && waitlistCount > 0 && step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 mt-3">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-card" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              <span className="text-primary font-semibold">{waitlistCount.toLocaleString()}</span> already joined
            </span>
          </motion.div>
        )}
        {/* Progress bar */}
        <div className="mt-4 h-1.5 bg-secondary/30 rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
        </div>
        <p className="text-[10px] text-muted-foreground/60 text-center mt-1.5">Step {step} of {TOTAL_STEPS}</p>
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 mt-6">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={goBack} className="h-12 px-5 rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
          )}
          {step < TOTAL_STEPS ? (
            <motion.div className="flex-1" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button type="button" onClick={goNext}
                className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg rounded-xl">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ) : (
            <motion.div className="flex-1" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button type="button" onClick={handleSubmit} disabled={isSubmitting}
                className="w-full h-14 font-semibold text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg rounded-xl">
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Joining...</>
                ) : (
                  <>Get Early Access <ArrowRight className="w-5 h-5 ml-2" /></>
                )}
              </Button>
            </motion.div>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-4 pt-4">
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
      </div>
    </motion.div>
  );
};

export default WaitlistForm;
