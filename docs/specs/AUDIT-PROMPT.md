# App-vs-site audit (run before merging to production)

Start with the app repo added: `claude --permission-mode plan --add-dir /path/to/app-repo` (check `claude --help` for the flag), then paste:

```
READ-ONLY AUDIT. Do not edit either repo, run the app, or print any secrets or keys.

Website repo: current directory. App repo: the added directory, branch develop. Do not
check out branches. Read the app with `git -C <app> grep` and `git -C <app> show
develop:<path>`, and record `git -C <app> rev-parse develop` in your report.

Website sources: the CLIENT's new copies (reference/privacy.html,
reference/parent-notice.html, reference/index.html, reference/legacy-demo.html) and the
current working copies of privacy.html, parent-notice.html, terms.html, support.html.

Check every factual claim against the app code: data collected from children and adults
(DOB vs age range, interests, photos, voice, video, phone numbers, contacts picker,
device IDs, location); parental consent flow and any payment charge; teen accounts;
AI features (providers, what is sent, name replacement, training, opt-out); analytics,
crash reporting and third-party SDKs; ads; retention and deletion; prompt frequency
(weekly vs daily); trial and pricing; SMS; push notifications; permissions requested;
encryption claims; data storage location.

Deliver as your plan, under 120 lines:
1. A table: claim (file and short quote) | app evidence (path:line) | verdict (matches /
   contradicts / not found) | risk (COPPA / store submission / consumer).
2. A store-submission checklist: the privacy and support URLs the app needs, and what the
   app's data types, SDKs and permissions imply for the App Store privacy answers and the
   Google Play data safety form.
3. COPPA gaps visible from the code.
Do not recommend wording changes to legal text; only list mismatches.
```
