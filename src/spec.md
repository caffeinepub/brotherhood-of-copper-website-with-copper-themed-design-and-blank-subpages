# Specification

## Summary
**Goal:** Add an Intro landing page that prominently displays the provided banner image and guides users into the existing Home page, without breaking existing site routes.

**Planned changes:**
- Create a new Intro page (e.g., `IntroPage`) that renders `brotherhood of copper banner-1.png` prominently and includes a clear call-to-action button/link to enter the site.
- Update routing so `"/"` loads the Intro page and the existing Home content is moved to a dedicated route (e.g., `"/home"`).
- Update navigation so “Home” points to the new Home route (not the Intro route), and ensure the Intro route is either hidden from primary navigation or clearly labeled if shown.
- Update any internal links that previously navigated to `"/"` as Home to instead navigate to the new Home route, while keeping existing routes working (`/ranks`, `/divisions`, `/lore`, `/history`, `/photo`, `/posters`).

**User-visible outcome:** When users visit the site they land on an Intro screen with the banner image and an “Enter/Continue” control; selecting it takes them to the Home page, and all existing pages remain accessible via their routes and navigation.
