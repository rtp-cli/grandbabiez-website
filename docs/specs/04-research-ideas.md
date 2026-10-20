# Slice 4: Research and Ideas

**Source:** `reference/research.html`, `reference/ideas.html`.
**Edits:** `research.html`, `ideas.html`, `script.js` (remove the dead vote-form call only), `docs/specs/OPEN-ITEMS.md`.
**Commit:** `feat(research,ideas): add illustrations, two-column studies, remove vote form`

## Scope rules (override anything else)
- Do NOT edit `privacy.html` or `terms.html`. Do not add links to `terms.html` or `support.html`.
- Port client copy verbatim. No summarizing, shortening, rewording or new copy.
- Repo styling only: inline styles, Lexend Deca, existing palette and hover classes. Do not copy client classes (`.wrap`, `.card`, `.accent-honey`, `.tag-planned`, `.btn`, `.cols-2`) or any `<style>`.
- Header and footer are NOT in this slice (slice 7). Leave them untouched, including their `#how` and `join.html` links.

## Facts found in the client files (read these first)
- The "new illustration" on each page is an **inline SVG** (viewBox 400x340, `role="img"` with an `aria-label`), not an image file. There is nothing to decode into `assets/`. Copy each SVG verbatim, including its `aria-label`. Do not redraw or recolour it; if a colour is outside the repo palette, report it and leave it.
- The client's `ideas.html` has no form and no inputs. The vote section is replaced by a closing section "Have an idea?" ("The next one on this page could be yours.") with two buttons: "Join and share your idea" -> `index.html#founding` and "Email us an idea" -> the client's `mailto:` link (keep its exact address and subject).
- The client's `research.html` contains no "Dose" text at all. The repo's page has a "Dose matters ..." section.
- The client's `ideas.html` embeds the family huskies photo as base64. The repo already has `assets/pets.jpg` for the same card. Do not add a duplicate: compare the two and report.
- The PDF summary is only a summary. Where the repo page and the client page differ in any copy, the client page wins, so do a full text diff for both pages (headings, paragraphs, card titles, credits, labels, meta title/description) and apply every difference.

## research.html
1. Add the SVG illustration at the top, in the position the client puts it.
2. Study cards: two columns instead of three. Keep the repo's `repeat(auto-fit, minmax(...))` grid pattern and change only the minimum width so desktop shows two columns and phones stack. Do not add breakpoints.
3. Remove the "Dose matters" section as the client has it removed.
4. Port any copy difference from the full text diff. If the repo has a sentence that points to the removed section and the client page does not, the client page wins: remove it, and say so in OPEN-ITEMS. If you cannot tell, stop and ask.

## ideas.html
1. Add the SVG illustration at the top, in the client's position.
2. Replace the "Which of these should we build first?" vote section with the client's closing section (copy above), including both buttons. Use the repo's existing button patterns (`hv1` primary, outline for the quiet one).
3. Make the idea cards match the client's text exactly (titles, descriptions, "Planned" labels, credit lines, the closing note).
4. Check for any remaining reference to `#vote`, `vote-form`, `vote-thanks`, `YOUR-VOTE-FORM-ID` anywhere in the repo (html, script.js, README, docs). The README and CLAUDE.md are updated in slice 9, so only report those two.

## script.js
- Remove the `ajax('vote-form', ...)` call. Nothing else changes. The `join-form` setup stays exactly as slice 3 left it.

## Privacy and COPPA checks
- Removing the vote form removes a data-collection point: confirm no `<form>`, `<input>`, `<textarea>` or `<select>` remains on either page.
- The new SVGs and the `mailto:` link add no scripts, hosts or trackers. Grep both pages for `fetch|XMLHttpRequest|localStorage|sessionStorage|document.cookie|sendBeacon|postMessage|<iframe|https?://` and report anything beyond the existing Google Fonts link and study links.
- Credit lines name real people by first name and place. Do not edit them. Log in OPEN-ITEMS: confirm the client has permission for each credit.
- The huskies photo: confirm no person appears in it.

## Log in docs/specs/OPEN-ITEMS.md
- Vote form removed: roadmap voting no longer exists; ideas now arrive by email or at signup.
- Whether the research pointer line was found, and what was done.
- Credit lines / permissions.
- Any client SVG colour outside the palette.
- Any copy differences beyond what the PDF listed.

## Verification
- `git status`: only `research.html`, `ideas.html`, `script.js`, `OPEN-ITEMS.md`.
- Verbatim diff of all visible text and alt/aria-label text, client against repo, for both pages. Report misses.
- Link check from README. `#founding` resolves; the mailto is intact.
- 390px, default and A+: no horizontal scroll; study cards stack; SVG scales; buttons at least 44px and not clipped.
- Test the other pages still work with the edited `script.js`: menu button, A/A+ toggle, the home signup form with the stubbed `fetch` only. Never POST to formspree.io.

## Done when
Both pages match the client's copy, the SVGs are in, the vote form and its script call are gone, no dead references remain, and only the four listed files changed.