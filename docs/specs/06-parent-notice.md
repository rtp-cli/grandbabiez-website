# Slice 6: Parent notice

**Source:** `reference/.../parent-notice.html` (about 3 KB of note text). **Edits:** `parent-notice.html`. **Commit:** `feat(parent-notice): rewrite as direct note with three-step consent`

## Port from client
- The note itself, addressed to a parent: what we collect, how it is used, the parent's rights, and 3 steps to give consent. Keep bracketed variables (`[child's first name]`, `[grandparent's name]`, verification-method text) exactly as written.
- "Review & give consent" button.

## Remove
- "What happens next" (agrees / says nothing / changes mind).
- "Questions before you decide?" call box.

## Button (important)
Client href is the literal text `[consent link]`. Do not ship a dead link. Render the button as visibly inactive (`aria-disabled="true"`, no `href`, muted using existing palette) with accessible text noting consent opens at launch, and add to OPEN-ITEMS. Replace with the real URL when the client supplies the consent mechanism.

## Compare against the privacy policy and report gaps (do not invent text)
The client note does not mention: the age range wording, retention, naming of service providers or AI vendors, that parent contact details are deleted if the parent never responds, or what happens when consent is withdrawn. Check each against the direct-notice requirements and list what is missing in OPEN-ITEMS for counsel.

## COPPA checks
- Page makes clear nothing about the child is collected before consent.
- Page is a public sample of the notice; it has no form and collects nothing.
- Privacy link present.

## Done when
No `href="[...]"` anywhere; link check clean.
