'use client';

import { useEffect, useState } from 'react';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

export function useConsentStatus() {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(
      'cookie-consent',
    ) as ConsentStatus | null;

    if (savedConsent) {
      setConsent(savedConsent);
    } else {
      // Check for Do Not Track
      const dnt = navigator.doNotTrack === '1';
      setConsent(dnt ? 'rejected' : 'pending');
    }
    setIsLoaded(true);
  }, []);

  return { consent, isLoaded };
}
