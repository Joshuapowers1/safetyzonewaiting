/**
 * Security utilities for input sanitization, bot protection, and validation.
 */

// Disposable email domains to block
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'yopmail.com', 'sharklasers.com', 'guerrillamailblock.com', 'grr.la',
  'dispostable.com', 'mailnesia.com', 'maildrop.cc', 'discard.email',
  'temp-mail.org', 'fakeinbox.com', 'trashmail.com', 'trashmail.net',
  'getnada.com', 'tempail.com', 'mohmal.com', 'burnermail.io',
  'temp-mail.io', 'minutemail.com', 'emailondeck.com', 'harakirimail.com',
  'tempr.email', 'tmail.ws', '10minutemail.com', 'guerrillamail.info',
  'guerrillamail.net', 'guerrillamail.org', 'guerrillamail.de',
]);

/**
 * Strip HTML tags from input to prevent XSS
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[<>]/g, '')    // Remove any remaining angle brackets
    .trim();
}

/**
 * Validate email format with strict regex
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Check if email uses a disposable domain
 */
export function isDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return domain ? DISPOSABLE_DOMAINS.has(domain) : false;
}

/**
 * Mask email for display (never show full email client-side)
 */
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (!local || !domain) return '***';
  const maskedLocal = local.length > 2
    ? local[0] + '***' + local[local.length - 1]
    : '***';
  return `${maskedLocal}@${domain}`;
}

/**
 * Normalize email: lowercase + trim
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Generate a simple math captcha
 */
export function generateMathCaptcha(): { question: string; answer: number } {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `What is ${a} + ${b}?`, answer: a + b };
}
