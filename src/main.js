import './style.css';
import { setLanguage } from './i18n.js';
import { initRouter } from './router.js';
// scroll.js starts Lenis and wires it to GSAP's ticker — importing it is enough.
import './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // ── Language switcher ──────────────────────────────────────────────────────
  document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
  document.getElementById('lang-el').addEventListener('click', () => setLanguage('el'));

  // ── Mobile hamburger menu ──────────────────────────────────────────────────
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  function openMobileMenu() {
    mobileBtn.classList.add('active');
    mobileNav.classList.add('open');
    mobileBtn.setAttribute('aria-expanded', 'true');
    mobileBtn.setAttribute('aria-label', 'Κλείσιμο μενού');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  function closeMobileMenu() {
    mobileBtn.classList.remove('active');
    mobileNav.classList.remove('open');
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.setAttribute('aria-label', 'Άνοιγμα μενού');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ── Cookie consent ─────────────────────────────────────────────────────────
  if (!localStorage.getItem('cookiesAccepted')) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'alertdialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <span data-i18n="cookies_text">We use cookies to improve your experience.</span>
      </div>
      <button class="cookie-btn" data-i18n="cookies_accept">Accept</button>
    `;
    document.body.appendChild(banner);

    // Small delay to allow CSS transition to play
    requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add('show')));

    banner.querySelector('.cookie-btn').addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 500);
    });
  }

  // ── Boot: restore saved language (default Greek) then start router ─────────
  const savedLang = localStorage.getItem('lang') || 'el';
  setLanguage(savedLang);
  initRouter();
});
