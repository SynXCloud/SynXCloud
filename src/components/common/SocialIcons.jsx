// src/components/common/SocialIcons.jsx
import React from 'react';

export function LinkedinIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function GithubIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function TwitterIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.93C20.28 16.48 16.58 20.15 12.05 20.15ZM16.57 14.33C16.32 14.21 15.1 13.61 14.88 13.52C14.65 13.44 14.49 13.4 14.32 13.65C14.16 13.89 13.69 14.45 13.54 14.61C13.4 14.78 13.25 14.8 13 14.68C12.75 14.56 11.96 14.3 11.02 13.46C10.29 12.81 9.79 12 9.65 11.75C9.5 11.51 9.63 11.38 9.75 11.26C9.86 11.15 10 10.98 10.12 10.84C10.25 10.7 10.29 10.59 10.37 10.43C10.45 10.26 10.41 10.12 10.35 10C10.29 9.88 9.8 8.67 9.59 8.18C9.39 7.7 9.19 7.76 9.03 7.75C8.89 7.74 8.72 7.74 8.56 7.74C8.39 7.74 8.12 7.8 7.89 8.05C7.66 8.3 7.02 8.9 7.02 10.12C7.02 11.34 7.91 12.52 8.03 12.68C8.16 12.84 9.78 15.34 12.26 16.41C12.85 16.66 13.31 16.82 13.67 16.93C14.26 17.12 14.8 17.09 15.22 17.03C15.7 16.96 16.68 16.44 16.89 15.86C17.09 15.29 17.09 14.8 17.03 14.69C16.96 14.59 16.82 14.46 16.57 14.33Z" />
    </svg>
  );
}
