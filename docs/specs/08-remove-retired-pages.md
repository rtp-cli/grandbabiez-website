# Slice 8: Remove retired pages

**Deletes:** `why.html`, `whats-coming.html`, `what-changes.html`, `trust.html`, `safety.html`, `join.html`, `support.html`, `terms.html`. **Edits:** `vercel.json`. **Commit:** `chore: remove retired pages and add redirects`

## Do
- Read the current `vercel.json` first and preserve existing keys (it has a `/support` rewrite).
- Add permanent redirects (proposed, D7; confirm): `/why`, `/whats-coming`, `/what-changes`, `/trust`, `/safety` -> `/`; `/join` -> `/#founding`; `/support` -> `/#founding`; `/terms` -> `/privacy.html`. Cover both `/x` and `/x.html`.
- Remove retired pages from any `site.webmanifest` shortcuts, canonical or OG references.

## Check
- Zero remaining references to the deleted files anywhere (`grep -R`).
- Link check clean on every surviving page.
- Terms of Use content is gone with the page: record in OPEN-ITEMS that billing and SMS terms now live only in the privacy policy.
