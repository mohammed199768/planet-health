'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent } from '@/lib/firebase/analytics';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    trackEvent('page_view', {
      pathname,
      search: searchParams.toString() || null,
    });
  }, [pathname, searchParams]);

  return null;
}
