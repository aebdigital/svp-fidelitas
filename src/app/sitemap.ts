import { MetadataRoute } from "next";
import { projects } from "@/data/referencie";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://svpfidelitas.sk";

  const staticPages = [
    "",
    "/doprava",
    "/inzinierske-siete",
    "/stavebna-cinnost",
    "/autoservis",
    "/pneuservis",
    "/referencie",
    "/kontakt",
    "/obchodne-podmienky",
    "/cookies",
    "/gdpr",
  ];

  const referencePages = projects.map((p) => ({
    url: `${baseUrl}/referencie/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : path === "/kontakt" ? 0.9 : 0.8,
    })),
    ...referencePages,
  ];
}
