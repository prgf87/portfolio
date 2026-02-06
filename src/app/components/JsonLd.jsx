export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema({ pageInfo, socials }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://globalwebsystems.dev';

  const socialUrls = socials?.map((s) => s.url).filter(Boolean) || [];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: pageInfo?.name || 'Pedro Ferreira',
    jobTitle: pageInfo?.role || 'Full Stack Web Developer',
    url: baseUrl,
    email: pageInfo?.email,
    telephone: pageInfo?.phoneNumber,
    address: {
      '@type': 'PostalAddress',
      addressLocality: pageInfo?.address || 'Kent',
      addressCountry: 'UK',
    },
    sameAs: socialUrls,
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Sanity CMS',
    ],
  };

  return <JsonLd data={schema} />;
}

export function WebSiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://globalwebsystems.dev';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Global Web Systems',
    url: baseUrl,
    description: 'Portfolio website of Pedro Ferreira, Full Stack Web Developer',
    author: {
      '@type': 'Person',
      name: 'Pedro Ferreira',
    },
  };

  return <JsonLd data={schema} />;
}
