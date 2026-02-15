# Specification

## Summary
**Goal:** Let signed-in users upload a poster image on the Posters page and have it persist across refreshes and canister upgrades.

**Planned changes:**
- Add backend storage keyed by the authenticated user Principal to upload/replace and fetch a single poster image (bytes + content type), persisted in stable storage with a reasonable file size limit and clear errors on rejection.
- Update `frontend/src/pages/PosterPage.tsx` to include a labeled PNG/JPG file picker with preview, an explicit Upload action, and loading/error states.
- On page load/refresh, fetch and display the user’s uploaded poster image; when none exists, fall back to the existing static `/assets/carry-2.png` (and optionally include `/assets/craft-1.png` as an additional static sample/fallback).
- Keep all user-facing text and alt text in English.

**User-visible outcome:** A signed-in user can choose a PNG/JPG, preview it, upload it to the Posters page, and see it displayed persistently across page refreshes; if they haven’t uploaded anything, the page shows the existing static poster image instead.
