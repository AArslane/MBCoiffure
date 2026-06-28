import {
  BRAND,
  FAQ,
  LOCATIONS,
  OPENING_HOURS,
  PHONE_E164,
  PRICE_RANGE,
  SERVICES,
  SITE_URL,
} from "@/lib/site";

// HairSalon + FAQPage JSON-LD. Rendered server-side as a single @graph so search
// engines and AI get the business identity, rating, hours, prices and FAQ in one
// machine-readable block. All values trace back to src/lib/site.ts.
const PLANITY_URL = "https://www.planity.com/coiffeur-mb-31200-toulouse";

export function StructuredData() {
  const salon = LOCATIONS[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HairSalon",
        "@id": `${SITE_URL}/#business`,
        name: BRAND.name,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/opengraph-image`,
        telephone: PHONE_E164,
        priceRange: PRICE_RANGE,
        currenciesAccepted: "EUR",
        areaServed: "Toulouse",
        hasMap: salon.mapsUrl,
        sameAs: [PLANITY_URL],
        address: {
          "@type": "PostalAddress",
          streetAddress: salon.street,
          addressLocality: salon.addressLocality,
          postalCode: salon.postalCode,
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: salon.geo.latitude,
          longitude: salon.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: OPENING_HOURS.days,
            opens: OPENING_HOURS.opens,
            closes: OPENING_HOURS.closes,
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: salon.rating,
          reviewCount: salon.reviews,
          bestRating: 5,
          worstRating: 1,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Prestations",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title },
            price: service.priceEUR.toFixed(2),
            priceCurrency: "EUR",
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
