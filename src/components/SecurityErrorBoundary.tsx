import React, { Component, ErrorInfo, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

// PII patterns to strip from error messages before logging
const PII_PATTERNS = [
  /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,
  /\b\d{3}-\d{2}-\d{4}\b/g,
  /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
  /Bearer\s+[A-Za-z0-9\-._~+\/]+=*/g,
  /eyJ[A-Za-z0-9\-_]+\.eyJ[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_.+/=]*/g,
  /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi,
];

function stripPII(text: string): string {
  let sanitized = text;
  for (const pattern of PII_PATTERNS) {
    sanitized = sanitized.replace(pattern, '[REDACTED]');
  }
  return sanitized.slice(0, 500);
}

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
}

class SecurityErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorCount: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[SecurityErrorBoundary] Caught error:', error.message);
    console.error('[SecurityErrorBoundary] Stack:', error.stack?.split('\n').slice(0, 5).join('\n'));
    console.error('[SecurityErrorBoundary] Component stack:', errorInfo.componentStack);

    const sanitizedMessage = stripPII(error.message || 'Unknown error');
    const sanitizedStack = stripPII((error.stack || '').split('\n').slice(0, 3).join('\n'));
    const sanitizedComponentStack = stripPII(
      (errorInfo.componentStack || '').split('\n').slice(0, 5).join('\n')
    );

    Promise.resolve(
      supabase.from('audit_log').insert({
        action: 'client_error',
        actor_role: 'client',
        metadata: {
          message: sanitizedMessage,
          stack: sanitizedStack,
          component: sanitizedComponentStack,
          url: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent.slice(0, 100),
        },
        success: false,
      })
    ).catch(() => {});

    // Auto-recover after a brief delay if this is the first error
    this.setState((prev) => {
      const newCount = prev.errorCount + 1;
      if (newCount <= 2) {
        setTimeout(() => {
          this.setState({ hasError: false, error: null });
        }, 100);
      }
      return { errorCount: newCount };
    });
  }

  render() {
    // Only show fallback if we've had 3+ consecutive errors (persistent crash)
    if (this.state.hasError && this.state.errorCount > 2) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8 max-w-md">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Something went wrong</h2>
            <p className="text-muted-foreground text-sm mb-6">
              An unexpected error occurred. Please refresh the page and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Global unhandled error listener (also strips PII). Only logs, never blocks UI
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    const sanitizedMessage = stripPII(event.message || 'Unknown error');
    Promise.resolve(
      supabase.from('audit_log').insert({
        action: 'unhandled_error',
        actor_role: 'client',
        metadata: {
          message: sanitizedMessage,
          filename: event.filename?.replace(/\?.*$/, '') || 'unknown',
          line: event.lineno,
          url: window.location.pathname,
        },
        success: false,
      })
    ).catch(() => {});
  });

  window.addEventListener('unhandledrejection', (event) => {
    const message = event.reason?.message || String(event.reason || 'Unknown rejection');
    const sanitizedMessage = stripPII(message);
    Promise.resolve(
      supabase.from('audit_log').insert({
        action: 'unhandled_promise_rejection',
        actor_role: 'client',
        metadata: {
          message: sanitizedMessage,
          url: window.location.pathname,
        },
        success: false,
      })
    ).catch(() => {});
  });
}

export default SecurityErrorBoundary;
