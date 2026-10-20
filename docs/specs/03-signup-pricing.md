# Slice 3: Founding block, pricing and signup form

**Source:** `reference/index.html`, the "Founding families · the first 100" block (about lines 257-315: offer box, three steps, form, confirmation) plus the footnote under the form.
**Edits:** `index.html`, `script.js`, `legacy-demo.html` (two links only), `docs/specs/OPEN-ITEMS.md`.
**Commit:** `feat(home): add founding pricing and founding-family signup form`

## Scope rules (override anything else)
- Do NOT edit `privacy.html` or `terms.html`. Do not link to `terms.html` or `support.html`.
- Port client copy verbatim. No summarizing, shortening, rewording or new copy.
- Repo styling only: inline styles, Lexend Deca, existing palette and hover classes. Do not copy client classes (`.field`, `.two-up`, `.thanks`, `.form-error`, `.btn`) or any `<style>`.
- Header and footer are NOT in this slice (slice 7). Do not touch `styles.css` unless a hover class truly cannot be reused; if so, say why first.

## 1. Replace the old founding band in index.html
- Slice 2 left the old dark "Be one of our first 100" band in place. Replace it with the client's founding block, in the client's order: eyebrow, heading, intro paragraph, offer box (pricing), the three steps, the form, the confirmation.
- Pricing text comes verbatim from the client's offer box: no charge for 3 years for founding families, then $14.95 a month or $149.95 a year. Copy figures and wording exactly; do not recompute or reformat.
- Give the section `id="founding"`.

## 2. Re-point links (index.html and legacy-demo.html)
- In `index.html`, change every link that slice 2 pointed at `join.html` (hero badge, hero CTA, any band CTA) to `#founding`.
- In `legacy-demo.html`, change "Become a founding family" to `index.html#founding`. No other edits to that file.
- Do NOT touch the header "Join" button or the footer: they change in slice 7. `join.html` stays in the repo until slice 8.
- After this slice, `grep -n "join.html" index.html legacy-demo.html` should show only the header Join button.

## 3. The form (verbatim from client)
Markup, in this order:
- `<form id="join-form" action="https://formspree.io/f/xzdnwgpb" method="POST" novalidate>`
- hidden `_subject` = "Grandbabiez — founding family (first 100) sign-up"
- hidden `signup_type` = "Founding 100 early adopter"
- h3 "Count me in as a founding family"
- Name (`name`, text, autocomplete=name, required), Phone number (`phone`, tel, autocomplete=tel, required), Email (`email`, email, autocomplete=email, required)
- "Where do you live?" (`where_live`): Choose one / The Villages, FL / Somewhere else
- Submit button "Count me in"
- error paragraph (role="alert", hidden), footnote: "We don't share your details with anyone. Privacy Policy. Rather talk? Call (352) 290-3530." (Privacy Policy -> `privacy.html`, phone -> `tel:+13522903530`)
- confirmation block (role="status", tabindex="-1", hidden): heading "Thank you — you're on the founding list." and its paragraph, verbatim.

Do NOT change the endpoint, field names, hidden values or any wording. Do not add fields.

Styling: copy input, label, select and button inline styles from the existing form in `join.html` (it is deleted in slice 8, so copy now). Requirements: visible `<label for>` on every field, inputs at least 16px so iOS does not zoom, 44px minimum tap targets, focus ring visible, readable at A+ and 390px.

## 4. script.js
- Reuse the existing `ajax()` helper. Replace the old `ajax('join-form', ...)` call so it works with the new markup (ids `name`, `phone`, `email`, and the new confirmation and error elements). Adapt the new markup's ids to the helper where possible, rather than rewriting the helper.
- Validation, matching the client's behaviour: name and phone must be non-empty (focus the empty field, no message); email must be non-empty and pass `checkValidity()`, otherwise show "Please enter your email address." and focus it.
- Button label while sending: "Sending…"; restore "Count me in" on failure.
- Success: hide the form, show the confirmation, focus it.
- Error messages, verbatim from the client script: the server-error fallback "Something went wrong. Please call (352) 290-3530 and we'll add you ourselves." and the network-error "We couldn't reach the server. Please call (352) 290-3530 and we'll add you ourselves." Use the typographic apostrophes the client used.
- Leave the `vote-form` call alone (slice 4 removes it). Everything else in the file stays identical.
- No inline `<script>` in `index.html`. The new code must be a no-op on pages without `#join-form`.

## 5. Proposals (OFF by default. Include only if the owner says yes)
- P1 Honeypot: a hidden `_gotcha` input (off-screen, `tabindex="-1"`, `autocomplete="off"`, `aria-hidden` wrapper) to catch spam bots. Invisible, but it is not client markup.
- P2 One line on the form: "This form is for adults 18 and over." This is new copy.
Do not add either unless told. List both in OPEN-ITEMS as recommendations.

## 6. Do NOT test against the live endpoint
The endpoint is the client's live Formspree form. Do not submit to it. To test:
- Failure path: block the request (devtools offline or request blocking) and check the error message and button reset.
- Success path: stub `fetch` to return `{ok:true}` in the console, or use a temporary local override that is never saved.
- Confirm no test submission arrived by asking the owner to check the Formspree inbox if anything was sent by accident.

## 7. COPPA and privacy checks
- Form collects only adult contact details: name, phone, email, city/area. No child's name, age, birthday or photo anywhere in the block.
- Privacy Policy link sits directly under the form.
- No new third-party scripts, hosts, trackers, CAPTCHA or embeds. The only network call is the existing Formspree POST.
- grep the new block: `localStorage|sessionStorage|document.cookie|sendBeacon|postMessage|<iframe|https?://` expect only the Formspree action URL and the existing Lexend link in the head.
- Nothing in the block implies a child can sign up.

## 8. Log in docs/specs/OPEN-ITEMS.md
- Formspree account: who owns it, which email gets notifications, a second recipient.
- Signups only live in Formspree and an inbox: set up a regular export or spreadsheet copy.
- No spam protection: honeypot recommended (P1).
- "First 100" has no cap in the form; the confirmation says "you're on the founding list" to everyone.
- No confirmation email goes to the visitor; "We'll be in touch soon" needs a person watching the inbox. Check whether the plan offers an automatic reply.
- Formspree is a service provider that receives names, phone numbers and emails, and the footnote says details are not shared with anyone. Flag for the client; privacy policy not edited.
- Adults-only line (P2) and any SMS consent wording: client/counsel decision.
- Old join form fields (first name, grandkids, neighbourhood, states, why) are no longer collected: exports will change shape.
- "No Charge for 3 years" now appears in the hero and the pricing block; already logged as conflicting with the 30-day trial and "currently free" wording.

## Verification
- `git status`: only `index.html`, `script.js`, `legacy-demo.html`, `OPEN-ITEMS.md`.
- Verbatim diff: every heading, paragraph, label, option, button, placeholder, aria-label and message in the client's founding block (and the two script messages) appears word for word in the repo.
- Link check from README: clean apart from known baseline noise; `#founding` resolves.
- 390px, default and A+: form usable, no horizontal scroll, error and confirmation visible and focused.
- Keyboard: Tab through every field, submit with Enter, focus lands on the error or confirmation.

## Done when
The founding block matches the client's copy exactly, every CTA reaches `#founding`, the form works with the stubbed success and failure paths, and nothing outside the four listed files has changed.