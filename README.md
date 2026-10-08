# Natalia & Mateusz · wedding website

A single-page, Polish-only wedding site for guests: story, schedule, venue,
accommodation, travel, FAQ, a photo-upload link that appears the day before the wedding,
and an RSVP form that collects menu choices and whether guests take the minibus from
Rybnik into a Google Sheet.

No build step, no framework, no server: plain HTML, CSS and JavaScript. Hosting is free;
the only cost is an optional domain.

**Live:** https://k0t-koxur.github.io/mati-nati/ (GitHub Pages, branch `main`, root). Every
push to `main` redeploys within about a minute.

## Files

| File | Purpose |
|---|---|
| `index.html` | page structure (sections, form, SVG decorations) |
| `assets/css/style.css` | design: typography, colours, layout, motion |
| `assets/js/content.js` | **all texts and details** and settings: edit this |
| `assets/js/main.js` | behaviour: countdown, rendering, photo-link reveal, RSVP submit |
| `apps-script/Code.gs` | Google Apps Script that stores RSVPs in a Google Sheet |
| `assets/img/favicon.svg` | monogram favicon |

## Updating content

Everything the guests read lives in `assets/js/content.js`:

- `SITE.couple`, `SITE.date`, `SITE.rsvpDeadline`, `SITE.venue`, contacts, schedule,
  story milestones. Entries marked `TODO` are placeholders. A milestone with an empty
  `year` shows "20__ · rok do wpisania" on the page until a year is typed in.
- `SITE.photos`: `url` of the shared Google Drive folder for guests' photos and `from`,
  the moment the "Wrzuć zdjęcia" button appears (default: the day before the wedding).
  Until then guests see a one-line announcement. Preview the button early with `?photos=1`.
- `I18N.pl`: every sentence on the page, keyed by section. Keep the keys, change the
  values. `{deadline}` is replaced by the formatted RSVP deadline.

### Photo folder (Google Drive, no sign-in for guests)

Folder "Wesele Natalia & Mateusz · zdjęcia gości" exists in l.kotkiewicz's Drive
(created 2026-10-08, 5 TB plan) and its link is already in `SITE.photos.url`. The site
shows the button from `SITE.photos.from` (2027-08-01) on its own. The folder itself is
kept **Restricted** until then, because the link is readable in this public repository.

1. Around 2027-07-30: open the folder → Share → General access: **Anyone with the link**
   → role **Editor**. Anonymous visitors can then upload from the folder page (their files
   show as "Anonymous" and are owned by the folder owner). Test once from a phone.
2. Mid-August 2027: switch General access back to **Viewer** (or Restricted) so nothing
   can be added or removed, then hand the photos to the couple.

Save, commit, push: the hosting rebuilds automatically.

## RSVP backend (Google Sheet, free)

Sheet (created 2026-10-07, owner l.kotkiewicz@gmail.com):
https://docs.google.com/spreadsheets/d/1TGCOZrAQv_n_R4-glVQMHevSbVXs9qDYRYkVSDSuBqI/edit

1. Open the sheet above (or create a new one in the couple's Google account).
2. Extensions → Apps Script. Delete the default code, paste `apps-script/Code.gs`, save.
   Optionally set `NOTIFY_EMAIL` at the top to get an e-mail per reply.
3. Deploy → New deployment → gear icon → **Web app**.
   Description: "rsvp" · Execute as: **Me** · Who has access: **Anyone**. Deploy, authorise.
4. Copy the **Web app URL** (ends with `/exec`) into `SITE.rsvpEndpoint` in
   `assets/js/content.js`. Until then the form shows "not connected yet".
5. Test: submit the form once; a sheet tab `Odpowiedzi` appears with one row per guest.
   Headers and values are in Polish (tak/nie, mięsne/wegetariańskie/dziecięce).
   Columns: Otrzymano, Gość, Obecność, Menu, E-mail, Telefon, Bus z Rybnika, Piosenka,
   Wiadomość, Nr odpowiedzi.

Changing the script later: Deploy → Manage deployments → edit → "New version" (the URL stays).
If the new version does not take effect, create a new deployment instead; its URL is
different, so update `SITE.rsvpEndpoint` in `assets/js/content.js` and push.
If the columns changed, delete or rename the old `Odpowiedzi` tab first; the script creates
a fresh one with the right headers on the next reply.

## Hosting (free)

### Option A: GitHub Pages (recommended, one place for code and hosting)
Repository: https://github.com/k0t-koxur/mati-nati (public). Pushes from the laptop use
the dedicated key `~/.ssh/github_ed25519` (host entry in `~/.ssh/config.d/github.conf`).
1. Create the repository on GitHub (public), push this folder.
2. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/`.
3. The site is live at `https://<user>.github.io/<repo>/` within a minute of every push.

### Option B: Cloudflare Pages
Dashboard → Workers & Pages → Create → Pages → connect the GitHub repo. Build command:
none, output directory: `/`. Free, unlimited bandwidth, `*.pages.dev` URL.

### Option C: Netlify Drop (no Git at all)
app.netlify.com/drop: drag the project folder into the browser. Re-drag to update.

## Custom domain (the only cost)

- Buy e.g. `natalia-i-mateusz.pl` (OVH, home.pl, nazwa.pl: usually 10–30 zł the first
  year) or a `.wedding`/`.com`. Avoid "free first year" offers with steep renewals; the
  site only needs to live ~1.5 years.
- GitHub Pages: add the domain under Settings → Pages → Custom domain (this creates a
  `CNAME` file in the repo), then at the registrar add a `CNAME` record `www` →
  `<user>.github.io` and the four A records for the apex from GitHub's docs. Tick
  "Enforce HTTPS" once the certificate is issued.
- Cloudflare Pages: Custom domains → add; if DNS is also on Cloudflare it is one click.

## Local preview

Any static server, e.g. `python3 -m http.server 8765` in this folder, then
http://127.0.0.1:8765/. Fonts load from Google Fonts, so an internet connection is needed
for the final look.

## Privacy

RSVP data (names, contact details) is personal data. The form says it is used only
for the wedding and deleted afterwards: do that (delete the sheet after the wedding).
