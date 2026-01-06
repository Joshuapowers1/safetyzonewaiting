-- Fix the permissive INSERT policy on waitlist by making it more secure
-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;

-- Create a more secure INSERT policy that still allows public signups
-- but with proper checks (the row being inserted must have valid data)
CREATE POLICY "Anyone can join waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (
  name IS NOT NULL AND 
  email IS NOT NULL AND 
  length(name) > 0 AND 
  length(email) > 0
);

-- Add admin policies for user_roles table to allow role management
CREATE POLICY "Admins can insert roles" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update roles" 
ON public.user_roles 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles" 
ON public.user_roles 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));