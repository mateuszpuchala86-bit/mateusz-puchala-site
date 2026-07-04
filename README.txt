Mateusz Puchała — strona internetowa (statyczna)
================================================

STRUKTURA
---------
index.html          strona główna
o-mnie.html         historia i sposób pracy
realizacje.html     portfolio (5 projektów)
cennik.html         3 pakiety + FAQ
kontakt.html        formularz + dane
css/style.css       wszystkie style (edytujesz tu, zmiana leci na wszystkie strony)
js/main.js          mobilne menu + rok w stopce
images/             wszystkie grafiki + favicon

URUCHOMIENIE LOKALNE
--------------------
Dwuklik na index.html — otworzy się w przeglądarce. Fonty i style
działają, bo są z Google Fonts / lokalnie.

CO MUSISZ UZUPEŁNIĆ (szukaj "UZUPEŁNIJ" w plikach)
--------------------------------------------------
1) kontakt.html   — e-mail, telefon, WhatsApp (5 miejsc)
2) cennik.html    — status VAT w FAQ (1 miejsce)
3) hero-portrait.jpg  — najlepiej podmień na Twoje prawdziwe zdjęcie
4) portfolio-*.jpg    — grafiki AI są zastępcze, docelowo wrzuć
                        prawdziwe screeny stron

FORMULARZ KONTAKTOWY
--------------------
Domyślnie ustawiony na "mailto:" — po kliknięciu Wyślij otwiera
się program pocztowy. Żeby wysyłał sam z siebie, patrz komentarz
w kontakt.html (3 opcje: Formspree / Netlify / mailto).

PUBLIKACJA W INTERNECIE
-----------------------
Najprościej za darmo:
- Netlify Drop: przeciągnij cały folder na https://app.netlify.com/drop
- Vercel: podłącz folder do github i deploy
- Cloudflare Pages: podobnie jak Vercel

Wszystko powinno działać od strzała — bez konfiguracji.

EDYCJA
------
- Kolory: css/style.css → sekcja :root na górze pliku
- Fonty: link w <head> każdej strony + zmienne w :root
- Teksty: bezpośrednio w plikach .html

Powodzenia!

--- AKTUALIZACJA ---
- Usunięto pasek metryk z index.html (liczby projektów, lata itd.).
- O mnie: bez wzmianek o "kilku latach doświadczenia".
- Cennik FAQ: rozliczenie na umowę o dzieło (działalność nierejestrowana, bez VAT). Dla przedsiębiorców to legalny koszt uzyskania przychodu — księgowa zaksięguje jak fakturę od podwykonawcy.
- Realizacje: dwie prawdziwe (dietetyk, logopeda) są klikalnymi kartami — UZUPEŁNIJ atrybut href="#" w realizacje.html na prawdziwe URL-e. Trzy pozostałe pozycje oznaczone jako "Projekt demonstracyjny".
