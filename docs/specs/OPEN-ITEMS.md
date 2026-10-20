# Open items

Client copy kept verbatim, flagged for the client or a decision-maker. Nothing here has been edited.

## Slice 1: legacy-demo.html

| # | Where | Item | Status |
|---|-------|------|--------|
| 1 | Hero, "Private spaces" tab lede | Copy says "weekly prompts". The app sends prompts daily (develop 4466a20). | Kept verbatim. Client to confirm. |
| 2 | Join band | "No Charge for 3 years". The app has a 30-day trial and no 3-year offer. Live terms say "currently free". Store/legal risk. | Kept verbatim. Decide before merge. |
| 3 | Demo keyboard | Tabs work with Tab + Enter. No arrow-key navigation between tabs. | Low priority. Not changed. |
| 4 | Header strip | "A" / "A+" buttons (34px) and the phone link (36px) are under 44px. Copied unchanged from the existing research.html header. | Pre-existing, all pages. Not changed. |
| 5 | Header/footer | Join band and "Become a founding family" link to `index.html` (no `#founding`, `#how` yet). Switch in slices 2-3. | Pending slices 2-3. |
| 6 | Footer | Built from the client's legacy-demo footer: no Terms or Support link. | Per instruction. |
| 7 | Spec 07 | Lists `privacy.html` among pages to edit. Legal pages must not be edited. | Needs revising before slice 7. |

## Slice 2: index.html

| # | Where | Item | Status |
|---|-------|------|--------|
| 8 | Hero reassure list; dark "Be one of our first 100" band | "No Charge for 3 years" (hero, client copy) and "free for three years" (old founding band, kept until slice 3). Same store/legal risk as item 2. | Kept verbatim. Decide before merge. |
| 9 | `assets/photo-grandmother.jpg`, `assets/photo-grandfather.jpg` | No photo consent or release on file. Each shows one adult, no children. | Confirm release before launch. |
| 10 | `assets/hero.jpg` | No longer referenced by any page after this slice. | File left in place. Delete if the client confirms. |
| 11 | Demo preview stats | 52 / 208 / 1,042 / 66 checked against the data in `legacy-demo.html`: 52 weeks, 208 exchanges, 1,042 messages, 66 stories. All match. | No action. |
| 12 | Hero badge and both hero CTAs | Link to `join.html` for now (client: `#founding`). | Switch in slice 3. |
| 13 | Heirloom flow arrows | The two client arrows are horizontal. When the cards stack on a phone the arrows sit between cards pointing sideways. No CSS added to rotate them. | Cosmetic. Decide whether to allow a media-query rule. |

## Slice 3: founding block and signup form

| # | Where | Item | Status |
|---|-------|------|--------|
| 14 | Hero badge, hero CTA | Now link to `#founding` (item 12 resolved). | Done. |
| 15 | Founding block (heading, offer box), hero reassure list | "No Charge for 3 years", then $14.95 a month or $149.95 a year, for up to 10 people. Conflicts with the app's 30-day trial and the live terms ("currently free"). Extends items 2 and 8. The old band's "free for three years" is gone. | Kept verbatim. Decide before merge. |
| 16 | Founding form | Posts to the client's live Formspree form (`xzdnwgpb`). Owner of the account, which email receives notifications, and a second recipient are unknown. | Client to confirm. |
| 17 | Founding form | Signups exist only in Formspree and an inbox. No export or spreadsheet copy. | Set up a regular export. |
| 18 | Founding form | No spam protection. Recommendation P1: a hidden `_gotcha` honeypot field. | Not added (off). Decide. |
| 19 | Founding form | Recommendation P2: one line "This form is for adults 18 and over." Also any SMS consent wording beside the phone field. Both are new copy. | Not added (off). Client/counsel decision. |
| 20 | Founding form | "First 100" has no cap. Everyone sees "you're on the founding list". | Kept verbatim. |
| 21 | Founding form | No confirmation email goes to the visitor. "We'll be in touch soon" needs a person watching the inbox. Check whether the Formspree plan offers an auto-reply. | Client to confirm. |
| 22 | Founding form footnote | Formspree receives names, phone numbers and emails. The footnote says "We don't share your details with anyone". Privacy Policy not edited. | Flag for the client. |
| 23 | Founding form | The old join form fields (first name, grandchildren, neighbourhood, states, feedback, why) are no longer collected. Exports change shape. | Noted. |
| 24 | `script.js` | Deliberate differences from the client script: Formspree's own error text is not shown (fixed fallback message only); after a failed send, focus returns to the submit button; a blank validation message keeps the alert hidden. | Deliberate. |
| 25 | `join.html` | Shares `#join-form` with the new block. Its failure label now reads "Count me in". Page is deleted in slice 8. | Accepted. |
| 26 | Footer | Footer "Join the first 100" still links to `join.html` (slice 7). The spec's expected grep (header only) was wrong. | Pending slice 7. |
| 27 | Founding steps | Step 2: "A parent says yes before a grandchild joins." The site has no mechanism for this yet. | Kept verbatim. Client to confirm. |
