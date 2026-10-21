# Issue A: Restore the truncated CSS rule in the legacy demo

**Issue:** #A (high). **Edits:** `legacy-demo.html` (the demo `<style>` block only), `docs/specs/OPEN-ITEMS.md`.
**Commit:** `fix(legacy-demo): restore truncated story-body CSS rule` with `Fixes #A` in the body.

## Scope rules
README rules apply. Do not touch `privacy.html`, `terms.html`, `support.html`. Do not change `<main>` content (its sha256 must still start `1d779aaad4d62199efcc`), the demo script, or any other page. Never POST to formspree.io. Do not commit.

## The problem (dev's report; verify it)
Around line 124 the stylesheet reads `#demo .story-` and then `.legacy{display:flex;gap:0.625rem;...}` on the same line. The browser reads the selector `#demo .story- .legacy`, which matches nothing, and the `#demo .story-body{...}` rule no longer exists. Effects: expanded stories and Lighthouse Cat chapters lose padding and run together; the "Kept for the heirloom" footer loses its flex layout, dashed top border and spacing.

## What the rules should be (client's original, intact)
```
.story-body{padding:0 18px 16px;font-family:var(--display);font-size:18px;line-height:1.6;max-width:66ch;white-space:pre-line}
.legacy{display:flex;gap:10px;font-size:14px;color:var(--ink-soft);border-top:1px dashed var(--hair);padding-top:10px}
.legacy b{font-family:var(--ui);color:var(--sage);white-space:nowrap}
```
Apply the SAME conversions used for the rest of the demo CSS in this file: px to rem (16px = 1rem), selectors scoped under `#demo`, fonts mapped to Lexend Deca via the demo's existing variables, weights 300/400/500/600 only. Expected `story-body`: `padding:0 1.125rem 1rem; font-size:1.125rem`. Check how the file maps `--display` and match it.

## Do
1. Show the broken lines with line numbers, before any edit. If they differ from the report, say so.
2. Restore `#demo .story-body{...}`; put `#demo .legacy{...}` and `#demo .legacy b{...}` on their own lines.
3. Run a CSS integrity check on the whole demo `<style>`: braces balanced; no selector that ends in a hyphen or spans a line break; every rule in the client's demo CSS has a counterpart here (normalize: strip the `#demo ` prefix, ignore px-to-rem). List any missing or extra rules. If more than these two are damaged, fix them the same way and list each.

## Verification
- `git diff` shows only the demo `<style>` block, and `<main>` sha256 is unchanged.
- At 390px and 1440px, at A and A+: expand a story in Private spaces, open a Lighthouse Cat chapter, and look at an exchange card's "Kept for the heirloom" footer. Report computed values: `.story-body` padding is not 0; `.legacy` is `display:flex` with a dashed `border-top`.
- No console errors.

## Done when
Both rules exist separately, the integrity check is clean, and only the `<style>` block changed.
