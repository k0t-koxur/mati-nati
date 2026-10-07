/**
 * RSVP backend: Google Apps Script web app that appends each reply to a Google Sheet.
 *
 * Setup (once, ~5 minutes, see README.md "RSVP backend"):
 *  1. Create a Google Sheet. Extensions → Apps Script. Replace the default code with this file.
 *  2. Deploy → New deployment → type "Web app", Execute as: Me, Who has access: Anyone. Deploy.
 *  3. Copy the "Web app URL" into SITE.rsvpEndpoint in assets/js/content.js.
 *  4. (Optional) set NOTIFY_EMAIL below to get an e-mail on every reply.
 */

var NOTIFY_EMAIL = "";          // e.g. "natalia@example.com"; empty = no e-mails
var SHEET_NAME = "RSVP";        // tab name; created on first reply

var HEADERS = [
  "Received", "Guest", "Attending", "Menu", "Allergies / diet",
  "E-mail", "Phone", "Coach", "Boards at", "Needs accommodation", "Nights",
  "Song", "Message", "Language", "Reply ID"
];

function doPost(e) {
  var out = { ok: false };
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.website) { out.ok = true; return respond_(out); }          // honeypot: swallow silently
    if (!data.guests || !data.guests.length) throw new Error("no guests");

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var sheet = getSheet_();
      var id = Utilities.getUuid().slice(0, 8);
      var received = new Date();
      var rows = data.guests.map(function (g) {
        return [
          received, s_(g.name), g.attending ? "yes" : "no", s_(g.menu), s_(g.diet),
          s_(data.email), s_(data.phone), data.transport ? "yes" : "no", s_(data.transportFrom),
          data.stay ? "yes" : "no", data.stay ? Number(data.nights) || 1 : "",
          s_(data.song), s_(data.message), s_(data.lang), id
        ];
      });
      sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    } finally { lock.releaseLock(); }

    if (NOTIFY_EMAIL) notify_(data);
    out.ok = true;
  } catch (err) {
    out.error = String(err && err.message || err);
  }
  return respond_(out);
}

function doGet() {
  return respond_({ ok: true, service: "rsvp", hint: "POST JSON to this URL" });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notify_(data) {
  var names = data.guests.map(function (g) { return g.name + (g.attending ? " ✓" : " ✗"); }).join(", ");
  var body = data.guests.map(function (g) {
    return "- " + g.name + ": " + (g.attending ? "attending, menu: " + g.menu + (g.diet ? ", diet: " + g.diet : "") : "not attending");
  }).join("\n") +
  "\n\nE-mail: " + data.email + "\nPhone: " + data.phone +
  "\nCoach: " + (data.transport ? "yes, from " + data.transportFrom : "no") +
  "\nAccommodation: " + (data.stay ? "yes, " + data.nights + " night(s)" : "no") +
  (data.song ? "\nSong: " + data.song : "") +
  (data.message ? "\n\nMessage:\n" + data.message : "");
  MailApp.sendEmail(NOTIFY_EMAIL, "RSVP: " + names, body);
}

function s_(v) { return v == null ? "" : String(v).slice(0, 2000); }

function respond_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
