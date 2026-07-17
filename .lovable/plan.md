## Why the preview looked broken

The earlier error `ReferenceError: NetworkConstellation is not defined` in `src/pages/Home.tsx` was already fixed in the previous turn — the missing component was replaced with an inline SVG constellation graphic (lines 60–85). The current source is clean and the typecheck passes.

The error entries you saw in the dev-server log are older SSR errors from before that fix; the log is append-only, so previous stack traces remain visible even after a successful reload.

## Plan

1. Hard-refresh the preview tab (Cmd/Ctrl + Shift + R) so the browser drops the cached broken SSR HTML and picks up the current build.
2. If it still doesn't render, I'll restart the dev server to force a clean SSR reload.
3. No code changes are needed unless step 2 surfaces a new error.

Approve this and I'll refresh/restart from build mode.