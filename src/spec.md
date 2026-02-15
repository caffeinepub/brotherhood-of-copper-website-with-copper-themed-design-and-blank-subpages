# Specification

## Summary
**Goal:** Update the app’s global theme to use a noticeably darker copper palette across all pages, in both light and dark modes.

**Planned changes:**
- Adjust copper-related CSS variables in `frontend/src/index.css` for both `:root` (light) and `.dark` (dark) so primary/accent/secondary, borders/rings, gradients, and muted/accent backgrounds shift consistently to a darker copper without per-page edits.
- Update Tailwind theme extensions that hardcode old copper values (e.g., `shadow-copper` in `frontend/tailwind.config.js`) to match the new darker copper palette.

**User-visible outcome:** All routes/pages (Home, Ranks, Divisions, Uniform & Armor Variants, History, Photo) display consistent, darker copper accents with readable contrast in both light and dark themes.
