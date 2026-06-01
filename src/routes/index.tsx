import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

const SITE_URL = "https://studio-inova-official.lovable.app";
const TITLE = "Studio Inova — Minimalist AI Tools and Apps";
const DESCRIPTION =
  "Studio Inova is a digital studio building minimalist, high-impact AI tools, apps, and clean digital experiences for creators and modern teams.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Studio Inova",
          url: SITE_URL,
        }),
      },
    ],
  }),
  component: Home,
});
