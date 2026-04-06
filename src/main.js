import './style.css';
import { setLanguage } from './i18n.js';
import { initRouter } from './router.js';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  autoRaf: false,
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


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

  setLanguage('en');
  initRouter();
});
