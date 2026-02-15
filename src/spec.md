# Specification

## Summary
**Goal:** Remove the “Brotherhood of Copper” banner image from the Home Page hero while keeping the hero layout well-spaced and centered on mobile and desktop.

**Planned changes:**
- Delete the banner `<img>` block in `frontend/src/pages/HomePage.tsx` that references `/assets/generated/brotherhood of copper banner.png`.
- Adjust hero spacing/alignment (within `HomePage.tsx`) so the remaining hero content (icon, title, description, CTAs) stays visually balanced and centered across screen sizes.

**User-visible outcome:** The Home Page hero no longer shows the “Brotherhood of Copper” banner, and the hero content remains neatly centered with balanced spacing on both mobile and desktop.
