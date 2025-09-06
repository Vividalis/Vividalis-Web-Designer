export default function SeoJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vividalis',
    jobTitle: 'Web Designer',
    url: 'https://vividalis.dev/',
    sameAs: [
      // add your profiles when ready (GitHub, LinkedIn, Dribbble, etc.)
    ]
  }
  return (
    <script
      type="application/ld+json"
      // @ts-ignore
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
