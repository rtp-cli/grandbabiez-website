# Issue D: Make the new content match the deployed site's look

**Issue:** #D. **Edits:** `index.html`, `research.html`, `ideas.html`, `parent-notice.html`, `legacy-demo.html` (style values only), `docs/specs/OPEN-ITEMS.md`.
**Commit:** `style: align new content with the deployed design tokens` with `Fixes #D` in the body. If the audit finds nothing to change, make no commit and report "nothing to change".

## Direction (confirmed by the owner)
Match the DEPLOYED site (base: `BASE=$(git merge-base HEAD main)`, expected `283af5c`), NOT the client's zip.

## Scope rules
README rules apply. Change style values only: never text, structure, links or ids. `parent-notice.html` main text must stay byte-identical in its text nodes. Do not touch `privacy.html`, `terms.html`, `support.html`. Never POST to formspree.io. Do not commit.

## Context
The client's design introduced real new components (prompt and keepsake mockups, flow cards, chat preview, stats strip, pricing box, consent steps box, SVG illustrations, the legacy demo). We rebuilt them with the site's fonts, palette and spacing, but no one has audited the final inline styles. The client's own CSS uses values the deployed site never did (for example colours `#4D6B55`, `#FBEBC8`, `#5C4310`, a different radius scale, different shadows).

## Method
1. Build the ALLOWED sets from the base: for every page at BASE (use `git show $BASE:<file>`, including the pages deleted since) and `styles.css`, extract every colour (hex and rgba), `border-radius`, `box-shadow`, `font-weight`, `font-size` (including `clamp()` values), `letter-spacing` and `line-height`.
2. Extract the same tokens from the CHANGED lines in the five pages (`git diff $BASE -- <file>`, added lines only, including header and footer).
3. Report a table: token | file:line | in base? | nearest base token.
4. Align every token not in the base to the nearest base token (colours by RGB distance; sizes and radii numerically). If an alignment moves anything by more than about 4px or changes a colour visibly, show before and after measurements at 390 and 1440.

## Exemptions: defer with a reason and log in OPEN-ITEMS for the client
- All colours inside the client's SVG illustrations (artwork). List them: known `#5F7A66`, `#8C5A38`, `#B5544A`, `#D8A87E`, `#EAC7A4`.
- Colours and component styles scoped inside the legacy demo app (`#demo` and its custom properties).
If the dev wants these aligned as well, that needs the client's approval, since it changes their artwork.

## Verification
- Token table before and after; zero non-exempt tokens remain that are not in the base.
- Text equality: for every edited page, the `<main>` text before and after is identical; `parent-notice.html` still equals the client's text.
- Link check clean; no console errors; 390px and 1440px at A and A+ with no horizontal scroll.
- `git diff --stat` shows only the five pages and `OPEN-ITEMS.md`.

## Done when
Every non-exempt token matches the deployed site, the exemptions are logged with reasons, and no text changed.
