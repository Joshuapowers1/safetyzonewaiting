
-- Tighten the audit log insert policy to require action field
DROP POLICY "Anyone can insert audit logs" ON public.audit_log;
CREATE POLICY "Controlled audit log inserts"
  ON public.audit_log FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    action IS NOT NULL AND 
    length(action) > 0 AND 
    length(action) <= 100 AND
    (ip_hash IS NULL OR length(ip_hash) <= 128) AND
    (actor_id_hash IS NULL OR length(actor_id_hash) <= 128)
  );
