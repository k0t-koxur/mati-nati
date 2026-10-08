/* Behaviour: language switch, rendering content.js, countdown, nav, reveal, RSVP form. */
(function () {
  "use strict";
  var SITE = window.SITE, I18N = window.I18N;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- language ---------- */
  var lang = (function () {
    var q = new URLSearchParams(location.search).get("lang");
    var saved = null; try { saved = localStorage.getItem("lang"); } catch (e) {}
    var l = q || saved || SITE.defaultLang || "pl";
    return I18N[l] ? l : "pl";
  })();

  function t(key) {
    var s = (I18N[lang] && I18N[lang][key]) || (I18N.pl && I18N.pl[key]) || "";
    return s.replace("{deadline}", fmtDate(SITE.rsvpDeadline, { day: "numeric", month: "long", year: "numeric" }));
  }
  function pick(v) { return (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] || v.pl || "") : v; }
  function get(path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, SITE); }
  function fmtDate(iso, opts) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d)) return iso;
    return new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-GB", opts).format(d);
  }

  function applyI18n(root) {
    root = root || document;
    $$("[data-i18n]", root).forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]", root).forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $$("[data-i18n-attr]", root).forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"); if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
    $$("[data-site]", root).forEach(function (el) { el.textContent = pick(get(el.getAttribute("data-site"))) || ""; });
    $$("[data-site-href]", root).forEach(function (el) { el.setAttribute("href", get(el.getAttribute("data-site-href")) || "#"); });
  }

  function renderLists() {
    var full = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    var hd = $("#hero-date"); hd.textContent = fmtDate(SITE.date, full); hd.setAttribute("datetime", SITE.date);
    $("#footer-date").textContent = fmtDate(SITE.date, { day: "numeric", month: "long", year: "numeric" });

    $("#milestones").innerHTML = SITE.milestones.map(function (m) {
      var x = m[lang] || m.pl;
      return '<li class="reveal-item"><div class="ms__year">' + esc(pick(m.year)) + '</div><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></li>';
    }).join("");

    $("#timeline").innerHTML = SITE.schedule.map(function (s) {
      var x = s[lang] || s.pl;
      return '<li class="reveal-item"><div class="tl__time">' + esc(pick(s.time)) + '</div><div class="tl__dot"></div><div><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></div></li>';
    }).join("");

    $("#contacts").innerHTML = SITE.contacts.map(function (c) {
      var tel = String(c.phone).replace(/[^+\d]/g, "");
      return '<li><span>' + esc(c.name) + '</span><a href="tel:' + esc(tel) + '">' + esc(c.phone) + '</a></li>';
    }).join("");
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    document.documentElement.lang = l;
    renderLists();
    applyI18n();
    observeAll();
  }

  /* ---------- countdown ---------- */
  function tick() {
    var el = $("#countdown"); if (!el) return;
    var target = new Date(SITE.date).getTime(); if (isNaN(target)) return;
    var diff = target - Date.now();
    if (diff <= -36 * 3600 * 1000) { el.className = "countdown countdown--done"; el.textContent = t("count.past"); return; }
    if (diff <= 0) { el.className = "countdown countdown--done"; el.textContent = t("count.today"); return; }
    var s = Math.floor(diff / 1000);
    var v = { days: Math.floor(s / 86400), hours: Math.floor(s % 86400 / 3600), minutes: Math.floor(s % 3600 / 60), seconds: s % 60 };
    Object.keys(v).forEach(function (k) { var n = $('[data-cd="' + k + '"]', el); if (n) n.textContent = String(v[k]).padStart(k === "days" ? 1 : 2, "0"); });
  }

  /* ---------- nav ---------- */
  var nav = $("#nav"), links = $("#nav-links"), burger = $("#burger");
  function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  burger.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$("a", links).forEach(function (a) { a.addEventListener("click", function () {
    links.classList.remove("is-open"); nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = "";
  }); });
  if ("IntersectionObserver" in window) {
    var secObs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) {
        $$("a", links).forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id); });
      } });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { secObs.observe(s); });
  }
  $("#lang-toggle").addEventListener("click", function () { setLang(lang === "pl" ? "en" : "pl"); });

  /* ---------- reveal ---------- */
  var revObs = ("IntersectionObserver" in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); revObs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;
  function observeAll() {
    $$(".reveal, .reveal-item").forEach(function (el) {
      if (!revObs) { el.classList.add("is-visible"); return; }
      if (!el.classList.contains("is-visible")) revObs.observe(el);
    });
  }

  /* ---------- RSVP form ---------- */
  var form = $("#rsvp-form"), list = $("#guest-list"), tpl = $("#tpl-guest");
  function addGuest() {
    var node = tpl.content.firstElementChild.cloneNode(true);
    list.appendChild(node);
    applyI18n(node);
    renumber();
    $$('input[name="attending"]', node).forEach(function (r) { r.addEventListener("change", function () {
      node.classList.toggle("is-declined", r.value === "no" && r.checked);
    }); });
    $(".guest__remove", node).addEventListener("click", function () { node.remove(); renumber(); });
    var first = $('input[name="name"]', node); if (list.children.length > 1 && first) first.focus();
  }
  function renumber() { $$(".guest", list).forEach(function (g, i) { $(".guest__n", g).textContent = i + 1; }); }
  $("#add-guest").addEventListener("click", addGuest);
  addGuest();

  $$("[data-show-if]").forEach(function (box) {
    var cb = document.getElementById(box.getAttribute("data-show-if"));
    var sync = function () { box.classList.toggle("is-shown", cb.checked); };
    cb.addEventListener("change", sync); sync();
  });

  if (!SITE.rsvpEndpoint) { $("#rsvp-notice").hidden = false; }

  function markInvalid(input, bad) {
    var field = input.closest(".field"); if (!field) return;
    field.classList.toggle("is-invalid", bad);
    var err = $(".field__err", field);
    if (bad && !err) { err = document.createElement("span"); err.className = "field__err"; err.textContent = t("rsvp.required"); field.appendChild(err); }
    if (!bad && err) err.remove();
  }
  function validate() {
    var ok = true;
    $$("input[required]", form).forEach(function (i) {
      var bad = !i.value.trim() || (i.type === "email" && !i.checkValidity());
      markInvalid(i, bad); if (bad && ok) { i.focus(); ok = false; }
    });
    return ok;
  }
  function collect() {
    var guests = $$(".guest", list).map(function (g) {
      var attending = ($('input[name="attending"]:checked', g) || {}).value === "yes";
      return { name: $('input[name="name"]', g).value.trim(), attending: attending,
               menu: attending ? ($('input[name="menu"]:checked', g) || {}).value || "" : "",
               diet: attending ? $('input[name="diet"]', g).value.trim() : "" };
    });
    var f = form.elements;
    return {
      lang: lang, submittedAt: new Date().toISOString(), website: f.website.value,
      guests: guests, email: f.email.value.trim(), phone: f.phone.value.trim(),
      transport: f.transport.checked,
      song: f.song.value.trim(), message: f.message.value.trim(),
      userAgent: navigator.userAgent
    };
  }
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    $("#rsvp-error").hidden = true;
    if (!validate()) return;
    var data = collect();
    if (data.website) { showSuccess(data); return; } // bot: pretend
    var btn = $("#rsvp-submit"), label = $("span", btn), orig = label.textContent;
    if (!SITE.rsvpEndpoint) { $("#rsvp-notice").hidden = false; $("#rsvp-notice").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
    btn.classList.add("is-busy"); label.textContent = t("rsvp.sending");
    fetch(SITE.rsvpEndpoint, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status)); })
      .then(function (j) { if (j && j.ok) showSuccess(data); else throw new Error(j && j.error || "bad response"); })
      .catch(function () { $("#rsvp-error").hidden = false; })
      .then(function () { btn.classList.remove("is-busy"); label.textContent = orig; });
  });
  function showSuccess(data) {
    var anyYes = data.guests.some(function (g) { return g.attending; });
    form.hidden = true;
    var box = $("#rsvp-success"); box.hidden = false;
    $("#rsvp-success-text").textContent = t(anyYes ? "rsvp.success.text" : "rsvp.success.no");
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- go ---------- */
  setLang(lang);
  tick(); setInterval(tick, 1000);
})();
