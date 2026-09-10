# Grandbabiez

Static marketing site. Eight pages, no build step, no dependencies.

## Deploy to Vercel

1. Commit this folder to a GitHub repo.
2. In Vercel: **New Project** → import the repo.
3. Framework Preset: **Other**. Leave Build Command empty. Output Directory: **/** (or the folder holding these files).
4. Deploy.

Vercel serves `index.html` at the root. Nothing to compile.

## Files

| File | Page |
| --- | --- |
| `index.html` | Home |
| `why.html` | Why we're doing this |
| `whats-coming.html` | What's coming |
| `what-changes.html` | What changes over time |
| `research.html` | The research |
| `ideas.html` | Ideas & thanks |
| `trust.html` | Our promises |
| `join.html` | Join the first 100 |
| `styles.css` | All shared styles |
| `script.js` | Menu toggle, text-size preference, form submission |
| `assets/` | Logo and photography |

## Forms

Both forms post to Formspree over `fetch`, so the page never reloads.

- **Join** (`join.html`) → `https://formspree.io/f/xzdnwgpb` — live.
- **Roadmap vote** (`ideas.html`) → `https://formspree.io/f/YOUR-VOTE-FORM-ID` — **placeholder. Replace with a real Formspree form ID before launch or votes will fail.**

## Things to change before launch

- **Phone number.** `(408) 219-7677` appears in the header strip of every page, the footer, and the Join and Trust pages. It is a personal cell. To remove it site-wide, delete the `<div>` wrapping the `striplink` anchor in each page's header.
- **Missing legal pages.** The footer links to `/privacy.html`, `/safety.html`, and `/parent-notice.html`. None exist yet — they 404 on the current live site too.
- **Text size.** The A / A+ control stores a preference in `localStorage` under `gb-textsize`.

## Accessibility notes

Skip link, visible focus rings, `aria-current` on the active nav item, 44px minimum tap targets, labelled form fields, and text that reflows to 390px without horizontal scroll.
