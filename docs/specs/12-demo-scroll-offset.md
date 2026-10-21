# Issue B: Scroll targets hidden under the sticky header (legacy demo)

**Issue:** #B (medium). **Edits:** `legacy-demo.html` (demo `<style>` block only), `docs/specs/OPEN-ITEMS.md`.
**Commit:** `fix(legacy-demo): offset scroll targets below the sticky header` with `Fixes #B` in the body.
Run this AFTER issue A is committed, so the two fixes are separate commits.

## Scope rules
README rules apply. Do not change the demo script's logic, `<main>` content (sha256 still starts `1d779aaad4d62199efcc`), any other page, `styles.css`, or the legal pages. Never POST to formspree.io. Do not commit.

## The problem
The milestone, recipe and story handlers call `scrollIntoView({block:"start"})`, which puts the target at the very top of the window, under the shared sticky header. The targets have no `scroll-margin-top`. `html{scroll-padding-top:3rem}` exists only under 30rem and is too small for this header. Effects: after clicking a milestone card the matching exchange's heading and date sit under the header; on phones the story view's top (`#spage`) is hidden.

## Facts to verify
- Header heights measured earlier (A / A+): 390px: 161 / 222px; 768px: 162 / 174px; 1440px: 115 / 126px.
- Other anchors on the site use `scroll-margin-top:9rem`, which leaves about 18px hidden at 768px at A.
- The client's script has `scrollIntoView({block:"start"})` for: a milestone click (target `.ex` containing the matching `h3`, after a 30ms delay), a story selection when `innerWidth<860` (target `#spage`), and a recipe handler. Find the recipe handler and its target, and list every `scrollIntoView` call with its target element.
- `scroll-margin-top` on the target and `scroll-padding-top` on `html` add together.

## Do
1. Add `scroll-margin-top` to `#demo .ex` and `#demo .page`, and to any other target found in the script, inside the demo `<style>`.
2. Choose values from measurement, in rem so A+ scales (root 20px at A+). Use a media query at 30rem like the existing header block if one value cannot serve both phone and larger screens. Constraints: no part of the target heading hidden at any width; avoid leaving more than about 50px of unnecessary gap.
3. Do not edit the script or `styles.css`.

## Verification (Playwright in the scratchpad; nothing installed in the repo)
For each handler (milestone click, story selection, recipe) at 390, 768 and 1440 px, at A and A+: trigger it from a scrolled-down position and report `target top - header bottom` in px (must be 0 or more) and the extra gap. Also re-check that tab switching (the slice 10 fix) still keeps the tab bar below the header. No console errors. Report a before/after table.

## Done when
Every handler lands its target fully below the header at all sizes tested, only the `<style>` block changed, and the numbers are in the report.
