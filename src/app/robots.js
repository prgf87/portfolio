export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://globalwebsystems.dev';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
