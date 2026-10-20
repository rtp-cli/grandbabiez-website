# Slice 8: Remove retired pages

**Deletes:** `why.html`, `whats-coming.html`, `what-changes.html`, `trust.html`, `safety.html`, `join.html`.
**KEEPS, untouched:** `terms.html`, `support.html`, `privacy.html` and the existing `/support` rewrite in `vercel.json` (dev request; store listings may point at these URLs).
**Edits:** `vercel.json`, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `chore: remove retired pages and add redirects`

## Do
- Read the current `vercel.json` first and keep every existing key, including the `/support` rewrite.
- Add permanent (301) redirects, for both `/x` and `/x.html`: `/why`, `/whats-coming`, `/what-changes`, `/trust`, `/safety` -> `/`; `/join` -> `/#founding`. Confirm targets with the owner (D7).
- Remove deleted pages from `site.webmanifest` shortcuts and any canonical or og references.

## Check
- `grep -R` over every remaining page: no references to the six deleted files. Report any.
- `terms.html`, `support.html`, `privacy.html` still load at their old URLs, and `/support` still works.
- Link check clean on all remaining pages. Test each redirect locally or in a preview.

## Log in OPEN-ITEMS
- The client's design has no Terms or Support page; they are kept at the dev's request. Confirm with the client.
- Whether anything outside the repo (app store listings, emails) links to the deleted pages.
