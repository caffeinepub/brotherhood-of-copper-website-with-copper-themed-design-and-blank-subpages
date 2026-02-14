# Specification

## Summary
**Goal:** Improve the /history page’s maintainability and navigation without changing any visible story text.

**Planned changes:**
- Refactor the eight History narrative sections (I–VIII) in `frontend/src/pages/HistoryPage.tsx` into a single in-file structured data array and render the section cards by mapping over the data.
- Add an in-page table of contents near the top of the History page that links to anchored IDs for each section (I–VIII), supporting direct URL fragments (e.g., `/history#section-iii`) and working on desktop and mobile.

**User-visible outcome:** The History page shows the same hero and the same eight sections with identical wording, plus a table of contents that users can tap/click to jump to any section.
