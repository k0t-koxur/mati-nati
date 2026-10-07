/* =====================================================================
   WEDDING WEBSITE CONTENT
   This is the only file you need to edit to update the website.
   Everything marked TODO is a placeholder waiting for the real detail.
   Texts exist twice: "pl" (Polish) and "en" (English).
   ===================================================================== */

window.SITE = {
  // Names as shown in the hero and the browser tab (first name first).
  couple: { first: "Natalia", second: "Mateusz" },

  // Wedding date & time (ISO 8601 with timezone). TODO: real date.
  date: "2027-06-19T15:00:00+02:00",

  // Where guests should reply by. TODO.
  rsvpDeadline: "2027-04-30",

  // Google Apps Script "web app" URL that stores RSVPs in a Google Sheet.
  // Leave empty until set up (see README.md). The form then shows a notice.
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbwsLOggSQfNEIowVBxzZ2jNy6j1EYyjq096IYAwVLRVoDTjnIx7qbIA6QF9r_94bpjK/exec",

  defaultLang: "pl",

  hashtag: "#MatiNati2027", // TODO

  ceremony: {
    // TODO: real venue
    name: { pl: "Kościół pw. św. Anny", en: "St. Anne's Church" },
    address: "ul. Przykładowa 1, 00-000 Miasto",
    time: "15:00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ko%C5%9Bci%C3%B3%C5%82+%C5%9Bw.+Anny"
  },

  reception: {
    // TODO: real venue
    name: { pl: "Dwór pod Lipami", en: "Linden Manor" },
    address: "Lipowa 12, 00-000 Miasto",
    time: "17:00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dw%C3%B3r+pod+Lipami"
  },

  // Hotels / guesthouses nearby. TODO.
  stay: [
    { name: "Hotel Przykładowy ★★★★", distance: { pl: "5 min od sali", en: "5 min from the venue" },
      note: { pl: "Hasło „Natalia i Mateusz” = 10% zniżki", en: "Code “Natalia & Mateusz” = 10% off" },
      url: "https://example.com" },
    { name: "Pensjonat pod Dębem", distance: { pl: "10 min od sali", en: "10 min from the venue" },
      note: { pl: "Pokoje 2- i 4-osobowe", en: "Double and family rooms" },
      url: "https://example.com" }
  ],

  // Contact for questions. TODO.
  contacts: [
    { name: "Natalia", phone: "+48 000 000 000" },
    { name: "Mateusz", phone: "+48 000 000 000" }
  ],

  // Day schedule (times are strings, shown as-is). TODO.
  schedule: [
    { time: "15:00", pl: ["Ceremonia", "Przysięga w kościele"],           en: ["Ceremony", "Vows at the church"] },
    { time: "16:30", pl: ["Powitanie", "Chleb, sól i pierwszy toast"],   en: ["Welcome", "Bread, salt and the first toast"] },
    { time: "17:30", pl: ["Obiad", "Pierwsze danie i życzenia"],         en: ["Dinner", "First course and wishes"] },
    { time: "20:00", pl: ["Pierwszy taniec", "Otwieramy parkiet"],       en: ["First dance", "The dance floor opens"] },
    { time: "00:00", pl: ["Oczepiny", "Tort i zabawa do rana"],          en: ["Midnight traditions", "Cake and dancing till dawn"] },
    { time: "04:00", pl: ["Dobranoc", "Do zobaczenia na poprawinach"],   en: ["Good night", "See you at the after-party"] }
  ],

  // Our story milestones. TODO.
  milestones: [
    { year: "2019", pl: ["Poznaliśmy się", "Na urodzinach wspólnych znajomych. Jedna rozmowa, która nie chciała się skończyć."],
                    en: ["We met", "At a friend's birthday. One conversation that refused to end."] },
    { year: "2021", pl: ["Pierwsze wspólne mieszkanie", "Dwa kubki, jedna roślina i wiele planów."],
                    en: ["Our first home", "Two mugs, one plant and a lot of plans."] },
    { year: "2025", pl: ["Zaręczyny", "O zachodzie słońca, bez świadków, z jednym „tak”."],
                    en: ["The proposal", "At sunset, no witnesses, one yes."] },
    { year: "2027", pl: ["Ślub", "Z Wami. Nie moglibyśmy się bardziej cieszyć."],
                    en: ["The wedding", "With you. We couldn't be happier."] }
  ]
};

window.I18N = {
  pl: {
    "meta.title": "Natalia & Mateusz · Ślub",
    "meta.description": "Zapraszamy na nasz ślub. Wszystkie informacje dla gości i potwierdzenie obecności.",

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
    "hero.place": "Miasto, Polska", // TODO
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
    "story.lead": "Kilka lat, kilka miast i jedna decyzja, która wszystko połączyła.",

    "day.num": "II",
    "day.title": "Plan dnia",
    "day.lead": "Tak wyobrażamy sobie ten dzień. Godziny są orientacyjne, uśmiechy obowiązkowe.",

    "venue.num": "III",
    "venue.title": "Miejsce",
    "venue.lead": "Ceremonia i przyjęcie odbędą się w dwóch miejscach oddalonych o kilka minut drogi.",
    "venue.ceremony": "Ceremonia",
    "venue.reception": "Przyjęcie",
    "venue.map": "Otwórz w mapach",
    "venue.at": "godz.",

    "stay.num": "IV",
    "stay.title": "Noclegi",
    "stay.lead": "Dla gości spoza miasta zarezerwowaliśmy pulę pokoi. Rezerwujcie bezpośrednio, podając hasło.",
    "stay.book": "Zarezerwuj",
    "stay.need": "Nie wiecie, co wybrać? Zaznaczcie w formularzu, że potrzebujecie noclegu, a pomożemy.",

    "travel.num": "V",
    "travel.title": "Dojazd",
    "travel.lead": "Dojedziecie wygodnie samochodem, autokarem lub transportem publicznym.",
    "travel.bus.title": "Autokar",
    "travel.bus.text": "Zapewniamy autokar z centrum miasta do kościoła i na salę oraz powrót w nocy. Odjazd o <strong>14:00</strong> z <strong>TODO: miejsce zbiórki</strong>. Zaznaczcie w formularzu, czy skorzystacie.",
    "travel.car.title": "Samochód",
    "travel.car.text": "Przy sali jest bezpłatny parking na około 80 aut. Przy kościele parkujcie wzdłuż ulicy <strong>TODO</strong>.",
    "travel.public.title": "Pociąg i samolot",
    "travel.public.text": "Najbliższe lotnisko: <strong>TODO</strong> (45 min). Z dworca głównego zamówcie taksówkę lub dajcie znać, podeślemy kogoś po Was.",

    "info.num": "VI",
    "info.title": "Dobrze wiedzieć",
    "info.lead": "Odpowiedzi na pytania, które zwykle padają. Jeśli czegoś brakuje, po prostu napiszcie.",
    "info.dress.title": "Dress code",
    "info.dress.text": "Elegancko, ale wygodnie: wesele trwa do rana. Panie prosimy o unikanie bieli, Panów o marynarki. Kolory wiosny i lata mile widziane.",
    "info.gifts.title": "Prezenty",
    "info.gifts.text": "Waszą obecność uważamy za największy prezent. Jeśli chcecie nas obdarować, zamiast kwiatów ucieszy nas zdrapka na lotnii lub wkład do wspólnej podróży.",
    "info.kids.title": "Dzieci",
    "info.kids.text": "Kochamy Wasze dzieci i są mile widziane. Dajcie nam znać w formularzu, ile osób przyjedzie, żebyśmy mogli przygotować menu dla najmłodszych.",
    "info.photos.title": "Zdjęcia",
    "info.photos.text": "Podczas ceremonii prosimy o schowanie telefonów. Potem róbcie zdjęcia do woli i oznaczajcie je hasztagiem",
    "info.faq.title": "Częste pytania",
    "info.faq.1.q": "Czy mogę przyjść z osobą towarzyszącą?",
    "info.faq.1.a": "Jeśli zaproszenie było adresowane do dwóch osób, jak najbardziej. W razie wątpliwości napiszcie do nas.",
    "info.faq.2.q": "Do kiedy potwierdzić obecność?",
    "info.faq.2.a": "Prosimy o odpowiedź do {deadline}. Wtedy musimy podać liczbę gości i menu.",
    "info.faq.3.q": "Czy będą opcje wegetariańskie i wegańskie?",
    "info.faq.3.a": "Tak. Wybierzcie menu w formularzu i wpiszcie alergie, a kuchnia o nie zadba.",
    "info.faq.4.q": "Czy będą poprawiny?",
    "info.faq.4.a": "Tak, w niedzielę od 14:00 w tym samym miejscu. Zaproszeni są wszyscy goście weselni.",

    "rsvp.num": "VII",
    "rsvp.title": "Potwierdź obecność",
    "rsvp.lead": "Odpowiedzcie proszę do <strong>{deadline}</strong>. Wystarczy jedna odpowiedź na zaproszenie, nawet jeśli przyjeżdżacie w kilka osób.",
    "rsvp.guests": "Goście",
    "rsvp.guest": "Gość",
    "rsvp.name": "Imię i nazwisko",
    "rsvp.name.ph": "np. Anna Kowalska",
    "rsvp.attending": "Obecność",
    "rsvp.yes": "Będę",
    "rsvp.no": "Nie dam rady",
    "rsvp.menu": "Menu",
    "rsvp.menu.meat": "Mięsne",
    "rsvp.menu.fish": "Rybne",
    "rsvp.menu.veg": "Wegetariańskie",
    "rsvp.menu.vegan": "Wegańskie",
    "rsvp.menu.kid": "Dziecięce",
    "rsvp.diet": "Alergie, dieta",
    "rsvp.diet.ph": "np. bez glutenu, orzechy",
    "rsvp.addGuest": "Dodaj osobę",
    "rsvp.removeGuest": "Usuń",
    "rsvp.contact": "Kontakt",
    "rsvp.email": "E-mail",
    "rsvp.phone": "Telefon",
    "rsvp.logistics": "Logistyka",
    "rsvp.transport": "Skorzystamy z autokaru",
    "rsvp.transport.hint": "Z centrum miasta na ceremonię i z powrotem w nocy.",
    "rsvp.transportFrom": "Skąd wsiądziecie?",
    "rsvp.transportFrom.ph": "np. Dworzec Główny",
    "rsvp.stay": "Potrzebujemy noclegu",
    "rsvp.stay.hint": "Pomożemy z rezerwacją w jednym z poleconych miejsc.",
    "rsvp.nights": "Liczba nocy",
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
    "meta.description": "We're getting married. Everything our guests need to know, and the RSVP.",

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
    "hero.place": "City, Poland", // TODO
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
    "story.lead": "A few years, a few cities and one decision that tied it all together.",

    "day.num": "II",
    "day.title": "The day",
    "day.lead": "This is how we picture it. Times are approximate, smiles are mandatory.",

    "venue.num": "III",
    "venue.title": "Venue",
    "venue.lead": "The ceremony and the reception take place a few minutes' drive apart.",
    "venue.ceremony": "Ceremony",
    "venue.reception": "Reception",
    "venue.map": "Open in Maps",
    "venue.at": "at",

    "stay.num": "IV",
    "stay.title": "Where to stay",
    "stay.lead": "We've reserved a block of rooms for guests from out of town. Book directly and mention the code.",
    "stay.book": "Book",
    "stay.need": "Not sure what to pick? Tick “we need accommodation” in the form and we'll help.",

    "travel.num": "V",
    "travel.title": "Getting there",
    "travel.lead": "By car, by our coach or by public transport: all three work well.",
    "travel.bus.title": "Coach",
    "travel.bus.text": "We provide a coach from the city centre to the church and the venue, and back at night. Departure at <strong>14:00</strong> from <strong>TODO: meeting point</strong>. Let us know in the form if you'll use it.",
    "travel.car.title": "Car",
    "travel.car.text": "The venue has free parking for about 80 cars. At the church, park along <strong>TODO</strong> street.",
    "travel.public.title": "Train & plane",
    "travel.public.text": "Nearest airport: <strong>TODO</strong> (45 min). From the main station take a taxi, or tell us and we'll send someone to pick you up.",

    "info.num": "VI",
    "info.title": "Good to know",
    "info.lead": "Answers to the questions people usually ask. If something's missing, just write to us.",
    "info.dress.title": "Dress code",
    "info.dress.text": "Elegant but comfortable: Polish weddings last until dawn. Please avoid white; jackets for the gentlemen. Spring and summer colours are very welcome.",
    "info.gifts.title": "Gifts",
    "info.gifts.text": "Your presence is the greatest gift. If you'd like to give something, instead of flowers we'd love a lottery scratch card or a contribution to our honeymoon.",
    "info.kids.title": "Children",
    "info.kids.text": "We love your kids and they're welcome. Tell us in the form how many are coming so we can prepare a children's menu.",
    "info.photos.title": "Photos",
    "info.photos.text": "During the ceremony please put your phones away. Afterwards, snap away and tag your photos with",
    "info.faq.title": "FAQ",
    "info.faq.1.q": "Can I bring a plus one?",
    "info.faq.1.a": "If your invitation was addressed to two people, absolutely. If in doubt, drop us a line.",
    "info.faq.2.q": "When should I RSVP by?",
    "info.faq.2.a": "Please reply by {deadline}. That's when we confirm numbers and menus.",
    "info.faq.3.q": "Are there vegetarian and vegan options?",
    "info.faq.3.a": "Yes. Choose your menu in the form and list any allergies; the kitchen will take care of it.",
    "info.faq.4.q": "Is there an after-party?",
    "info.faq.4.a": "Yes, on Sunday from 14:00 at the same venue. All wedding guests are invited.",

    "rsvp.num": "VII",
    "rsvp.title": "RSVP",
    "rsvp.lead": "Please reply by <strong>{deadline}</strong>. One reply per invitation is enough, even if several of you are coming.",
    "rsvp.guests": "Guests",
    "rsvp.guest": "Guest",
    "rsvp.name": "Full name",
    "rsvp.name.ph": "e.g. Anna Smith",
    "rsvp.attending": "Attendance",
    "rsvp.yes": "I'll be there",
    "rsvp.no": "Can't make it",
    "rsvp.menu": "Menu",
    "rsvp.menu.meat": "Meat",
    "rsvp.menu.fish": "Fish",
    "rsvp.menu.veg": "Vegetarian",
    "rsvp.menu.vegan": "Vegan",
    "rsvp.menu.kid": "Children's",
    "rsvp.diet": "Allergies, diet",
    "rsvp.diet.ph": "e.g. gluten-free, nuts",
    "rsvp.addGuest": "Add a person",
    "rsvp.removeGuest": "Remove",
    "rsvp.contact": "Contact",
    "rsvp.email": "E-mail",
    "rsvp.phone": "Phone",
    "rsvp.logistics": "Logistics",
    "rsvp.transport": "We'll take the coach",
    "rsvp.transport.hint": "From the city centre to the ceremony and back at night.",
    "rsvp.transportFrom": "Where will you board?",
    "rsvp.transportFrom.ph": "e.g. Main Station",
    "rsvp.stay": "We need accommodation",
    "rsvp.stay.hint": "We'll help you book one of the recommended places.",
    "rsvp.nights": "Number of nights",
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
