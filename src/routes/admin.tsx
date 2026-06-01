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
      { name: "description", content: "Private admin portal for Studio Inova staff. Authentication required." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Admin,
});
