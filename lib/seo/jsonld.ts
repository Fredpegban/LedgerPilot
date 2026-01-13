
export const getOrgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LedgerPilot",
  "url": "https://ledgerpilot.io",
  "logo": "https://ledgerpilot.io/logo.png",
  "sameAs": [
    "https://twitter.com/ledgerpilot",
    "https://linkedin.com/company/ledgerpilot"
  ]
});

export const getSoftwareAppSchema = (price: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LedgerPilot",
  "operatingSystem": "Web, iOS, Android",
  "applicationCategory": "AccountingSoftware",
  "offers": {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "GBP"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  }
});

export const getFaqSchema = (faqs: { q: string, a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});
