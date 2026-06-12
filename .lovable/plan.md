Make the Noa mascot image have a transparent background everywhere it's used.

Steps:
1. Run `imagegen--edit_image` on the current Noa image with `transparent_background: true`, saving to `/tmp/noa-mascot-transparent.png`.
2. Upload via `lovable-assets create` and write the new pointer to `src/assets/noa-mascot.png.asset.json` (overwriting the existing pointer so all consumers — `NoaWidget`, Contact success modal — pick it up automatically).
3. Delete the old asset from CDN.

No component code changes required since the import path stays the same.