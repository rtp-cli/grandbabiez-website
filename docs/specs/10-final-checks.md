# Slice 10: Dose caveat and final checks

**Edits:** `research.html`, `legacy-demo.html`, `docs/specs/OPEN-ITEMS.md`.
**Commits (two, in this order):**
1. `fix(research): restore the dose caveat section`
2. `fix(legacy-demo): keep demo tabs below the sticky header`

## A. Restore the caveat section (dev request)
The client removed "The one honest caveat / Dose matters — and that's the whole point." from `research.html`, but the page still says the health research is striking "with one important condition we're honest about below". Without the section the claim has no qualification and the sentence points at nothing.
- Find the commit that removed it: `git log --oneline -- research.html` (the slice 4 commit). Get the old file: `git show <that-commit>^:research.html`.
- Copy the whole old `<section>` back into the same position, byte for byte. No restyling, no rewording, no edits.
- Check: the restored text equals the old text; the pointer sentence is unchanged; one `<h1>` still; no new background-band adjacency; 390px and A+ fine.
- Log in OPEN-ITEMS: restored at the dev's request; the client's design removed it; tell the client.

## A2. Legacy demo fixes (outside `<main>`; second commit)
Found during slice 7. Both changes are outside `<main>`, so the `<main>` sha256 of `legacy-demo.html` must stay `1d779aaad4d62199...` (full hash from the slice 7 report).
1. **Tab bar hidden under the sticky header.** When a tab is switched after scrolling down, the page's own script calls `window.scrollTo` to the tab bar, which lands it under the header (161px at A, 222px at A+ at 390px). Change only that call: subtract the sticky header's current height, read at runtime from the `header` element (no hard-coded pixels). Leave the rest of the demo script exactly as it is (it must still equal the client's script apart from this one line and the changes already logged in OPEN-ITEMS).
2. **Missing `<body>` tag.** `legacy-demo.html` goes from `</head>` straight to the skip link. Add `<body>` between them, and `</body>` before `</html>` if absent. Nothing else.
Verify at 390 and 1440, at A and A+: from deep scroll, switch each of the six tabs; the tab bar must be fully visible below the header. Story selection must still work. No console errors. Never POST to formspree.io.

## B. End-of-branch gate (no commit; report results)
Let `BASE=$(git merge-base HEAD main)` (use the real base branch name).
1. `privacy.html`: the text of `<main>` equals `reference/privacy.html` `<main>`, character for character (recreate the equality script: text nodes, joined text, placeholders in order, heading ids, link pairs).
2. `parent-notice.html`: same check against the client's.
3. `terms.html` and `support.html`: the `<main>...</main>` block is identical to `git show $BASE:<file>`. `privacy.html` outside `<main>` may differ (chrome only).
4. No reference anywhere to the six deleted pages; link check clean; redirects work.
5. COPPA grep across every page: `fetch|XMLHttpRequest|localStorage|sessionStorage|document.cookie|sendBeacon|postMessage|<iframe|<form|<input|https?://`. Expected: only the founding form (one form, four inputs), `script.js`, the fonts link, canonical/og URLs, SVG namespaces, study links.
6. Placeholder inventory: every `[bracketed]` item across privacy and parent-notice, with counts. These are launch blockers.
7. Header identical on all eight pages; footer has Terms of Use and Support on all eight.

## C. Before merging to production (not for Claude Code to do)
- Run the app-vs-site audit in `AUDIT-PROMPT.md` and settle every contradiction with the dev and the client.
- Client supplies real values for every placeholder and the consent link; the notice button stops being inert.
- Confirm the store listings' privacy and support URLs still resolve.
- Keep the branch on a Vercel preview until all of the above is done.