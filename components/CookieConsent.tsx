'use client';

import { useState } from 'react';
import Link from 'next/link';
import { saveConsentStatus, useConsentStatus } from '@/hooks/use-consent';

export default function CookieConsent() {
  const { consent, isLoaded } = useConsentStatus();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const showBanner = consent === 'pending' || isSettingsOpen;

  const handleAccept = () => {
    saveConsentStatus('accepted');
    setIsSettingsOpen(false);
  };

  const handleReject = () => {
    saveConsentStatus('rejected');
    setIsSettingsOpen(false);
  };

  if (!isLoaded) {
    return null;
  }

  if (!showBanner) {
    return (
      <button
        type="button"
        onClick={() => setIsSettingsOpen(true)}
        className="fixed bottom-4 right-4 z-40 rounded bg-amber-950 px-3 py-2 text-xs font-medium text-white shadow-lg transition-colors hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
      >
        Cookieinställningar
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Cookieinställningar"
      className="fixed bottom-0 left-0 right-0 z-50 bg-amber-900 p-4 text-white shadow-2xl md:p-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold mb-2 text-lg">Cookies & Dataskydd</h3>
          <p className="text-sm text-amber-100">
            Vi använder cookies för att förbättra din upplevelse och analysera
            hur du använder vår webbplats. Du kan läsa mer i vår{' '}
            <Link
              href="/integritetspolicy"
              className="underline hover:text-white transition-colors"
            >
              integritetspolicy
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-amber-950 hover:bg-amber-900 rounded border border-amber-700 text-sm font-medium transition-colors cursor-pointer"
          >
            Endast nödvändiga
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            Acceptera allt
          </button>
        </div>
      </div>
    </div>
  );
}
