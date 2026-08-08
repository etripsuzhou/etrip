import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://etripglobal.com";

  const destinationUrls = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...destinationUrls,
  ];
}