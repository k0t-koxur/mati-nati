# Natalia & Mateusz · wedding website

A single-page, bilingual (PL/EN) wedding site for guests: story, schedule, venues,
accommodation, travel, FAQ and an RSVP form that collects menu choices, dietary needs,
transport and accommodation needs into a Google Sheet.

No build step, no framework, no server: plain HTML, CSS and JavaScript. Hosting is free;
the only cost is an optional domain.

## Files

| File | Purpose |
|---|---|
| `index.html` | page structure (sections, form, SVG decorations) |
| `assets/css/style.css` | design: typography, colours, layout, motion |
| `assets/js/content.js` | **all texts and details** (both languages) and settings: edit this |
| `assets/js/main.js` | behaviour: language switch, countdown, rendering, RSVP submit |
| `apps-script/Code.gs` | Google Apps Script that stores RSVPs in a Google Sheet |
| `assets/img/favicon.svg` | monogram favicon |

## Updating content

Everything the guests read lives in `assets/js/content.js`:

- `SITE.couple`, `SITE.date`, `SITE.rsvpDeadline`, venues, hotels, contacts, schedule,
  story milestones. Entries marked `TODO` are placeholders.
- `I18N.pl` / `I18N.en`: every sentence on the page, keyed by section. Keep the keys,
  change the values. `{deadline}` is replaced by the formatted RSVP deadline.

Save, commit, push: the hosting rebuilds automatically.

## RSVP backend (Google Sheet, free)

1. Create a new Google Sheet (e.g. "Wesele RSVP") in the couple's Google account.
2. Extensions → Apps Script. Delete the default code, paste `apps-script/Code.gs`, save.
   Optionally set `NOTIFY_EMAIL` at the top to get an e-mail per reply.
3. Deploy → New deployment → gear icon → **Web app**.
   Description: "rsvp" · Execute as: **Me** · Who has access: **Anyone**. Deploy, authorise.
4. Copy the **Web app URL** (ends with `/exec`) into `SITE.rsvpEndpoint` in
   `assets/js/content.js`. Until then the form shows "not connected yet".
5. Test: submit the form once; a sheet tab `RSVP` appears with one row per guest.

Changing the script later: Deploy → Manage deployments → edit → "New version" (the URL stays).

## Hosting (free)

### Option A: GitHub Pages (recommended, one place for code and hosting)
1. Create a GitHub repository (public or private both work with Pages on free plans for
   public; private needs Pro), push this folder.
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

Open `index.html` directly in a browser (`file://`). Fonts load from Google Fonts, so an
internet connection is needed for the final look.

## Privacy

RSVP data (names, contact, dietary needs) is personal data. The form says it is used only
for the wedding and deleted afterwards: do that (delete the sheet after the wedding).
