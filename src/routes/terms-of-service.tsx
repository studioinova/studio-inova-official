import { createFileRoute } from "@tanstack/react-router";
import TermsOfService from "@/pages/TermsOfService";

const URL = "https://studio-inova-official.lovable.app/terms-of-service";
const TITLE = "Terms of Service — Studio Inova";
const DESCRIPTION =
  "Review the Studio Inova Terms of Service covering acceptable use, intellectual property, and the conditions for using our products and site.";

export const Route = createFileRoute("/terms-of-service")({
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
  component: TermsOfService,
});
