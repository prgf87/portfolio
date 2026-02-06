'use client';

import { useEffect, useRef } from 'react';
import { useAnalytics } from './useAnalytics';

export function SectionTracker({ sectionId, children }) {
  const ref = useRef(null);
  const { trackSectionView } = useAnalytics();
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          trackSectionView(sectionId);
          hasTracked.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [sectionId, trackSectionView]);

  return <div ref={ref}>{children}</div>;
}
