import { projectsData } from '../data.js';
import { revealOnScroll } from '../utils/animations.js';

export async function renderServices(app) {
  const interiorProjects = projectsData.filter(p => p.category === 'interior');
  const exteriorProjects = projectsData.filter(p => p.category === 'exterior');

  const allInteriorImgs = interiorProjects.flatMap(p => p.images);
  const allExteriorImgs = exteriorProjects.flatMap(p => p.images);

  const interiorImages     = allInteriorImgs.slice(0, 4);
  const exteriorImages     = allExteriorImgs.slice(0, 4);
  const constructionImages = allExteriorImgs.slice(4, 8);   // further exterior shots for construction section

  const makeImgGrid = (imgs, altPrefix) => imgs.map(img => `
    <div class="service-img-wrapper">
      <img src="${img}" alt="${altPrefix} image" loading="lazy" />
    </div>
  `).join('');

  app.innerHTML = `
    <div class="page-container page-padded services-page">

      <!-- Intro panel -->
      <div class="glass-panel services-intro">
        <h1 class="page-title" data-i18n="services_title">Our Services</h1>
        <p data-i18n="services_intro" style="font-size:1.15rem; opacity:0.85; max-width:800px; margin:0 auto 1.5rem;">
          We offer comprehensive interior design solutions…
        </p>
        <div class="services-bullet-list">
          <p data-i18n="services_study"></p>
          <p data-i18n="services_residential"></p>
          <p data-i18n="services_consulting"></p>
          <p data-i18n="services_custom"></p>
          <p data-i18n="services_construction_text"></p>
        </div>
      </div>

      <!-- Interior Design -->
      <div class="service-section">
        <h2 data-i18n="interior_design">Interior Design</h2>
        <div class="service-img-grid">
          ${makeImgGrid(interiorImages, 'Interior design')}
        </div>
      </div>

      <!-- Exterior Design -->
      <div class="service-section">
        <h2 data-i18n="exterior_design">Exterior Design</h2>
        <div class="service-img-grid">
          ${makeImgGrid(exteriorImages, 'Exterior design')}
        </div>
      </div>

      <!-- Construction & Overview -->
      <div class="service-section">
        <h2 data-i18n="construction_service">Construction &amp; Overview</h2>
        <div class="service-img-grid">
          ${makeImgGrid(constructionImages, 'Construction')}
        </div>
      </div>

      <!-- Vision panel -->
      <div class="glass-panel vision-panel">
        <h2 data-i18n="services_vision_title">Vision</h2>
        <p data-i18n="services_vision_text">Reflecting your personal style…</p>
      </div>

    </div>
  `;

  // i18n renders <strong> tags via innerHTML — mark those keys
  // (they are handled in i18n.js via textContent; the <strong> is stripped but that's OK for now
  //  since the service bullets use data-i18n on <p> elements — plain text rendering)

  requestAnimationFrame(() => {
    revealOnScroll('.services-intro',  { y: 30, stagger: 0 });
    revealOnScroll('.service-section', { y: 40, stagger: 0.1 });
    revealOnScroll('.vision-panel',    { y: 30, stagger: 0 });
  });
}
