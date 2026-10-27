# Slice: Community page and menu link

**Ticket:** https://app.notion.com/p/405512441d3c818c84fec04da7f81784 (GitHub issue: #N)
**Design reference:** `reference/community-preview.html` (the draft the client sees; copy it into `reference/`, which is local only and gitignored). Screenshots of it: `community-preview-desktop.png` and `community-preview-mobile.png`.
**Edits:** `community.html` (new), the header menu and footer "Explore" list on every page that has them, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `feat(community): add Community page and menu link` with `Fixes #N` in the body.

## Scope rules (README rules apply)
- Greg's text is used word for word. The only added word on the page is the heading "Community". No other copy of our own.
- Repo styling only: inline styles, Lexend Deca, existing palette and hover classes, no `<style>` block. The preview uses a `<style>` block and CSS variables for convenience: translate them to the repo's inline-style patterns. Colours and sizes in the preview are the site's own tokens.
- Legal pages (`privacy.html`, `terms.html`, `support.html`): header and footer only. Their `<main>` must stay byte-identical (prove with sha256 before and after).
- Do NOT port from the preview: the "Draft preview" strip, its simplified header and footer, `noindex`, or the skip link markup (use the repo's). The real page must be indexable.
- Never POST to formspree.io. Do not commit.

## The page
- `<main>`: a hero with the `<h1>` "Community" beside an illustration, then Greg's five lines in his order as a list, then his closing paragraph. Keep the preview's structure: the three firm meetings (Thursday, Wednesday, Saturdays) as white cards with a clay left border and an icon tile; the two "will plan on" lines as quieter cards with a dashed hairline border, softer text and a dashed icon tile; the closing paragraph in a cream band (`#F5ECDD`) with weight 300. Use the repo's existing card, band and hero (text beside an illustration) patterns from `research.html` and the homepage instead of inventing new ones. Keep the hero and the list in the same 46rem column so the heading lines up with the cards.
- Text, exactly:
  1. Regular weekly meetings on Thursday afternoon at 1pm at Starbucks in Lake Sumter Landing.
  2. Regular weekly meetings on Wednesday morning at 10:30am at The Lucky Goat coffee shop in Eastport.
  3. We will plan on scheduling a few more in-person weekly meetings depending on schedule.
  4. We will also plan on scheduling Zoom calls on a weekly basis as well.
  5. We are planning to be at the Hometown Market in Brownwood Square on Saturdays from 9am to 1pm.
  Closing: Please join for as many or as few as you wish.  We are happy to help with any problems or issues and/or hear your success stories!
- Head: `<title>Community — Grandbabiez</title>`; meta description and og:description built only from Greg's words (use his first line); canonical `https://grandbabiez.com/community.html`; same favicon, manifest, og/twitter tags as the other pages.
- Header and footer: copy the repo's current markup from `research.html`.

## Map links (new)
Wrap ONLY the place phrase inside each sentence in a link. No words are added or changed. Same tab (no `target="_blank"`), underlined, clay-deep, with a visible focus ring.
- "Starbucks in Lake Sumter Landing" -> `https://maps.app.goo.gl/hWBLeagfBHzvu7sU8` (the exact place link; it opens Google Maps on a Starbucks Coffee Company in The Villages, FL)
- "The Lucky Goat coffee shop in Eastport" -> `https://www.google.com/maps/search/?api=1&query=The%20Lucky%20Goat%20coffee%20Eastport%20The%20Villages%20FL`
- "Hometown Market in Brownwood Square" -> `https://www.google.com/maps/search/?api=1&query=Hometown%20Market%20Brownwood%20Square%20The%20Villages%20FL`
The Starbucks link is an exact place link. The other two are Google Maps search links built from the place names, not exact pins: ask Greg for exact links or addresses and swap them in when he sends them. In the HTML write `&amp;` for the `&` in the search links. Do not link the Zoom line or the two "will plan on" lines. No embedded maps, no scripts, no trackers.

## Illustrations (new)
- Copy the inline SVGs from the preview as they are: one hero illustration (two mugs, steam, a heart) and five 64x64 icons (takeaway cup, mug, two people, video call, market stall). They were drawn for this page, so there are no third-party image licences. No image files and no `assets/` changes.
- They are decorative: `aria-hidden="true"` and `focusable="false"` on every SVG, no `alt` or `aria-label`, no new words.
- Colours are the site's palette only: `#C56B4A`, `#A9553A`, `#E7B24D`, `#7C9B84`, `#E7A9A0`, `#F5ECDD`, `#FBF5EC`, `#6B6259` (and opacity on those). If any colour or radius is not already used on the deployed site, report it (see the design-token audit in OPEN-ITEMS) and do not invent new ones.
- Icon tiles: 4.5rem squares (3.6rem under 30rem), radius 14px, cream fill; dashed tile for the planned items.

## Menu and footer
- Add "Community" (`community.html`) between "Legacy demo" and "Research" in the header menu on every page. Script it across all pages; do not hand-edit. `aria-current="page"` on `community.html` only.
- Footer "Explore" list: add Community in the same position on the pages that have that list. The parent notice (minimal footer) and the legacy demo (single-row footer) have no Explore list: leave them and report.
- Everything else in header and footer stays as it is.

## Risk: header height
The header was tuned and measured (OPEN-ITEMS: header-height tables, the one-row desktop header from 1248px, the demo scroll offsets). A longer menu can wrap or change heights.
1. Before editing, measure header height on every page at 390, 480, 520, 640, 768, 900, 1024, 1247, 1248 and 1440 px, at A and A+, with real fonts. Measure again after.
2. STOP and report if any header height changes by more than 2px, the number of wrapped lines changes, or the one-row desktop layout breaks. Do not change `styles.css` or any spacing to fix it without asking.
3. If heights stay within 2px, re-run the demo scroll-gap check (1px sweep, gap must stay 8–50px) and the homepage anchor check, and log results.

## Verification
- Text check: every word of Greg's text appears in `<main>` word for word and in order (script, comparing the page's text with the links' markup removed), plus the h1. No other new text in `<main>`; SVGs carry no text.
- Links: exactly three external links on the page, the Google Maps URLs above. Open each on the Vercel preview and confirm it lands on the right place; report what Google shows for "Eastport" and "Brownwood Square".
- SVGs: no `href`, `<script>`, `<image>`, `<use>` or external references; colours only from the list above.
- `<main>` sha256 unchanged on all existing pages; privacy, terms and support reported first.
- Header identical on all pages except `aria-current`; link check clean; no console errors.
- 390px, 768px, 1440px at A and A+: no horizontal scroll, buttons at least 44px, keyboard order sensible.
- Grep for `<form`, `<input`, `<script` on the new page: expect none beyond `script.js`. `https?://` hits: fonts, canonical/og URLs and the three Maps links only.
- `git status`: `community.html`, the edited pages, OPEN-ITEMS only. Nothing staged.

## Log in OPEN-ITEMS
Open questions for Greg: is "Community" the final title; do the Lucky Goat and Hometown Market links open the right places (they are name searches; ask him for exact place links or addresses to replace them; the Starbucks link is already exact); Zoom day, time and link; OK to publish this short. Also: `/community` redirect and the sitemap entry are added in the indexing slice.

## Done when
The page matches Greg's text, the menu and footer show Community on every page, header measurements are within 2px or reported, and only the listed files changed.
