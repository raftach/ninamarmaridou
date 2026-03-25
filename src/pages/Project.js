import { projectsData } from '../data.js';
import { getLanguage, onLangChange } from '../i18n.js';

export async function renderProject(app, projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) {
    app.innerHTML = `<h1 style="text-align:center; padding-top: 100px;">Project not found</h1>`;
    return;
  }
  
  const lang = getLanguage();
  const title = project.title[lang] || project.title.en;
  
  let imagesHTML = project.images.map(img => `
    <div class="project-detail-image" style="margin-bottom: 2rem;">
      <img src="${img}" style="width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" alt="${title} view" loading="lazy" />
    </div>
  `).join('');

  app.innerHTML = `
    <div class="page-container project-page" style="padding-top: 100px; max-width: 1000px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
      <h1 class="page-title" style="margin-top: 2rem; font-size: 3rem;">${title}</h1>
      <p style="text-align:center; max-width: 800px; margin: 0 auto; margin-bottom: 4rem; color: rgba(255,255,255,0.7); font-size: 1.2rem;">${project.description[lang] || project.description.en}</p>
      
      <div class="project-detail-gallery">
         ${imagesHTML}
      </div>
      
      <div style="text-align:center; margin-top: 4rem; margin-bottom: 4rem;">
         <a href="/" data-link class="btn-primary" style="text-decoration: none;">&larr; Back to Home</a>
      </div>
    </div>
  `;

  // We can add simple entrance GSAP animation here if we want!
  setTimeout(() => {
    import('gsap').then(({ gsap }) => {
      gsap.fromTo(".project-detail-image img", 
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
      );
    });
  }, 100);
}
