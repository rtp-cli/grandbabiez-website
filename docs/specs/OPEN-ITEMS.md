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

## Slice 4: research.html and ideas.html

| # | Where | Item | Status |
|---|-------|------|--------|
| 28 | `ideas.html` | Roadmap vote form removed (and its `script.js` call). Roadmap voting no longer exists; ideas now arrive by email (`greg@grandbabiez.com`) or at signup. README and CLAUDE.md still mention the vote form. | Update in slice 9. |
| 29 | `research.html`, "Grandparents" intro | "…with one important condition we're honest about below." The "Dose matters" caveat section it points to is removed (as in the client page), so the sentence points at nothing. The client page has the same sentence. | Kept verbatim. Client to confirm. |
| 30 | `research.html`, `ideas.html` | Client SVGs kept as written. Fills outside the palette: research `#5F7A66`, `#8C5A38`, `#B5544A`, `#D8A87E`, `#EAC7A4`; ideas `#D8A87E`, `#EAC7A4`. | Left as is. Decide whether to recolour. |
| 31 | `ideas.html` credits | Real first names and places: Fatima (Lahore, Pakistan); Roseanne (Pinellas County); Mark (The Villages, FL); Cheryl (The Villages, FL); "In honor of Barbara & Dean"; "In honor of Rick, Scott, and all of the others"; "In honor of Raider, Mika, and Luka" (the huskies). | Not edited. Confirm the client has permission for each. |
| 32 | `research.html` closing buttons | Client links `index.html#how`, which does not exist on the home page. Used `index.html#how-it-works`. | Slice 7: nav links must use `#how-it-works`, not `#how`. |
| 33 | `research.html` closing button | "Join the first 100" (repo) became "Join our founding circle" (client), linking to `index.html#founding`. | Client copy. |
| 34 | `ideas.html` | Meta description keeps the repo's curly apostrophes; the client's uses straight ones. Same words. | Deliberate. |
| 35 | `ideas.html` pets photo | `assets/pets.jpg` and the client's embedded image are the same picture (460x585, no people), differently encoded. Repo file kept. | No action. |

## Slice 5: privacy.html

Client text ported character for character. Nothing below was edited to fix it.

| # | Where | Item | Status |
|---|-------|------|--------|
| 36 | Whole policy | 39 `[bracketed]` placeholders, 21 distinct, listed one per line in the table below. Every one is a launch blocker. | Kept verbatim. Client to supply. |
| 37 | 3.5 "To keep the Services safe and secure" and 5.4 "For legal reasons and to protect people" | "Investigate reports of inappropriate content and enforce our Terms of Service." and "to enforce our Terms of Service". The policy never says "Terms of Use". The Terms page is removed in slice 8, so these point at nothing on the site. | Kept verbatim. Client to confirm. |
| 38 | Part one, "Children's privacy" | "We extend the same protections to every Child in a family circle, including teens." Teens are named, while the client's parent notice speaks only of a child under 13. | Kept verbatim. Client to confirm. |
| 39 | Throughout | "weekly" appears 7 times ("a weekly moment", "weekly prompts"). The app sends prompts daily (see item 1). | Kept verbatim. Client to confirm. |
| 40 | 2.1 vs 2.2/6.3 | The policy says an adult profile may include a "birthday" and, for a Child, an "Age range" (6.3). The client's parent notice says "their first name, age, and interests". "Age range" vs "age" is not the same promise. | Kept verbatim. Client to confirm which is right. |
| 41 | Full policy vs part one | "Grandbabiez, Inc." is named 5 times (full policy, 6.1) while the intro line and "How to reach us" use `[Grandbabiez legal entity name]`. | Kept verbatim. Client to confirm the legal name. |
| 42 | 2.1, 3.3 | "free-trial dates", "Start and end free trials". The home page offers "No Charge for 3 years" (items 2, 8, 15). | Kept verbatim. Decide before merge. |
| 43 | Footers on other pages | Footers still list "Terms of Use" (slice 7 and slice 8). | Pending. |
| 44 | Text not in the client | None of these appear in the client text: the 50-cent charge, "date of birth", "support@grandbabiez.com". | No action. |
| 45 | `privacy.html` SVG | Same illustration as research.html. Fills outside the palette, kept: `#8C5A38`, `#B5544A`, `#D8A87E`, `#EAC7A4`, `#5f7a66`. | Left as is. |
| 46 | Head | Title and description follow the client's wording with curly apostrophes; og:title and og:description updated to match. Body text keeps the client's mix of straight (`&#39;`) and curly apostrophes. | Deliberate. |
| 47 | Spec 07 | Item 7 above is now moot for `privacy.html`: legal pages are no longer off limits, but slice 7 still must not touch the policy text. | Revise spec 07. |

### Placeholders, one per occurrence (launch blockers)

| # | Section | Placeholder | Status |
|---|---------|-------------|--------|
| 1 | Intro (effective date line) | `[Grandbabiez legal entity name]` | Launch blocker. |
| 2 | Intro (effective date line) | `[company mailing address]` | Launch blocker. |
| 3 | Who can see it | `[service providers to list]` | Launch blocker. |
| 4 | How long we keep it | `[retention periods to confirm]` | Launch blocker. |
| 5 | How to reach us | `[Grandbabiez legal entity name]` | Launch blocker. |
| 6 | How to reach us | `[company mailing address]` | Launch blocker. |
| 7 | 2.1 Grandparents, Family Members, and Circle Organizers | `[CONFIRM IMPLEMENTATION]` | Launch blocker. |
| 8 | 2.1 Grandparents, Family Members, and Circle Organizers | `[PAYMENT PROCESSOR]` | Launch blocker. |
| 9 | 4.2 How Family Content is processed | `[NAME AI PROVIDER(S)]` | Launch blocker. |
| 10 | 4.2 How Family Content is processed | `[CONFIRM WITH VENDORS]` | Launch blocker. |
| 11 | 4.3 Training | `[CONFIRM — or describe opt-in program]` | Launch blocker. |
| 12 | 4.5 Turning AI features off | `[CONFIRM CONTROL EXISTS]` | Launch blocker. |
| 13 | 5.2 With service providers | `[LIST SPECIFIC PROVIDERS OR LINK TO A LIST]` | Launch blocker. |
| 14 | 6.1 Operator contact information | `[MAILING ADDRESS]` | Launch blocker. |
| 15 | 6.1 Operator contact information | `[ZIP]` | Launch blocker. |
| 16 | 6.1 Operator contact information | `[LIST ANY OTHER OPERATORS, OR STATE THAT NO OTHER OPERATORS COLLECT CHILDREN'S INFORMATION THROUGH THE SERVICES]` | Launch blocker. |
| 17 | 6.2 How a Child joins | `[X]` | Launch blocker. |
| 18 | 6.2 How a Child joins | `[CONSENT METHOD — e.g., small credit-card authorization, signed form, video call, or government ID check with immediate deletion]` | Launch blocker. |
| 19 | 6.6 Retention of Children's information | `[X]` | Launch blocker. |
| 20 | 8.5 Phone calls | `[CONFIRM]` | Launch blocker. |
| 21 | 8.6 Email tracking | `[CONFIRM]` | Launch blocker. |
| 22 | 9.2 Requests you can make to us | `[CONFIRM FORMAT]` | Launch blocker. |
| 23 | 9.3 What happens when you delete your account | `[X]` | Launch blocker. |
| 24 | 9.3 What happens when you delete your account | `[CONFIRM OPTION]` | Launch blocker. |
| 25 | 11. Security | `[CONFIRM]` | Launch blocker. |
| 26 | 12. Retention | `[X]` | Launch blocker. |
| 27 | 12. Retention | `[X]` | Launch blocker. |
| 28 | 12. Retention | `[X]` | Launch blocker. |
| 29 | 12. Retention | `[X]` | Launch blocker. |
| 30 | 12. Retention | `[X]` | Launch blocker. |
| 31 | 12. Retention | `[X]` | Launch blocker. |
| 32 | 12. Retention | `[X]` | Launch blocker. |
| 33 | 12. Retention | `[X]` | Launch blocker. |
| 34 | 12. Retention | `[X]` | Launch blocker. |
| 35 | 12. Retention | `[X]` | Launch blocker. |
| 36 | 13. Where information is stored | `[CONFIRM ALL PROVIDERS ARE U.S.-BASED]` | Launch blocker. |
| 37 | 15. Changes to this policy | `[30]` | Launch blocker. |
| 38 | 16. Contact us | `[MAILING ADDRESS]` | Launch blocker. |
| 39 | 16. Contact us | `[ZIP]` | Launch blocker. |

Totals: 39 occurrences, 21 distinct.

## Slice 6: parent-notice.html

Client note ported word for word. Nothing below was edited to fix it.

| # | Where | Item | Status |
|---|-------|------|--------|
| 48 | "How to give your consent" | The page cannot collect consent. The client's button points at the literal text `[consent link]`, so it is rendered inert: `disabled`, `aria-disabled="true"`, muted colours, no link, not reachable by Tab. Label "Review & give consent" is unchanged. Step 1 still says "Tap the button below (or call us)". | Launch blocker. Client to supply the consent mechanism and link. |
| 49 | Whole page | 8 `[bracketed]` placeholders in the text, 6 distinct (table below), plus the `[consent link]` href that is not shipped. All are launch blockers. | Kept verbatim. Client to supply. |
| 50 | Note vs policy: age | Note: "their first name, age, and interests". Policy 6.3 and its table: "an age range, used only to choose age-appropriate prompts" / "Age range". Policy part one repeats the note's wording ("first name, age, and interests"). | Kept verbatim. Client to confirm which. |
| 51 | "What Grandbabiez is" | "Once a week, a friendly question arrives" and "weekly moment". The app sends prompts daily (items 1, 39). | Kept verbatim. Client to confirm. |
| 52 | "How we'd use it" | "…except with the trusted providers who help us run the service securely and on our instructions." No provider is named. Policy 5.2 has `[LIST SPECIFIC PROVIDERS OR LINK TO A LIST]`. The note has no separate consent line for disclosure to third parties. | Kept verbatim. For counsel. |
| 53 | "do nothing" paragraph | "If we don't hear from you within a reasonable time, we'll delete your contact information". No retention period. Policy has `[X]` and `[30]`. | Kept verbatim. For counsel. |
| 54 | Intro | "Because your child is under 13…" while the policy applies its protections to "every Child … including teens". | Kept verbatim. Client to confirm. |
| 55 | Step 1 | Verification is `[We'll verify this using our chosen method…]`; policy 6.2 has `[CONSENT METHOD — …]`. The note offers phone consent, the policy never describes it. | Kept verbatim. Client to confirm. |
| 56 | Step circles | Client weight 700 on the numbers; the repo maximum is 600, so they use 600. Only styling changed. | Deliberate. |
| 57 | Page top | The client's centred logo link is not added. The repo header already has the logo, so the page opens with the illustration. | Deliberate. |
| 58 | `parent-notice.html` SVG | Same illustration as ideas.html. Fills outside the palette, kept: `#D8A87E`, `#EAC7A4`. | Left as is. |
| 59 | Footer, slice 7 | The footer's "For parents" link must point to `parent-notice.html`, not `safety.html`. | Slice 7. |
| 60 | Head | Title "A note for parents — Grandbabiez" and the client's description with curly apostrophes; og tags match. | Deliberate. |

### Placeholders, one per occurrence (launch blockers)

| # | Section | Placeholder |
|---|---------|-------------|
| 1 | h1 | `[child’s first name]` |
| 2 | Intro lead | `[Grandparent’s name]` |
| 3 | Intro lead | `[child’s first name]` |
| 4 | Intro second paragraph | `[grandparent’s name]` |
| 5 | Step 1 | `[child’s first name]` |
| 6 | Step 1 | `[We’ll verify this using our chosen method — for example, a quick step with a trained member of our team by phone or video.]` |
| 7 | Questions? | `[Grandbabiez legal entity name]` |
| 8 | Questions? | `[company mailing address]` |

Totals: 8 occurrences, 6 distinct. Not shipped: `href="[consent link]"`.
