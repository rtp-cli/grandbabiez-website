# Slice 1: Legacy demo page

**Source:** `reference/.../legacy-demo.html` (426 KB: 17 KB demo CSS, 23 KB demo JS, 379 KB inline JSON).
**Creates:** `legacy-demo.html`. **Commit:** `feat(legacy-demo): add Whitaker family demo page`

## Do
- Create `legacy-demo.html` using this repo's current header/footer markup (copy from `research.html`). Do NOT use the client's `.gb-topbar/.gb-wrap` site frame.
- Keep the demo itself (six tabs: The family, Private spaces, Milestones, Story library, The Lighthouse Cat, Year One heirloom) with its data and JS intact.
- **Exception to "one stylesheet / one script":** the demo's own CSS and JS stay page-scoped inside `legacy-demo.html` (`<style>` / `<script>`). Namespace the CSS so nothing leaks into the site header/footer, and nothing from it goes into `styles.css`.
- Replace the demo's `src="logo.png"` with `assets/logo.png`.
- Ends with "Become a founding family" (-> `index.html#founding`, created in slice 3; until then link to `index.html`) and "Back to grandbabiez.com" (-> `index.html`). Switch the first link to `#founding` in slice 3.
- Set `<title>`, description, canonical (`https://grandbabiez.com/legacy-demo.html`), OG tags in the repo's pattern.

## Check before dropping data (D4)
Count records per `family`. If the UI renders only `whitaker`, ask before deleting the `mendez` records.

## COPPA / safety checks
- Every tab says the family is fictional. Confirm the fictional label is visible on load and on each tab.
- No real children's names or photos; grandchildren appear only as text/illustration. Confirm no `<img>` of real people.
- The only input is the search box (`#fq`). No forms, no fetch/XHR, no third-party scripts or fonts.
- Demo must not imply children chat outside their family circle.

## Done when
Page loads at 390px and A+; six tabs work by keyboard; link check clean; no console errors; no requests to hosts other than the site's own.
