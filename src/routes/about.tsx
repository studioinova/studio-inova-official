import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

const URL = "https://studio-inova-official.vercel.app/about";
const TITLE = "About Studio Inova — Our Mission and Founder";
const DESCRIPTION =
  "Meet Sazid, the founder of Studio Inova, a founder-led studio building simple and reliable SaaS products.";

export const Route = createFileRoute("/about")({
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
  }),
  component: About,
});
