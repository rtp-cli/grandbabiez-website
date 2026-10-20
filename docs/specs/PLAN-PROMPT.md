# Reusable planning prompt

Replace NN with the slice number (for example 06) and paste into a fresh Claude Code session started with `claude --permission-mode plan`.

```
Read docs/specs/README.md and docs/specs/NN-*.md. Also read CLAUDE.md,
docs/specs/OPEN-ITEMS.md, every page the spec edits, and the matching client
files in reference/.

First run `git rev-parse --show-toplevel`, work from the repo root, and use
git status and git diff for verification.

RULES (they override earlier prompts, the specs, CLAUDE.md and memory):
- Client copy is ported verbatim: no summarizing, rewording, reordering or copy of
  your own. Legal text (privacy policy, parent notice) is pasted exactly,
  including every [bracketed] placeholder. Problems go in OPEN-ITEMS, not the text.
- terms.html and support.html main content is never changed. Header/footer chrome
  only, and only in the slice that says so.
- Repo styling only (inline styles, Lexend Deca, existing palette). Never copy client
  classes or <style>.
- Never POST to formspree.io.
- The spec's facts are from my inspection. Verify them and tell me where you disagree.

Do NOT edit files. Produce a plan under 80 lines:
1. Files to change (the spec says which).
2. Full text diff of repo page vs client page, with line numbers. Do this first.
3. Section map, with the repo pattern each section copies its inline styles from, and
   what is removed (line ranges).
4. Links, ids and anchors, and any other page that links to something that changes.
5. Placeholders and mismatches to log (quoted, not fixed).
6. Ambiguities and decisions for me, numbered, each with your default.
7. Verification: exact text equality, git status/diff, README link check, 390px,
   768px, default and A+, keyboard focus.
8. COPPA grep list.
9. The commit message from the spec (no trailers; I will commit).
```
