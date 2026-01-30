-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create email_drafts table for saving draft emails
CREATE TABLE public.email_drafts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL DEFAULT 'Untitled Draft',
  subject TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_drafts ENABLE ROW LEVEL SECURITY;

-- Only admins can manage drafts
CREATE POLICY "Admins can view drafts"
ON public.email_drafts
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert drafts"
ON public.email_drafts
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

CREATE POLICY "Admins can update drafts"
ON public.email_drafts
FOR UPDATE
USING (has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

CREATE POLICY "Admins can delete drafts"
ON public.email_drafts
FOR DELETE
USING (has_role(auth.uid(), 'admin') AND auth.uid() = user_id);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_email_drafts_updated_at
BEFORE UPDATE ON public.email_drafts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();