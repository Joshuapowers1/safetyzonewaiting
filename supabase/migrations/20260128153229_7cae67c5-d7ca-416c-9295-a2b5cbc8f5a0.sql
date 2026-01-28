-- Drop all existing policies (with and without trailing spaces)
DROP POLICY IF EXISTS "Admins can view waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Admins can update waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Admins can delete waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;

-- Recreate as PERMISSIVE policies (default)
CREATE POLICY "Admins can view waitlist"
ON public.waitlist
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update waitlist"
ON public.waitlist
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete waitlist"
ON public.waitlist
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow anyone to join the waitlist (INSERT)
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
TO public
WITH CHECK (name IS NOT NULL AND email IS NOT NULL AND length(name) > 0 AND length(email) > 0);