import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

const URL = "https://studio-inova-official.lovable.app/privacy-policy";
const TITLE = "Privacy Policy — Studio Inova";
const DESCRIPTION =
  "Read the Studio Inova Privacy Policy to understand what information we collect, how it is used, and the choices you have over your data.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: PrivacyPolicy,
});
