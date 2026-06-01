import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

const URL = "https://studio-inova-official.lovable.app/contact";
const TITLE = "Contact Studio Inova — Get in Touch";
const DESCRIPTION =
  "Get in touch with Studio Inova. Share feedback, suggestions, or project inquiries — we'd love to hear from you.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});
