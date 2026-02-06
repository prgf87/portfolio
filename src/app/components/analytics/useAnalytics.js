'use client';

export function useAnalytics() {
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  return {
    trackContactSubmit: (success) => {
      trackEvent('contact_form_submit', {
        event_category: 'engagement',
        event_label: success ? 'success' : 'failure',
      });
    },

    trackProjectClick: (projectName, projectUrl) => {
      trackEvent('project_click', {
        event_category: 'engagement',
        project_name: projectName,
        project_url: projectUrl,
      });
    },

    trackSocialClick: (platform, url) => {
      trackEvent('social_click', {
        event_category: 'engagement',
        platform: platform,
        url: url,
      });
    },

    trackSectionView: (sectionName) => {
      trackEvent('section_view', {
        event_category: 'engagement',
        section_name: sectionName,
      });
    },
  };
}
