export default function SchemaMarkup() {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "חובש +",
    alternateName: "Hovesh Plus",
    applicationCategory: "MedicalApplication",
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ILS",
    },
    url: "https://hovesh-plus.vercel.app/",
    description:
      "פלטפורמת רפואת חירום מתקדמת לחובשים בישראל. כולל מחשבון כוויות, מחשבון צירים, פרוטוקולים רפואיים רשמיים, ניווט לבתי חולים ואתגרים יומיים ברפואה.",
    author: {
      "@type": "Organization",
      name: "צוות חובש פלוס",
    },
    keywords:
      "מחשבון כוויות, מחשבון צירים, פרוטוקולים רפואיים רשמיים, ניווט לבתי חולים, חובש פלוס, ALS BLS",
    inLanguage: "he",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "15000",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "חובש + | הכלי המתקדם ביותר לרפואת חירום בישראל",
    url: "https://hovesh-plus-landing.vercel.app/",
    description:
      "מידע רפואי מקצועי לחובשים בישראל – מחשבון כוויות, מחשבון צירים, פרוטוקולים רפואיים רשמיים.",
    inLanguage: "he",
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Paramedic",
      geographicArea: {
        "@type": "Country",
        name: "Israel",
      },
    },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Paramedic",
    },
    about: [
      { "@type": "MedicalCondition", name: "burns" },
      { "@type": "MedicalCondition", name: "labor and delivery" },
      { "@type": "MedicalProcedure", name: "Basic Life Support" },
      { "@type": "MedicalProcedure", name: "Advanced Life Support" },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "חובש +",
        item: "https://hovesh-plus-landing.vercel.app/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
