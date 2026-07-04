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
})();
