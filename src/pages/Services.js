import { getLanguage } from '../i18n.js';
import { projectsData } from '../data.js';

export async function renderServices(app) {
  const interiorProjects = projectsData.filter(p => p.category === 'interior');
  const exteriorProjects = projectsData.filter(p => p.category === 'exterior');

  // get first 4 images for each category
  const interiorImages = interiorProjects.flatMap(p => p.images).slice(0, 4);
  const exteriorImages = exteriorProjects.flatMap(p => p.images).slice(0, 4);

  let interiorHTML = interiorImages.map(img => `
    <div class="service-img-wrapper" style="overflow:hidden; border-radius: 12px; margin-bottom: 2rem;">
       <img src="${img}" style="width: 100%; height: 300px; object-fit: cover; transition: transform 0.5s;" alt="Interior Service" loading="lazy" />
    </div>
  `).join('');

  let exteriorHTML = exteriorImages.map(img => `
    <div class="service-img-wrapper" style="overflow:hidden; border-radius: 12px; margin-bottom: 2rem;">
       <img src="${img}" style="width: 100%; height: 300px; object-fit: cover; transition: transform 0.5s;" alt="Exterior Service" loading="lazy" />
    </div>
  `).join('');

  // Fallback images for Construction if no category matches
  const constructionImages = [
     `${import.meta.env.BASE_URL}services/services-modern-house-with-garden-swimming-pool-and-wooden.jpg`,
     `${import.meta.env.BASE_URL}services/services-modern-outdoor-living-space-with-white-furniture.jpg`
  ];
  let constructionHTML = constructionImages.map(img => `
    <div class="service-img-wrapper" style="overflow:hidden; border-radius: 12px; margin-bottom: 2rem;">
       <img src="${img}" style="width: 100%; height: 300px; object-fit: cover; transition: transform 0.5s;" alt="Construction Service" loading="lazy" />
    </div>
  `).join('');

  app.innerHTML = `
    <div class="page-container services-page" style="padding-top: 120px; max-width: 1200px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
      <h1 class="page-title" data-i18n="services_title" style="margin-top: 0;">Our Services</h1>
      <p style="text-align:center; max-width: 800px; margin: 0 auto; padding-bottom: 4rem; color: var(--text-color); opacity: 0.7; font-size: 1.2rem;" data-i18n="services_desc">We offer full-cycle interior design...</p>
      
      <div class="services-sections">
        <div class="service-section" style="margin-bottom: 5rem;">
           <h2 data-i18n="interior_design" style="font-size: 2.5rem; font-weight: 300; margin-bottom: 2rem; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 1rem;">Interior Design</h2>
           <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
             ${interiorHTML}
           </div>
        </div>

        <div class="service-section" style="margin-bottom: 5rem;">
           <h2 data-i18n="exterior_design" style="font-size: 2.5rem; font-weight: 300; margin-bottom: 2rem; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 1rem;">Exterior Design</h2>
           <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
             ${exteriorHTML}
           </div>
        </div>

        <div class="service-section" style="margin-bottom: 5rem;">
           <h2 data-i18n="construction_service" style="font-size: 2.5rem; font-weight: 300; margin-bottom: 2rem; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 1rem;">Construction & Overview</h2>
           <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
             ${constructionHTML}
           </div>
        </div>
      </div>
    </div>
  `;
}
