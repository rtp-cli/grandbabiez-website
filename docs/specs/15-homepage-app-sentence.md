# Issue #9: Hero sentence should say grandbabiez is a mobile app

**Issue:** #9 (client request from Greg, sent by chat on 21/10).
**Edits:** `index.html` (the hero lead paragraph only), `docs/specs/OPEN-ITEMS.md`.
**Commit:** `fix(home): say grandbabiez is a mobile app in the hero paragraph` with `Fixes #9` in the body.

## Scope rules
README rules apply, with ONE deliberate exception: this is a client-requested change that differs from the client's zip, so it overrides "client copy is verbatim" for this one sentence only. Do not touch `privacy.html`, `terms.html` or `support.html`. Do not change any other paragraph, the meta tags, or any other page. Never POST to formspree.io. Do not commit.

## The change
Hero lead paragraph on the homepage. The client's markup is:

`<p class="lead">grandbabiez&trade; creates a unique, private space just for you and each of your grandchildren. Every week there&rsquo;s something real to talk about &mdash; and every story that goes back and forth is kept. The closer you grow, the richer the legacy.</p>`

New first sentence:

`grandbabiez™ is a mobile app that creates a unique, private space just for you and each of your grandchildren.`

That is: insert "is a mobile app that" between "grandbabiez™" and "creates". The rest of the paragraph stays exactly as it is.

## Rules for the edit
1. Keep the trademark mark exactly as the repo's `index.html` writes it (entity or character; do not convert one to the other). The count of ™ marks on the page must not change.
2. Keep the comma in "unique, private". The issue quotes the sentence without it and without the ™; that is only shorthand in the ticket. Do not drop either.
3. Change ONLY this paragraph. Do NOT change `<title>`, `<meta name="description">`, `og:title`, `og:description`, or the twitter equivalents. The meta description will keep saying "Grandbabiez creates a unique, private space..." on purpose (owner's decision).
4. Search `index.html` for any other place where the same sentence is repeated (for example a heading, intro or footer line) and REPORT each hit with line numbers; do not change them. Also report hits on other pages; do not change them.

## Verification
- `git diff --word-diff` on `index.html` shows exactly the five added words "is a mobile app that" and nothing else.
- Head (everything before `<body`) is byte-identical to before; the `<header>`/`<footer>` are untouched.
- The page's `<main>` text is identical to before except those five words (run a before/after text comparison).
- ™ count unchanged; one `<h1>`; link check clean.
- The paragraph still fits its layout at 390px and 1440px, at A and A+ (no overflow, no extra line breaks that push the heading).

## Log in docs/specs/OPEN-ITEMS.md
- Deliberate deviation from the client's zip: the hero sentence now reads "grandbabiez™ is a mobile app that creates...", requested by Greg in chat on 21/10 (issue #9).
- The meta description and og:description still say "creates a unique, private space..." without "is a mobile app that": left unchanged on purpose.
- Any other places the original sentence appears (from step 4).

## Done when
Only the five words were added to the hero paragraph, the meta tags are untouched, the deviation is logged, and only `index.html` and `OPEN-ITEMS.md` changed.
