const IOS_APP_URL = 'https://apps.apple.com/us/app/my-safetyzone/id6758567664';

export const AppStoreBadge = ({ className }: { className?: string }) => (
  <a
    href={IOS_APP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block hover:opacity-80 transition-opacity ${className ?? ''}`}
    aria-label="Download on the App Store"
  >
    <svg width="160" height="54" viewBox="0 0 160 54" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="54" rx="8" fill="black" />
      <rect x="0.5" y="0.5" width="159" height="53" rx="7.5" stroke="white" strokeOpacity="0.3" fill="none" />
      {/* Apple logo */}
      <g transform="translate(14, 10)">
        <path d="M18.87 10.14c-.1-2.62 2.14-3.87 2.24-3.93a4.85 4.85 0 00-3.82-2.07c-1.62-.17-3.18.96-4 .96-.84 0-2.12-.94-3.49-.91a5.16 5.16 0 00-4.34 2.65c-1.87 3.23-.48 8 1.33 10.63.9 1.28 1.95 2.73 3.33 2.68 1.34-.05 1.85-.86 3.47-.86 1.61 0 2.07.86 3.48.83 1.44-.02 2.35-1.3 3.23-2.59a10.7 10.7 0 001.47-3c-.03-.01-2.82-1.08-2.85-4.29h-.05zm-2.66-7.89a5.06 5.06 0 001.16-3.63 5.16 5.16 0 00-3.34 1.73 4.83 4.83 0 00-1.2 3.5 4.26 4.26 0 003.38-1.6z" fill="white" transform="scale(1.1)" />
      </g>
      {/* Text */}
      <text x="48" y="19" fill="white" fontSize="9" fontFamily="system-ui, -apple-system, sans-serif" opacity="0.8">Download on the</text>
      <text x="48" y="37" fill="white" fontSize="17" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">App Store</text>
    </svg>
  </a>
);

export const GooglePlayBadge = ({ className, comingSoon = true }: { className?: string; comingSoon?: boolean }) => (
  <div
    className={`inline-block ${comingSoon ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'} transition-opacity relative ${className ?? ''}`}
    aria-label="Get it on Google Play"
  >
    <svg width="160" height="54" viewBox="0 0 160 54" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="54" rx="8" fill="black" />
      <rect x="0.5" y="0.5" width="159" height="53" rx="7.5" stroke="white" strokeOpacity="0.3" fill="none" />
      {/* Google Play icon */}
      <g transform="translate(14, 12)">
        <path d="M0 2.5v25l14-12.5L0 2.5z" fill="#4285F4" />
        <path d="M0 2.5L14 15l5-4.5L4.5 0 0 2.5z" fill="#34A853" />
        <path d="M14 15l5 4.5L4.5 30 0 27.5 14 15z" fill="#EA4335" />
        <path d="M14 15l5-4.5 3 2.5v4l-3 2.5-5-4.5z" fill="#FBBC04" />
      </g>
      {/* Text */}
      <text x="46" y="19" fill="white" fontSize="8" fontFamily="system-ui, -apple-system, sans-serif" opacity="0.8">{comingSoon ? 'COMING SOON ON' : 'GET IT ON'}</text>
      <text x="46" y="37" fill="white" fontSize="16" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">Google Play</text>
    </svg>
  </div>
);
