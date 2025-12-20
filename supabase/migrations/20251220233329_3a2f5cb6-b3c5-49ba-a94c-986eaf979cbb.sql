-- Drop existing policies on user_roles (we'll be more restrictive)
DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;

-- Create new policies - users can only view their own roles
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- No INSERT/UPDATE/DELETE policies for user_roles
-- Only service role (database admin) can manage roles