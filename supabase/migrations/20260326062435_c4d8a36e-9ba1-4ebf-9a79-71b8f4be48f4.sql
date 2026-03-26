
-- Audit log table for tracking all sensitive operations
CREATE TABLE public.audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  action TEXT NOT NULL,
  actor_role TEXT NOT NULL DEFAULT 'anonymous',
  actor_id_hash TEXT,
  ip_hash TEXT,
  resource_type TEXT,
  resource_id_hash TEXT,
  metadata JSONB DEFAULT '{}',
  success BOOLEAN NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can read audit logs
CREATE POLICY "Admins can view audit logs"
  ON public.audit_log FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Edge functions (service role) and anon can insert audit entries
CREATE POLICY "Anyone can insert audit logs"
  ON public.audit_log FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No one can update or delete audit logs (immutable)
-- (No UPDATE or DELETE policies = no one can modify/delete)

-- Index for efficient querying
CREATE INDEX idx_audit_log_created_at ON public.audit_log (created_at DESC);
CREATE INDEX idx_audit_log_action ON public.audit_log (action);
