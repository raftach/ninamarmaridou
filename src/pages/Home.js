import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data.js';
import { getLanguage, onLangChange } from '../i18n.js';
import { heroEntrance, revealOnScroll } from '../utils/animations.js';

gsap.registerPlugin(ScrollTrigger);

export async function renderHome(app) {
  // Kill any ScrollTriggers left over from a previous render
  ScrollTrigger.getAll().forEach(st => st.kill());

  const lang = getLanguage();

  // Build project slides HTML
  const projectsHTML = projectsData.map((project, idx) => {
    const imagesHTML = project.images.slice(0, 3).map((img, i) => `
      <img
        class="photo photo-${i}"
        src="${img}"
        alt="${project.title.en} view ${i + 1}"
        loading="eager"
      />
    `).join('');

    const category = project.category === 'interior'
      ? (lang === 'el' ? 'Εσωτερικός Χώρος' : 'Interior Design')
      : (lang === 'el' ? 'Εξωτερικός Χώρος' : 'Exterior Design');

    return `
      <div class="project-slide" id="project-${idx}"
           style="background-color:${project.bgColor}; color:${project.textColor || 'var(--text-color)'};">
        <div class="project-content glass-panel">
          <h3 class="project-title">${project.title[lang] || project.title.en}</h3>
          <p class="project-category" style="font-size:0.9vw; text-transform:uppercase; letter-spacing:2px;
             border:1px solid currentColor; padding:0.3rem 1rem; border-radius:20px;
             display:inline-block; margin-bottom:1.5rem;">${category}</p>
          <p class="project-desc" style="opacity:0.8;">${project.description[lang] || project.description.en}</p>
          <a href="/project/${project.id}" data-link class="btn-primary"
             style="color:inherit; border-color:inherit;" data-i18n="explore_projects">
            Explore Project
          </a>
        </div>
        <div class="project-photos">${imagesHTML}</div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="page-container home-page" style="padding:0; min-height:100vh;">

      <!-- ── Hero ── -->
      <section class="hero-section">
        <!-- Fallback image with Ken Burns animation (video overlays when delivered) -->
        <div class="hero-bg">
          <img
            class="hero-bg-img"
            src="${import.meta.env.BASE_URL}Home/spacejoy-9M66C_w_ToM-unsplash.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>
        <video class="hero-video" autoplay muted loop playsinline>
          <source src="${import.meta.env.BASE_URL}hero-video.mp4" type="video/mp4" />
        </video>
        <div class="hero-overlay" aria-hidden="true"></div>

        <div class="hero-content">
          <h1 class="page-title hero-title" data-i18n="home_hero_title">
            Crafting Spaces. Shaping Experiences.
          </h1>
          <p class="hero-subtitle" data-i18n="home_hero_subtitle">
            Interior Design &amp; Architecture by Nina Marmaridou.
          </p>
          <p class="hero-motto" data-i18n="home_motto">
            &ldquo;Designing the next chapter of your life&rdquo;
          </p>
          <p class="elevated-badge" data-i18n="elevated_identity">Elevated Interior Design</p>
          <div class="scroll-indicator" aria-hidden="true">
            <span class="scroll-indicator-text" data-i18n="scroll_to_explore">Scroll to Explore</span>
            <div class="scroll-indicator-line"></div>
          </div>
        </div>
      </section>

      <!-- ── Design Philosophy ── -->
      <section class="philosophy-section" style="padding:6rem 2rem; text-align:center; max-width:900px; margin:0 auto; position:relative; z-index:20;">
        <div class="glass-panel" style="padding:4rem;">
          <h2 class="section-title" data-i18n="home_philosophy_title"
              style="font-size:2.5rem; font-weight:300; text-transform:uppercase; letter-spacing:2px; margin-bottom:2rem;">
            Design Philosophy
          </h2>
          <p style="font-size:1.1rem; line-height:1.85; opacity:0.9;" data-i18n="home_philosophy_text">
            Nina Marmaridou's philosophy is based on the harmonious coexistence of function and aesthetics.
          </p>
        </div>
      </section>

      <!-- ── Horizontal project carousel ── -->
      <section class="story-container">
        <div class="story-wrapper" style="width:${projectsData.length * 100}vw;">
          ${projectsHTML}
        </div>
      </section>

      <!-- ── Partners ── -->
      <section class="partners-section" style="padding:5rem 2rem; text-align:center; max-width:1000px; margin:0 auto;">
        <div class="glass-panel" style="padding:4rem;">
          <h2 class="partners-title" data-i18n="partners_title" style="margin-bottom:1.5rem;">Partners</h2>
          <p data-i18n="partners_text" style="font-size:1.1rem; opacity:0.9; margin-bottom:3rem;">
            Every project is a unique design story.
          </p>
          <div style="display:flex; justify-content:center; align-items:center; gap:3rem; flex-wrap:wrap;">
            <img src="${import.meta.env.BASE_URL}partners/cma-logo.svg"  alt="CMA Logo"        class="partner-logo" />
            <img src="${import.meta.env.BASE_URL}partners/epsilon.svg"   alt="Epsilon Logo"     class="partner-logo" />
            <img src="${import.meta.env.BASE_URL}partners/florentino.svg" alt="Florentino Logo" class="partner-logo" />
          </div>
        </div>
      </section>

    </div>
  `;

  // Wait one paint to ensure DOM is fully laid out before running GSAP
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initHeroAnimations();
      initCarouselGSAP();
      initPhilosophyReveal();
    });
  });

  // Update slide text when the user switches language
  onLangChange(newLang => updateProjectSlidesLang(newLang));
}

// ─────────────────────────────────────────────────────────────────
// Hero entrance: stagger text elements on page load
// ─────────────────────────────────────────────────────────────────
function initHeroAnimations() {
  heroEntrance([
    '.hero-title',
    '.hero-subtitle',
    '.hero-motto',
    '.elevated-badge',
    '.scroll-indicator',
  ]);
}

// ─────────────────────────────────────────────────────────────────
// Scroll-reveal for the philosophy section
// ─────────────────────────────────────────────────────────────────
function initPhilosophyReveal() {
  revealOnScroll('.philosophy-section .glass-panel', { y: 50, stagger: 0 });
}

// ─────────────────────────────────────────────────────────────────
// Horizontal project carousel — GSAP ScrollTrigger
//
// Key fixes vs previous version:
//  • scrub: 1    — GSAP lerps to scroll position over 1s → no micro-jitter
//  • ease: "none" on horizontal moves — scrub provides its own easing
//  • invalidateOnRefresh — recalculates pin on window resize
//  • loading="eager" on photos — prevents lazy-load flash mid-animation
//  • xPercent formula: -(100/N)*idx  where N = project count
// ─────────────────────────────────────────────────────────────────
function initCarouselGSAP() {
  const wrapper = document.querySelector('.story-wrapper');
  if (!wrapper) return;

  const N = projectsData.length;
  const totalPhotos = projectsData.reduce((acc, p) => acc + Math.min(3, p.images.length), 0);

  // Total scroll distance: each photo transition ≈ 0.35 × viewport height
  const scrollDistance = window.innerHeight * totalPhotos * 0.35;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.story-container',
      pin: true,
      scrub: 1,               // 1-second lerp — smooth, not twitchy
      end: () => '+=' + scrollDistance,
      invalidateOnRefresh: true,
    },
  });

  // Hero fades out as user starts scrolling
  gsap.to('.hero-section', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
    },
    opacity: 0,
    scale: 0.97,
    y: -30,
  });

  projectsData.forEach((project, idx) => {
    // 1. Pan horizontally to this project (no ease — scrub provides smoothing)
    if (idx > 0) {
      tl.to(wrapper, {
        // wrapper is N×100vw wide; moving by (100/N)% of wrapper = 100vw = one slide
        xPercent: -(100 / N) * idx,
        ease: 'none',
      });
    }

    // 2. Photo transitions within this project's slide
    const photos = [...document.querySelectorAll(`#project-${idx} .photo`)];
    photos.forEach((photo, pIdx) => {
      if (pIdx === 0) {
        tl.set(photo, { yPercent: 0, autoAlpha: 1 });
      } else {
        // New photo slides up from slightly below
        tl.fromTo(
          photo,
          { yPercent: 20, autoAlpha: 0 },
          { yPercent: 0,  autoAlpha: 1, ease: 'none' }
        );
        // Previous photo fades out simultaneously
        tl.to(photos[pIdx - 1], { autoAlpha: 0, ease: 'none' }, '<');
      }
    });

    // 3. Subtle content nudge during photo change (signals transition to the reader)
    const content = document.querySelector(`#project-${idx} .project-content`);
    if (content && photos.length > 1) {
      tl.fromTo(content, { y: 0 }, { y: -6, ease: 'none', yoyo: true, repeat: 1 }, '<+0.2');
    }
  });
}

// ─────────────────────────────────────────────────────────────────
// Update slide text in-place when language changes
// ─────────────────────────────────────────────────────────────────
function updateProjectSlidesLang(lang) {
  projectsData.forEach((project, idx) => {
    const slide = document.getElementById(`project-${idx}`);
    if (!slide) return;

    const titleEl = slide.querySelector('.project-title');
    if (titleEl) titleEl.textContent = project.title[lang] || project.title.en;

    const descEl = slide.querySelector('.project-desc');
    if (descEl) descEl.textContent = project.description[lang] || project.description.en;

    const catEl = slide.querySelector('.project-category');
    if (catEl) {
      catEl.textContent = project.category === 'interior'
        ? (lang === 'el' ? 'Εσωτερικός Χώρος' : 'Interior Design')
        : (lang === 'el' ? 'Εξωτερικός Χώρος' : 'Exterior Design');
    }
  });
}
