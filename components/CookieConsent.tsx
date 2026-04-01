'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(
      'cookie-consent',
    ) as ConsentStatus | null;

    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);
    } else {
      // Check for Do Not Track
      const dnt = navigator.doNotTrack === '1';
      if (dnt) {
        // Respect DNT - treat as rejected
        setConsent('rejected');
        localStorage.setItem('cookie-consent', 'rejected');
        setShowBanner(false);
      } else {
        // Show banner
        setShowBanner(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setShowBanner(false);
    window.location.reload(); // Reload to load Analytics
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsent('rejected');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-amber-900 text-white p-4 md:p-6 shadow-2xl">
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
