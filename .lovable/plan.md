I’ll patch the production build config so Lovable’s dist-check sees the expected TanStack Start output.

Plan:
1. Replace the manual Vite/TanStack/Nitro plugin setup in `vite.config.ts` with the Lovable TanStack config wrapper.
2. Keep the existing path alias behavior through the wrapper/default config rather than manually ordering plugins.
3. Leave `package.json` as-is because `@lovable.dev/vite-tanstack-config` is already installed.
4. After implementation, rely on the platform build check to validate the production output.