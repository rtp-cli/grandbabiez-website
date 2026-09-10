# Grandbabiez — project context

Static marketing site for Grandbabiez, a weekly-prompt service connecting grandparents with
grandchildren who live far away. Launching October 2026 with 100 founding families in Central
Florida.

## Hard constraints

1. **This is plain static HTML. Keep it that way.** Eight pages, one stylesheet, one script, no
   build step, no dependencies, no framework. Do not introduce React/Next/Vue/Astro, a bundler, or
   a CMS unless explicitly asked. Deploys to Vercel with no build command.
2. **The copy is the client's. Do not rewrite it.** Every heading, quote, statistic, and study
   citation was carried verbatim from their original site. Fix typos only if asked.
3. **The audience is 65+ and not tech-confident.** This drives every decision: 44px minimum tap
   targets, words on buttons instead of icons, large light-weight headings, the A/A+ text-size
   control, a phone number in the header. Do not trade any of it for visual polish.
4. **Test at A+ on a 390px viewport after any layout change.** Clicking A+ sets the root font to
   20px. That plus a narrow screen is where this design breaks; it has already caused one
   production bug in the header.

## Palette — do not add colors

Paper `#FBF5EC` · Surface `#FFFFFF` · Cream `#F5ECDD` · Hairline `#E6DBC9`
Ink `#2B2621` · Footer ink `#221E1A` · Ink soft `#6B6259`
Clay `#C56B4A` · Clay deep `#A9553A` · Honey `#E7B24D` · Blush `#E7A9A0` · Sage `#7C9B84`

## Type

Lexend Deca only, weights 300/400/500/600. Large headings are **weight 300** with tight negative
tracking; small headings are 500. Never bold a large heading. Eyebrows are 600 / 0.8rem /
0.14em uppercase in clay deep.

## Layout

Container `max-width: 78rem`. All grids are
`repeat(auto-fit, minmax(min(100%, Xrem), 1fr))` — this is why the site reflows without
breakpoints. Only two media queries exist (48rem, 30rem), both in `styles.css`.

## How styling works

Element styling lives in **inline `style` attributes**. `styles.css` carries only resets, hover
classes (`.hv1`–`.hv7`, using `!important` to beat inline styles), the two media queries, and
`aria-pressed` states. Change a color inline; change a hover or breakpoint in the stylesheet.

## Duplication

Header and footer markup is repeated in all eight pages — there is no include. Script any shared
change across all files rather than editing by hand.

## Known open items

- `ideas.html` vote form posts to a placeholder Formspree ID (`YOUR-VOTE-FORM-ID`) — votes
  currently fail
- Footer links to `/privacy.html`, `/safety.html`, `/parent-notice.html`, none of which exist
- The header phone number is the founder's personal cell; intentional for launch only
- Interior pages have empty slots where the original had decorative illustrations
- No analytics installed

## Deploy

Vercel, Framework Preset "Other", no build command, output directory `/`.
