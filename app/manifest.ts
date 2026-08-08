import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saishankar Portfolio",

    short_name: "Portfolio",

    description:
      "Software Engineer Portfolio",

    start_url: "/",

    display: "standalone",

    background_color: "#09090b",

    theme_color: "#2563eb",

    icons: [
      {
        src: "/icon-192.png",

        sizes: "192x192",

        type: "image/png",
      },
      {
        src: "/icon-512.png",

        sizes: "512x512",

        type: "image/png",
      },
    ],
  };
}