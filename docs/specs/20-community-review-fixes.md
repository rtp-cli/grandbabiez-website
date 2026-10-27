# Community page: PR review fixes

**Context:** review comments on the grouped PR (Community page). Supersedes the "three firm cards" wording and the Lucky Goat and Hometown Market links in `18-community-page.md`.
**Edits:** `community.html`, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `fix(community): show the Saturday market as planned and use more precise map links` (no issue to close; the PR already carries `fixes #14`).
**Design reference:** `reference/community-preview.html` (updated) and its screenshots.

## Scope rules (README rules apply)
- Greg's text is untouched, word for word. Only styles and two hrefs change.
- Repo styling only: inline styles, no `<style>` block, no `styles.css` change. Header, footer and every other page stay as they are. Never POST to formspree.io. Do not commit.

## 1. The Saturday market card is "planned", not confirmed
Greg's wording is "We are planning to be at the Hometown Market..." so it belongs with the dashed "planned" cards, in Greg's order (it stays last). The rule is now: lines that say "Regular weekly meetings" are solid cards; lines that say "will plan" or "are planning" are dashed. Result: 2 solid cards, then 3 dashed cards.
- Give the Hometown Market `<li>` the same inline styles as the other two dashed cards (transparent background, `1.5px dashed #E6DBC9`, colour `#6B6259`, 1.1rem) and a dashed icon tile.
- The market SVG gets `opacity:.75` on the `<svg>` element, like the other planned icons are softened. Copy the markup from the preview.
- If Greg later confirms the market is regular, make it solid and move it up to third (ask him; do not do it now).

## 2. Map links
- Starbucks: unchanged (`https://maps.app.goo.gl/hWBLeagfBHzvu7sU8`, an exact place link).
- Lucky Goat: change to the exact place link the owner supplied, `https://maps.app.goo.gl/Lf7Nj1gftqYFb3iL9`. It resolves to a Google Maps place page named "Lucky Goat Coffee" (about 28.762, -81.984). Open it once and confirm it is the Eastport shop (7033 Eastport Dr).
- Hometown Market: keep the link that is already on the page (no change): `https://www.google.com/maps/search/?api=1&amp;query=Hometown%20Market%20Brownwood%20Square%20The%20Villages%20FL`. It is still a name search, not a pin; no pinned link was found. Leave a row in OPEN-ITEMS asking Greg for one.
- Same tab, same link style. Exactly three external links on the page.

## Verification
- `git diff community.html` shows only: the Hometown `<li>` inline styles and its tile, the market SVG opacity, and the Lucky Goat href. No text changed (script compares the page text, links removed, with Greg's lines word for word and in order).
- Exactly 3 external hrefs, the three above (Starbucks and Lucky Goat pinned, Hometown Market the existing search). No other file changed except OPEN-ITEMS.
- `<main>` sha256 unchanged on all other pages; header and footer untouched.
- Screenshots at 390 and 1440, at A and A+: the dashed card matches the other two, no horizontal scroll, the link in the dashed card stays readable (contrast), focus ring visible.
- Console clean.

## Log in OPEN-ITEMS
- The review comments and what was decided.
- For Greg: is the Saturday market confirmed or still planned? Is "Hometown Market" the exact name? (The Villages Entertainment lists the Brownwood Paddock Square Farmers Market on Saturdays 9am to 2pm October to April and 9am to 1pm May to September, so the hours depend on the season.)
- An exact pinned link for the market (the Lucky Goat link is now a pinned place link): to be pasted in when sent.
