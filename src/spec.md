# Specification

## Summary
**Goal:** Expand the existing Photos page to include a new “T-0 Junkyard-built Power Armor” entry with its image and description, and allow authenticated users to upload additional photos that appear on the page.

**Planned changes:**
- Add a new copper-themed card/section on `/photo` labeled “T-0 Junkyard-built Power Armor” that displays `junkyard power armor t-2.png` and includes a well-written English description consistent with existing typography and layout (alongside the existing T-10 entry).
- Add an authenticated-only image upload UI on `/photo` to select an image, show a local preview, upload to the existing backend blob upload API, and render uploaded images in the Photos page gallery/list without a hard refresh.
- Add clear signed-out behavior on `/photo` (show sign-in required state and avoid fetching private blobs) and user-readable error states for upload failures (e.g., unauthorized, actor unavailable).
- Update the backend Motoko actor as needed to support the upload/list/display flow using existing blob storage patterns (no new database or auth system).

**User-visible outcome:** Visiting `/photo` shows the existing T-10 content plus a new “T-0 Junkyard-built Power Armor” card with its image and description; signed-in users can upload a photo with a preview and see the uploaded image(s) appear on the page, while signed-out users see a clear sign-in requirement.
