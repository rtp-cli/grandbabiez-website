# Founding-100 content update: specs

Branch: `content/founding-100-update`. One commit per slice, in the order below.

## Source of truth
- Client files: `reference/grandbabiez_website/` (local only, gitignored, never deployed).
- Port **copy and structure** verbatim: headings, paragraphs, labels, placeholders, alt text, meta title/description.
- The client's markup is class-based with a full stylesheet pasted into a `<style>` block on every page. **Do not copy that.** Re-express each element in this repo's conventions.

## Translation rules (apply to every slice)
1. **Styling stays as in the repo.** Element styling is inline `style` attributes; `styles.css` holds only resets, `.hv1`-`.hv7` hover classes, the two media queries and `aria-pressed` states. Copy the inline patterns from an equivalent existing section (eyebrow, h1/h2, card, section wrapper, button) instead of inventing new ones.
2. **Type:** Lexend Deca only (300/400/500/600). Do NOT add General Sans, Noto Sans, Fontshare or any new font host.
3. **Palette:** only the colours in `CLAUDE.md`. Ignore any other hex in client files.
4. **Do not copy** client `<style>` blocks, `.wrap/.btn/.topbar/.site-header` classes, `data-textsize`, or the client `styles.css`.
5. **Assets** go in `assets/`. Client files sit flat in the zip root (`logo.png`, `photo-grandmother.jpg`, `photo-grandfather.jpg`). Some client pages embed images as base64 `data:` URIs: decode these to files in `assets/`, never inline base64. Use real `width`/`height`, meaningful `alt`, `loading="lazy"` below the fold.
6. **Scripts:** one `script.js`. Move any client inline `<script>` logic into it (guard by element id so it is a no-op on other pages).
7. **Links:** never link to a page or anchor that does not exist at that commit. After each slice run the link check below.
8. **Placeholders:** client text in `[brackets]` stays exactly as written. Never invent legal wording, names, addresses, periods or vendor names. List every bracket you touch in `docs/specs/OPEN-ITEMS.md`.
9. **Test** at 390px width at default and at A+ text size.
10. Header/footer markup is duplicated per page: change shared parts with a script across all surviving pages.

## Link check
```
for f in *.html; do grep -oE 'href="[^"#:]+(#[^"]*)?"' "$f" | sed -E 's/href="([^"#]+).*/\1/' | sort -u | while read l; do [ -e "$l" ] || echo "$f -> MISSING $l"; done; done
```

## Slice order (each has a spec file)
| # | Spec | Commit message |
|---|------|----------------|
| 0 | (setup) | `chore: ignore reference/ and keep docs/ out of deploy` |
| 1 | `01-legacy-demo.md` | `feat(legacy-demo): add Whitaker family demo page` |
| 2 | `02-homepage.md` | `feat(home): new headline, how-it-works loop, heirloom and demo preview` |
| 3 | `03-signup-pricing.md` | `feat(home): add founding pricing and founding-family signup form` |
| 4 | `04-research-ideas.md` | `feat(research,ideas): add illustrations, two-column studies, remove vote form` |
| 5 | `05-privacy.md` | `feat(privacy): rewrite with plain-language summary, billing, AI opt-out, SMS terms` |
| 6 | `06-parent-notice.md` | `feat(parent-notice): rewrite as direct note with three-step consent` |
| 7 | `07-shared-header-footer.md` | `feat(nav): update shared header and footer, add founding-families banner` |
| 8 | `08-remove-retired-pages.md` | `chore: remove retired pages and add redirects` |
| 9 | `09-claude-md-readme.md` | `docs: update CLAUDE.md and README for revised site` |

Why this order: slices 1-6 only link to pages that already exist; slice 7 adds the new nav only after every target exists; slice 8 deletes pages only after nothing links to them.

## Setup commit (slice 0)
```
.gitignore     + reference/
.vercelignore  + docs/
               + reference/
```
Vercel serves the repo root, so without `.vercelignore` the specs and client files would be public.

## Open decisions (defaults used unless you say otherwise)
- **D1 Text size:** client shows one "Larger text" button; default = keep the repo's A / A+ control (65+ audience).
- **D2 Header:** default = keep the repo header and sticky behaviour; add the offer text "Now inviting our first 100 founding families" to the top strip.
- **D3 Fonts:** default = Lexend Deca; client's General Sans / Noto Sans not adopted.
- **D4 Demo data:** `legacy-demo.html` embeds 208 records: 104 `whitaker` and 104 `mendez`. The PDF describes only the Whitaker family. Confirm the Mendez set is unused before dropping it (about half of the 379 KB data block).
- **D5 Demo palette:** the demo mimics the app and uses its own colours (dark theme, per-person colours). Default = allowed, scoped inside `legacy-demo.html` only.
- **D6 Dangling reference:** `research.html` still points to the removed "Dose matters" section. Client copy, so flag, don't edit.
- **D7 Redirect targets** for removed pages: see slice 8; confirm.
- **D8 Signup form wording:** the client form has no adults-only line and no SMS consent text. Proposed addition in slice 3, needs your OK.
