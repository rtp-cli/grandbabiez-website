# Slice 6: Parent notice

**Source:** `reference/parent-notice.html`: the `<main>` content (about 6.8 KB), title and meta description.
**Edits:** `parent-notice.html`, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `feat(parent-notice): rewrite as direct note with three-step consent`

## Scope rules
- Copy and paste job. Port the client's wording word for word, including every `[bracketed]` placeholder. Do not fill, reword, shorten, reorder or add anything. Move it, never improve it.
- Repo styling only. Do not copy client classes (`.notice`, `.consent-box`, `.steps-check`, `.btn`, `.lead`, `.eyebrow`) or any `<style>`.
- Header and footer are NOT in this slice (slice 7).
- Do not add links to `terms.html` or `support.html`.

## Facts found in the client file (verify each)
- The client page has no site nav and a minimal footer. Its `<main>` holds a centred logo, an inline SVG (child watching a video from a grandparent; `aria-label` "A grandchild smiling at a video from a grandparent on a phone"), then the note.
- The note: eyebrow "A note for parents"; h1 "Before [child's first name] joins your family's circle."; a lead and one more paragraph; h2 "What Grandbabiez is"; h2 "What we'd collect from your child" (two items); h2 "How we'd use it"; h2 "Your consent is required — and you stay in control" (four items, then the Privacy Policy link); h2 "How to give your consent" with a boxed three-step list and the button "Review & give consent"; the "do nothing" paragraph; h2 "Questions?" with phone, greg@grandbabiez.com and "[Grandbabiez legal entity name], [company mailing address]".
- The button's href in the client file is the literal text `[consent link]`.
- Placeholders: `[child's first name]`, `[Grandparent's name]`, `[We'll verify this using our chosen method — for example, a quick step with a trained member of our team by phone or video.]`, `[consent link]`, `[Grandbabiez legal entity name]`, `[company mailing address]`.

## Do
1. Replace the whole `<main>` content with the client's, in the client's order. Remove everything the client does not have: "Why this page exists", "The note, in full" box, "What happens next", "The rest of the detail", "Questions before you decide?" call box and its `mailto:support@grandbabiez.com`.
2. Illustration: copy the client's inline SVG verbatim, centred, max width 340px. Log any off-palette fills.
3. The client's centred logo link duplicates the repo header's logo. Do not add it; list it as decision D9.
4. Boxed consent steps: white card, 1px hairline border, 6px clay top border, about 22px radius, centred; numbered circles in honey, weight 600. Copy patterns from existing cards.
5. Update `<title>`, meta description (typographic apostrophes), og tags and canonical.

## The consent button
- Keep the client's label "Review & give consent" exactly.
- Do not ship `href="[consent link]"`: it would be a broken relative link.
- Render it as an inert button: no `href`, `aria-disabled="true"`, visibly muted using palette values, not focusable, no hover effect. Add no visible text of your own.
- Log in OPEN-ITEMS that the page cannot collect consent until the client supplies the mechanism and link.

## Compare and log (do not edit)
- The note says "first name, age, and interests"; the client's policy (slice 5) says "age range". Quote both.
- "Once a week" versus daily prompts (already logged for the demo).
- The note says "trusted providers ... on our instructions" but names none, gives no retention period (only "within a reasonable time" for deleting an unresponsive parent's contact details), and has no separate consent line for third-party disclosure. For counsel.
- Confirm these survive the port: nothing is collected until the parent consents; parents can review, delete, pause and withdraw; contact details are deleted if the parent does not respond.

## COPPA checks
- No `<form>`, `<input>`, script, tracker or third-party host. Grep: `fetch|XMLHttpRequest|localStorage|sessionStorage|document.cookie|sendBeacon|postMessage|<iframe|<form|<input|https?://` expect only fonts, canonical/og URLs and the SVG namespace.
- "Because your child is under 13, nothing about them is collected until you say yes" is present verbatim.
- Links: `privacy.html`, `tel:`, `mailto:greg@grandbabiez.com`, and the inert button only.

## Verification
- `git status`: only `parent-notice.html` and `OPEN-ITEMS.md`.
- Exact text equality of the client's `<main>` against the repo's, after normalizing whitespace and entities. Report any difference.
- Leftover scan: none of "What happens next", "Questions before you decide", "support@grandbabiez.com", "The note, in full".
- Link check from README. 390px, 768px, default and A+: no horizontal scroll; button at least 44px; no clipped text.

## Done when
Page matches the client's note exactly, placeholders intact and logged, consent button inert, only the two listed files changed.
