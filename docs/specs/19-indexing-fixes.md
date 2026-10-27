# Slice: Google Search Console indexing fixes

**Ticket:** https://app.notion.com/p/405512441d3c811b946bcdfe12deef91 (GitHub issue: #N)
**Run after** the Community slice, so the new page is included.
**Edits:** `vercel.json`, `robots.txt` (new), `sitemap.xml` (new), `docs/specs/OPEN-ITEMS.md`. No page content changes.
**Commit:** `fix(seo): add redirects for short URLs, robots.txt and sitemap.xml` with `Fixes #N` in the body.

## Background (from the client's Search Console screenshots, 23 Oct 2026)
21 known pages, 7 indexed, 14 not: 7 "alternate page with proper canonical tag" (mostly fine), 6 "page with redirect" (matches the six removed pages, expected), 1 "Not found (404)" (URL unknown). The Pages report was last updated 15 Oct. On the live site (22 Oct): `/why`, `/join.html`, `/safety` redirect correctly; `/privacy`, `/terms`, `/research` (no `.html`) return an error; `/support` works; `/sitemap.xml` and `/robots.txt` return an error.

## Scope rules (README rules apply)
- `vercel.json` changes are additive. Keep every existing key byte for byte (`trailingSlash`, the existing redirects, the `/support` rewrite).
- Do NOT add `cleanUrls`: it would redirect `privacy.html` and `terms.html`, which the mobile app and canonical tags use.
- Do not edit any page, `styles.css` or `script.js`. Never POST to formspree.io. Do not commit.

## Do
1. **Redirects (301, `"statusCode": 301`):** `/privacy`, `/terms`, `/research`, `/ideas`, `/legacy-demo`, `/parent-notice`, `/community` to the same name plus `.html`. Do not redirect `/support` (it is a rewrite) or `/`. Check each source against the existing rules for conflicts and loops.
2. **robots.txt:** allow everything and point to the sitemap:
   ```
   User-agent: *
   Allow: /

   Sitemap: https://grandbabiez.com/sitemap.xml
   ```
3. **sitemap.xml:** list each live page's canonical URL EXACTLY as written in that page's `<link rel="canonical">` (read them from the files; do not guess): home, research, ideas, legacy-demo, community, privacy, terms, support, parent-notice. No `lastmod` unless you can take it from git. Valid XML, correct namespace.
4. **Report, do not fix:** pages whose menu links point to `index.html` while the canonical is `/` (a possible cause of the "alternate page" count). List the count of such links. Changing them is a separate decision.
5. **The one 404:** if the client has sent the URL, add the right redirect for it and note it. If not, leave a TODO row in OPEN-ITEMS and do not guess.

## Verification
- `python3 -m json.tool vercel.json` passes; diff is additive only.
- A script in the scratchpad reads `vercel.json` and checks each new rule (source, destination, 301) plus probes that must NOT redirect: `/`, `/index.html`, `/privacy.html`, `/terms.html`, `/research.html`, `/support`, `/support.html`, `/sitemap.xml`, `/robots.txt`.
- `sitemap.xml` parses as XML; every URL equals the canonical of its page; every file exists.
- On the Vercel preview (cannot be tested locally): `curl -sI` each short URL returns 301 with the right `Location`; `/robots.txt` and `/sitemap.xml` return 200; `/support` still 200; every sitemap URL returns 200.
- `git status`: only the files listed above.

## Log in OPEN-ITEMS
- The client must submit `https://grandbabiez.com/sitemap.xml` in Search Console (Indexing, then Sitemaps).
- After deploy, the client clicks "Validate fix" on "Not found (404)" and we check back after a few days.
- The 6 "page with redirect" and 7 "alternate page" reasons are expected and are not errors.
- The count of `index.html` menu links from step 4.

## Done when
The short URLs redirect, `robots.txt` and `sitemap.xml` are live and valid, the client has submitted the sitemap, and Search Console shows no new 404s after Google visits again.
