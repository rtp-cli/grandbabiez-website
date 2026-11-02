# Spec 22: Community page, coffee meetups cancelled this week

- Ticket: GB-577 (Notion, Epic 17: Website Changes and Enhancements)
- Issue: #__ (create the GitHub issue, then fill in)
- Branch: `<type>/<issue#>-community-coffee-notice`
- Status: DRAFT. Wording needs Greg's approval before merge.

## 1. Request

Greg's email, item 3, word for word:

> Due to scheduling issues, We are unable to do either of the coffee's this week. (Please change the website to reflect both of these issues).

## 2. Scope

Change `community.html` only. Add one temporary notice above the list of meetings. Nothing else on the page changes.

Do not touch:
- The two coffee cards (Thursday 1pm Starbucks, Wednesday 10:30am The Lucky Goat). They are the regular schedule and stay as they are.
- The Zoom card and the "few more in-person meetings" card.
- The Hometown Market card (separate ticket, blocked on Greg's answer).
- The `<meta description>` and `og:description` (they describe the regular schedule).
- Header, menu, footer, `styles.css`, `script.js`, any other page.

## 3. Wording (DRAFT for Greg to approve)

Built from Greg's own sentence. Do not add marketing copy.

> Due to scheduling issues, we are unable to hold either coffee meeting this week ([DATES]).

- `[DATES]` is an input from Nehal (for example "Wednesday and Thursday, November 4 and 5"). Without dates, "this week" goes stale. Using dates is a suggestion, not Greg's wording, so confirm it with him.
- Claude Code must not guess the dates. If `[DATES]` is still in the spec, stop and ask.

## 3b. Markup

Insert this block inside the second `<section>`, directly above the `<ul role="list">`, inside the `max-width:78rem` wrapper div. Colours and fonts already exist on the page. No new tokens.

```html
<!-- TEMPORARY (GB-577): coffee meetups cancelled this week. Remove when they resume. -->
<div style="max-width:46rem; margin:0 auto; padding:0 0 1rem;">
  <p style="margin:0; background:#F5ECDD; border:1px solid #E6DBC9; border-left:4px solid #E7B24D; border-radius:16px; padding:1rem 1.4rem; font-size:1.2rem; line-height:1.5; color:#2B2621;">...approved wording...</p>
</div>
```

The notice is plain text, not a link or button, so the 44px touch-target rule does not apply.

## 4. Rules (unchanged)

- Inline styles, Lexend Deca, existing palette only.
- Text must scale with the A / A+ control. Do not set fixed pixel font sizes.
- Header and menu are not edited, so header height does not change. Confirm in the diff that no header lines moved.
- Never POST to the live Formspree endpoint when testing.
- Build only. Do not commit.

## 5. Other pages

Search every `*.html` for: coffee, Starbucks, Lucky Goat, Zoom, meetup, Thursday, Wednesday. List the hits in the plan. Do not edit pages other than `community.html`; if another page needs the notice, say so in the plan and stop.

Known before planning: the current `index.html` has no mention of coffee meetings. In `community.html`, "Zoom" appears only in the planned-calls card (out of scope).

## 6. Acceptance checks

1. The notice shows above the five cards on `community.html` and nowhere else.
2. The two coffee cards, the Zoom card, the planned-meetings card and the Hometown Market card are byte-for-byte unchanged.
3. Checked at 1440, 1024, 640 and 390 px, at A and at A+: the notice wraps cleanly, no text is cut off, no new horizontal scroll. (A horizontal scroll at 640 px with A+ is a known open item; it must not get worse.)
4. No console errors. All existing links still work.
5. `git diff --stat` shows `community.html` only (plus this spec file).
6. The block carries the removal comment so it is easy to take out.

## 7. Removal

When the meetings resume, delete the commented block (one `div`). Raise as its own small change, or add a line to `docs/specs/OPEN-ITEMS.md` so it is not forgotten.

## 8. Open inputs

- `[DATES]` for the notice (Nehal).
- Greg's approval of the wording (Nehal sends the draft).
- Spec number: 22 is a suggestion that leaves 21 for the homepage video spec. Renumber if needed.
