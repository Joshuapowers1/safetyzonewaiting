import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Users, Loader2, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface EmailNotificationPanelProps {
  recipientCount: number;
  selectedIds?: string[];
  onClose: () => void;
}

const EmailNotificationPanel = ({ recipientCount, selectedIds, onClose }: EmailNotificationPanelProps) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState<{ sent: number; failed: number } | null>(null);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!subject.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in both subject and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    setResult(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication required",
          description: "Please log in again.",
          variant: "destructive",
        });
        return;
      }

      const response = await supabase.functions.invoke('send-waitlist-email', {
        body: {
          subject,
          message,
          recipientIds: selectedIds,
        },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      const data = response.data;
      setResult({ sent: data.sent, failed: data.failed });

      if (data.sent > 0) {
        toast({
          title: "Emails sent! 📧",
          description: `Successfully sent to ${data.sent} subscriber${data.sent > 1 ? 's' : ''}.`,
        });
      }

      if (data.failed > 0) {
        toast({
          title: "Some emails failed",
          description: `${data.failed} email${data.failed > 1 ? 's' : ''} could not be sent.`,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Error sending emails:', error);
      toast({
        title: "Failed to send emails",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const templates = [
    {
      name: "Launch Update",
      subject: "Exciting News from Safety Zone! 🚀",
      message: "We're thrilled to share some exciting updates about Safety Zone!\n\nOur team has been working hard, and we're getting closer to our January 2026 launch. Here's what's new:\n\n• Advanced AI dietary analysis\n• Restaurant menu scanning\n• Personalized meal recommendations\n\nStay tuned for more updates. We can't wait to help you navigate your dietary needs!\n\nBest regards,\nThe Safety Zone Team"
    },
    {
      name: "Feature Preview",
      subject: "Sneak Peek: New Features Coming to Safety Zone",
      message: "Hi there!\n\nWe wanted to give you an exclusive preview of what's coming to Safety Zone.\n\nAs a valued waitlist member, you'll be among the first to experience our AI-powered dietary companion.\n\nWe'd love to hear what features matter most to you. Reply to this email with your thoughts!\n\nThanks for being part of our journey.\n\nWarm regards,\nThe Safety Zone Team"
    },
  ];

  const applyTemplate = (template: typeof templates[0]) => {
    setSubject(template.subject);
    setMessage(template.message);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="glass-card gradient-border w-full max-w-2xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">Send Notification</h2>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Users className="w-3 h-3" />
                {selectedIds?.length || recipientCount} recipient{(selectedIds?.length || recipientCount) !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Quick Templates */}
          <div className="space-y-2">
            <Label className="text-muted-foreground text-sm">Quick Templates</Label>
            <div className="flex gap-2 flex-wrap">
              {templates.map((template) => (
                <button
                  key={template.name}
                  onClick={() => applyTemplate(template)}
                  className="px-3 py-1.5 text-sm rounded-lg border border-border bg-muted/30 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">Subject *</Label>
            <Input
              id="subject"
              placeholder="Enter email subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message *</Label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[200px] resize-none"
            />
            <p className="text-xs text-muted-foreground">
              The recipient's name will be automatically added to the greeting.
            </p>
          </div>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`p-4 rounded-lg border ${
                  result.failed === 0
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-yellow-500/10 border-yellow-500/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  {result.failed === 0 ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  )}
                  <span className="text-sm">
                    {result.sent} sent, {result.failed} failed
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
          <Button variant="outline" onClick={onClose} disabled={isSending}>
            Cancel
          </Button>
          <Button
            variant="glow"
            onClick={handleSend}
            disabled={isSending || !subject.trim() || !message.trim()}
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Email
              </>
            )}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmailNotificationPanel;
