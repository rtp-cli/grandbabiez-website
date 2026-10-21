# Issue #N: Update the contact phone number everywhere

**Issue:** #N (client request). **Owner decision recorded:** the number is replaced EVERYWHERE it appears, including the legal pages (`privacy.html`, `terms.html`, `support.html`) and `parent-notice.html`. This is an approved, narrow exception to "legal text is never edited": ONLY the phone number tokens change.
**Edits:** every page, `script.js`, `docs/specs/OPEN-ITEMS.md`.
**Commits (two, in this order):**
1. `fix: update the contact phone number` (everything except the three legal pages' `<main>`), with `Fixes #N` in the body
2. `fix(legal): update the contact phone number in legal pages` (the number tokens inside `privacy.html`, `terms.html`, `support.html`), so the dev can review the legal diff on its own

## The new number
The owner will give you the number as raw digits in any form (for example `3525551234`, `352-555-1234`, `+1 352 555 1234`).
- Display format, ALWAYS: `(XXX) XXX-XXXX`, with a space after the closing bracket and a hyphen before the last four digits.
- tel link format, ALWAYS: `tel:+1XXXXXXXXXX` (10 digits, no spaces or hyphens).
- If the digits given are 11 and start with 1, drop the leading 1. If you do not end up with exactly 10 digits, STOP and ask.
- Old number: `(352) 290-3530` / `tel:+13522903530`.
- Match the separators each existing occurrence already uses (plain space vs `&nbsp;`, plain hyphen vs `&#8209;`) so line wrapping does not change. Only the digits change.
- Echo back the formatted display and tel strings and wait for nothing: proceed, but print them first.

## Scope rules
README rules apply. This is the ONLY text change in this slice: replace phone-number tokens, nothing else. No wording, punctuation, styling or structure changes. Never POST to formspree.io. Do not commit. Do not edit `reference/`.

## Step 1: find every occurrence (read-only, report first)
Search the whole repo, excluding `reference/` and `.git/`. Match formats, not just the exact string: `352\D{0,3}290\D{0,3}3530`, `3522903530`, `290-3530`, entity and dash variants, and `tel:` forms. Search html, `script.js`, `styles.css`, `site.webmanifest`, `vercel.json`, `README.md`, `CLAUDE.md`, `docs/`. Report a table: file:line | text | kind. Classify each hit:
1. Site chrome: header strip, footer (all eight pages).
2. Page content: homepage, founding form footnote, parent-notice, legacy-demo footer, research, ideas.
3. Script text: the two founding-form error messages in `script.js`, and any `aria-label` or `title` containing the number.
4. Legal `<main>` content: `privacy.html`, `terms.html`, `support.html`.
5. Fictional demo data: phone-like numbers inside the legacy demo's data. Never change these.
6. Docs and notes: `README.md`, `CLAUDE.md`, `docs/`, specs.

## Do
1. Commit 1 changes: kinds 1, 2 and 3 (this includes `parent-notice.html`; log it as a deliberate deviation from the client's text).
2. Commit 2 changes: kind 4, the number tokens only.
3. Kind 5: never. Kind 6: report only; do not edit README, CLAUDE.md or specs, except adding the `OPEN-ITEMS.md` entries below.
4. `script.js`: change the number in both error messages only; `node --check script.js` must pass.
5. After the edit, check the header at 390, 768 and 1440 px, at A and A+: the header height must equal the earlier measurements (the OPEN-ITEMS table from the scroll-offset fix) and the dark strip must not wrap differently. If any height changes, STOP and report: the demo's scroll offsets are tuned to those heights.
6. Add to `OPEN-ITEMS.md`: date and source of the request, old and new number, the owner's approval to edit legal pages for this number only, and a reminder that the number must also be updated off-site (Formspree notification or auto-reply text, app store listings and support fields, email signatures, social profiles, Google business listing, printed material).

## Verification
- `git diff --word-diff` (both commits): only phone-number tokens changed (plus the `OPEN-ITEMS` rows). For the three legal pages prove the `<main>` text is identical to before except the number tokens, and that outside `<main>` nothing else changed.
- Re-run the search: zero old-number hits remain except kind 5 (demo data) and kind 6 (docs), each listed.
- For every `tel:` link, the visible digits equal the link digits (script it).
- Text equality before and after for each edited page, number tokens excluded; `parent-notice.html` equals the client's text except the number.
- Every displayed number matches `(XXX) XXX-XXXX`: grep for any other digit-group format of the new number and report.
- Link check clean; no console errors; `node --check script.js` passes.
- Header height unchanged at the widths above.
- `git status` shows only expected files, nothing staged.

## Done when
The new number appears everywhere it should in the required format, the old one remains only in listed demo data and docs, the header measurements are unchanged, the two commits are ready to make, and the off-site reminders are logged.
