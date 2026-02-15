# Specification

## Summary
**Goal:** Remove the Posters page entirely and fix the publish/redeploy failure so the site can be published successfully.

**Planned changes:**
- Remove the `/posters` route and delete the Posters page implementation from the frontend so it is no longer part of the build.
- Remove all navigation links to “Posters” from desktop and mobile menus.
- Identify and fix the cause of the publish/republish failure so deployment completes successfully and the deployed site routes work as expected.

**User-visible outcome:** The site no longer shows or links to a Posters page, navigating to `/posters` no longer displays it, and the project can be published/redeployed successfully with the deployed app functioning normally.
