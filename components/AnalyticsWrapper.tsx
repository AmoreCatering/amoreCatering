'use client';

import { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { usePathname, useSearchParams } from 'next/navigation';
import { useConsentStatus } from '@/hooks/use-consent';

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_ID;
const hasValidMeasurementId =
  measurementId !== undefined && /^G-[A-Z0-9]+$/i.test(measurementId);

function clearGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter(
      (name): name is string =>
        name !== undefined && (name === '_ga' || name.startsWith('_ga_')),
    );
  const hostname = window.location.hostname;
  const domains = new Set([hostname, `.${hostname}`]);

  if (hostname.startsWith('www.')) {
    const parentDomain = hostname.slice(4);
    domains.add(parentDomain);
    domains.add(`.${parentDomain}`);
  }

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
    }
  }
}

export default function AnalyticsWrapper() {
  const { consent, isLoaded } = useConsentStatus();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const [isGoogleTagReady, setIsGoogleTagReady] = useState(false);
  const initializedMeasurementId = useRef<string | null>(null);
  const isGoogleScriptLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (consent === 'accepted') {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
      if (!hasValidMeasurementId || !measurementId) {
        return;
      }

      const dataLayer = window.dataLayer ?? [];
      window.dataLayer = dataLayer;
      const gtag =
        window.gtag ?? ((...args: unknown[]) => dataLayer.push(args));
      window.gtag = gtag;

      if (initializedMeasurementId.current !== measurementId) {
        gtag('js', new Date());
        gtag('config', measurementId, { send_page_view: false });
        initializedMeasurementId.current = measurementId;
      }

      if (isGoogleScriptLoaded.current) {
        return;
      }

      let active = true;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.onload = () => {
        isGoogleScriptLoaded.current = true;
        if (active) {
          setIsGoogleTagReady(true);
        }
      };
      script.onerror = () => {
        if (active) {
          console.error('Failed to load the Google Analytics script.');
        }
      };
      document.head.appendChild(script);

      return () => {
        active = false;
        if (!isGoogleScriptLoaded.current) {
          script.remove();
        }
      };
    }

    window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    clearGoogleAnalyticsCookies();
  }, [consent, isLoaded]);

  useEffect(() => {
    if (
      !isLoaded ||
      consent !== 'accepted' ||
      !isGoogleTagReady ||
      !hasValidMeasurementId
    ) {
      return;
    }

    const pagePath = `${pathname}${search ? `?${search}` : ''}`;
    window.gtag?.('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [consent, isGoogleTagReady, isLoaded, pathname, search]);

  if (!isLoaded) {
    return null;
  }

  return (
    consent === 'accepted' ? <Analytics /> : null
  );
}
