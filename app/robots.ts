import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sufurivro.com/sitemap.xml",
    host: "https://sufurivro.com",
  };
}