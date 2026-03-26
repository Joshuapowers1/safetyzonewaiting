
-- Allow deletion_request action in rate limit log
DROP POLICY "anon_can_insert_rate_limit" ON public.rate_limit_log;
CREATE POLICY "anon_can_insert_rate_limit"
  ON public.rate_limit_log FOR INSERT
  TO anon
  WITH CHECK (
    action IN ('waitlist_signup', 'deletion_request') AND
    length(identifier) <= 255 AND
    length(action) <= 100
  );

DROP POLICY "authenticated_can_insert_rate_limit" ON public.rate_limit_log;
CREATE POLICY "authenticated_can_insert_rate_limit"
  ON public.rate_limit_log FOR INSERT
  TO authenticated
  WITH CHECK (
    action IN ('waitlist_signup', 'deletion_request') AND
    length(identifier) <= 255 AND
    length(action) <= 100
  );
