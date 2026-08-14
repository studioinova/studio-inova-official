import { createFileRoute } from "@tanstack/react-router";
import Products from "@/pages/Products";

const URL = "https://studio-inova-official.lovable.app/products";
const TITLE = "Products — TrueOpen and AI Learning E-book | Studio Inova";
const DESCRIPTION =
  "Explore Studio Inova's products — TrueOpen for honest newsletter engagement insights, and our Zero-to-App AI learning e-book for beginners.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: "TrueOpen",
              description:
                "Free tool for solo newsletter writers that reveals real email engagement by filtering out fake opens caused by Apple Mail Privacy Protection.",
              brand: { "@type": "Brand", name: "Studio Inova" },
              url: URL,
            },
            {
              "@type": "Product",
              name: "Zero Knowledge to App Builder",
              description:
                "Beginner-friendly e-book that teaches how to master AI tools and build digital products from zero technical background.",
              brand: { "@type": "Brand", name: "Studio Inova" },
              url: URL,
            },
          ],
        }),
      },
    ],
  }),
  component: Products,
});
