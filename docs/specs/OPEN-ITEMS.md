# Open items

Client copy kept verbatim, flagged for the client or a decision-maker. Nothing here has been edited.

## Slice 1: legacy-demo.html

| # | Where | Item | Status |
|---|-------|------|--------|
| 1 | Hero, "Private spaces" tab lede | Copy says "weekly prompts". The app sends prompts daily (develop 4466a20). | Kept verbatim. Client to confirm. |
| 2 | Join band | "No Charge for 3 years". The app has a 30-day trial and no 3-year offer. Live terms say "currently free". Store/legal risk. | Kept verbatim. Decide before merge. Slice 8: the "No Charge for 3 years" wording on `join.html` is gone with the page; the copy that remains is on the home page and the demo. |
| 3 | Demo keyboard | Tabs work with Tab + Enter. No arrow-key navigation between tabs. | Low priority. Not changed. |
| 4 | Header strip | "A" / "A+" buttons (34px) and the phone link (36px) are under 44px. Copied unchanged from the existing research.html header. | Pre-existing, all pages. Slice 7: not changed (A/A+ still 34px, phone still 36px; Join, Menu and nav links stay 44px or more). (was: Pre-existing, all pages. Not changed.) |
| 5 | Header/footer | Join band and "Become a founding family" link to `index.html` (no `#founding`, `#how` yet). Switch in slices 2-3. | RESOLVED (slice 7): header Join now links `index.html#founding`, nav "How it works" links `index.html#how-it-works`. (was: Pending slices 2-3.) |
| 6 | Footer | Built from the client's legacy-demo footer: no Terms or Support link. | RESOLVED (slice 7): Terms of Use and Support added to the single-row footer (dev request). Phone kept, no email (client footer has none). (was: Per instruction.) |
| 7 | Spec 07 | Lists `privacy.html` among pages to edit. Legal pages must not be edited. | RESOLVED (slice 7): only header and footer changed; `<main>` of privacy, terms and support byte-identical (sha256 compared). (was: Needs revising before slice 7.) |

## Slice 2: index.html

| # | Where | Item | Status |
|---|-------|------|--------|
| 8 | Hero reassure list; dark "Be one of our first 100" band | "No Charge for 3 years" (hero, client copy) and "free for three years" (old founding band, kept until slice 3). Same store/legal risk as item 2. | Kept verbatim. Decide before merge. Slice 8: `join.html` ("free for three years") is deleted; the remaining occurrences are on the home page. |
| 9 | `assets/photo-grandmother.jpg`, `assets/photo-grandfather.jpg` | No photo consent or release on file. Each shows one adult, no children. | Confirm release before launch. |
| 10 | `assets/hero.jpg` | No longer referenced by any page after this slice. | File left in place. Delete if the client confirms. |
| 11 | Demo preview stats | 52 / 208 / 1,042 / 66 checked against the data in `legacy-demo.html`: 52 weeks, 208 exchanges, 1,042 messages, 66 stories. All match. | No action. |
| 12 | Hero badge and both hero CTAs | Link to `join.html` for now (client: `#founding`). | Switch in slice 3. |
| 13 | Heirloom flow arrows | The two client arrows are horizontal. When the cards stack on a phone the arrows sit between cards pointing sideways. No CSS added to rotate them. | Cosmetic. Decide whether to allow a media-query rule. |

## Slice 3: founding block and signup form

| # | Where | Item | Status |
|---|-------|------|--------|
| 14 | Hero badge, hero CTA | Now link to `#founding` (item 12 resolved). | Done. |
| 15 | Founding block (heading, offer box), hero reassure list | "No Charge for 3 years", then $14.95 a month or $149.95 a year, for up to 10 people. Conflicts with the app's 30-day trial and the live terms ("currently free"). Extends items 2 and 8. The old band's "free for three years" is gone. | Kept verbatim. Decide before merge. Slice 8: the old join form and its fields are gone with `join.html`; the founding block is the only signup. |
| 16 | Founding form | Posts to the client's live Formspree form (`xzdnwgpb`). Owner of the account, which email receives notifications, and a second recipient are unknown. | Client to confirm. |
| 17 | Founding form | Signups exist only in Formspree and an inbox. No export or spreadsheet copy. | Set up a regular export. |
| 18 | Founding form | No spam protection. Recommendation P1: a hidden `_gotcha` honeypot field. | Not added (off). Decide. |
| 19 | Founding form | Recommendation P2: one line "This form is for adults 18 and over." Also any SMS consent wording beside the phone field. Both are new copy. | Not added (off). Client/counsel decision. |
| 20 | Founding form | "First 100" has no cap. Everyone sees "you're on the founding list". | Kept verbatim. |
| 21 | Founding form | No confirmation email goes to the visitor. "We'll be in touch soon" needs a person watching the inbox. Check whether the Formspree plan offers an auto-reply. | Client to confirm. |
| 22 | Founding form footnote | Formspree receives names, phone numbers and emails. The footnote says "We don't share your details with anyone". Privacy Policy not edited. | Flag for the client. |
| 23 | Founding form | The old join form fields (first name, grandchildren, neighbourhood, states, feedback, why) are no longer collected. Exports change shape. | Noted. |
| 24 | `script.js` | Deliberate differences from the client script: Formspree's own error text is not shown (fixed fallback message only); after a failed send, focus returns to the submit button; a blank validation message keeps the alert hidden. | Deliberate. |
| 25 | `join.html` | Shares `#join-form` with the new block. Its failure label now reads "Count me in". Page is deleted in slice 8. | Accepted. Slice 8: RESOLVED. `join.html` is deleted, so `#join-form` exists only on the index founding block. |
| 26 | Footer | Footer "Join the first 100" still links to `join.html` (slice 7). The spec's expected grep (header only) was wrong. | RESOLVED (slice 7): footer "Join the founding 100" links `index.html#founding`; no footer links to `join.html`. (was: Pending slice 7.) |
| 27 | Founding steps | Step 2: "A parent says yes before a grandchild joins." The site has no mechanism for this yet. | Kept verbatim. Client to confirm. |

## Slice 4: research.html and ideas.html

| # | Where | Item | Status |
|---|-------|------|--------|
| 28 | `ideas.html` | Roadmap vote form removed (and its `script.js` call). Roadmap voting no longer exists; ideas now arrive by email (`greg@grandbabiez.com`) or at signup. README and CLAUDE.md still mention the vote form. | Update in slice 9. |
| 29 | `research.html`, "Grandparents" intro | "…with one important condition we're honest about below." The "Dose matters" caveat section it points to is removed (as in the client page), so the sentence points at nothing. The client page has the same sentence. | RESOLVED (slice 10): the section ("The one honest caveat / Dose matters — and that's the whole point.") is restored from git history (removed in 8f0933c, restored byte for byte from 8f0933c^) at the dev's request. The client's design removed it. Tell the client. (was: Kept verbatim. Client to confirm.) |
| 30 | `research.html`, `ideas.html` | Client SVGs kept as written. Fills outside the palette: research `#5F7A66`, `#8C5A38`, `#B5544A`, `#D8A87E`, `#EAC7A4`; ideas `#D8A87E`, `#EAC7A4`. | Left as is. Decide whether to recolour. |
| 31 | `ideas.html` credits | Real first names and places: Fatima (Lahore, Pakistan); Roseanne (Pinellas County); Mark (The Villages, FL); Cheryl (The Villages, FL); "In honor of Barbara & Dean"; "In honor of Rick, Scott, and all of the others"; "In honor of Raider, Mika, and Luka" (the huskies). | Not edited. Confirm the client has permission for each. |
| 32 | `research.html` closing buttons | Client links `index.html#how`, which does not exist on the home page. Used `index.html#how-it-works`. | Slice 7: nav links must use `#how-it-works`, not `#how`. |
| 33 | `research.html` closing button | "Join the first 100" (repo) became "Join our founding circle" (client), linking to `index.html#founding`. | Client copy. |
| 34 | `ideas.html` | Meta description keeps the repo's curly apostrophes; the client's uses straight ones. Same words. | Deliberate. |
| 35 | `ideas.html` pets photo | `assets/pets.jpg` and the client's embedded image are the same picture (460x585, no people), differently encoded. Repo file kept. | No action. |

## Slice 5: privacy.html

Client text ported character for character. Nothing below was edited to fix it. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). The rows and tables below describe the client text and no longer apply to the page.

| # | Where | Item | Status |
|---|-------|------|--------|
| 36 | Whole policy | 39 `[bracketed]` placeholders, 21 distinct, listed one per line in the table below. Every one is a launch blocker. | Kept verbatim. Client to supply. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 37 | 3.5 "To keep the Services safe and secure" and 5.4 "For legal reasons and to protect people" | "Investigate reports of inappropriate content and enforce our Terms of Service." and "to enforce our Terms of Service". The policy never says "Terms of Use". The Terms page is removed in slice 8, so these point at nothing on the site. | Kept verbatim. Client to confirm. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 38 | Part one, "Children's privacy" | "We extend the same protections to every Child in a family circle, including teens." Teens are named, while the client's parent notice speaks only of a child under 13. | Kept verbatim. Client to confirm. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 39 | Throughout | "weekly" appears 7 times ("a weekly moment", "weekly prompts"). The app sends prompts daily (see item 1). Slice 10: the restored caveat on `research.html` also says "about ten minutes a week", the same weekly-vs-daily question. | Kept verbatim. Client to confirm. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 40 | 2.1 vs 2.2/6.3 | The policy says an adult profile may include a "birthday" and, for a Child, an "Age range" (6.3). The client's parent notice says "their first name, age, and interests". "Age range" vs "age" is not the same promise. | Kept verbatim. Client to confirm which is right. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 41 | Full policy vs part one | "Grandbabiez, Inc." is named 5 times (full policy, 6.1) while the intro line and "How to reach us" use `[Grandbabiez legal entity name]`. | Kept verbatim. Client to confirm the legal name. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 42 | 2.1, 3.3 | "free-trial dates", "Start and end free trials". The home page offers "No Charge for 3 years" (items 2, 8, 15). | Kept verbatim. Decide before merge. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 43 | Footers on other pages | Footers still list "Terms of Use" (slice 7 and slice 8). | RESOLVED (slice 7): every footer now links Terms of Use (`terms.html`) and Support (`support.html`). Terms page is kept (D10), so item 37 is moot. (was: Pending.) SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 44 | Text not in the client | None of these appear in the client text: the 50-cent charge, "date of birth", "support@grandbabiez.com". | No action. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 45 | `privacy.html` SVG | Same illustration as research.html. Fills outside the palette, kept: `#8C5A38`, `#B5544A`, `#D8A87E`, `#EAC7A4`, `#5f7a66`. | Left as is. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 46 | Head | Title and description follow the client's wording with curly apostrophes; og:title and og:description updated to match. Body text keeps the client's mix of straight (`&#39;`) and curly apostrophes. | Deliberate. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 47 | Spec 07 | Item 7 above is now moot for `privacy.html`: legal pages are no longer off limits, but slice 7 still must not touch the policy text. | RESOLVED (slice 7): policy text untouched; spec 07 facts corrected (see items 61-62). (was: Revise spec 07.) SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |

### Placeholders, one per occurrence (launch blockers)

| # | Section | Placeholder | Status |
|---|---------|-------------|--------|
| 1 | Intro (effective date line) | `[Grandbabiez legal entity name]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 2 | Intro (effective date line) | `[company mailing address]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 3 | Who can see it | `[service providers to list]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 4 | How long we keep it | `[retention periods to confirm]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 5 | How to reach us | `[Grandbabiez legal entity name]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 6 | How to reach us | `[company mailing address]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 7 | 2.1 Grandparents, Family Members, and Circle Organizers | `[CONFIRM IMPLEMENTATION]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 8 | 2.1 Grandparents, Family Members, and Circle Organizers | `[PAYMENT PROCESSOR]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 9 | 4.2 How Family Content is processed | `[NAME AI PROVIDER(S)]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 10 | 4.2 How Family Content is processed | `[CONFIRM WITH VENDORS]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 11 | 4.3 Training | `[CONFIRM — or describe opt-in program]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 12 | 4.5 Turning AI features off | `[CONFIRM CONTROL EXISTS]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 13 | 5.2 With service providers | `[LIST SPECIFIC PROVIDERS OR LINK TO A LIST]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 14 | 6.1 Operator contact information | `[MAILING ADDRESS]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 15 | 6.1 Operator contact information | `[ZIP]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 16 | 6.1 Operator contact information | `[LIST ANY OTHER OPERATORS, OR STATE THAT NO OTHER OPERATORS COLLECT CHILDREN'S INFORMATION THROUGH THE SERVICES]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 17 | 6.2 How a Child joins | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 18 | 6.2 How a Child joins | `[CONSENT METHOD — e.g., small credit-card authorization, signed form, video call, or government ID check with immediate deletion]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 19 | 6.6 Retention of Children's information | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 20 | 8.5 Phone calls | `[CONFIRM]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 21 | 8.6 Email tracking | `[CONFIRM]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 22 | 9.2 Requests you can make to us | `[CONFIRM FORMAT]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 23 | 9.3 What happens when you delete your account | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 24 | 9.3 What happens when you delete your account | `[CONFIRM OPTION]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 25 | 11. Security | `[CONFIRM]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 26 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 27 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 28 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 29 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 30 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 31 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 32 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 33 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 34 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 35 | 12. Retention | `[X]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 36 | 13. Where information is stored | `[CONFIRM ALL PROVIDERS ARE U.S.-BASED]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 37 | 15. Changes to this policy | `[30]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 38 | 16. Contact us | `[MAILING ADDRESS]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |
| 39 | 16. Contact us | `[ZIP]` | Launch blocker. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c). |

Totals: 39 occurrences, 21 distinct. SUPERSEDED: privacy.html reverted to the pre-branch text (base 283af5c).

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
| 59 | Footer, slice 7 | The footer's "For parents" link must point to `parent-notice.html`, not `safety.html`. | RESOLVED (slice 7): "For parents" points to `parent-notice.html` in every footer. (was: Slice 7.) |
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

## Slice 7: shared header and footer

| # | Where | Item | Status |
|---|-------|------|--------|
| 61 | Spec 07 facts | Headers were NOT identical on all eight pages: `legacy-demo.html` had its own layout (nav inside the logo row, no Home or Legacy demo, no `aria-current`, Join to `index.html`). The spec's footer variants were two; there are three (full, parent-notice minimal, legacy-demo single row). Its retired-link grep omitted `safety.html`. | Corrected in slice 7. |
| 62 | Header, all pages | One header template on all eight pages: offer text in the strip, nav Home, How it works, Legacy demo, Research, Ideas, Privacy, button "Join the founding 100" to `index.html#founding`. Strip label is now the client's "Questions? Call a real person:" (was "Talk to a person:"). | Done. Confirm with the dev. |
| 63 | Footers | Full footer on index, research, ideas, privacy, terms, support (terms and support have no client page, so they take the full one). Minimal on parent-notice. Single row on legacy-demo. Explore list is the client's, with "Ideas & thanks". Footer links `support.html` (was `support`; `vercel.json` still rewrites `/support`). | Done. |
| 64 | Footer copyright | Full and single-row footers say "Grandbabiez, Inc."; the client's parent-notice footer says "Grandbabiez." Kept verbatim. The legal name is a placeholder in the policy (item 41). | Client to confirm. |
| 65 | Footer text | New client line "Grandbabiez(TM) — now inviting our first 100 founding families. Made in The Villages, Florida." The rest of the site says "Central Florida". | Kept verbatim. Client to confirm. |
| 66 | `legacy-demo.html` | The page has no `<body>` tag (`</head>` is followed by the skip link; `</body>` exists). Browsers insert one. | RESOLVED (slice 10): `<body>` added after `</head>`; `<main>` unchanged. (was: Not fixed (outside header and footer). Fix separately.) |
| 67 | Header height at 390x844 | Before slice 7 (index): 162px at A, 179px at A+. Naive new header: 246px (29.1%) at A, 324px (38.4%) at A+. After the `styles.css` block: 161px (19.1%) at A, 222px (26.3%) at A+. 768px (162/174) and 1440px (170/185) unchanged. legacy-demo was 246/324 before. | Done, measured in headless Chromium. |
| 68 | `styles.css` | One new `@media (max-width:30rem)` block, every selector starts at `header` (strip spacing and offer font size, logo row padding, Menu and Join sizing with the Join label allowed to wrap, `html{scroll-padding-top:3rem}`). Media queries use the browser's default font size, so A+ (root 20px) does not move the 30rem breakpoint; only `rem` values inside the block scale. | Done. |
| 69 | Anchors | `#how-it-works`, `#legacy-demo-preview`, `#founding` use `scroll-margin-top:9rem` (144px at A, 180px at A+). At 390px the header is taller, so `scroll-padding-top:3rem` (48px at A, 60px at A+) was added; headings land 18-31px below the header. At 1440px (no change allowed) the section edge sits 26px (A) and 4px (A+) under the header; headings stay fully visible because of section padding. | Done. |
| 70 | `legacy-demo.html` tab switch | The page script (`window.scrollTo` to `nav.tabs`, outside header/footer/main) puts the tab bar at the top of the window after a tab change from deep scroll, so it is fully hidden under the sticky header (161px at A, 222px at A+ at 390px; also at 1440px). Not caused by slice 7 (the old header was 246/324px there), and `scroll-padding` does not affect `scrollTo`. Story selection (`scrollIntoView`) is fine. | FIXED IN CODE (slice 10): the `scrollTo` line now subtracts `$("header").offsetHeight`, read at runtime. Visual check at 390/768/1440, A and A+ still to be done by hand. (was: Not fixed. Needs a one-line script change: subtract the header height.) |
| 71 | Keyboard order | At 1440px the Join button comes before the nav links in Tab order (DOM order, as before). | Pre-existing. Not changed. |

## Slice 8: retired pages and redirects

| # | Where | Item | Status |
|---|-------|------|--------|
| 72 | `vercel.json` redirect targets (D7) | Deleted `why`, `whats-coming`, `what-changes`, `trust` (each with and without `.html`) redirect 301 to `/`. `/join` and `/join.html` go to `/#founding`. `/safety` and `/safety.html` go to `/parent-notice.html` because `safety.html` was the "For parents" page. `/` was the alternative for `/safety`. | Owner to confirm all targets (D7). |
| 73 | `vercel.json` | The rules use `"statusCode": 301` (Vercel's `permanent:true` would send 308). The change is additive: `trailingSlash` and the `/support` rewrite are untouched. Tested locally against the rule set only. | Check real status codes, the `#founding` fragment and the `/support` rewrite in a Vercel preview. |
| 74 | Terms and Support | The client's design has no Terms or Support page. `terms.html` and `support.html` are kept and linked from every footer at the dev's request (D10). `privacy.html` is untouched. | Confirm with the client. |
| 75 | Outside the repo | Nothing in the repo or in `grandbabiez/docs` and `apps/mobile/src` links to the six deleted URLs. Not checkable from here: app store listings and review notes; the Formspree form (`xzdnwgpb`) redirect or thank-you setting; emails and onboarding messages; social profiles, QR codes and print; Google index and Search Console; partner or press links. | Dev to check. |
| 76 | `assets/join-photo.jpg` | Now unused (only `join.html` used it). `assets/hero.jpg` is also unused (item 10). Neither deleted. | Delete if the client confirms. |
| 77 | `README.md`, `CLAUDE.md` | Still list the six deleted pages (README file table, Join form line, missing-legal-pages line; CLAUDE.md known open items). `site.webmanifest` needed no change (no shortcuts, `start_url` or `scope`). | Update in slice 9. |

## Slice 10: dose caveat and final checks

| # | Where | Item | Status |
|---|-------|------|--------|
| 78 | `legacy-demo.html` demo script | Three lines differ from the client's script: the portrait template's `font-size:14px` is `.875rem`, and the two eyebrow `font-size:12px` are `.75rem`. Not logged before. (The scroll fix in item 70 is a fourth difference.) | Deliberate (rem scaling with A/A+). Logged. |
| 79 | Slice 10 gate | End-of-branch gate results (privacy and parent-notice text, terms and support `<main>`, deleted-page references, COPPA grep, placeholders, header and footer) are in the slice 10 report, not repeated here. | See report. |
| 80 | `parent-notice.html` vs `privacy.html` | The client's parent notice (client text, 8 `[bracketed]` placeholders, inert consent button) now sits next to the ORIGINAL privacy policy (`privacy.html` reverted to base 283af5c), so the two pages describe things differently: age vs date of birth, the consent method, the 50-cent charge, SMS and AI text. | Owner and dev to decide whether to revert `parent-notice.html` as well. |
| 81 | `legacy-demo.html` demo `<style>`, lines 124-125 | Issue #5. The `#demo .story-body` rule was truncated to `#demo .story-` and ran into `.legacy{...}`, so the browser read the selector `#demo .story- .legacy`. Expanded stories and Lighthouse Cat chapters lost padding, line height and paragraph breaks (`white-space:pre-line`); the "Kept for the heirloom" footer lost its flex layout and dashed border. Restored `#demo .story-body{...}` and `#demo .legacy{...}` on their own lines (client rules, px to rem, `--display` is Lexend Deca). Integrity check: no other rule damaged. Slice 1 and 10 checks missed it. | RESOLVED (this fix). |
