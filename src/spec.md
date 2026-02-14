# Specification

## Summary
**Goal:** Populate the `/ranks` route with a dedicated Ranks page that displays the Brotherhood of Copper hierarchy and internal regulations/culture content provided by the user.

**Planned changes:**
- Create a new Ranks page component that renders the provided sections: Leadership Ranks, Command Ranks, Specialist Ranks, Initiate Ranks, and Internal Regulations & Culture, preserving headings and bullet lists.
- Apply styling consistent with the existing copper-themed design system (readable width, spacing, headings, list formatting) while keeping the shared site layout (top navigation and footer) unchanged.
- Update routing so `/ranks` uses the new Ranks page component, while `/divisions`, `/lore`, and `/history` continue to render the existing BlankPage behavior.

**User-visible outcome:** Visiting `/ranks` shows a fully structured, readable page with all rank titles, divisions, and regulations displayed as headings and bullet lists, while other placeholder routes remain blank beyond the shared site chrome.
