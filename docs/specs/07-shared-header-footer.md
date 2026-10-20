# Slice 7: Shared header and footer

**Edits:** `index.html`, `research.html`, `ideas.html`, `parent-notice.html`, `legacy-demo.html`, `privacy.html`, `terms.html`, `support.html`. Script the change; do not hand-edit.

**Chrome only on the three legal pages.** On `privacy.html`, `terms.html` and `support.html` change ONLY the header and footer. Everything from `<main` to `</main>` must stay byte-identical. Prove it: compare that block before and after, per file, and report.
**Commit:** `feat(nav): update shared header and footer, add founding-families banner`

## Scope rules
README rules apply: client copy verbatim, repo styling. Only header and footer markup changes. Do not touch any page's main content.

## Header (content only, repo styling)
- Nav items in this order: Home (`index.html`), How it works (`index.html#how-it-works`), Legacy demo (`legacy-demo.html`), Research, Ideas, Privacy (`privacy.html`). Home is kept on the dev's request (the client dropped it); the header must be identical on every page.
- Remove: Why, What's coming, What changes, Trust.
- "Join" button -> "Join the founding 100", href `index.html#founding`.
- Add the offer text "Now inviting our first 100 founding families" to the top strip. Keep the phone number.
- Keep the A / A+ control (D1) and the existing header height and sticky behaviour (D2).
- `aria-current` on the matching nav item per page; none on pages not in the nav (legacy-demo is in the nav; parent-notice is not).

## Footer
- Use each client page's own footer wording and links, in the repo's footer markup. The client has a full footer (tagline, Explore list, Talk to a person, notes) on most pages and a minimal one on the parent notice. Report which variant each client page uses and apply it.
- Explore list per client: How it works, Legacy demo, Research, Ideas & thanks, Join the founding 100. Rename "Ideas" -> "Ideas & thanks".
- Remove Our promises and the "arriving October 2026" line.
- KEEP Terms of Use (`terms.html`) and Support (`support.html`) links in every footer, including the minimal parent-notice footer, in the notes row: "Privacy Policy · Terms of Use · For parents · Support". This differs from the client's footer on purpose (dev request).
- Contact email `greg@grandbabiez.com`. Keep Privacy Policy and For parents links.
- Use `#how-it-works` where the client writes `#how`.

## Do not do
No font swap, no header height change, no new colours, no change to menu or A/A+ behaviour.

## Done when
`grep` for `why.html|whats-coming|what-changes|trust.html|join.html` over all eight pages returns nothing. The header markup (apart from `aria-current`) is identical on all eight pages. The `<main>` blocks of privacy, terms and support are byte-identical to before. Link check clean. 390px, 768px, default and A+ pass; menu opens; A/A+ works; one `aria-current` per page where applicable.
