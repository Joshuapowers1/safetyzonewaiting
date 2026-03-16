
-- Rate limit log table
CREATE TABLE IF NOT EXISTS public.rate_limit_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  action text NOT NULL,
  identifier text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_can_insert_rate_limit" ON public.rate_limit_log
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "no_public_reads_rate_limit" ON public.rate_limit_log
  FOR SELECT TO anon USING (false);

CREATE POLICY "admins_can_read_rate_limit" ON public.rate_limit_log
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Rate limit check function
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_action text,
  p_identifier text,
  p_max_requests int DEFAULT 3,
  p_window_seconds int DEFAULT 60
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count int;
BEGIN
  -- Clean old entries (older than 1 hour)
  DELETE FROM public.rate_limit_log
  WHERE created_at < now() - interval '1 hour';

  -- Count recent requests
  SELECT count(*) INTO recent_count
  FROM public.rate_limit_log
  WHERE action = p_action
    AND identifier = p_identifier
    AND created_at > now() - (p_window_seconds || ' seconds')::interval;

  IF recent_count >= p_max_requests THEN
    RETURN false;
  END IF;

  -- Log this request
  INSERT INTO public.rate_limit_log (action, identifier)
  VALUES (p_action, p_identifier);

  RETURN true;
END;
$$;

-- Add privacy_consent and submitted_at to waitlist
ALTER TABLE public.waitlist ADD COLUMN IF NOT EXISTS privacy_consent boolean NOT NULL DEFAULT false;
ALTER TABLE public.waitlist ADD COLUMN IF NOT EXISTS submitted_at timestamptz NOT NULL DEFAULT now();
