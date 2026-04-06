import { getLanguage } from '../i18n.js';

export async function renderServices(app) {
  const images = [
    `${import.meta.env.BASE_URL}services/services-coffee-table.jpg`,
    `${import.meta.env.BASE_URL}services/services-mediterranean-villa-interior-and-exterior-design.jpg`,
    `${import.meta.env.BASE_URL}services/services-modern-house-with-garden-swimming-pool-and-wooden.jpg`,
    `${import.meta.env.BASE_URL}services/services-modern-outdoor-living-space-with-white-furniture.jpg`
  ];

  let galleryHTML = images.map(img => `
    <div class="service-img-wrapper" style="overflow:hidden; border-radius: 12px; margin-bottom: 2rem;">
       <img src="${img}" style="width: 100%; height: 300px; object-fit: cover; transition: transform 0.5s;" alt="Service Image" />
    </div>
  `).join('');

  app.innerHTML = `
    <div class="page-container services-page" style="padding-top: 120px; max-width: 1200px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
      <h1 class="page-title" data-i18n="services_title" style="margin-top: 0;">Our Services</h1>
      <p style="text-align:center; max-width: 800px; margin: 0 auto; padding-bottom: 4rem; color: rgba(255,255,255,0.7); font-size: 1.2rem;" data-i18n="services_desc">We offer full-cycle interior design...</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
         ${galleryHTML}
      </div>
    </div>
  `;

}
