import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data.js';
import { getLanguage, onLangChange } from '../i18n.js';

gsap.registerPlugin(ScrollTrigger);

let scrollTriggers = [];

export async function renderHome(app) {
  ScrollTrigger.getAll().forEach(st => st.kill());
  scrollTriggers = [];

  const lang = getLanguage();

  let projectsHTML = ``;
  projectsData.forEach((project, idx) => {
    let imagesHTML = project.images.map((img, i) => `
      <img class="photo photo-${i}" src="${img}" alt="${project.title.en} view ${i}" loading="lazy" />
    `).join('');

    projectsHTML += `
      <div class="project-slide" id="project-${idx}" style="background-color: ${project.bgColor}; color: ${project.textColor || 'var(--text-color)'};">
        <div class="project-content">
           <h3 class="project-title">${project.title[lang] || project.title.en}</h3>
           <p class="project-desc" style="color: inherit; opacity: 0.8;">${project.description[lang] || project.description.en}</p>
           <a href="/project/${project.id}" data-link class="btn-primary" style="color: inherit; border-color: inherit;" data-i18n="explore_projects">Explore Project</a>
        </div>
        <div class="project-photos">
           ${imagesHTML}
        </div>
      </div>
    `;
  });

  app.innerHTML = `
    <div class="page-container home-page" style="padding: 0; min-height: 100vh;">
      
      <!-- Hero -->
      <section class="hero-section" style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: relative; z-index: 10; background: var(--bg-color);">
        <h1 class="page-title hero-title" style="margin-top: 0; font-size: 5vw;" data-i18n="home_hero_title">Crafting Spaces. Shaping Experiences.</h1>
        <p class="subtitle hero-subtitle" style="font-size: 1.5vw; color: rgba(255,255,255,0.7);" data-i18n="home_hero_subtitle">Interior Design & Architecture by Nina Marmaridou.</p>
        <p class="motto hero-motto" style="font-size: 1.2vw; margin-top: 1rem; font-style: italic; color: var(--accent-color);" data-i18n="home_motto">“Designing the next chapter of your life”</p>
        <div class="scroll-indicator" style="margin-top: 3rem; opacity: 0.5;">
           <span style="display:block; margin-bottom: 10px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px;">Scroll to Explore</span>
           <div class="line" style="width: 1px; height: 50px; background: #fff; margin: 0 auto;"></div>
        </div>
      </section>

      <!-- Horizontal scrolling container -->
      <section class="story-container">
         <div class="story-wrapper" style="width: ${projectsData.length * 100}vw;">
            ${projectsHTML}
         </div>
      </section>

      <!-- Partners Section -->
      <section class="partners-section" style="padding: 5rem 0; text-align: center;">
        <h2 class="partners-title" data-i18n="partners_title" style="margin-bottom: 2rem;">Partners</h2>
        <div class="partners-grid" style="display: flex; justify-content: center; align-items: center; gap: 3rem; flex-wrap: wrap;">
          <img src="${import.meta.env.BASE_URL}partners/cma-logo.svg" alt="CMA Logo" class="partner-logo" style="height: 50px;" />
          <img src="${import.meta.env.BASE_URL}partners/epsilon.svg" alt="Epsilon Logo" class="partner-logo" style="height: 50px;" />
          <img src="${import.meta.env.BASE_URL}partners/florentino.svg" alt="Florentino Logo" class="partner-logo" style="height: 50px;" />
        </div>
      </section>

    </div>
  `;

  setTimeout(() => {
    initGSAP();
  }, 100);

  onLangChange((newLang) => {
    // Only basic update
  });
}

function initGSAP() {
  const wrapper = document.querySelector('.story-wrapper');
  if (!wrapper) return;

  const totalImages = projectsData.reduce((acc, p) => acc + p.images.length, 0);
  const scrollDistance = window.innerHeight * totalImages * 0.3; // Much slower scroll

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".story-container",
      pin: true,
      scrub: 2, // Smooth catch-up
      end: () => "+=" + scrollDistance 
    }
  });

  scrollTriggers.push(ScrollTrigger.getById('story-container'));
  
  // Animate hero disappearance
  gsap.to(".hero-section", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    opacity: 0,
    y: -100
  });

  // Storyline logic
  projectsData.forEach((project, idx) => {
    // 1. Move horizontally to this project
    if (idx > 0) {
      tl.to(wrapper, {
        xPercent: -100 * idx / projectsData.length,
        ease: "power2.inOut"
      });
    }
    
    // 2. Y-axis story: photos appearing
    const photos = document.querySelectorAll(`#project-${idx} .photo`);
    photos.forEach((photo, pIdx) => {
      if (pIdx === 0) {
        tl.set(photo, { yPercent: 0, autoAlpha: 1 });
      } else {
        tl.fromTo(photo, 
          { yPercent: 100, autoAlpha: 0, scale: 1.1 }, 
          { yPercent: 0, autoAlpha: 1, scale: 1, ease: "power2.out" }
        );
        tl.to(photos[pIdx - 1], { autoAlpha: 0, scale: 0.9, ease: "power2.in" }, "<");
      }
    });

    // Subtile text animation during photo change
    const content = document.querySelector(`#project-${idx} .project-content`);
    if (photos.length > 1) {
       // just add a slight delay in timeline to appreciate the text
       tl.to(content, { y: -10, duration: 0.2, yoyo: true, repeat: 1 }, "<");
    }
  });
}
