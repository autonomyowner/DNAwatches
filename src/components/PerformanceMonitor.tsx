"use client";

import { useEffect, type ReactElement } from "react";

export default function PerformanceMonitor(): ReactElement {
  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITOR) {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        } else if (entry.entryType === 'first-input') {
          const evt = entry as PerformanceEventTiming;
          console.log('FID:', (evt.processingStart ?? evt.startTime) - evt.startTime);
        } else if (entry.entryType === 'layout-shift') {
          const ls = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
          if (!ls.hadRecentInput && typeof ls.value === 'number') {
            console.log('CLS:', ls.value);
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch {
      // Fallback for browsers that don't support all entry types
      console.log('Performance monitoring not fully supported');
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page Load Performance:', {
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
            'TLS Negotiation': navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
            'Time to First Byte': navigation.responseStart - navigation.requestStart,
            'Content Download': navigation.responseEnd - navigation.responseStart,
            'DOM Processing': navigation.domContentLoadedEventEnd - navigation.responseEnd,
            'Total Load Time': navigation.loadEventEnd - navigation.startTime,
          });
        }
      }, 0);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <></>;
}
