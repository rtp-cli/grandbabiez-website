# Spec 25: Community page, event types marked "Coming soon"

- Ticket: GB-581 (Notion, Epic 17: Website Changes and Enhancements)
- Issue: #__ (create the GitHub issue, then fill in)
- Branch: `<type>/<issue#>-community-coming-soon` (branch from an up-to-date `main`)
- Status: DRAFT. The wording is a draft for Greg to approve.
- Replaces: the temporary notices from spec 22 (GB-577) and spec 23 (GB-576), both already merged.

## 1. Request

From the client meeting, after the client saw the Community page. The client is not sure of the dates, and locations are still open. Meeting notes:

> Update the community area section on the website to display Coming Soon instead of specific dates.

The dev side suggested marking events as coming soon or greyed out. The page should show that events are not happening this week, not set dates that may change.

Decision (Nehal, Nov 3): keep showing what kinds of events could take place, so visitors know what is planned. Mark each one "Coming soon". Do not mention dates, times or locations.

## 2. Scope

Change `community.html` only.

Do not touch: header, menu, footer, `styles.css`, `script.js`, `vercel.json`, any other page, `docs/specs/OPEN-ITEMS.md`.

## 3. Wording (DRAFT for Greg to approve; he can correct the terms)

Three cards, in this order:

1. Coffee meetup: Coming soon
2. Zoom call: Coming soon
3. Market visit: Coming soon

Keep word for word:
- The page heading "Community".
- The closing paragraph: "Please join for as many or as few as you wish.  We are happy to help with any problems or issues and/or hear your success stories!"

Meta description and `og:description` (both currently describe Thursday at Starbucks). Draft:

> Coffee meetups, Zoom calls and market visits: coming soon.

Do not add any other copy. Do not name a day, a time, a venue or a map link.

## 4. What changes on `community.html`

Read the page first; its current state includes the two merged notices.

1. Remove the temporary coffee notice block (the `div` with the comment `TEMPORARY (GB-577)`).
2. Remove the Hometown Market sentence (the `span` with the comment `TEMPORARY (GB-576)`).
3. Replace the five cards in the list with the three cards above. Remove the Starbucks card, the Lucky Goat card, the "few more in-person weekly meetings" card, and the three map links (Starbucks, Lucky Goat, Hometown Market).
4. Style: use the dashed "planned" card style the page already has (transparent background, `1.5px dashed #E6DBC9` border, `#6B6259` text, `1.1rem`, the same icon tile). Reuse the inline SVG icons already on the page: the coffee cup for coffee meetup, the monitor for Zoom call, the market stall for market visit. Keep the icon style of the existing dashed cards.
5. Update the meta description and `og:description` (section 3).

The list keeps its `role="list"` and the page keeps its current layout and spacing.

## 5. Rules (unchanged)

- Inline styles, Lexend Deca, existing palette only. No new colours or font sizes.
- Text scales with the A / A+ control.
- The cards are not links, so the 44px touch-target rule does not apply to them.
- Header and menu are not edited. Confirm in the diff that no header lines moved.
- Never POST to the live Formspree endpoint when testing.
- Build only. Do not commit.

## 6. Other pages

Search every `*.html` for: Starbucks, Lucky Goat, Thursday, Wednesday, Hometown, Brownwood, coffee, Zoom, meetup. List the hits in the plan. Do not edit pages other than `community.html`.

Known: the current homepage (GB-578, not merged yet) says "Join our coffee meetups in The Villages and our weekly Zoom calls". That is out of scope here; it is aligned with Greg's answer later.

## 7. Acceptance checks

1. The Community page shows three cards: Coffee meetup, Zoom call, Market visit, each marked Coming soon, then the closing paragraph.
2. The page has no day, date, time, venue name or map link. The page source has no Starbucks, Lucky Goat, Hometown, Brownwood, Thursday or Wednesday.
3. Both `TEMPORARY` comments and their content are gone.
4. Meta description and `og:description` use the draft in section 3.
5. Checked at 1440, 1024, 640 and 390 px, at A and A+: cards wrap cleanly, nothing cut off, no new horizontal scroll (the known 640 px A+ scroll must not get worse). Header height identical before and after.
6. No console errors. `git diff --stat` shows `community.html` only (plus this spec).

## 8. Open items

- Greg approves the wording, and corrects the terms if "meetup", "visit" or "Zoom call" is not how he would say it.
- When the Google Calendar ticket ships, these cards are replaced by the calendar events, and "Coming soon" stays as the empty state.
- The removal reminders for GB-576 and GB-577 are no longer needed. This spec removes both notices.
