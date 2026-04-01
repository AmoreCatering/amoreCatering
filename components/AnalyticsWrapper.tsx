'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';

export default function AnalyticsWrapper() {
  const [consent, setConsent] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get consent status from localStorage
    const savedConsent = localStorage.getItem('cookie-consent');
    const dnt = navigator.doNotTrack === '1';

    if (savedConsent) {
      setConsent(savedConsent);
    } else if (dnt) {
      setConsent('rejected');
    } else {
      setConsent('pending');
    }
    setIsLoaded(true);
  }, []);

  // Don't render anything until we know the consent status
  if (!isLoaded) {
    return null;
  }

  // Only show analytics if user has accepted cookies
  if (consent === 'accepted') {
    return (
      <>
        <Analytics />
      </>
    );
  }

  return null;
}
