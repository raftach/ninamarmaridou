export async function renderAbout(app) {
  app.innerHTML = `
    <div class="page-container about-page" style="padding-top: 120px; max-width: 1200px; margin: 0 auto; padding-left: 20px; padding-right: 20px; display: flex; flex-wrap: wrap; align-items: center; gap: 4rem;">
      
      <div style="flex: 1; min-width: 300px; padding: 3rem;" class="about-text-container glass-panel">
         <h1 class="page-title" data-i18n="about_title" style="text-align: left; margin-top: 0; margin-bottom: 0.5rem;">About Nina</h1>
         <p style="font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem;" data-i18n="elevated_identity">Elevated Interior Design</p>
         <p style="color: var(--text-color); opacity: 0.9; font-size: 1.1rem; line-height: 1.8;" data-i18n="about_text">My passion for design is rooted in the belief that every space has a story to tell...</p>
      </div>

      <div style="flex: 1; min-width: 300px;" class="about-image-container">
         <img src="${import.meta.env.BASE_URL}Home/industrial.jpg" style="width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);" alt="About Nina" class="about-hero-img" />
      </div>

    </div>
  `;

}
