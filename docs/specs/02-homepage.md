# Slice 2: Homepage content

**Source:** `reference/.../index.html`. **Edits:** `index.html`. **Commit:** `feat(home): new headline, how-it-works loop, heirloom and demo preview`

## Add (copy verbatim from client)
- New headline "Every story you trade becomes your legacy" and new intro; update `<title>` and meta description.
- "Two voices. One lasting legacy." section: conversations, milestones, stories kept as a digital heirloom.
- "How it works" as a 4-step weekly loop. Give the section `id="how-it-works"` (the new nav links to it in slice 7).
- "Simple on purpose" section.
- Whitaker demo preview: stats, a sample chat, a story card; links to `legacy-demo.html`.
- COPPA section for parents.
- New photos: `photo-grandmother.jpg`, `photo-grandfather.jpg` -> `assets/`.
- Secure point: add "Encrypted"; add the trademark symbol to the brand name where the client has it.

## Remove
- "A taste of it" phone screens with the 3 sample prompts.
- "Three things worth knowing" cards.
- "Arriving October 2026, starting here in Central Florida".
- The detailed under-13 and teen wording in the Safe point (replaced by the COPPA section).

## Do not touch
Header, footer, signup form and pricing (slices 3 and 7). Point any "join" CTA at `#founding` only once slice 3 adds it; until then keep the existing target.

## COPPA checks
- The demo preview chat and story card are static: no inputs, no data capture.
- Nothing on the page says or implies a child can sign up directly. Parent consent wording matches `parent-notice.html`.
- Photos are of adults only.

## Done when
Link check clean; 390px / A+ pass; no leftover references to removed sections.
