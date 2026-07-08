/* Mateusz Puchała — minimalny JS: mobilne menu + rok w stopce */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // zamknij po kliknięciu linku
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }
  // automatyczny rok w stopce
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // formularz kontaktowy (Formspree) — wysyłka bez przeładowania strony
  const form = document.getElementById('formularz');
  const status = form ? form.querySelector('.form-status') : null;
  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      status.hidden = true;
      status.className = 'form-status';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          form.reset();
          form.querySelectorAll('.form-field, .form-row').forEach((el) => (el.hidden = true));
          submitBtn.hidden = true;
          status.textContent = 'Dziękuję za wiadomość! Odezwę się tego samego dnia.';
          status.classList.add('form-status--success');
        } else {
          status.textContent = 'Coś poszło nie tak. Spróbuj ponownie lub napisz na kontakt@puchala-strony.pl.';
          status.classList.add('form-status--error');
          submitBtn.disabled = false;
        }
      } catch {
        status.textContent = 'Brak połączenia. Spróbuj ponownie lub napisz na kontakt@puchala-strony.pl.';
        status.classList.add('form-status--error');
        submitBtn.disabled = false;
      }

      status.hidden = false;
    });
  }
})();
