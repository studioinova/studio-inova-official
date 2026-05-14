# Studio Inova — Strict Rebuild Plan

Source confirmed: `artifacts/studio-inova/` from your uploads. It's a Vite + React + Wouter + Tailwind + shadcn project with 7 pages, ~75 source files, and 14 image assets. I'll port it 1:1 into this TanStack Start template — same code, same text, same styles, same animations.

## What gets ported (no edits to content)

**Pages (text/layout preserved exactly):**
- Home (246 lines)
- Products (482 lines — Detect AI, Inova Pitch, etc.)
- About (165 lines + your illustration assets)
- Contact (204 lines — exact message box UI from source)
- PrivacyPolicy, TermsOfService, NotFound

**Layout:** `Navbar`, `Footer` from `components/layout/`

**Styles:** `src/index.css` (330 lines — white & blue minimalist tokens, animations) replaces the template's `styles.css`

**Components:** all `components/ui/*` from source (incl. extras: button-group, empty, field, input-group, item, kbd, spinner, toast, toaster) overlay the template's shadcn folder

**Hooks:** `use-mobile`, `use-toast`

**Assets:** all 14 files in `public/` (logos, slides, hero-bg, founder photo, illustrations, favicons, opengraph) → copied to this project's `public/`

**Fonts:** Inter via Google Fonts (loaded in root head)

## Routing translation (Wouter → TanStack Router)

The source uses Wouter `<Switch><Route path="/x">`. I'll convert each to a TanStack file route — same URLs, same components:

| Source route | New file |
|---|---|
| `/` | `src/routes/index.tsx` |
| `/products` | `src/routes/products.tsx` |
| `/about` | `src/routes/about.tsx` |
| `/contact` | `src/routes/contact.tsx` |
| `/privacy-policy` | `src/routes/privacy-policy.tsx` |
| `/terms-of-service` | `src/routes/terms-of-service.tsx` |
| `/admin` | `src/routes/admin.tsx` |
| 404 | `__root.tsx` notFoundComponent |

Each route file will be a thin wrapper that imports the original page component unchanged. Navbar + Footer move into `__root.tsx` so they wrap every route (matches source's `<Router>` shell).

Internal links inside pages (currently `<Link href="…">` from wouter) will be swapped to `@tanstack/react-router`'s `<Link to="…">`. This is the only mechanical edit to page source — text, JSX structure, classes, animations stay identical.

## Form / contact behavior

Source `Contact.tsx` uses `react-hook-form` + `zod` + a toast on submit (no real backend call in the code). I'll keep that exact behavior — no invented API. If the original posts to an external service, I'll wire that same call; if it's just local state + toast, I'll keep it that way.

## Dependencies to add

`wouter` is removed (replaced by tanstack router). I'll add what's actually used: `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod`, `react-icons`, `embla-carousel-react`, `cmdk`, `date-fns`, `react-day-picker`, `input-otp`, `next-themes`, `recharts`, `sonner`, `vaul`, `tw-animate-css`, plus any missing `@radix-ui/*` packages (most already installed).

## Out of scope

- No design changes, no copy edits, no new features.
- No Lovable Cloud / backend (source has none).
- The template's placeholder `index.tsx` and default `styles.css` get replaced.

## Technical notes

- TanStack Start file-routing is generated automatically — I won't touch `routeTree.gen.ts`.
- `__root.tsx` will keep its `shellComponent` (html/head/body) and add Navbar/Footer + QueryClientProvider + TooltipProvider + Toaster around `<Outlet />`, plus the Inter font link in `head()`.
- `import.meta.env.BASE_URL` wrapper from source isn't needed (TanStack handles base path).
- `@/` alias already points to `src/` in this template — source imports work as-is.

After approval I'll execute the port end-to-end and verify the build before handing back.
