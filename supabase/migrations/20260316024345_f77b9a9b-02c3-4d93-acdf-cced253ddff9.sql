
ALTER TABLE public.waitlist ADD COLUMN IF NOT EXISTS managing_for text;
ALTER TABLE public.waitlist ADD COLUMN IF NOT EXISTS allergy_types text[];
ALTER TABLE public.waitlist ADD COLUMN IF NOT EXISTS severity text;
ALTER TABLE public.waitlist ADD COLUMN IF NOT EXISTS device_preference text;
