import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  LogOut, 
  Search, 
  Download, 
  Trash2, 
  CheckCircle, 
  Clock,
  TrendingUp,
  BarChart3,
  RefreshCw,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';
import logo from '@/assets/logo.png';
import EmailNotificationPanel from '@/components/EmailNotificationPanel';

type WaitlistEntry = Database['public']['Tables']['waitlist']['Row'];

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [filteredWaitlist, setFilteredWaitlist] = useState<WaitlistEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showEmailPanel, setShowEmailPanel] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (!session) {
        navigate('/auth');
      } else {
        setTimeout(() => {
          checkAdminStatus(session.user.id);
        }, 0);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session) {
        navigate('/auth');
      } else {
        checkAdminStatus(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminStatus = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (data) {
        setIsAdmin(true);
        fetchWaitlist();
      } else {
        setIsAdmin(false);
        setIsLoading(false);
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchWaitlist = async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWaitlist(data || []);
      setFilteredWaitlist(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchWaitlist();
    setIsRefreshing(false);
    toast({ title: "Data refreshed" });
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = waitlist.filter(
        (entry) =>
          entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredWaitlist(filtered);
    } else {
      setFilteredWaitlist(waitlist);
    }
  }, [searchQuery, waitlist]);

  const handleStatusUpdate = async (id: string, status: 'pending' | 'contacted' | 'converted') => {
    try {
      const { error } = await supabase
        .from('waitlist')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setWaitlist((prev) =>
        prev.map((entry) => (entry.id === id ? { ...entry, status } : entry))
      );
      toast({ title: "Status updated" });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from('waitlist').delete().eq('id', id);

      if (error) throw error;

      setWaitlist((prev) => prev.filter((entry) => entry.id !== id));
      setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
      toast({ title: "Entry deleted" });
    } catch (error: any) {
      toast({
        title: "Error deleting entry",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredWaitlist.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredWaitlist.map((e) => e.id));
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Heard From', 'Interest', 'Status', 'Date'];
    const rows = waitlist.map((entry) => [
      entry.name,
      entry.email,
      entry.heard_from || '',
      entry.interest || '',
      entry.status,
      new Date(entry.created_at).toLocaleDateString(),
    ]);

    const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({ title: "CSV exported successfully" });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const stats = {
    total: waitlist.length,
    pending: waitlist.filter((e) => e.status === 'pending').length,
    contacted: waitlist.filter((e) => e.status === 'contacted').length,
    converted: waitlist.filter((e) => e.status === 'converted').length,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="glass-card p-8 text-center max-w-md">
          <img src={logo} alt="Safety Zone" className="w-12 h-12 mx-auto mb-4 rounded-lg" />
          <h1 className="font-display text-xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-4">
            You don't have admin privileges. Please contact an administrator.
          </p>
          <Button onClick={() => navigate('/')} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Email Panel */}
      <AnimatePresence>
        {showEmailPanel && (
          <EmailNotificationPanel
            recipientCount={waitlist.length}
            selectedIds={selectedIds.length > 0 ? selectedIds : undefined}
            onClose={() => {
              setShowEmailPanel(false);
              handleRefresh();
            }}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Safety Zone" className="w-10 h-10 rounded-lg" />
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">Safety Zone</h1>
              <p className="text-xs text-muted-foreground">Admin Dashboard</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Signups', value: stats.total, icon: Users, color: 'text-primary' },
            { label: 'Pending', value: stats.pending, icon: Clock, color: 'text-yellow-500' },
            { label: 'Contacted', value: stats.contacted, icon: TrendingUp, color: 'text-blue-500' },
            { label: 'Converted', value: stats.converted, icon: CheckCircle, color: 'text-green-500' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <BarChart3 className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="futuristic" onClick={exportToCSV}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button 
              variant="glow" 
              onClick={() => setShowEmailPanel(true)}
              disabled={waitlist.length === 0}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email {selectedIds.length > 0 && `(${selectedIds.length})`}
            </Button>
          </div>
        </div>

        {/* Selection info */}
        {selectedIds.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-between"
          >
            <span className="text-sm text-primary">
              {selectedIds.length} subscriber{selectedIds.length > 1 ? 's' : ''} selected
            </span>
            <Button variant="ghost" size="sm" onClick={() => setSelectedIds([])}>
              Clear selection
            </Button>
          </motion.div>
        )}

        {/* Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === filteredWaitlist.length && filteredWaitlist.length > 0}
                      onChange={toggleSelectAll}
                      className="rounded border-border"
                    />
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Source</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Interest</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden sm:table-cell">Date</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredWaitlist.map((entry) => (
                  <motion.tr
                    key={entry.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`border-t border-border hover:bg-muted/30 transition-colors ${
                      selectedIds.includes(entry.id) ? 'bg-primary/5' : ''
                    }`}
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(entry.id)}
                        onChange={() => toggleSelect(entry.id)}
                        className="rounded border-border"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground font-medium">{entry.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{entry.email}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                      {entry.heard_from || '-'}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                      {entry.interest || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={entry.status}
                        onChange={(e) => handleStatusUpdate(entry.id, e.target.value as any)}
                        className="text-xs px-2 py-1 rounded bg-muted border border-border text-foreground"
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground hidden sm:table-cell">
                      {new Date(entry.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(entry.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </motion.tr>
                ))}
                {filteredWaitlist.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center text-muted-foreground">
                      {searchQuery ? 'No results found' : 'No waitlist entries yet'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
