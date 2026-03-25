export async function renderAbout(app) {
  app.innerHTML = `
    <div class="page-container about-page" style="padding-top: 120px; max-width: 1200px; margin: 0 auto; padding-left: 20px; padding-right: 20px; display: flex; flex-wrap: wrap; align-items: center; gap: 4rem;">
      
      <div style="flex: 1; min-width: 300px;" class="about-text-container">
         <h1 class="page-title" data-i18n="about_title" style="text-align: left; margin-top: 0; margin-bottom: 1.5rem;">About Nina</h1>
         <p style="color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8;" data-i18n="about_text">My passion for design is rooted in the belief that every space has a story to tell...</p>
      </div>

      <div style="flex: 1; min-width: 300px;" class="about-image-container">
         <img src="/Home/industrial.jpg" style="width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);" alt="About Nina" class="about-hero-img" />
      </div>

    </div>
  `;

  setTimeout(() => {
    import('gsap').then(({ gsap }) => {
      gsap.fromTo(".about-text-container", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".about-image-container", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 });
    });
  }, 100);
}
