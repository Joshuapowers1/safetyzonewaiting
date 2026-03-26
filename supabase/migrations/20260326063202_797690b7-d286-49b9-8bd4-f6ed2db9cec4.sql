
-- Fix: Tighten the permissive insert policy so only existing admins can insert ANY role
DROP POLICY "Admins can insert roles" ON public.user_roles;
CREATE POLICY "Admins can insert roles"
  ON public.user_roles FOR INSERT
  TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    AND user_id <> auth.uid()
  );
