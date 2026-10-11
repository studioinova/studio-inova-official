# Architecture rules

- Keep page metadata in each TanStack content route's `head()` and only sitewide defaults in the root head, because page metadata must match the rendered content without duplicated canonical links.
- Keep the sitemap generated from public route entries, because retired products must not create stale URLs.
- Keep favicon links in the TanStack root head and favicon files plus the web manifest in public, because the shared HTML head and direct icon URLs must work on every deployment.