import React from 'react';

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url: string;
  image?: string;
  priceRange?: string;
  openingHours?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  description,
  address,
  telephone,
  email,
  url,
  image,
  priceRange,
  openingHours,
  aggregateRating
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": url,
    "name": name,
    "description": description,
    "url": url,
    ...(address && { "address": { "@type": "PostalAddress", ...address } }),
    ...(telephone && { "telephone": telephone }),
    ...(email && { "email": email }),
    ...(image && { "image": image }),
    ...(priceRange && { "priceRange": priceRange }),
    ...(openingHours && { "openingHours": openingHours }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount
      }
    }),
    "availableLanguage": ["nl", "en", "pt"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.1393,
        "longitude": -8.5380
      },
      "geoRadius": "100000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "url": url,
    ...(image && { "image": image }),
    "publisher": {
      "@type": "Organization",
      "name": "Lokaal Genieten in de Algarve",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lokaalgenieteninalgarvevoorweinig.lovable.app/og-image.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};