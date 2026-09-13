export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sufurivro.com/#organization",
        name: "SUFURIVRO",
        url: "https://sufurivro.com",
        logo: {
          "@type": "ImageObject",
          url: "https://sufurivro.com/logo/logo.png",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Datamart Information Technologies",
          url: "https://datamart.com.tr",
        },
      },

      {
        "@type": "WebSite",
        "@id": "https://sufurivro.com/#website",
        url: "https://sufurivro.com",
        name: "SUFURIVRO",
        description:
          "ITSM analytics and service intelligence platform for Microsoft Fabric and Power BI.",
        publisher: {
          "@id": "https://sufurivro.com/#organization",
        },
        inLanguage: "en",
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://sufurivro.com/#software",
        name: "SUFURIVRO",
        url: "https://sufurivro.com",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "SUFURIVRO is an ITSM analytics and service intelligence platform that connects ITSM platforms through secure APIs, centralizes data in Microsoft Fabric, and delivers Power BI dashboards and self-service reporting.",
        publisher: {
          "@id": "https://sufurivro.com/#organization",
        },
        featureList: [
          "API-based ITSM integration",
          "Connector-free data ingestion",
          "Microsoft Fabric integration",
          "Power BI dashboards",
          "Self-service reporting",
          "SLA and MTTR analytics",
          "Incident analytics",
          "Unified ITSM data model",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}