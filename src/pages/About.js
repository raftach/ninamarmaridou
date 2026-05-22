import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealOnScroll } from '../utils/animations.js';

gsap.registerPlugin(ScrollTrigger);

export async function renderAbout(app) {
  app.innerHTML = `
    <div class="about-page">

      <!-- Hero Header -->
      <section class="about-hero">
        <div class="about-hero-bg">
          <img src="${import.meta.env.BASE_URL}Home/industrial.jpg" alt="Nina Marmaridou Studio" />
        </div>
        <div class="about-hero-overlay"></div>
        <div class="about-hero-content">
          <span class="about-eyebrow" data-i18n="nav_about">About</span>
          <h1 class="about-hero-title" data-i18n="about_title">Nina Marmaridou</h1>
          <p class="about-hero-sub">Interior Designer &amp; Architect</p>
        </div>
      </section>

      <!-- Bio section -->
      <section class="about-bio-section">
        <div class="about-bio-grid">
          <div class="about-bio-text">
            <span class="about-section-label">Profile</span>
            <h2 class="about-bio-heading" data-i18n="about_title">About Nina</h2>
            <div class="about-bio-body" data-i18n="about_text">
              <p>Nina Marmaridou is a Greek interior designer and architect based in Thessaloniki, with over a decade of experience transforming residential and commercial spaces into thoughtful, timeless environments.</p>
              <p>Her approach blends classical proportions with contemporary sensibility — always guided by the client's vision and the unique character of each space. From concept to completion, Nina oversees every phase of the design process with meticulous attention to detail.</p>
              <p>Nina has worked on projects across Athens, Thessaloniki, and the wider Greek countryside, earning recognition for her ability to balance warmth and sophistication in equal measure.</p>
            </div>
            <a href="/contact" data-link class="about-cta" data-i18n="nav_contact">Get In Touch</a>
          </div>
          <div class="about-bio-image">
            <img src="${import.meta.env.BASE_URL}Home/industrial.jpg" alt="Nina Marmaridou" />
          </div>
        </div>
      </section>

      <!-- Philosophy quote -->
      <section class="about-quote-section">
        <blockquote class="about-quote">
          <p data-i18n="about_quote">"Designing the next chapter of your life — one space at a time."</p>
          <cite data-i18n="about_quote_cite">— Nina Marmaridou</cite>
        </blockquote>
      </section>

      <!-- Credentials -->
      <section class="about-credentials">
        <div class="about-credentials-grid">
          <div class="about-credential">
            <span class="about-credential-number">10+</span>
            <span class="about-credential-label" data-i18n="about_credential_years">Years of Experience</span>
          </div>
          <div class="about-credential">
            <span class="about-credential-number">50+</span>
            <span class="about-credential-label" data-i18n="about_credential_projects">Projects Completed</span>
          </div>
          <div class="about-credential">
            <span class="about-credential-number">3</span>
            <span class="about-credential-label" data-i18n="about_credential_awards">Design Awards</span>
          </div>
          <div class="about-credential">
            <span class="about-credential-number">2</span>
            <span class="about-credential-label" data-i18n="about_credential_cities">Cities</span>
          </div>
        </div>
      </section>

    </div>
  `;

  requestAnimationFrame(() => {
    gsap.from('.about-hero-content', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    revealOnScroll('.about-bio-text',        { y: 40, stagger: 0 });
    revealOnScroll('.about-bio-image',       { y: 40, stagger: 0, start: 'top 85%' });
    revealOnScroll('.about-quote-section',   { y: 30, stagger: 0 });
    revealOnScroll('.about-credential',      { y: 30, stagger: 0.1 });
  });
}
