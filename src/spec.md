# Specification

## Summary
**Goal:** Update the History page to present the Texhoma (2105) / Colt Mercer “Copper Age” narrative while preserving the existing layout and in-page navigation behavior.

**Planned changes:**
- Replace the existing eight History sections (I–VIII) on `frontend/src/pages/HistoryPage.tsx` with the provided Texhoma/Colt Mercer (2105) content, keeping the same hero, table of contents, and section card structure.
- Update the section titles to exactly match the provided headings for sections I–VIII, and update each section body to match the provided narrative text (including the quoted line and the tenets list under section VII).
- Update the hero heading/subheading copy to align with the new Texhoma-focused 2105 storyline, without changing the existing visual styling.
- Keep the current Table of Contents anchor scrolling and URL-hash direct navigation behavior intact across desktop and mobile.

**User-visible outcome:** The History page shows the Texhoma (2105) storyline across eight updated sections with a matching table of contents; users can click TOC entries or use URL hashes (e.g., `#section-v`) to navigate smoothly to the correct section.
