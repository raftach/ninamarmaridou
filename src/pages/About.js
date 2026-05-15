import { revealOnScroll } from '../utils/animations.js';

export async function renderAbout(app) {
  app.innerHTML = `
    <div class="page-container page-padded about-page">
      <div class="about-layout">

        <div class="about-text-panel glass-panel">
          <h1 class="page-title" data-i18n="about_title">About Nina</h1>
          <p class="about-subtitle" data-i18n="elevated_identity">Elevated Interior Design</p>
          <div class="about-bio" data-i18n="about_text">
            <!-- Filled by i18n updateDOM with innerHTML -->
          </div>
        </div>

        <div class="about-image-panel">
          <img
            src="${import.meta.env.BASE_URL}Home/industrial.jpg"
            alt="Nina Marmaridou – Interior Designer"
            class="about-hero-img"
          />
        </div>

      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    revealOnScroll('.about-text-panel', { y: 40, stagger: 0 });
    revealOnScroll('.about-image-panel', { y: 40, stagger: 0, start: 'top 85%' });
  });
}
