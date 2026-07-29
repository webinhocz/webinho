import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webinho",
    short_name: "Webinho",
    description: "Digitální vizitka vašeho byznysu, která mluví za vás.",
    start_url: "/",
    display: "standalone",
    background_color: "#06070b",
    theme_color: "#06070b",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
