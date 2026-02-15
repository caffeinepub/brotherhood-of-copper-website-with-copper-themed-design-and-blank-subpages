# Specification

## Summary
**Goal:** Display the uploaded “brotherhood of copper banner.png” image as a responsive banner within the Home Page hero section.

**Planned changes:**
- Add `brotherhood of copper banner.png` to the frontend static assets under `frontend/public/assets/generated/`.
- Update `frontend/src/pages/HomePage.tsx` to render the banner image inside the existing hero section, positioned above the “Brotherhood of Copper” heading.
- Ensure the banner is responsive (maintains aspect ratio, no horizontal overflow), includes meaningful alt text, and reserves space to avoid layout shift (e.g., via CSS/aspect styling).

**User-visible outcome:** The Home Page hero shows the “Brotherhood of Copper” banner above the main heading on both mobile and desktop, scaling cleanly without layout jumps.
