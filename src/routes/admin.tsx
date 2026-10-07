import { createFileRoute } from "@tanstack/react-router";

function Admin() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-2">CEO Portal</h1>
      <p className="text-muted-foreground">Authentication required.</p>
    </div>
  );
}

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Studio Inova" },
      { name: "description", content: "Private administration portal for Studio Inova. Authentication required." },
      { property: "og:title", content: "Admin — Studio Inova" },
      { property: "og:description", content: "Private administration portal for Studio Inova. Authentication required." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://studio-inova-official.vercel.app/admin" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Admin — Studio Inova" },
      { name: "twitter:description", content: "Private administration portal for Studio Inova. Authentication required." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Admin,
});
