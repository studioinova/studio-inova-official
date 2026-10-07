import { createFileRoute } from "@tanstack/react-router";
import Products from "@/pages/Products";

const URL = "https://studio-inova-official.vercel.app/products";
const TITLE = "Products | TrueOpen by Studio Inova";
const DESCRIPTION =
  "Explore Studio Inova's SaaS products. TrueOpen gives newsletter writers honest engagement insights.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
              url: "https://honest-email-insights.vercel.app/",
            },
          ],
        }),
      },
    ],
  }),
  component: Products,
});
