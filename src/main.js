import './style.css';
import { setLanguage } from './i18n.js';
import { initRouter } from './router.js';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.1, // Smooth standard scroll
});

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
  document.getElementById('lang-el').addEventListener('click', () => setLanguage('el'));
  
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileBtn.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });

  // Cookie Consent Logic
  if (!localStorage.getItem('cookiesAccepted')) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-content">
         <span data-i18n="cookies_text">We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.</span>
      </div>
      <button class="cookie-btn" data-i18n="cookies_accept">Accept</button>
    `;
    document.body.appendChild(banner);
    
    // Slight delay to allow CSS transition
    setTimeout(() => {
       banner.classList.add('show');
    }, 100);

    banner.querySelector('.cookie-btn').addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 500);
    });
  }

  setLanguage('en');
  initRouter();
});
