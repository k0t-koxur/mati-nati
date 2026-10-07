# mati-nati — wedding website (Natalia & Mateusz)

Static HTML + CSS + vanilla JS. No build step, no dependencies, no server.

**This folder lives outside `~/projects` on purpose** (user decision, 2026-10-07): it must
never be synced to or run on battlestation. Do not use `bs` here.

- Content and settings: `assets/js/content.js` (PL + EN texts, date, venues, RSVP endpoint).
- Design: `assets/css/style.css`; behaviour: `assets/js/main.js`.
- Preview: the Code tab preview server (`.claude/launch.json`, `python3 -m http.server`),
  never `file://` in the browser pane.
- Deploy: `git push` to `origin main` → GitHub Pages (k0t-koxur/mati-nati), live within a
  minute at https://k0t-koxur.github.io/mati-nati/ (assets cached ~10 min).
- RSVP backend: `apps-script/Code.gs`. Changing it means pasting it into the Apps Script
  editor of the sheet "Wesele RSVP · Natalia & Mateusz" and Deploy → Manage deployments →
  New version (URL stays). Only the user can do that.
- Off-site copy is the public GitHub repo (this folder is not in `bs backup`).
