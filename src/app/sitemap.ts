import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Generated at /sitemap.xml. Single-page marketing site plus the legal page.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
