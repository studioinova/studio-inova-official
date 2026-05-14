import { createFileRoute } from "@tanstack/react-router";
import Products from "@/pages/Products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Studio Inova" },
      { name: "description", content: "Explore Studio Inova's portfolio of AI tools and apps." },
    ],
  }),
  component: Products,
});
