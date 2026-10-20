# Slice 3: Founding pricing and signup form

**Source:** `reference/.../index.html` (form `#join-form`, pricing list). **Edits:** `index.html`, `script.js`. **Commit:** `feat(home): add founding pricing and founding-family signup form`

## Add
- Pricing: no charge for 3 years for founding families, then $14.95 a month or $149.95 a year (client wording).
- Signup form, anchor `id="founding"`: Name, Phone, Email, "Where do you live?" (The Villages, FL / Somewhere else). Posts to the existing live Formspree endpoint `https://formspree.io/f/xzdnwgpb` with the client's hidden fields (`_subject`, `signup_type`).
- Move the client's inline fetch handler into `script.js`, reusing the existing join-form handler if there is one (success message "Thank you - you're on the founding list" etc.). No inline `<script>`.
- Footnote: "We don't share your details with anyone. Privacy Policy." linking `privacy.html`.
- Switch slice 1's "Become a founding family" link to `index.html#founding`.

## Proposed additions (need your OK, D8)
- One line on the form: "This form is for adults 18 and over."
- If the team will text signups, SMS consent wording beside the phone field, linking Privacy section 8.7. Wording must come from the client or counsel; do not write it.

## COPPA checks
- Form collects only adult contact details; no child fields (no names, ages, birthdays of children).
- Privacy link is next to the form.
- No tracking pixels or third-party scripts added.

## Done when
Form submits and shows success at 390px / A+; inputs labelled; 44px tap targets; link check clean.
