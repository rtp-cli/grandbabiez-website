# Slice 7: Shared header and footer

**Edits:** surviving pages only: `index.html`, `research.html`, `ideas.html`, `privacy.html`, `parent-notice.html`, `legacy-demo.html`. Script the change; do not hand-edit. **Commit:** `feat(nav): update shared header and footer, add founding-families banner`

## Nav (content only, repo styling)
- Add: "How it works" (`index.html#how-it-works`), "Legacy demo" (`legacy-demo.html`), "Privacy" (`privacy.html`).
- Remove: Home (logo already links home), Why, What's coming, What changes, Trust.
- Final order: How it works, Legacy demo, Research, Ideas, Privacy.
- "Join" button -> "Join the founding 100", href `index.html#founding`.
- Add "Now inviting our first 100 founding families" to the top strip (D2). Keep phone number.
- Keep the A / A+ control (D1) and the header's existing layout, height and sticky behaviour.

## Footer
- Rename "Ideas" -> "Ideas & thanks".
- Remove Terms of Use, Support, Our promises.
- Keep Privacy and Parent notice links on every page. Contact email is `greg@grandbabiez.com`.
- Footer tagline per client: "Grandbabiez(TM) - now inviting our first 100 founding families. Made in The Villages, Florida."
- Remove "Arriving October 2026, starting here in Central Florida" if present.

## Do not do
No font swap, no header height change, no new colours, no change to `aria-current` handling.

## Done when
After the script, `grep -l "why.html\|whats-coming\|what-changes\|trust.html\|join.html\|support\|terms.html\|safety.html" *.html` shows only the pages slated for deletion. `aria-current` is correct on each page. Link check clean.
