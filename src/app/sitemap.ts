import type { MetadataRoute } from "next";

const BASE_URL = "https://www.webinho.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/pripadove-studie/elysee-garden`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/o-nas`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/obchodni-podminky`, lastModified: new Date(), priority: 0.3 },
    { url: `${BASE_URL}/ochrana-osobnich-udaju`, lastModified: new Date(), priority: 0.3 },
  ];
}
