/* ─── IntersectionObserver reveals ─── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ─── Scroll-triggered behaviors ─── */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const scrollUp = document.getElementById('scroll-up');
  if (scrollUp) scrollUp.classList.toggle('show', y > 400);
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', y > 60);
}, { passive: true });

/* ─── Active nav link ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector('.nav-link[href="#' + sec.id + '"]');
      if (active) active.classList.add('active');
    }
  });
}, { passive: true });

/* ─── Mobile nav toggle ─── */
const navToggle = document.getElementById('nav-toggle');
const navLinksWrap = document.getElementById('nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinksWrap.classList.toggle('open'));
}
if (navLinksWrap) {
  navLinksWrap.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => navLinksWrap.classList.remove('open'));
  });
}

/* ─── Language toggle ─── */
const savedLang = localStorage.getItem('lang') || 'de';
applyLang(savedLang);

const btnDe = document.getElementById('btn-de');
const btnEn = document.getElementById('btn-en');
if (btnDe) btnDe.addEventListener('click', () => { applyLang('de'); localStorage.setItem('lang', 'de'); });
if (btnEn) btnEn.addEventListener('click', () => { applyLang('en'); localStorage.setItem('lang', 'en'); });

function applyLang(l) {
  if (btnDe) btnDe.classList.toggle('active', l === 'de');
  if (btnEn) btnEn.classList.toggle('active', l === 'en');
  document.documentElement.lang = l;
  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    const val = el.getAttribute('data-' + l);
    if (val) el.innerHTML = val;
  });
}
