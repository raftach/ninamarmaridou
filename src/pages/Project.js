import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data.js';
import { getLanguage } from '../i18n.js';
import { revealOnScroll } from '../utils/animations.js';

gsap.registerPlugin(ScrollTrigger);

export async function renderProject(app, projectId) {
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    app.innerHTML = `
      <div class="not-found-page page-container">
        <h1>404</h1>
        <p data-i18n="project_not_found">Project not found.</p>
        <a href="/" data-link class="btn-primary" data-i18n="back_to_home">← Back to Home</a>
      </div>
    `;
    return;
  }

  const lang  = getLanguage();
  const title = project.title[lang] || project.title.en;
  const desc  = project.description[lang] || project.description.en;

  const imagesHTML = project.images.map(img => `
    <div class="project-detail-image">
      <img src="${img}" alt="${title}" loading="lazy" />
    </div>
  `).join('');

  app.innerHTML = `
    <div class="page-container page-padded medium project-page">
      <h1 class="page-title" style="margin-top:2rem;">${title}</h1>
      <p style="text-align:center; max-width:700px; margin:0 auto 4rem; font-size:1.15rem; opacity:0.8;">${desc}</p>

      <div class="project-detail-gallery">
        ${imagesHTML}
      </div>

      <div class="project-back-btn">
        <a href="/" data-link class="btn-primary" data-i18n="back_to_home">← Back to Home</a>
      </div>
    </div>
  `;

  // Staggered scroll-reveal for gallery images
  requestAnimationFrame(() => {
    revealOnScroll('.project-detail-image', { y: 40, stagger: 0.08, start: 'top 90%' });
  });
}
