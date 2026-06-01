import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

const URL = "https://studio-inova-official.lovable.app/about";
const TITLE = "About Studio Inova — Our Mission and Founder";
const DESCRIPTION =
  "Meet the team behind Studio Inova — a minimalist digital studio focused on honest, step-by-step AI tools and apps built for long-term value.";

export const Route = createFileRoute("/about")({
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
  }),
  component: About,
});
