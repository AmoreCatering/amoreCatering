'use client';

import { useEffect, useState } from 'react';

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

const CONSENT_STORAGE_KEY = 'cookie-consent';
const CONSENT_CHANGE_EVENT = 'cookie-consent-change';

function readConsentStatus(): ConsentStatus {
  const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);

  if (savedConsent === 'accepted' || savedConsent === 'rejected') {
    return savedConsent;
  }

  return navigator.doNotTrack === '1' ? 'rejected' : 'pending';
}

export function saveConsentStatus(consent: Exclude<ConsentStatus, 'pending'>) {
  localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function useConsentStatus() {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setConsent(readConsentStatus());
      setIsLoaded(true);
    };

    updateConsent();
    window.addEventListener(CONSENT_CHANGE_EVENT, updateConsent);
    window.addEventListener('storage', updateConsent);

    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, updateConsent);
      window.removeEventListener('storage', updateConsent);
    };
  }, []);

  return { consent, isLoaded };
}
