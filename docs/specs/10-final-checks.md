# Slice 10: Dose caveat and final checks

**Edits:** `research.html`, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `fix(research): restore the dose caveat section`

## A. Restore the caveat section (dev request)
The client removed "The one honest caveat / Dose matters — and that's the whole point." from `research.html`, but the page still says the health research is striking "with one important condition we're honest about below". Without the section the claim has no qualification and the sentence points at nothing.
- Find the commit that removed it: `git log --oneline -- research.html` (the slice 4 commit). Get the old file: `git show <that-commit>^:research.html`.
- Copy the whole old `<section>` back into the same position, byte for byte. No restyling, no rewording, no edits.
- Check: the restored text equals the old text; the pointer sentence is unchanged; one `<h1>` still; no new background-band adjacency; 390px and A+ fine.
- Log in OPEN-ITEMS: restored at the dev's request; the client's design removed it; tell the client.

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
