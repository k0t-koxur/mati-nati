/**
 * Backend RSVP: Google Apps Script (web app), który dopisuje każdą odpowiedź z formularza
 * do arkusza Google. Dane zapisywane są po polsku (nagłówki i wartości).
 *
 * Instalacja / aktualizacja (ok. 5 minut):
 *  1. Otwórz arkusz „Wesele RSVP · Natalia & Mateusz” → Rozszerzenia → Apps Script.
 *     Zastąp całą zawartość tym plikiem, zapisz.
 *  2. Pierwszy raz: Wdróż → Nowe wdrożenie → typ „Aplikacja internetowa”,
 *     Wykonaj jako: Ja, Kto ma dostęp: Każdy. Wdróż, autoryzuj.
 *     Aktualizacja: Wdróż → Zarządzaj wdrożeniami → ołówek → Wersja: Nowa wersja → Wdróż.
 *     Adres URL (kończy się na /exec) pozostaje ten sam.
 *  3. Adres wpisany jest w SITE.rsvpEndpoint w assets/js/content.js.
 *  4. (Opcjonalnie) wpisz poniżej NOTIFY_EMAIL, aby dostawać e-mail o każdej odpowiedzi.
 *
 * Uwaga: po zmianie listy kolumn (HEADERS) usuń lub zmień nazwę starej zakładki
 * „Odpowiedzi”; skrypt założy nową z właściwymi nagłówkami przy następnej odpowiedzi.
 */

var NOTIFY_EMAIL = "";              // np. "natalia@example.com"; puste = bez e-maili
var SHEET_NAME = "Odpowiedzi";      // nazwa zakładki; tworzona przy pierwszej odpowiedzi

var HEADERS = [
  "Otrzymano", "Gość", "Obecność", "Menu", "Alergie / dieta",
  "E-mail", "Telefon", "Bus z Rybnika",
  "Piosenka", "Wiadomość", "Język", "Nr odpowiedzi"
];

var MENU = { meat: "mięsne", vegetarian: "wegetariańskie", kid: "dziecięce" };
var LANG = { pl: "polski", en: "angielski" };

function doPost(e) {
  var out = { ok: false };
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.website) { out.ok = true; return respond_(out); }          // pułapka na boty: ignorujemy po cichu
    if (!data.guests || !data.guests.length) throw new Error("brak gości");

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var sheet = getSheet_();
      var id = Utilities.getUuid().slice(0, 8);
      var received = new Date();
      var rows = data.guests.map(function (g) {
        var attending = !!g.attending;
        return [
          received, s_(g.name), yn_(attending), attending ? (MENU[g.menu] || s_(g.menu)) : "", attending ? s_(g.diet) : "",
          s_(data.email), s_(data.phone), yn_(data.transport),
          s_(data.song), s_(data.message), LANG[data.lang] || s_(data.lang), id
        ];
      });
      var first = sheet.getLastRow() + 1;
      sheet.getRange(first, 1, rows.length, HEADERS.length).setValues(rows);
      sheet.getRange(first, 1, rows.length, 1).setNumberFormat("yyyy-mm-dd HH:mm");
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
    try { ss.setSpreadsheetLocale("pl_PL"); ss.setSpreadsheetTimeZone("Europe/Warsaw"); } catch (e) {}
    sheet = ss.insertSheet(SHEET_NAME, 0);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#EDE6D8");
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, 1, 130);
    sheet.setColumnWidths(2, 1, 200);
    sheet.setColumnWidths(10, 1, 320);
  }
  return sheet;
}

function notify_(data) {
  var names = data.guests.map(function (g) { return g.name + (g.attending ? " ✓" : " ✗"); }).join(", ");
  var body = data.guests.map(function (g) {
    return "- " + g.name + ": " + (g.attending
      ? "będzie, menu: " + (MENU[g.menu] || g.menu) + (g.diet ? ", dieta: " + g.diet : "")
      : "nie będzie");
  }).join("\n") +
  "\n\nE-mail: " + data.email + "\nTelefon: " + data.phone +
  "\nBus z Rybnika: " + yn_(data.transport) +
  (data.song ? "\nPiosenka: " + data.song : "") +
  (data.message ? "\n\nWiadomość:\n" + data.message : "");
  MailApp.sendEmail(NOTIFY_EMAIL, "RSVP: " + names, body);
}

function yn_(v) { return v ? "tak" : "nie"; }
function s_(v) { return v == null ? "" : String(v).slice(0, 2000); }

function respond_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
