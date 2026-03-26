
-- Allow email_send action in rate limit log for admin rate limiting
DROP POLICY "authenticated_can_insert_rate_limit" ON public.rate_limit_log;
CREATE POLICY "authenticated_can_insert_rate_limit"
  ON public.rate_limit_log FOR INSERT
  TO authenticated
  WITH CHECK (
    action IN ('waitlist_signup', 'deletion_request', 'email_send') AND
    length(identifier) <= 255 AND
    length(action) <= 100
  );
