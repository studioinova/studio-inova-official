---
name: Framer Motion SSR fix for TanStack Start + React 19
description: How to fix "Invalid hook call" + hydration mismatch with Framer Motion in TanStack Start SSR apps using React 19
---

## The Rule
In TanStack Start SSR with React 19 + Framer Motion v12, always use `LazyMotion` + `m` components instead of `motion` components for any animated element. Also add `resolve.dedupe` and `ssr.noExternal` in vite.config.

## Why
Framer Motion v12 sub-packages (`motion-dom`, `motion-utils`) can end up as separate instances in the SSR vs. client bundles, causing React to detect multiple React copies → "Invalid hook call" → "Hydration failed". `LazyMotion` defers animation feature loading to client-only, completely bypassing the SSR bundle conflict.

## How to Apply
In `vite.config.ts`:
```ts
vite: {
  resolve: { dedupe: ["react", "react-dom", "framer-motion"] },
  ssr: { noExternal: ["framer-motion"] },
}
```

In any animated component (e.g. FadeIn.tsx):
- Keep `useState(false)` + `useEffect` isMounted guard (render plain `<div>` on server)
- After mount, render `<LazyMotion features={domAnimation}><m.div ...>` instead of `<motion.div>`
- `domAnimation` is the standard feature set; import from `"framer-motion"`

**Why:** `resolve.dedupe` + `ssr.noExternal` alone was NOT enough for React 19. `LazyMotion` is the definitive fix.
