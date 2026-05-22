import { gsap } from 'gsap';
import { projectsData } from '../data.js';
import { getLanguage, onLangChange } from '../i18n.js';

export function renderWork(app) {
  const lang = getLanguage();

  const cardsHTML = projectsData.map(project => {
    const coverImg = project.images[0];
    const title = project.title[lang] || project.title.en;
    const category = categoryLabel(project.category, lang);

    return `
      <a class="work-card" href="/project/${project.id}" data-link>
        <div class="work-card-img">
          <img src="${coverImg}" alt="${title}" loading="lazy" />
          <div class="work-card-info">
            <h2 class="work-card-title">${title}</h2>
            <p class="work-card-category">${category}</p>
          </div>
        </div>
      </a>
    `;
  }).join('');

  app.innerHTML = `
    <div class="work-page">

      <section class="page-hero work-hero">
        <div class="page-hero-bg">
          <img src="${import.meta.env.BASE_URL}projects/kifisia/kifisia1.jpg" alt="" aria-hidden="true" />
        </div>
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
          <span class="page-hero-eyebrow" data-i18n="nav_work">Work</span>
          <h1 class="page-hero-title" data-i18n="nav_work">Work</h1>
          <p class="page-hero-sub" data-i18n="work_hero_subtitle">A curated portfolio of residential and commercial spaces.</p>
        </div>
      </section>

      <div class="work-grid">
        ${cardsHTML}
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    gsap.from('.page-hero-content', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
  });

  onLangChange(newLang => {
    document.querySelectorAll('.work-card').forEach((card, idx) => {
      const project = projectsData[idx];
      if (!project) return;
      const titleEl = card.querySelector('.work-card-title');
      const catEl   = card.querySelector('.work-card-category');
      if (titleEl) titleEl.textContent = project.title[newLang] || project.title.en;
      if (catEl)   catEl.textContent   = categoryLabel(project.category, newLang);
    });
  });
}

function categoryLabel(category, lang) {
  if (category === 'interior') {
    return lang === 'el' ? 'Εσωτερικός Χώρος' : 'Interior Design';
  }
  return lang === 'el' ? 'Εξωτερικός Χώρος' : 'Exterior Design';
}
