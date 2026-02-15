# Specification

## Summary
**Goal:** Fix the Propaganda poster image upload and preview so user-uploaded images render correctly immediately after upload and on subsequent page loads, without black/blank preview states.

**Planned changes:**
- Add an authenticated poster image upload UI on the Propaganda page that uses existing backend canister methods and shows a correct immediate preview of the selected file.
- After a successful upload, refetch posters from canister state and display the newest uploaded poster automatically (no manual refresh required).
- Update Propaganda page display logic to show the most recent user-uploaded poster when available, otherwise fall back to `/assets/generated/carry-3.png`.
- Add/restore React Query hooks for poster list and upload operations, wired to `uploadPoster(blob)` and `getPosters()`, including query invalidation/refetch after upload.
- If `getPosters()` does not return enough data to reliably render images in the browser, extend the backend with a query method that returns image bytes + MIME type for a stored poster reference, and use it to construct a valid image URL.
- Ensure unauthenticated users do not see the upload UI, and upload failures show a clear English error without rendering broken/black previews.

**User-visible outcome:** Signed-in users can upload a poster image on the Propaganda page and immediately see a correct preview; after upload the newest poster loads from the canister automatically. Signed-out users can still read the page and see the fallback image, and any upload errors show a clear message without broken visuals.
