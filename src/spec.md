# Specification

## Summary
**Goal:** Populate the `/posters` page by displaying the uploaded poster image as a static frontend asset.

**Planned changes:**
- Add `carry-2.png` to the frontend’s static assets.
- Update the `/posters` route (PosterPage) to render a non-null page that displays the `carry-2.png` image.
- Ensure the image is responsive (fits within viewport width, maintains aspect ratio) and includes a non-empty English `alt` attribute.

**User-visible outcome:** Visiting `/posters` shows the uploaded “carry-2.png” poster image on the page and it loads correctly on refresh.
