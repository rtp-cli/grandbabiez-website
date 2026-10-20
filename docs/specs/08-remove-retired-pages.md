# Slice 8: Remove retired pages

**Deletes:** `why.html`, `whats-coming.html`, `what-changes.html`, `trust.html`, `safety.html`, `join.html`, `terms.html`, `support.html`.
**Edits:** `vercel.json`, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `chore: remove retired pages and add redirects`

The client's design has no Terms or Support page (the policy now carries subscription, billing and SMS terms), so both go with the rest.

## Do
- Read the current `vercel.json` first and keep every existing key except the `/support` rewrite, which is replaced by a redirect.
- Add permanent (301) redirects, for both `/x` and `/x.html`: `/why`, `/whats-coming`, `/what-changes`, `/trust`, `/safety`, `/support` -> `/`; `/join` -> `/#founding`; `/terms` -> `/privacy.html`. Confirm these targets with the owner (D7, D10).
- Remove deleted pages from `site.webmanifest` shortcuts and any canonical or og references.

## Check
- `grep -R` over every remaining page: no references to the deleted files. Report any.
- Link check clean on all remaining pages.
- Test each redirect locally or in a preview.

## Log in OPEN-ITEMS
- The policy text may still say "Terms of Use" although the page no longer exists.
- Whether anything outside the repo (app store listings, emails, signage) links to the deleted pages or to `support@grandbabiez.com`.
