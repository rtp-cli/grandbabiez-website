# Slice 5: Privacy policy

**Source:** `reference/privacy.html`: the `<main>` content (about 55 KB), the title and the meta description.
**Edits:** `privacy.html`, `docs/specs/OPEN-ITEMS.md`.
**Commit:** `feat(privacy): rewrite with plain-language summary, billing, AI opt-out, SMS terms`

## What "untouched" means here
This is a copy-and-paste job. The client's privacy text goes onto `privacy.html` exactly as written. No summarizing, no rewording, no reordering, no tidying, no filling in blanks. The only thing that changes is the markup around the words, which becomes the repo's inline-styled markup.

## Scope rules
- Repo styling only. Do not copy client classes or `<style>` blocks. Lexend Deca, existing palette, existing hover classes.
- Header and footer are NOT in this slice (slice 7). Leave them as they are.
- Do not add links to `terms.html` or `support.html`.
- Never POST to the live Formspree endpoint.

## Facts found in the client file (verify each yourself)
- One page in two parts. Part one is the plain-language policy: h1 "Your family's privacy.", then "The short version", What we collect and why, How we use it, Who can see it, Data Sharing, Children's privacy, How we keep it safe, How long we keep it, Your choices, Cookies and tracking, Changes to this policy, How to reach us. Part two is "Grandbabiez Privacy Policy — Full Version": core promises, how it is organized, sections 1 to 16, with 8.7 "SMS Messaging Program Terms and Conditions".
- The client's markup has about 7 tables, 25 bullet lists, 4 numbered lists and 1 inline SVG. The repo's current page has no tables.
- Heading ids are long slugs (for example `2-information-we-collect`, `45-turning-ai-features-off`, `messaging`), plus `top` and `full-policy`. The repo's current page uses `s1`-`s16`, `contents` and `s9-1`-style ids.
- In-page links in the client's main: `#full-policy`, `#messaging`, `#top`, plus `parent-notice.html`, `mailto:greg@grandbabiez.com` and `tel:+13522903530`.
- The client text contains about two dozen `[bracketed]` placeholders: legal entity name, mailing address and ZIP, service providers to list, retention periods to confirm, payment processor, AI providers, several `[CONFIRM ...]` items, and a bare `[30]`.
- Page title uses an entity apostrophe: "Your family's privacy — Grandbabiez". Meta description: "How Grandbabiez protects your family's privacy — in plain language..." Keep the repo's typographic apostrophes.

## Method (do it this way)
1. Do not retype. Write a throwaway conversion script in the scratchpad, not committed, that takes the client's `<main>` markup and produces repo-style markup: it strips classes, adds inline styles by tag, wraps each table, and leaves every text node untouched.
2. The check is exact, not partial: after normalizing whitespace and HTML entities, the full text of the repo's `<main>` must EQUAL the full text of the client's `<main>`. Report any difference character by character. Also compare the list of heading texts and the list of link `href` and link text pairs.
3. Use the client's ids exactly, so the in-page links keep working. Give every heading with an id `scroll-margin-top` (the repo uses 11rem on its h3s) so anchors are not hidden under the sticky header.

## Styling guidance
- h1/h2/h3: copy the repo's heading patterns (h2 weight 300, h3 weight 500, 600 maximum anywhere).
- Paragraphs, lists: 1.05rem, line height 1.6, colour `#2B2621` or `#6B6259` as the current page does; native list markers.
- Tables: each in a wrapper `div` with `overflow-x:auto`; 1px `#E6DBC9` borders, header row `#F5ECDD`, cell padding at least 0.75rem, text not smaller than 0.95rem. The page body must never scroll sideways at 390px or at A+. Add `scope` attributes to header cells for accessibility; add no other markup that changes text.
- The summary and the "core promises" block can use the existing card pattern if the client has them boxed.
- SVG: copy verbatim, including its `aria-label`; log any fill outside the palette.

## Remove from the current page
Everything in the old `<main>`: its contents list, `s1`-`s16` sections, tables built from grid divs, and all text the client does not have, including the 50-cent charge, date of birth, the teen section, AI provider names and `support@grandbabiez.com`. List each removal group by line range in the plan.

## Links to check
- `grep -rn "privacy.html#" *.html` across the repo: report any other page that links to an old anchor (`#s6` and so on). Fix only links on pages edited in this branch; report the rest.
- `parent-notice.html` link stays. `#full-policy`, `#messaging`, `#top` must resolve.

## Log in docs/specs/OPEN-ITEMS.md (do not edit the text to fix any of these)
- Every `[bracketed]` placeholder, with its section number, as a launch blocker. Count them.
- Whether "Terms of Use" is still mentioned in the policy text (the Terms page is removed from the site).
- Whether the text still mentions any of: 50-cent charge, date of birth, teens, support@grandbabiez.com, "weekly" prompts.
- Any place where the policy contradicts the parent notice or the home page (for example "age" vs "age range").
- Anything that looks wrong in the client's text. Quote it and leave it.

## COPPA and privacy checks
- No `<form>`, `<input>`, script, tracker or third-party host on the page apart from the existing fonts link and canonical/og URLs. Grep: `fetch|XMLHttpRequest|localStorage|sessionStorage|document.cookie|sendBeacon|postMessage|<iframe|<form|<input`.
- The children's privacy section and the parent-notice link are present.
- Section 8.7 SMS terms and the billing text are present.

## Verification
- `git status`: only `privacy.html` and `OPEN-ITEMS.md`.
- Exact text equality, heading-id equality and link equality as above, with the report of any mismatch.
- Every in-page `#` link resolves; link check from README.
- 390px, 768px, default and A+: no horizontal page scroll; tables scroll inside their wrappers; headings not hidden under the sticky header when you jump to an anchor; text readable.
- Keyboard: Tab reaches every link; the focus ring is visible.

## Done when
The page's text is character-for-character the client's, placeholders are intact and listed, only the two listed files changed, and the page works at 390px and A+.
