export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CodeByLapins",
    "description": "Profesionāla mājaslapu izstrāde un dizains. Specializējos e-komercijas platformās, uzņēmumu vietnēs un pielāgotās digitālās risinājumos.",
    "url": "https://codebylapins.com",
    "logo": "https://codebylapins.com/logo.svg",
    "image": "https://codebylapins.com/og-image.png",
    "telephone": "+371-XXXXXXXX",
    "email": "contact@codebylapins.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LV",
      "addressLocality": "Latvia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "LV"
    },
    "sameAs": [
      "https://github.com/codebyLapins"
    ],
    "priceRange": "$$",
    "serviceType": [
      "Web Development",
      "E-commerce Development",
      "Website Design",
      "Custom Digital Solutions",
      "Shopify Development",
      "WordPress Development",
      "React Development"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Latvia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Professional custom website development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Shopify and custom e-commerce platform development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
            "description": "Modern, user-friendly website design services"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
