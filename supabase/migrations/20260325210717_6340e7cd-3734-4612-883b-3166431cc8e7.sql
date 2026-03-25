-- Fix privilege escalation: restrict user_roles policies to authenticated only

DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can delete roles" ON public.user_roles;

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix rate_limit_log: restrict anon inserts to valid actions only
DROP POLICY IF EXISTS "anon_can_insert_rate_limit" ON public.rate_limit_log;

CREATE POLICY "anon_can_insert_rate_limit"
ON public.rate_limit_log
FOR INSERT
TO anon
WITH CHECK (
  action IN ('waitlist_signup') 
  AND length(identifier) <= 255
  AND length(action) <= 100
);

-- Restrict email_drafts policies from public to authenticated
DROP POLICY IF EXISTS "Admins can insert drafts" ON public.email_drafts;
DROP POLICY IF EXISTS "Admins can update drafts" ON public.email_drafts;
DROP POLICY IF EXISTS "Admins can delete drafts" ON public.email_drafts;
DROP POLICY IF EXISTS "Admins can view drafts" ON public.email_drafts;

CREATE POLICY "Admins can insert drafts"
ON public.email_drafts
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role) AND auth.uid() = user_id);

CREATE POLICY "Admins can update drafts"
ON public.email_drafts
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) AND auth.uid() = user_id);

CREATE POLICY "Admins can delete drafts"
ON public.email_drafts
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) AND auth.uid() = user_id);

CREATE POLICY "Admins can view drafts"
ON public.email_drafts
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Restrict profiles policies from public to authenticated
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete own profile" ON public.profiles;

CREATE POLICY "Users can insert own profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete own profile"
ON public.profiles
FOR DELETE
TO authenticated
USING (auth.uid() = id);