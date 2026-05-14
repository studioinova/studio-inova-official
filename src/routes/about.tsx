import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Studio Inova" },
      { name: "description", content: "Learn about Studio Inova and our mission." },
    ],
  }),
  component: About,
});
