-- Allow users to delete their own profile (GDPR compliance - right to be forgotten)
CREATE POLICY "Users can delete own profile" 
ON public.profiles 
FOR DELETE 
USING (auth.uid() = id);