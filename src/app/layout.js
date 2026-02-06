import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { AnalyticsProvider } from './components/analytics/AnalyticsProvider';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://globalwebsystems.dev';
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'Pedro Ferreira | Full Stack Web Developer',
    template: '%s | Global Web Systems',
  },
  description: 'Full Stack Web Developer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and get in touch for collaboration.',
  keywords: ['web developer', 'full stack developer', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'portfolio', 'Pedro Ferreira', 'Kent', 'UK'],
  authors: [{ name: 'Pedro Ferreira' }],
  creator: 'Pedro Ferreira',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/gwslogo-round.png',
    apple: '/gwslogo-round.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'Global Web Systems',
    title: 'Pedro Ferreira | Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and get in touch.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Ferreira | Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in React, Next.js, and modern web technologies.',
  },

  alternates: {
    canonical: baseUrl,
  },

  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
      {process.env.NODE_ENV === 'production' && gaId && (
        <GoogleAnalytics gaId={gaId} />
      )}
    </html>
  );
}
