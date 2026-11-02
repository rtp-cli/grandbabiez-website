# Spec 24: Homepage, adopt Greg's "better website for now"

- Ticket: GB-578 (Notion, Epic 17: Website Changes and Enhancements)
- Issue: #__ (create the GitHub issue, then fill in)
- Branch: `<type>/<issue#>-homepage-better-website` (branch from `main`)
- Status: DRAFT. Nothing merges until Greg has answered section 10.

## 1. Request

Greg's email, item 5, word for word:

> Please check the attached. A better website for now....

The attachment is a zip with one `index.html` and `Grandbabiez_Whitaker_Year_One.mp4`.

## 2. What this spec does

Port the **content** of Greg's zip homepage into our `index.html`, inside our own styling and page shell. Greg's text is used word for word. His fonts, colours and CSS are not copied.

The full comparison of the zip against the current homepage is in Notion ticket GB-578. Its key points are repeated in sections 4, 5, 7, 8 and 10, so this spec is enough on its own.

## 3. Source files (local, gitignored)

The copy source is Greg's zip `index.html`, in the local `reference/` folder, which is gitignored. It is either `reference/index.html` or inside a subfolder such as `reference/grandbabiez_homepage_legacy/index.html`. The `reference/` folder may also hold files from Greg's earlier design zip, so find the right file by its content, not its name:

```
grep -rl "A legacy you build together" reference/
```

The right file has:
- `<title>`: "grandbabiez™ — A legacy you build together"
- hero heading: "Your family's legacy, built together, one week at a time."

Read that file fully. It is the only source of copy. State its exact path in the plan. If no file matches, or more than one does, stop and ask.

The mp4 (`Grandbabiez_Whitaker_Year_One.mp4`) may sit next to it. Do not open it, copy it, or link to it from any page.

Do not commit anything under `reference/`, and do not commit the zip.

## 4. Decisions (defaults used by this spec)

| # | Decision | Default in this spec | Confirm with |
|---|---|---|---|
| D1 | Source of copy | Zip text, word for word | none |
| D2 | Styling | Ours: inline styles, Lexend Deca, existing palette, A/A+, 44px touch targets. Nothing from the zip's `<style>` block, Noto Sans or General Sans | none |
| D3 | Which sections | Replace everything inside `<main>` on `index.html` with the zip's sections. The removed sections stay in git history | Nehal, Greg |
| D4 | Film | YouTube unlisted video, privacy-enhanced (`youtube-nocookie.com`), click-to-load. No mp4 in the repo. See section 8 | Nehal (URL), Greg |
| D5 | "Explore their whole year" link | Points to `legacy-demo.html`, not the claude.ai page in the zip | none |
| D6 | Price and "No Charge for 3 years" | Follow the zip: no price on the homepage | Greg |
| D7 | Form | Keep the Formspree endpoint. Port the zip's fields. Keep our hidden fields and JS handler (section 7) | Greg |
| D8 | "Join our coffee meetups ... and our weekly Zoom calls" | Zip wording, word for word | Greg |
| D9 | The two number claims | Zip wording, word for word, marked for Greg (section 10) | Greg |
| D10 | COPPA wording | Zip wording ("Designed to follow COPPA"). Keep the links to the privacy policy and the notice for parents | Greg |

## 5. Section map

| Zip section | Becomes | Notes |
|---|---|---|
| hero | New hero | Two buttons: "Become a founding family" to `#founding`, "Watch one family's first year" to `#film` |
| film (`#film`) | Film section | See section 8 |
| year | Timeline: one month, three months, six months, one year | "Explore their whole year" goes to `legacy-demo.html` |
| together | "Built by both generations, not just one" | For grandparents and For parents lists |
| how (`#how`) | "How a week works" | **Keep our id `how-it-works`** and `scroll-margin-top:9rem` (the menu links to `index.html#how-it-works`) |
| promise | "Private, simple and safe" | Links to `privacy.html` and `parent-notice.html` stay |
| founding (`#founding`) | Founding section | **Keep our id `founding`** and `scroll-margin-top:9rem` |

Also use the zip's `<title>`, meta description and the same text for `og:title` and `og:description` on `index.html`. Keep our canonical, icons, manifest and theme-color.

## 6. Keep as it is

- Header, menu and the top strip (identical on all pages; its height drives scroll offsets). Do not edit them. Show in the diff that no header lines moved, and measure header height at A and A+ before and after.
- Footer, including Terms of Use and Support links.
- `styles.css`, `vercel.json`, every other page. `script.js` changes only for the film handler (section 8) and the form (section 7), nothing else.
- Phone (408) 219-7677 and `tel:+14082197677`.
- Do not use the zip's top support bar, its own header, its footer or its inline `<script>`.

## 7. Form

- Action stays `https://formspree.io/f/xzdnwgpb`. **Never POST to it while testing.** Test with a local stand-in that logs the request and returns 200, or by reading the code.
- Fields from the zip: `name` (required), `email` (required), `phone` (optional), `village_or_town`, `role`, `grandchildren`, `heard_about_us` (optional), `feedback_commitment` checkbox (required).
- Keep our hidden fields `_subject` and `signup_type` so Greg's email subject and filters do not change. The zip's `form_type` field may also be kept; the plan should say what it recommends.
- Keep our existing handler in `script.js` and the ids it uses (`join-form`, `join-error-wrap`, `join-thanks`). Read `script.js` first; adapt only what the new fields need. If the handler cannot work with the zip's fields without larger changes, stop and say so.
- Use the zip's validation and result messages word for word. Check each one against what `script.js` can show.
- Phone moves from required to optional. This is the zip's choice; Greg confirms (section 10).

## 8. Film

### Input (Nehal fills this in before the plan session)

```
YOUTUBE_VIDEO_URL: [PASTE THE UNLISTED YOUTUBE URL HERE]
```

- Paste the plain video URL (watch, youtu.be or embed form). Do not paste YouTube's own embed code. Claude Code builds the embed from the URL.
- If the value above is still in square brackets, stop and ask.

### Wording

From the zip, word for word: title "Watch one family build a year of legacy", the paragraph under it, the cover text, and the line "The Whitakers are a demo family, created to show what a real year on grandbabiez can look like. Every exchange in the film comes from their full year in the app."

### Behaviour (click-to-load, privacy-enhanced)

- On page load there is **no iframe and no request to YouTube**.
- The page shows a cover in our styling: a `<button type="button">` with a visible text label, at least 44px high, keyboard operable, visible focus, with the zip's `aria-label`.
- On click, a small script inserts one iframe and moves focus to it:
  - `src="https://www.youtube-nocookie.com/embed/<VIDEO_ID>?autoplay=1&rel=0"`
  - `title="The Whitakers: year one"`
  - `allow="autoplay; encrypted-media; picture-in-picture; fullscreen"` and `allowfullscreen`
  - `referrerpolicy="strict-origin-when-cross-origin"`
  - 16:9 (`aspect-ratio:16/9; width:100%; border:0`), same corner radius as the other cards.
- Without JavaScript: a plain link "Watch on YouTube" to the URL, inside `<noscript>`.
- The plan shows the video ID it extracted from the URL.
- The handler goes in `script.js`, guarded so it does nothing on pages without the film, or in a small inline script on `index.html`. The plan recommends one and says why.
- Check `vercel.json` and the page for any Content-Security-Policy or similar header that would block `youtube-nocookie.com` frames. Report the result in the plan. If something blocks it, stop and ask before changing `vercel.json`.

### Nehal's YouTube Studio checks (not code)

- Video visibility is Unlisted. Greg approves the page before it goes live; once it is live, the link is visible in the page source.
- The audience setting is "No, it's not made for kids".

### Facts

- The original file is 1920x1080, H.264/AAC, 3:32 long (212 s). The zip says "3½ minutes" and its play button says "3 minutes 29 seconds". Greg confirms the label (section 10).
- I could not check whether the film has burned-in captions, so "with captions for watching on mute" is the zip's claim, not verified.
- This is not the 2:00 video from the separate video workstream.

## 9. Acceptance checks

1. `index.html` shows the zip's sections in the zip's order, with the zip's text word for word (the plan lists any word that differs and why).
2. `#how-it-works` and `#founding` still exist, and the menu link "How it works" and the "Join the founding 100" buttons still land correctly with the header at A and A+.
3. No header lines moved; header height identical before and after at 1440, 1024, 640 and 390 px, at A and A+.
4. Checked at 1440, 1024, 640 and 390 px at A and A+: nothing cut off, no new horizontal scroll (the known 640 px A+ scroll must not get worse).
5. All touch targets are at least 44px. All text scales with A/A+.
6. No console errors. All links work. `legacy-demo.html` link works.
7. The form submits to a local stand-in only. No POST to Formspree.
8. `git diff --stat` shows `index.html` (and `script.js` only for sections 7 and 8, stated in the plan) plus this spec.
9. No mp4, zip or `reference/` files in the diff.
10. Film: with the network panel open, loading `index.html` makes no request to youtube.com or youtube-nocookie.com. Clicking the cover loads the embed from `youtube-nocookie.com` and the video plays. Works with keyboard only (Tab to the cover, Enter). With JavaScript off, the "Watch on YouTube" link shows.
11. The film cover scales at A+ and at 390 px with nothing cut off.

## 10. Open items for Greg (nothing merges until answered)

1. **Price.** The current homepage says "No Charge for 3 years", then $14.95 a month or $149.95 a year. The zip has no price. Is leaving the price off intended? (The Oct 28 sync also noted $14.95/month from Nov 15.)
2. **Coffee and Zoom bullet.** "Join our coffee meetups in The Villages and our weekly Zoom calls." The coffee meetups are cancelled this week (GB-577), and the Community page calls the Zoom calls "planned". Still correct?
3. **Number claims.** "Parents wrote about 1 in every 6 messages": the demo data gives 151 of 1,042, about 1 in 7. "17 stories from 9 people" at three months: the data gives 8 people at week 13. Keep, or correct?
4. **Phone optional.** The live form requires a phone number; the zip makes it optional. Intended?
5. **Removed sections.** "Sound familiar?", "Two voices. One lasting legacy.", "Simple on purpose" and "Why it's different" leave the homepage. Intended?
6. **Film.** Label length (3½ minutes vs 3:32), and who owns the YouTube channel the video sits on.
7. **"Coming soon to the App Store and Google Play."** Keep as written?
8. **Footer and other pages** still carry the old tagline "Every story you trade becomes your legacy." until Greg finishes the positioning change (item 1 of his email).

## 11. Out of scope

Menu changes, the footer tagline, the Community page, the legacy demo page, moving off Formspree, the waitlist after the first 100, and the separate 2:00 video.
