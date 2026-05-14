import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Studio Inova" },
      { name: "description", content: "Get in touch with Studio Inova." },
    ],
  }),
  component: Contact,
});
