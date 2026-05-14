import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Inova" },
      { name: "description", content: "Studio Inova — Building minimalist, high-impact AI tools and apps." },
      { property: "og:title", content: "Studio Inova" },
      { property: "og:description", content: "Building minimalist, high-impact AI tools and apps." },
      { property: "og:image", content: "/opengraph.jpg" },
    ],
  }),
  component: Home,
});
