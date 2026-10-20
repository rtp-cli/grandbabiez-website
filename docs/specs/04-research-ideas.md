# Slice 4: Research and Ideas

**Source:** `reference/.../research.html`, `ideas.html`. **Commit:** `feat(research,ideas): add illustrations, two-column studies, remove vote form`

## Research
- Add the new illustration at the top (decode from the client's data URI into `assets/`).
- Study cards: 2 columns instead of 3 (change the `repeat(auto-fit, minmax(...))` min width; keep the grid pattern).
- Remove the "Dose matters" section. The line that points to it stays (client says so): flag in OPEN-ITEMS (D6), do not edit.

## Ideas
- Add the new illustration at the top (`assets/`).
- Remove the "Which of these should we build first?" voting form and its Formspree placeholder (`YOUR-VOTE-FORM-ID`), plus any vote-handling code in `script.js`.
- Keep "Ideas & thanks" title wording; credits stay first name + town as in the client file.

## COPPA checks
- Removing the vote form removes a data-collection point: confirm no leftover `<form>`/inputs on either page.
- No third-party embeds introduced by the illustrations.

## Done when
Link check clean; research cards reflow at 390px / A+.
