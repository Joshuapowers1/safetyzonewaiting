-- The handle_new_user trigger function runs as SECURITY DEFINER so it bypasses RLS.
-- But we need to make sure the trigger actually exists on auth.users.
-- Let's verify by recreating it safely.

-- We cannot attach triggers to auth.users directly in migrations,
-- but the function is already SECURITY DEFINER which bypasses RLS.
-- No change needed for the trigger itself.

-- Add a unique constraint on waitlist email to prevent duplicates at DB level
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_unique ON public.waitlist (email);