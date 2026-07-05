MATEUSZ PUCHAŁA — STRONA (v3)
==============================================================

CO SIĘ ZMIENIŁO W TEJ WERSJI (v3)
------------------------------------------------------------
1. FORMULARZ KONTAKTOWY — teraz Formspree (nie mailto).
   - Zarejestruj się na https://formspree.io (darmowy plan = 50 wiad./msc)
   - Utwórz nowy formularz, skopiuj endpoint (np. https://formspree.io/f/xyzabcde)
   - W pliku kontakt.html znajdź linijkę:
       action="https://formspree.io/f/TWOJ_ID"
     i podmień TWOJ_ID na swój identyfikator z Formspree.
   - Pierwszą wiadomość Formspree wyśle Ci prośbę o potwierdzenie
     adresu email — kliknij link w mailu i formularz jest aktywny.

2. CENNIK — zsynchronizowany z live (990 / 1790 / od 2690 zł).
   - Poprawiono literówki "Domenna" → "Domena", "DZIAŁALALNOSC" → "Działalność".
   - Zamieniono "Najczęściej wybierany" na "Polecany" (nie masz jeszcze
     danych o najpopularniejszym pakiecie — nie oszukujemy klienta).
   - Usunięto sprzeczność: "Domena i hosting w cenie" → "Pomoc w wyborze
     domeny i hostingu" (kupujesz na siebie, koszt roczny ~100-200 zł
     opłacasz bezpośrednio u dostawcy — spójne z działalnością nierejestrowaną).

3. REALIZACJE — zmieniona kolejność:
   - Pierwsze pokazują się TWOJE prawdziwe realizacje (dietetyk, logopeda).
   - Potem 3 koncepty demonstracyjne z lepszym opisem ("zobacz koncept →"
     zamiast "zobacz stronę →", żeby klient nie mylił z prawdziwym klientem).
   - Wszystkie karty klikalne i wskazują na prawdziwe adresy stron.

4. BUDŻET W FORMULARZU — nowe widełki dostosowane do cennika:
   - do 1000 zł · 1000-2000 · 2000-3000 · powyżej 3000 · nie wiem jeszcze
   - Wcześniej najniższy próg to było 1500 zł, przez co ludzie z małym
     budżetem odbijali się od formularza.

5. DANE KONTAKTOWE — wpisane te z live:
   - kontakt@puchala-strony.pl
   - +48 784 576 507 (telefon + WhatsApp)
   - Godziny Pn-Pt 9:00-20:00
   Jeśli któreś dane są nieaktualne, zmień w kontakt.html.

6. OG:IMAGE — wszystkie podstrony mają teraz ABSOLUTNE URL-e
   (https://puchala-strony.pl/images/og-image.jpg). Wcześniej były
   względne ("images/og-image.jpg") — Facebook, LinkedIn i inne
   crawlery tego nie akceptują. Teraz link do strony w mediach
   społecznościowych pokaże ładny podgląd.

7. CANONICAL + OG:URL — wszystkie na absolutne URL-e. Pomaga
   Googlowi zrozumieć która wersja strony jest tą "prawdziwą".

8. sitemap.xml + robots.txt — dodane w głównym katalogu.
   - Po wgraniu na serwer sprawdź: puchala-strony.pl/sitemap.xml
   - Zgłoś sitemapę w Google Search Console:
     https://search.google.com/search-console

DEPLOY (wersja jednorazowa, ręczna)
------------------------------------------------------------
Po prostu wgraj CAŁĄ zawartość folderu (index.html, css/, images/,
js/, sitemap.xml, robots.txt) do katalogu głównego swojego hostingu
(FTP / panel dostawcy). Nadpisz istniejące pliki.

Jeśli używasz Netlify/Vercel: przeciągnij folder na dashboard
lub podłącz repozytorium Git.

CO WARTO ZROBIĆ PO WDROŻENIU
------------------------------------------------------------
□ Wgrać nowe pliki na hosting (nadpisać stare)
□ Podmienić TWOJ_ID w kontakt.html na endpoint z Formspree
□ Potwierdzić mail w Formspree (pierwsza testowa wiadomość)
□ Zgłosić sitemap w Google Search Console
□ Skonfigurować Google Wizytówkę (Google Business Profile)
□ Poprosić dietetyka i logopedę o krótką opinię (2-3 zdania) —
  potem dodamy je jako sekcję "Co mówią klienci" na stronie głównej,
  to najmocniejszy element budujący zaufanie.
□ Odświeżyć podgląd na Facebooku / LinkedIn:
  https://developers.facebook.com/tools/debug/
  https://www.linkedin.com/post-inspector/
  (crawlery cachują stary podgląd — trzeba wymusić re-fetch)

STRUKTURA PLIKÓW
------------------------------------------------------------
mateusz-puchala-site/
├── index.html         → strona główna
├── o-mnie.html        → o mnie
├── realizacje.html    → portfolio (prawdziwe pierwsze!)
├── cennik.html        → 3 pakiety + FAQ
├── kontakt.html       → formularz Formspree + dane
├── robots.txt         → dla wyszukiwarek
├── sitemap.xml        → mapa strony dla Google
├── css/style.css      → wszystkie style
├── js/main.js         → mobilne menu + rok w stopce
├── images/            → grafiki i favicon
└── README.txt         → ten plik
