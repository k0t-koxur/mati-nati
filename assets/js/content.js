/* =====================================================================
   TREŚĆ STRONY ŚLUBNEJ
   To jedyny plik, który trzeba edytować, żeby zmienić teksty i szczegóły.
   Wszystko oznaczone TODO to miejsce na prawdziwą informację.
   ===================================================================== */

window.SITE = {
  // Imiona w nagłówku i w tytule karty przeglądarki.
  couple: { first: "Natalia", second: "Mateusz" },

  // Data i godzina ślubu (ISO 8601 ze strefą): ceremonia zaczyna się o 14:00.
  date: "2027-08-02T14:00:00+02:00",

  // Do kiedy goście mają odpowiedzieć.
  rsvpDeadline: "2027-03-01",

  // Adres "aplikacji internetowej" Google Apps Script, która zapisuje odpowiedzi w arkuszu.
  // Pusty = formularz pokazuje komunikat "jeszcze nie podłączony" (patrz README.md).
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbw1z-ajevWHISRAfuY_vX3shSSNS8CAsUhQeF6evsMPQc1WBRlgDOUqEP7x_qhrXe_Z/exec",

  // Wspólny folder na zdjęcia gości (Dysk Google, "każdy z linkiem może edytować").
  // Przycisk pojawia się na stronie od daty "from" (dzień przed weselem); do tego czasu
  // goście widzą zapowiedź. Pusty "url" = zapowiedź także po tej dacie.
  photos: {
    url: "https://drive.google.com/drive/folders/1bg9kXMeAA84sQ0jz10GruBN04hv4V5xk",
    from: "2027-08-01T00:00:00+02:00"
  },

  // Ślub, wesele i noclegi są w jednym miejscu.
  venue: {
    name: "Gościniec Nałęże",
    address: "Grabka 26, 43-384 Jaworze",
    ceremonyTime: "14:00",
    receptionTime: "15:00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Go%C5%9Bciniec+Na%C5%82%C4%99%C5%BCe%2C+Grabka+26%2C+43-384+Jaworze"
  },

  // Kontakt w stopce. TODO: prawdziwe numery.
  contacts: [
    { name: "Natalia", phone: "+48 000 000 000" },
    { name: "Mateusz", phone: "+48 000 000 000" }
  ],

  // Plan dnia: "time" wyświetla się dosłownie, może być słowem zamiast godziny.
  schedule: [
    { time: "14:00",    title: "Ceremonia",       text: "Mówimy sobie „tak”. Obrączki przynosi Kola." },
    { time: "ok. 15:00", title: "Obiad",          text: "Życzenia, toast i pierwsze danie." },
    { time: "17:00",    title: "Pierwszy taniec", text: "Otwieramy parkiet." },
    { time: "do 5:00",  title: "Zabawa",          text: "Tańczymy, dopóki starczy sił." }
  ],

  // Nasza historia, chronologicznie. Pusty "year" = na stronie widać "rok do wpisania";
  // wystarczy wpisać np. "2018", żeby zniknęło.
  milestones: [
    { year: "", // TODO: rok poznania
      title: "Początek",
      text: "Poznaliśmy się przez rodziców: jedno z nich, trochę przy okazji, zabrało jedno z nas do drugiego. Minęło już dobrych kilka lat, a my dalej nie możemy się sobą nacieszyć." },
    { year: "", // TODO: rok wspólnego zamieszkania
      title: "Wspólny dom",
      text: "Zamieszkaliśmy razem. Od tej pory wszystko robimy na spółkę: zakupy, wakacje i decyzje, kto wstaje pierwszy." },
    { year: "", // TODO: rok adopcji Koli
      title: "Kola",
      text: "Pierwsza w rodzinie na czterech łapach. Czarna, cudna i mega kochana: wita każdego tak, jakby czekała na niego całe życie." },
    { year: "2025",
      title: "Zaręczyny na Maderze",
      text: "6 września, o wschodzie słońca, na szczycie góry. Padło pytanie, padła odpowiedź: tak. Potem było jeszcze trochę łez i bardzo dużo zdjęć." },
    { year: "2026",
      title: "Buba",
      text: "Dołączyła do nas w tym roku. Straszny zbój i cudowna rozrabiaka, ale miłości ma w sobie tyle, że starcza dla wszystkich." },
    { year: "2027",
      title: "Ślub",
      text: "W Gościńcu Nałęże, z Wami. Obrączki niesie Kola, a Buba pilnuje, żeby nikt się nie nudził." }
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
    "story.lead": "Trwa już dobrych kilka lat i po drodze urosła do ludzko-futrzanej rodzinki: my dwoje, Kola i Buba.",
    "story.tbd": "rok do wpisania",

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
    "info.dress.text": "Klimat wesela to boho: lekko, naturalnie i z polotem. Prosimy o unikanie bieli i czerwieni. Czerń też odpada: wiemy, że ślub to podobno koniec wolności, ale to wciąż wesele, nie pogrzeb, więc żałoby nie zakładamy. Kolory ziemi, pastele, len i kwieciste wzory mile widziane.",
    "info.gifts.title": "Prezenty",
    "info.gifts.text": "Najważniejsze jest dla nas, że będziecie. Jeśli chcecie nas obdarować, prosimy o pominięcie prezentów rzeczowych: najbardziej ucieszy nas wkład do koperty, który przeznaczymy na to, co jeszcze przed nami.",
    "info.dogs.title": "Psy",
    "info.dogs.text": "Gościniec jest psolubny, więc Kola i Buba będą z nami przez cały dzień, oczywiście w eleganckich ubrankach; Kola niesie obrączki. Jeśli chcecie przyjechać ze swoim psem, napiszcie nam o tym w wiadomości w formularzu, żebyśmy mogli dać znać obsłudze.",
    "info.kids.title": "Dzieci",
    "info.kids.text": "Jeśli na zaproszeniu są dzieci, koniecznie wpiszcie je w formularzu (z menu dziecięcym) i potwierdźcie, że faktycznie przyjadą. Dzięki temu będziemy wiedzieli, ile miejsc i porcji przygotować.",
    "info.photos.title": "Zdjęcia",
    "info.photos.text": "Róbcie zdjęcia przez cały dzień i noc, ile chcecie. Będą z nami też fotograf i kamerzysta, więc prosimy tylko, żeby nie zasłaniać im kadru, zwłaszcza podczas ceremonii i pierwszego tańca.",
    "info.photos.soon": "Dzień przed weselem pojawi się tutaj link do wspólnego folderu, do którego wrzucicie swoje zdjęcia i filmy.",
    "info.photos.open": "Wrzucajcie tu wszystko, co uchwyciliście. Nie trzeba się logować.",
    "info.photos.btn": "Wrzuć zdjęcia",
    "info.faq.title": "Częste pytania",
    "info.faq.1.q": "Czy mogę przyjść z osobą towarzyszącą?",
    "info.faq.1.a": "Jeśli zaproszenie było adresowane do dwóch osób, jak najbardziej. W razie wątpliwości napiszcie do nas.",
    "info.faq.2.q": "Do kiedy potwierdzić obecność?",
    "info.faq.2.a": "Prosimy o odpowiedź do {deadline}. Wtedy musimy podać liczbę gości i menu.",
    "info.faq.3.q": "Jakie będzie menu?",
    "info.faq.3.a": "Do wyboru są trzy opcje: mięsna, wegetariańska i dziecięca; wybierzcie je w formularzu dla każdej osoby. Do tego bar z mnóstwem drinków, z alkoholem i bez, więc każdy znajdzie coś dla siebie.",
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
    "rsvp.message.ph": "Wszystko, co chcecie nam przekazać (np. że przyjeżdżacie z psem)",
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
    "footer.made": "Do zobaczenia"
  }
};
