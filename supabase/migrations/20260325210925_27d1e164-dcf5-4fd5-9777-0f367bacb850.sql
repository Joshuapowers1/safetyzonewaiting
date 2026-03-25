-- Fix: Prevent authenticated users from writing arbitrary data to rate_limit_log
-- Add a restrictive INSERT policy for authenticated role that only allows waitlist_signup action
CREATE POLICY "authenticated_can_insert_rate_limit"
ON public.rate_limit_log
FOR INSERT
TO authenticated
WITH CHECK (
  action IN ('waitlist_signup')
  AND length(identifier) <= 255
  AND length(action) <= 100
);

-- Harden user_roles: add explicit denial for non-admin self-role-assignment
-- The existing INSERT policy already checks has_role(auth.uid(), 'admin'),
-- but let's also add a RESTRICTIVE policy to prevent self-assignment to admin
CREATE POLICY "no_self_admin_assignment"
ON public.user_roles
AS RESTRICTIVE
FOR INSERT
TO authenticated
WITH CHECK (
  -- Only existing admins can assign admin role, and can't assign to themselves
  CASE 
    WHEN role = 'admin' THEN user_id != auth.uid()
    ELSE true
  END
);

-- Block anon from reading waitlist data via realtime or direct queries
-- (already blocked by existing policies, but let's be explicit)
-- No anon SELECT policy exists on waitlist - good

-- Ensure no anon SELECT on profiles
-- Already restricted to authenticated with auth.uid() = id - good

-- Block any SELECT on rate_limit_log for non-admins
-- Already have: admins can read, anon gets false - good
-- But authenticated non-admins have no SELECT policy = denied by default - good