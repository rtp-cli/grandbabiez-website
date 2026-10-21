# Issue C: "Fatima" becomes "Fatimah" on the ideas page

**Issue:** #C. **Edits:** `ideas.html`, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `fix(ideas): correct credit spelling to Fatimah` with `Fixes #C` in the body.

## Scope rules
This is a deliberate edit to client copy, requested by the dev. It is the ONLY copy change allowed in this slice. Do not touch `privacy.html`, `terms.html` or `support.html`. Never POST to formspree.io. Do not commit.

## Do
1. Search every file in the repo (excluding `reference/`) for the word "Fatima" with word boundaries (not "Fatimah"), case-sensitive and case-insensitive: all html, `script.js`, `docs/`. List every hit with file and line.
2. Change only the person's credit text on `ideas.html` (the "Suggested by Fatima, Lahore, Pakistan" credit). If the name appears elsewhere as a different person or inside the fictional demo data, do not change it; report it.
3. Check `alt`, `aria-label`, meta and og text on `ideas.html` for the name.
4. In `docs/specs/OPEN-ITEMS.md`: update the credit list to "Fatimah", and log this as a deliberate deviation from the client's text, so the client can confirm the spelling.

## Verification
- `git diff --word-diff` on `ideas.html` shows exactly one word changed (plus nothing else).
- The page's text equals the previous text except that word.
- Report every other hit and what you did.

## Done when
The credit reads "Fatimah", the deviation is logged, and nothing else changed.
