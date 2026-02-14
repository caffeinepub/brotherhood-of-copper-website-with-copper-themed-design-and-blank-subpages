# Specification

## Summary
**Goal:** Add a new “Circuit Division” card to the Divisions page and display the provided Circuit Division image, matching the existing division card styling.

**Planned changes:**
- Add a new division section/card on `/divisions` titled **“Circuit Division”** with subtitle text **“(Engineers, Energy Techs, Comms)”**, styled consistently with the existing Forge/Archive/Field cards.
- Add `circuitdivison.png` as a static frontend asset and render it inside the new Circuit Division card with the same image treatment as the other division images (size, rounding, border/shadow) and appropriate alt text.
- Keep the shared SiteLayout (header/footer) and existing Forge/Archive/Field division sections unchanged (content and order), only appending the new section.

**User-visible outcome:** Visiting `/divisions` shows an additional “Circuit Division” card with the subtitle “(Engineers, Energy Techs, Comms)” and the Circuit Division image displayed in the same style as the other division cards.
