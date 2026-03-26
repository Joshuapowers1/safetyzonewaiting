
-- Fix 1: Waitlist - verify RLS is enabled and anon has no SELECT
-- RLS is already enabled, and the only SELECT policy requires admin role.
-- Revoke any residual direct SELECT from anon/authenticated as extra hardening.
REVOKE SELECT ON public.waitlist FROM anon;

-- Fix 2: Email drafts - restrict SELECT to own drafts only
DROP POLICY "Admins can view drafts" ON public.email_drafts;
CREATE POLICY "Admins can view own drafts"
  ON public.email_drafts FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin') AND auth.uid() = user_id
  );
