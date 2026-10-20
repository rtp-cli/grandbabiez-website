# Founding-100 content update: specs

Branch: `content/founding-100-update`. One commit per slice, in the order below.

## Scope rules (apply to every slice, and override anything else)
1. **Legal pages are pasted from the client's files, never rewritten.** `privacy.html` and `parent-notice.html` take the client's text word for word, including every `[bracketed]` placeholder. Do not summarize, reorder, tidy, fill in or "improve" any of it. Problems you notice go in `OPEN-ITEMS.md`, not into the text. `terms.html` and `support.html` are KEPT (dev request): their `<main>` content is never changed, and the footer links to both. Only header/footer chrome is updated on them, for consistency (slice 7).
2. **Client copy is ported verbatim.** No summarizing, shortening, rewording, or copy of your own. Where the repo page and the client page differ in content, the client page wins.
3. **Styling stays the repo's.** Inline styles, Lexend Deca, the existing palette, existing hover classes. Never copy client classes, client `<style>` blocks, client fonts, or client CSS variables.
4. **Never POST to the live Formspree endpoint**, not even once, not even for testing.

## Source of truth
- Client files: `reference/` (local only, gitignored, never deployed). The PDF summary of changes is only a summary: always diff the real client page against the repo page.

## Translation rules
1. Element styling is inline `style` attributes; `styles.css` holds only resets, `.hv1`-`.hv7` hover classes, the two media queries and `aria-pressed` states. Copy the inline pattern from an equivalent existing section.
2. Lexend Deca only (300/400/500/600). No new font host. Client 700 weights become 600.
3. Palette only as in `CLAUDE.md`. Client SVG art may use other colours: copy it as is and log the off-palette fills.
4. Illustrations in the client files are mostly inline SVG, not image files. Copy SVG verbatim including `aria-label`.
5. Assets go in `assets/`. Never inline base64.
6. One `script.js`. No inline `<script>` in pages.
7. Anchor ids: the home page uses `#how-it-works` and `#founding`. The client's `#how` does not exist here; use `#how-it-works`.
8. Never link to a page or anchor that does not exist at that commit.
9. Placeholders: client text in `[brackets]` stays exactly as written. List every one in `OPEN-ITEMS.md`.
10. Test at 390px and 768px, at default and A+ text size.
11. Header/footer markup is duplicated per page: change shared parts with a script, never by hand.

## Link check
```
for f in *.html; do grep -oE 'href="[^"#:]+(#[^"]*)?"' "$f" | sed -E 's/href="([^"#]+).*/\1/' | sort -u | while read l; do [ -e "$l" ] || echo "$f -> MISSING $l"; done; done
```
Known baseline noise: the `support` rewrite warning.

## Slice order
| # | Spec | Status | Commit message |
|---|------|--------|----------------|
| 0 | setup | done | `chore: ignore reference/ and keep docs/ out of deploy` |
| 1 | `01-legacy-demo.md` | done | `feat(legacy-demo): add Whitaker family demo page` |
| 2 | `02-homepage.md` | done | `feat(home): new headline, how-it-works loop, heirloom and demo preview` |
| 3 | `03-signup-pricing.md` | done | `feat(home): add founding pricing and founding-family signup form` |
| 4 | `04-research-ideas.md` | done | `feat(research,ideas): add illustrations, two-column studies, remove vote form` |
| 5 | `05-privacy.md` | built, ready to commit | `feat(privacy): rewrite with plain-language summary, billing, AI opt-out, SMS terms` |
| 6 | `06-parent-notice.md` | | `feat(parent-notice): rewrite as direct note with three-step consent` |
| 7 | `07-shared-header-footer.md` | built, ready to commit | `feat(nav): update shared header and footer, add founding-families banner` |
| 8 | `08-remove-retired-pages.md` | | `chore: remove retired pages and add redirects` |
| 9 | `09-claude-md-readme.md` | | `docs: update CLAUDE.md and README for revised site` |
| 10 | `10-final-checks.md` | | `fix(research): restore the dose caveat section` |

Reusable planning prompt: `PLAN-PROMPT.md`. Pre-merge audit: `AUDIT-PROMPT.md`.

Note: the prompts for slices 1-4 said not to edit `privacy.html` or `terms.html`. That rule is superseded by scope rule 1 above (it meant "do not rewrite", not "do not update").

## Decisions log
- D1 Text size: keep the repo's A / A+ control.
- D2 Header: keep the repo header and sticky behaviour; add the offer text to the top strip.
- D3 Fonts: Lexend Deca only.
- D4 Demo data: RESOLVED. Both families render in the demo; keep all 208 records.
- D5 Demo palette: the demo keeps its own app-style palette, scoped to `legacy-demo.html`.
- D6 Research pointer sentence: RESOLVED. Kept verbatim (it is the client's own sentence) and logged.
- D7 Redirect targets for removed pages: see slice 8.
- D8 Signup extras (honeypot, adults-only line): OFF; recommendations only.
- D10 RESOLVED (dev): Terms and Support pages stay, linked from every footer. Privacy text is the client's, verbatim, placeholders included (dev confirmed).
- D11 RESOLVED (dev): header is identical on every page, including a Home item (the client dropped it; dev wants a way home that is not just the logo).
- D12 Dose caveat section: restored from git history in slice 10 (dev asked; client removed it). Tell the client.
- D9 Parent-notice page chrome: the client's notice page has no site nav and a minimal footer. Default: keep the repo header; use the client's footer for that page. Confirm with the client.
