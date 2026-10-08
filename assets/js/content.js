/* =====================================================================
   WEDDING WEBSITE CONTENT
   This is the only file you need to edit to update the website.
   Everything marked TODO is a placeholder waiting for the real detail.
   Texts exist twice: "pl" (Polish) and "en" (English).
   ===================================================================== */

window.SITE = {
  // Names as shown in the hero and the browser tab (first name first).
  couple: { first: "Natalia", second: "Mateusz" },

  // Wedding date & time (ISO 8601 with timezone): the ceremony starts at 14:00.
  date: "2027-08-02T14:00:00+02:00",

  // Where guests should reply by (for now).
  rsvpDeadline: "2027-03-01",

  // Google Apps Script "web app" URL that stores RSVPs in a Google Sheet.
  // Leave empty until set up (see README.md). The form then shows a notice.
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbx1uKTK6VekrOFkkvGKQt3yAZWUeZ-oR65v5yrZiMtnRj9Gexcvju5HYnSZXxmhCzE/exec",

  defaultLang: "pl",

  hashtag: "#MatiNati2027", // TODO: confirm or change

  // Ceremony, reception and rooms are all in one place.
  venue: {
    name: "Gościniec Nałęże",
    address: "Grabka 26, 43-384 Jaworze",
    ceremonyTime: "14:00",
    receptionTime: "15:00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Go%C5%9Bciniec+Na%C5%82%C4%99%C5%BCe%2C+Grabka+26%2C+43-384+Jaworze"
  },

  // Contact for questions. TODO: real numbers.
  contacts: [
    { name: "Natalia", phone: "+48 000 000 000" },
    { name: "Mateusz", phone: "+48 000 000 000" }
  ],

  // Day schedule. "time" is shown as-is; it can be a word instead of an hour.
  schedule: [
    { time: "14:00",                          pl: ["Ceremonia", "Mówimy sobie „tak”"],                 en: ["Ceremony", "We say “I do”"] },
    { time: { pl: "ok. 15:00", en: "c. 15:00" }, pl: ["Obiad", "Życzenia, toast i pierwsze danie"],   en: ["Dinner", "Wishes, a toast and the first course"] },
    { time: { pl: "wieczorem", en: "evening" },  pl: ["Pierwszy taniec", "Otwieramy parkiet"],        en: ["First dance", "The dance floor opens"] },
    { time: { pl: "do rana", en: "till dawn" },  pl: ["Zabawa", "Tańczymy, dopóki starczy sił"],      en: ["The party", "We dance as long as our legs allow"] }
  ],

  // Our story milestones. "year" is shown as-is; it can be a word.
  milestones: [
    { year: { pl: "Początek", en: "The start" },
      pl: ["Poznaliśmy się przez rodziców", "Jedno z rodziców, trochę przy okazji, zabrało jedno z nas do drugiego. Tak się zaczęło."],
      en: ["We met through our parents", "One of our parents, more or less by chance, brought one of us along to the other. That's how it started."] },
    { year: "2027",
      pl: ["Ślub", "W Gościńcu Nałęże, z Wami. Nie moglibyśmy się bardziej cieszyć."],
      en: ["The wedding", "At Gościniec Nałęże, with you. We couldn't be happier."] }
  ]
};

window.I18N = {
  pl: {
    "meta.title": "Natalia & Mateusz · Ślub",
    "meta.description": "Natalia i Mateusz biorą ślub 2 sierpnia 2027 w Gościńcu Nałęże w Jaworzu. Informacje dla gości i potwierdzenie obecności.",

    "nav.story": "Historia",
    "nav.day": "Plan dnia",
    "nav.venue": "Miejsce",
    "nav.stay": "Noclegi",
    "nav.travel": "Dojazd",
    "nav.info": "Informacje",
    "nav.rsvp": "Potwierdź obecność",
    "nav.menu": "Menu",
    "nav.close": "Zamknij",

    "hero.eyebrow": "Bierzemy ślub",
    "hero.and": "&",
    "hero.place": "Gościniec Nałęże · Jaworze",
    "hero.scroll": "Przewiń",
    "hero.rsvp": "Potwierdź obecność",

    "count.days": "dni",
    "count.hours": "godzin",
    "count.minutes": "minut",
    "count.seconds": "sekund",
    "count.today": "To dziś!",
    "count.past": "Dziękujemy, że byliście z nami",

    "story.num": "I",
    "story.title": "Nasza historia",
    "story.lead": "Zaczęło się od rodziców. Resztę dopisaliśmy już sami.",

    "day.num": "II",
    "day.title": "Plan dnia",
    "day.lead": "Tak wyobrażamy sobie ten dzień. Godziny są orientacyjne, uśmiechy obowiązkowe.",

    "venue.num": "III",
    "venue.title": "Miejsce",
    "venue.lead": "Ślub, wesele i noclegi w jednym miejscu: w Gościńcu Nałęże w Jaworzu, u podnóża Beskidu Śląskiego. Żadnych przejazdów między ceremonią a salą.",
    "venue.kind": "Ślub i wesele",
    "venue.ceremonyAt": "Ceremonia o",
    "venue.receptionAt": "przyjęcie ok.",
    "venue.map": "Otwórz w mapach",

    "stay.num": "IV",
    "stay.title": "Noclegi",
    "stay.lead": "Pokoje są na miejscu, w Gościńcu. Nie trzeba niczego szukać ani rezerwować.",
    "stay.text": "Pokojami dysponujemy my i zapewniamy je gościom, którzy mają do nas daleko. Jeśli nocleg jest dla Was, powiemy Wam o tym osobiście razem ze szczegółami. W formularzu nie trzeba nic zaznaczać; jeśli nie jesteście pewni, po prostu napiszcie.",

    "travel.num": "V",
    "travel.title": "Dojazd",
    "travel.lead": "Gościniec leży w Jaworzu koło Bielska-Białej. Najwygodniej dojechać autem; dla gości z Rybnika planujemy bus.",
    "travel.bus.title": "Bus z Rybnika",
    "travel.bus.text": "Dla gości z Rybnika i okolic planujemy wspólny bus na miejsce i z powrotem. Godzinę i miejsce zbiórki podamy bliżej terminu. Zaznaczcie w formularzu, czy skorzystacie, żebyśmy wiedzieli, jak duży bus zamówić.",
    "travel.car.title": "Samochód",
    "travel.car.text": "Przy Gościńcu jest bezpłatny parking. W nawigacji wpiszcie <strong>Grabka 26, Jaworze</strong>. Auto może spokojnie zostać na miejscu do rana.",
    "travel.public.title": "Komunikacja",
    "travel.public.text": "Komunikacją publiczną trudno tu dotrzeć, a w nocy wcale. Jeśli nie macie auta, skorzystajcie z busa z Rybnika albo napiszcie do nas: pomożemy znaleźć miejsce w czyimś samochodzie.",

    "info.num": "VI",
    "info.title": "Dobrze wiedzieć",
    "info.lead": "Odpowiedzi na pytania, które zwykle padają. Jeśli czegoś brakuje, po prostu napiszcie.",
    "info.dress.title": "Dress code",
    "info.dress.text": "Klimat wesela to boho: lekko, naturalnie i z polotem. Prosimy jedynie o unikanie bieli, czerwieni i czerni (to nie żałoba, to wesele). Kolory ziemi, pastele, len i kwieciste wzory mile widziane.",
    "info.gifts.title": "Prezenty",
    "info.gifts.text": "Najważniejsze jest dla nas, że będziecie. Jeśli chcecie nas obdarować, prosimy o pominięcie prezentów rzeczowych: najbardziej ucieszy nas wkład do koperty, który przeznaczymy na wspólny start.",
    "info.kids.title": "Dzieci",
    "info.kids.text": "Jeśli na zaproszeniu są dzieci, koniecznie wpiszcie je w formularzu (z menu dziecięcym) i potwierdźcie, że faktycznie przyjadą. Dzięki temu będziemy wiedzieli, ile miejsc i porcji przygotować.",
    "info.photos.title": "Zdjęcia",
    "info.photos.text": "Róbcie zdjęcia przez cały dzień i noc, ile chcecie. Będą z nami też fotograf i kamerzysta, więc prosimy tylko, żeby nie zasłaniać im kadru, zwłaszcza podczas ceremonii i pierwszego tańca. Oznaczajcie zdjęcia hasztagiem",
    "info.faq.title": "Częste pytania",
    "info.faq.1.q": "Czy mogę przyjść z osobą towarzyszącą?",
    "info.faq.1.a": "Jeśli zaproszenie było adresowane do dwóch osób, jak najbardziej. W razie wątpliwości napiszcie do nas.",
    "info.faq.2.q": "Do kiedy potwierdzić obecność?",
    "info.faq.2.a": "Prosimy o odpowiedź do {deadline}. Wtedy musimy podać liczbę gości i menu.",
    "info.faq.3.q": "Jakie będzie menu?",
    "info.faq.3.a": "Do wyboru są trzy opcje: mięsna, wegetariańska i dziecięca. Wybierzcie je w formularzu dla każdej osoby i wpiszcie alergie, a kuchnia o nie zadba.",
    "info.faq.4.q": "Czy będą poprawiny?",
    "info.faq.4.a": "Dzień po weselu planujemy jeszcze spokojne spotkanie w bardzo wąskim gronie najbliższej rodziny. Osoby, które zapraszamy, dostaną wiadomość od nas osobiście. Pozostałych prosimy, żeby za to zostali z nami na weselu do samego rana!",

    "rsvp.num": "VII",
    "rsvp.title": "Potwierdź obecność",
    "rsvp.lead": "Odpowiedzcie proszę do <strong>{deadline}</strong>. Wystarczy jedna odpowiedź na zaproszenie, nawet jeśli przyjeżdżacie w kilka osób. Dzieci wpiszcie jako osobnych gości.",
    "rsvp.guests": "Goście",
    "rsvp.guest": "Gość",
    "rsvp.name": "Imię i nazwisko",
    "rsvp.name.ph": "np. Anna Kowalska",
    "rsvp.attending": "Obecność",
    "rsvp.yes": "Będę",
    "rsvp.no": "Nie dam rady",
    "rsvp.menu": "Menu",
    "rsvp.menu.meat": "Mięsne",
    "rsvp.menu.veg": "Wegetariańskie",
    "rsvp.menu.kid": "Dziecięce",
    "rsvp.diet": "Alergie, dieta",
    "rsvp.diet.ph": "np. bez glutenu, orzechy",
    "rsvp.addGuest": "Dodaj osobę",
    "rsvp.removeGuest": "Usuń",
    "rsvp.contact": "Kontakt",
    "rsvp.email": "E-mail",
    "rsvp.phone": "Telefon",
    "rsvp.logistics": "Dojazd",
    "rsvp.transport": "Skorzystamy z busa z Rybnika",
    "rsvp.transport.hint": "Na miejsce i z powrotem. Godzinę i miejsce zbiórki podamy bliżej terminu.",
    "rsvp.extras": "Na koniec",
    "rsvp.song": "Piosenka, przy której na pewno zatańczycie",
    "rsvp.song.ph": "Tytuł i wykonawca",
    "rsvp.message": "Wiadomość dla nas",
    "rsvp.message.ph": "Wszystko, co chcecie nam przekazać",
    "rsvp.submit": "Wyślij odpowiedź",
    "rsvp.sending": "Wysyłanie…",
    "rsvp.success.title": "Dziękujemy!",
    "rsvp.success.text": "Odpowiedź dotarła. Nie możemy się doczekać, żeby Was zobaczyć.",
    "rsvp.success.no": "Będzie nam Was brakować. Dziękujemy, że daliście znać.",
    "rsvp.error": "Coś poszło nie tak. Spróbujcie ponownie lub napiszcie do nas bezpośrednio.",
    "rsvp.notConfigured": "Formularz jeszcze nie jest podłączony. Na razie potwierdźcie obecność telefonicznie.",
    "rsvp.required": "To pole jest wymagane",
    "rsvp.privacy": "Dane wykorzystamy tylko do organizacji wesela i usuniemy po jego zakończeniu.",

    "footer.sign": "Z miłością",
    "footer.questions": "Pytania? Dzwońcie lub piszcie.",
    "footer.made": "Do zobaczenia",

    "lang.switch": "Switch to English",
    "lang.label": "EN"
  },

  en: {
    "meta.title": "Natalia & Mateusz · Wedding",
    "meta.description": "Natalia and Mateusz are getting married on 2 August 2027 at Gościniec Nałęże in Jaworze, Poland. Everything our guests need to know, and the RSVP.",

    "nav.story": "Our story",
    "nav.day": "The day",
    "nav.venue": "Venue",
    "nav.stay": "Stay",
    "nav.travel": "Getting there",
    "nav.info": "Good to know",
    "nav.rsvp": "RSVP",
    "nav.menu": "Menu",
    "nav.close": "Close",

    "hero.eyebrow": "We're getting married",
    "hero.and": "&",
    "hero.place": "Gościniec Nałęże · Jaworze, Poland",
    "hero.scroll": "Scroll",
    "hero.rsvp": "RSVP",

    "count.days": "days",
    "count.hours": "hours",
    "count.minutes": "minutes",
    "count.seconds": "seconds",
    "count.today": "It's today!",
    "count.past": "Thank you for celebrating with us",

    "story.num": "I",
    "story.title": "Our story",
    "story.lead": "It began with our parents. The rest we've been writing ourselves.",

    "day.num": "II",
    "day.title": "The day",
    "day.lead": "This is how we picture it. Times are approximate, smiles are mandatory.",

    "venue.num": "III",
    "venue.title": "Venue",
    "venue.lead": "Ceremony, reception and rooms all in one place: Gościniec Nałęże in Jaworze, at the foot of the Silesian Beskids. No driving between the ceremony and the party.",
    "venue.kind": "Ceremony & reception",
    "venue.ceremonyAt": "Ceremony at",
    "venue.receptionAt": "reception from about",
    "venue.map": "Open in Maps",

    "stay.num": "IV",
    "stay.title": "Where to stay",
    "stay.lead": "The rooms are on site, at the Gościniec. Nothing to search for, nothing to book.",
    "stay.text": "The rooms are ours to allocate, and we give them to guests travelling from far away. If a room is reserved for you, we'll tell you personally, along with the details. There's nothing to tick in the form; if you're not sure, just write to us.",

    "travel.num": "V",
    "travel.title": "Getting there",
    "travel.lead": "The Gościniec is in Jaworze, near Bielsko-Biała in southern Poland. Driving is easiest; for guests from Rybnik we're arranging a minibus.",
    "travel.bus.title": "Minibus from Rybnik",
    "travel.bus.text": "For guests from Rybnik and around we're planning a shared minibus there and back. We'll announce the time and the meeting point closer to the date. Tick it in the form if you'll join, so we know what size of bus to book.",
    "travel.car.title": "Car",
    "travel.car.text": "The venue has free parking. Set your navigation to <strong>Grabka 26, Jaworze</strong>. Your car can safely stay there until morning.",
    "travel.public.title": "Public transport",
    "travel.public.text": "Public transport barely reaches the venue, and not at all at night. If you don't have a car, take the minibus from Rybnik or write to us: we'll help you find a seat in someone's car.",

    "info.num": "VI",
    "info.title": "Good to know",
    "info.lead": "Answers to the questions people usually ask. If something's missing, just write to us.",
    "info.dress.title": "Dress code",
    "info.dress.text": "The wedding has a boho feel: light, natural and relaxed. We only ask you to avoid white, red and black (it's a wedding, not a funeral). Earthy tones, pastels, linen and florals are very welcome.",
    "info.gifts.title": "Gifts",
    "info.gifts.text": "What matters most to us is that you'll be there. If you'd like to give something, please skip physical gifts: a contribution in an envelope, towards our life together, would make us happiest.",
    "info.kids.title": "Children",
    "info.kids.text": "If children are named on your invitation, please add them in the form (with the children's menu) and confirm they're really coming. That way we know how many seats and portions to prepare.",
    "info.photos.title": "Photos",
    "info.photos.text": "Take photos all day and night, as many as you like. A photographer and a videographer will be with us too, so we only ask you not to block their shot, especially during the ceremony and the first dance. Tag your photos with",
    "info.faq.title": "FAQ",
    "info.faq.1.q": "Can I bring a plus one?",
    "info.faq.1.a": "If your invitation was addressed to two people, absolutely. If in doubt, drop us a line.",
    "info.faq.2.q": "When should I RSVP by?",
    "info.faq.2.a": "Please reply by {deadline}. That's when we confirm numbers and menus.",
    "info.faq.3.q": "What's on the menu?",
    "info.faq.3.a": "There are three options: meat, vegetarian and children's. Pick one for each guest in the form and list any allergies; the kitchen will take care of it.",
    "info.faq.4.q": "Is there an after-party?",
    "info.faq.4.a": "The day after the wedding we're planning a quiet get-together with just our closest family. Those we invite will hear from us personally. Everyone else: please stay and dance with us until dawn instead!",

    "rsvp.num": "VII",
    "rsvp.title": "RSVP",
    "rsvp.lead": "Please reply by <strong>{deadline}</strong>. One reply per invitation is enough, even if several of you are coming. Add children as separate guests.",
    "rsvp.guests": "Guests",
    "rsvp.guest": "Guest",
    "rsvp.name": "Full name",
    "rsvp.name.ph": "e.g. Anna Smith",
    "rsvp.attending": "Attendance",
    "rsvp.yes": "I'll be there",
    "rsvp.no": "Can't make it",
    "rsvp.menu": "Menu",
    "rsvp.menu.meat": "Meat",
    "rsvp.menu.veg": "Vegetarian",
    "rsvp.menu.kid": "Children's",
    "rsvp.diet": "Allergies, diet",
    "rsvp.diet.ph": "e.g. gluten-free, nuts",
    "rsvp.addGuest": "Add a person",
    "rsvp.removeGuest": "Remove",
    "rsvp.contact": "Contact",
    "rsvp.email": "E-mail",
    "rsvp.phone": "Phone",
    "rsvp.logistics": "Getting there",
    "rsvp.transport": "We'll take the minibus from Rybnik",
    "rsvp.transport.hint": "There and back. Time and meeting point to be announced closer to the date.",
    "rsvp.extras": "One more thing",
    "rsvp.song": "A song that will get you on the dance floor",
    "rsvp.song.ph": "Title and artist",
    "rsvp.message": "A message for us",
    "rsvp.message.ph": "Anything you'd like to tell us",
    "rsvp.submit": "Send reply",
    "rsvp.sending": "Sending…",
    "rsvp.success.title": "Thank you!",
    "rsvp.success.text": "Your reply has arrived. We can't wait to see you.",
    "rsvp.success.no": "We'll miss you. Thank you for letting us know.",
    "rsvp.error": "Something went wrong. Please try again or contact us directly.",
    "rsvp.notConfigured": "The form isn't connected yet. For now, please RSVP by phone.",
    "rsvp.required": "This field is required",
    "rsvp.privacy": "We'll use your details only to organise the wedding and delete them afterwards.",

    "footer.sign": "With love",
    "footer.questions": "Questions? Call or write to us.",
    "footer.made": "See you there",

    "lang.switch": "Przełącz na polski",
    "lang.label": "PL"
  }
};
