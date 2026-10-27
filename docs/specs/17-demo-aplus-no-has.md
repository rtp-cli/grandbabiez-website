# Issue #13: Demo A+ scroll offsets must not depend on CSS :has()

**Issue:** #13 (bug). **Edits:** `legacy-demo.html` (demo `<style>` block only), `docs/specs/OPEN-ITEMS.md`.
**Commit:** `fix(legacy-demo): detect A+ scroll offsets without :has()` with `Fixes #13` in the body.
Source: review comment on PR #12 at `legacy-demo.html:208`.

## Scope rules
README rules apply. Do not edit `script.js`, `styles.css`, `<main>` content, the demo script, any other page, or the legal pages. Never POST to formspree.io. Do not commit.

## The problem
The eight A+ (20px root) `--sm` rules use `html:has(#size-large[aria-pressed="true"]) #demo`. Browsers without `:has()` (Safari before 15.4, Firefox before 121) ignore all eight and use the A values, so milestone, story and recipe targets can sit under the sticky header at A+.

## Facts to verify
- With the eight rules removed, A+ gaps (scroll-margin + scroll-padding minus header height) fall outside 8-50px at 834 of 1161 widths from 340 to 1500px, 216 are negative, worst -80px.
- The reviewer's 390px example (148px + 60px) is wrong: rem scales with the 20px A+ root, so the fallback at 390px is 185px + 60px against a 222px header, a 23px gap. The breakage is at 340-381px and 531-704px.
- `script.js` sets `document.documentElement.style.fontSize = '20px'` for A+ and clears it for A, in the same function that sets `aria-pressed`. Nothing else sets an inline style on `<html>`.

## Do
1. In the eight A+ rules replace `html:has(#size-large[aria-pressed="true"]) #demo` with `html[style*="font-size: 20px"] #demo`. Values, order and media queries unchanged.
2. Add a CSS comment next to the A+ rules: "A+ is detected from the inline font-size that script.js sets on <html>; if the text-size script changes, update these rules."
3. Do not edit `script.js`. If the attribute hook fails in any tested engine, STOP and ask.

## Verification (Playwright in the scratchpad; nothing installed in the repo)
- Chromium, WebKit and Firefox. Say explicitly for any engine that cannot be installed or launched; do not claim it was tested.
- In each engine: print the serialized `html` style attribute at A+; the selector matches at A+, does not match at A (initially, after switching A+ back to A, and after a reload), and matches after a reload with A+ saved.
- Computed `--sm` at A+ equals the current `:has()` build at every width from 340 to 1500px; at A it is unchanged.
- Handlers (milestone click, story select under 860px, recipe) at 390, 768 and 1440px, A and A+: target top minus header bottom is 0 or more.
- `git diff --stat` shows only `legacy-demo.html`, this spec and `OPEN-ITEMS.md`; `<main>` unchanged; no console errors.

## Done when
A+ offsets no longer depend on `:has()`, the numbers are identical to the previous build in the engines tested, the warning comment exists, and OPEN-ITEMS records the dependency on `script.js`.
