import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Trash2, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Draft {
  id: string;
  title: string;
  subject: string;
  message: string;
  updated_at: string;
}

interface EmailDraftsListProps {
  onSelectDraft: (draft: Draft) => void;
  onClose: () => void;
  refreshTrigger?: number;
}

const EmailDraftsList = ({ onSelectDraft, onClose, refreshTrigger }: EmailDraftsListProps) => {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchDrafts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('email_drafts')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setDrafts(data || []);
    } catch (error: any) {
      console.error('Error fetching drafts:', error);
      toast({
        title: "Failed to load drafts",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDrafts();
  }, [refreshTrigger]);

  const handleDelete = async (e: React.MouseEvent, draftId: string) => {
    e.stopPropagation();
    setDeletingId(draftId);
    
    try {
      const { error } = await supabase
        .from('email_drafts')
        .delete()
        .eq('id', draftId);

      if (error) throw error;
      
      setDrafts(drafts.filter(d => d.id !== draftId));
      toast({
        title: "Draft deleted",
        description: "The draft has been removed.",
      });
    } catch (error: any) {
      console.error('Error deleting draft:', error);
      toast({
        title: "Failed to delete draft",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (drafts.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <FileText className="w-10 h-10 mx-auto mb-3 opacity-50" />
        <p>No saved drafts</p>
        <p className="text-sm mt-1">Drafts you save will appear here</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 max-h-[300px] overflow-y-auto">
      <AnimatePresence mode="popLayout">
        {drafts.map((draft) => (
          <motion.div
            key={draft.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="group p-3 rounded-lg border border-border bg-muted/20 hover:border-primary/50 cursor-pointer transition-all"
            onClick={() => onSelectDraft(draft)}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">
                  {draft.title || 'Untitled Draft'}
                </h4>
                <p className="text-sm text-muted-foreground truncate">
                  {draft.subject || 'No subject'}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3" />
                  {formatDate(draft.updated_at)}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                onClick={(e) => handleDelete(e, draft.id)}
                disabled={deletingId === draft.id}
              >
                {deletingId === draft.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </Button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default EmailDraftsList;
