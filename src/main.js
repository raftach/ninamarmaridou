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

  // ── Full-screen hamburger menu ─────────────────────────────────────────────
  const menuBtn   = document.getElementById('mobile-menu-btn');
  const fMenu     = document.getElementById('fullscreen-menu');
  const fClose    = document.getElementById('fmenu-close');

  function openMenu() {
    fMenu.classList.add('is-open');
    fMenu.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    fMenu.classList.add('is-closing');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.classList.remove('active');
    document.body.classList.remove('menu-open');
    setTimeout(() => {
      fMenu.classList.remove('is-open', 'is-closing');
      fMenu.setAttribute('aria-hidden', 'true');
    }, 750);
  }

  menuBtn.addEventListener('click', () => fMenu.classList.contains('is-open') ? closeMenu() : openMenu());
  fClose.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // Close when a nav link inside the menu is clicked
  fMenu.querySelectorAll('.fmenu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
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
