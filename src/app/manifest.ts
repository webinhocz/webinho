import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webinho",
    short_name: "Webinho",
    description: "Weby, které firmám přivádějí zakázky.",
    start_url: "/",
    display: "standalone",
    background_color: "#010101",
    theme_color: "#010101",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
