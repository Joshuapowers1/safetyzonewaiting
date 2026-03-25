import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Users, Loader2, X, CheckCircle2, AlertCircle, Save, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import RichTextEditor from './RichTextEditor';
import EmailDraftsList from './EmailDraftsList';

interface EmailNotificationPanelProps {
  recipientCount: number;
  selectedIds?: string[];
  onClose: () => void;
}

const EmailNotificationPanel = ({ recipientCount, selectedIds, onClose }: EmailNotificationPanelProps) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [draftTitle, setDraftTitle] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);
  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null);
  const [draftsRefresh, setDraftsRefresh] = useState(0);
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
      // Error logged server-side only
      toast({
        title: "Failed to send emails",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleSaveDraft = async () => {
    if (!subject.trim() && !message.trim()) {
      toast({
        title: "Nothing to save",
        description: "Please add a subject or message first.",
        variant: "destructive",
      });
      return;
    }

    setIsSavingDraft(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in again.",
          variant: "destructive",
        });
        return;
      }

      if (currentDraftId) {
        // Update existing draft
        const { error } = await supabase
          .from('email_drafts')
          .update({
            title: draftTitle || subject || 'Untitled Draft',
            subject,
            message,
          })
          .eq('id', currentDraftId);

        if (error) throw error;
        
        toast({
          title: "Draft updated! 💾",
          description: "Your changes have been saved.",
        });
      } else {
        // Create new draft
        const { data, error } = await supabase
          .from('email_drafts')
          .insert({
            user_id: user.id,
            title: draftTitle || subject || 'Untitled Draft',
            subject,
            message,
          })
          .select()
          .single();

        if (error) throw error;
        
        setCurrentDraftId(data.id);
        toast({
          title: "Draft saved! 💾",
          description: "You can access it from the Drafts menu.",
        });
      }

      setDraftsRefresh(prev => prev + 1);
    } catch (error: any) {
      console.error('Error saving draft:', error);
      toast({
        title: "Failed to save draft",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handleSelectDraft = (draft: { id: string; title: string; subject: string; message: string }) => {
    setCurrentDraftId(draft.id);
    setDraftTitle(draft.title);
    setSubject(draft.subject);
    setMessage(draft.message);
    setShowDrafts(false);
    toast({
      title: "Draft loaded",
      description: `"${draft.title}" is ready to edit.`,
    });
  };

  const handleNewDraft = () => {
    setCurrentDraftId(null);
    setDraftTitle('');
    setSubject('');
    setMessage('');
    setResult(null);
  };

  const templates = [
    {
      name: "Launch Update",
      subject: "Exciting News from Safety Zone! 🚀",
      message: "<p>We're thrilled to share some exciting updates about Safety Zone!</p><p>Our team has been working hard, and we're getting closer to our January 2026 launch. Here's what's new:</p><ul><li>Advanced AI dietary analysis</li><li>Restaurant menu scanning</li><li>Personalized meal recommendations</li></ul><p>Stay tuned for more updates. We can't wait to help you navigate your dietary needs!</p><p>Best regards,<br><strong>The Safety Zone Team</strong></p>"
    },
    {
      name: "Feature Preview",
      subject: "Sneak Peek: New Features Coming to Safety Zone",
      message: "<p>Hi there!</p><p>We wanted to give you an <strong>exclusive preview</strong> of what's coming to Safety Zone.</p><p>As a valued waitlist member, you'll be among the first to experience our AI-powered dietary companion.</p><p>We'd love to hear what features matter most to you. <a href=\"mailto:joshua@mysafetyzone.com\">Reply to this email</a> with your thoughts!</p><p>Thanks for being part of our journey.</p><p>Warm regards,<br><strong>The Safety Zone Team</strong></p>"
    },
  ];

  const applyTemplate = (template: typeof templates[0]) => {
    setSubject(template.subject);
    setMessage(template.message);
    setCurrentDraftId(null);
    setDraftTitle('');
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
        className="glass-card gradient-border w-full max-w-3xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">
                {currentDraftId ? 'Edit Draft' : 'Send Notification'}
              </h2>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Users className="w-3 h-3" />
                {selectedIds?.length || recipientCount} recipient{(selectedIds?.length || recipientCount) !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleNewDraft}>
              New
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowDrafts(!showDrafts)}
              className={showDrafts ? 'bg-primary/10 border-primary/50' : ''}
            >
              <FolderOpen className="w-4 h-4 mr-1" />
              Drafts
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex">
          {/* Main content */}
          <div className={`flex-1 p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)] transition-all ${showDrafts ? 'w-2/3' : 'w-full'}`}>
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

            {/* Draft Title (optional) */}
            {(currentDraftId || draftTitle) && (
              <div className="space-y-2">
                <Label htmlFor="draftTitle" className="text-foreground">Draft Name</Label>
                <Input
                  id="draftTitle"
                  placeholder="Name this draft for easy reference..."
                  value={draftTitle}
                  onChange={(e) => setDraftTitle(e.target.value)}
                  className="bg-muted/30"
                />
              </div>
            )}

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

            {/* Message with Rich Text Editor */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Message *</Label>
              <RichTextEditor
                value={message}
                onChange={setMessage}
                placeholder="Write your message here... Use the toolbar above for formatting."
              />
              <p className="text-xs text-muted-foreground">
                The recipient's name will be automatically added to the greeting. Use the toolbar for bold, italic, links, and lists.
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

          {/* Drafts sidebar */}
          <AnimatePresence>
            {showDrafts && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '33%', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="border-l border-border p-4 overflow-hidden"
              >
                <h3 className="font-medium text-foreground mb-3">Saved Drafts</h3>
                <EmailDraftsList
                  onSelectDraft={handleSelectDraft}
                  onClose={() => setShowDrafts(false)}
                  refreshTrigger={draftsRefresh}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 p-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handleSaveDraft}
            disabled={isSavingDraft || (!subject.trim() && !message.trim())}
          >
            {isSavingDraft ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                {currentDraftId ? 'Update Draft' : 'Save Draft'}
              </>
            )}
          </Button>
          
          <div className="flex items-center gap-3">
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmailNotificationPanel;
