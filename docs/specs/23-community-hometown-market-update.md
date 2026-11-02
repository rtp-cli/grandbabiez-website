# Spec 23: Community page, Hometown Market update

- Ticket: GB-576 (Notion, Epic 17: Website Changes and Enhancements)
- Issue: #__ (create the GitHub issue, then fill in)
- Branch: `<type>/<issue#>-community-hometown-market-update` (branch from `main`, not from the coffee-notice branch)
- Status: DRAFT. Wording needs Greg's approval before merge.

## 1. Request

Greg's email, item 2, word for word:

> We were unable to get into the Hometown Market this past Saturday, but hoping to make it into next Saturday's market.

Decision (Nehal, Nov 2): keep the Hometown Market card and add Greg's update to it. This overrides the Oct 28 sync note to remove the card. Nehal still asks Greg to confirm that the Oct 28 "remove" no longer applies.

## 2. Scope

Change `community.html` only. Add one sentence inside the existing Hometown Market card (the last card in the list). Nothing else changes.

Keep word for word:
- The existing card text: "We are planning to be at the Hometown Market in Brownwood Square on Saturdays from 9am to 1pm."
- The existing link (still a name search; pinning it is a separate item).
- The dashed "planned" card style from spec 20.

Do not touch:
- The two coffee cards, the Zoom card, the planned-meetings card.
- The coffee notice from spec 22 (a separate branch; it may or may not be merged yet).
- `<meta description>`, `og:description`, header, menu, footer, `styles.css`, `script.js`, any other page.

## 3. Wording (DRAFT for Greg to approve)

Built from Greg's own sentence. Do not add marketing copy.

> We were unable to get into the Hometown Market on Saturday, October 31, but we are hoping to make it into the market on Saturday, November 7.

What changed from Greg's sentence, so he can accept or reject each change:
- "this past Saturday" became "Saturday, October 31", and "next Saturday's market" became "the market on Saturday, November 7". Reason: relative words go stale.
- "but hoping" became "but we are hoping" (grammar only).
- The dates are Nehal's inputs and must be confirmed. If they are wrong, stop and ask. Claude Code must not guess.

## 3b. Markup

Inside the last `<li>` (the Hometown Market card), after the existing text, inside the existing `<p>`, add:

```html
<!-- TEMPORARY (GB-576): Hometown Market update. Remove or replace once the market is confirmed. -->
<span style="display:block; margin-top:0.5rem;">...approved wording...</span>
```

- The `<p>` already carries the card's colour and font size, so the sentence inherits them. No new colours, no new font sizes.
- The sentence is plain text, not a link, so the 44px touch-target rule does not apply.
- The card keeps its dashed border.

## 4. Rules (unchanged)

- Inline styles, Lexend Deca, existing palette only.
- Text must scale with the A / A+ control.
- Header and menu are not edited, so header height does not change. Confirm in the diff that no header lines moved.
- Never POST to the live Formspree endpoint when testing.
- Build only. Do not commit.

## 5. Other pages

Search every `*.html` for: Hometown, Brownwood, Saturday, market. List the hits in the plan. Do not edit pages other than `community.html`; if another page mentions the market, say so in the plan and stop.

## 6. Acceptance checks

1. The new sentence shows inside the Hometown Market card on `community.html` and nowhere else.
2. The existing card text and link are unchanged. The other four cards are byte-for-byte unchanged.
3. Checked at 1440, 1024, 640 and 390 px, at A and at A+: the card wraps cleanly, nothing is cut off, no new horizontal scroll. (A horizontal scroll at 640 px with A+ is a known open item; it must not get worse.)
4. No console errors. All existing links still work.
5. `git diff --stat` shows `community.html` only (plus this spec file).
6. The change carries the removal comment.

## 7. Removal

When the market is confirmed (or the dates pass), remove or replace the span. Add a line to `docs/specs/OPEN-ITEMS.md` so it is not forgotten.

## 8. Open inputs

- Dates: Saturday, October 31 and Saturday, November 7 (Nehal to confirm).
- Greg's approval of the wording, and his confirmation that the Oct 28 "remove" no longer applies.
- Merge order: this spec and spec 22 both edit `community.html`, on different lines. Either can merge first; the second may need a trivial update from `main`.
