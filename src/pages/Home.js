import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data.js';
import { getLanguage, onLangChange } from '../i18n.js';
import { heroEntrance, revealOnScroll } from '../utils/animations.js';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────
// Project scroll section — split editorial, GSAP horizontal scroll
// ─────────────────────────────────────────────────────────────────
function buildProjScrollHTML(projects, lang) {
  const catLabel = (p) => p.category === 'interior'
    ? (lang === 'el' ? 'Εσωτερικός Χώρος' : 'Interior Design')
    : (lang === 'el' ? 'Εξωτερικός Χώρος' : 'Exterior Design');

  const N = projects.length;

  const slides = projects.map((p, idx) => {
    const title = p.title[lang] || p.title.en;
    const desc  = (p.description[lang] || p.description.en).split('.')[0] + '.';
    const cat   = catLabel(p);
    const num   = String(idx + 1).padStart(2, '0');
    return `
      <div class="proj-scroll-slide" data-project-id="${p.id}">
        <div class="proj-scroll-text">
          <span class="proj-num">${num}</span>
          <p class="proj-cat">${cat}</p>
          <h2 class="proj-scroll-title">${title}</h2>
          <p class="proj-desc">${desc}</p>
          <a href="/project/${encodeURIComponent(p.id)}" data-link class="proj-scroll-cta">Explore Project →</a>
        </div>
        <div class="proj-scroll-img">
          <img src="${p.images[0]}" alt="${title}" loading="eager" />
        </div>
      </div>`;
  }).join('');

  return `
    <section class="proj-scroll-section">
      <div class="proj-scroll-container">
        <div class="proj-scroll-wrapper" style="width:calc(${N} * (100vw - var(--frame) * 2))">
          ${slides}
        </div>
        <div class="proj-scroll-progress">
          ${projects.map((_, i) => `<span class="proj-scroll-dot${i === 0 ? ' active' : ''}"></span>`).join('')}
        </div>
      </div>
    </section>`;
}

export async function renderHome(app) {
  // Kill any ScrollTriggers left over from a previous render
  ScrollTrigger.getAll().forEach(st => st.kill());

  const lang = getLanguage();


  app.innerHTML = `
    <div class="home-page">

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

        <div class="hero-bottom">
          <!-- Left: title + subtitle -->
          <div class="hero-content">
            <h1 class="page-title hero-title">
              <span data-i18n="home_hero_title_1">Crafting Spaces.</span>
              <span data-i18n="home_hero_title_2">Shaping Experiences.</span>
            </h1>
            <p class="hero-subtitle">
              <span data-i18n="home_hero_subtitle_pre">Interior Design &amp; Architecture by </span><strong class="hero-name" data-i18n="home_hero_name">Nina Marmaridou.</strong>
            </p>
          </div>
          <!-- Center: scroll indicator -->
          <div class="scroll-indicator" aria-hidden="true">
            <span class="scroll-indicator-text" data-i18n="scroll_to_explore">Scroll to Explore</span>
            <svg class="scroll-indicator-arrow" width="22" height="38" viewBox="0 0 22 38" fill="none" aria-hidden="true">
              <line x1="11" y1="0" x2="11" y2="24" stroke="rgba(255,255,255,0.55)" stroke-width="1"/>
              <path d="M3 18 L11 27 L19 18" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- Right: badge -->
          <div class="hero-right">
            <p class="elevated-badge" data-i18n="elevated_identity">Elevated Interior Design</p>
          </div>
        </div>
      </section>

      <!-- ── Design Philosophy ── -->
      <section class="philosophy-section">
        <div class="philosophy-inner">
          <div class="philosophy-left">
            <span class="philosophy-eyebrow" data-i18n="philosophy_eyebrow">Design Philosophy</span>
            <h2 class="philosophy-heading" data-i18n="home_philosophy_title">Crafting Spaces That Tell Your Story</h2>
          </div>
          <div class="philosophy-right">
            <p class="philosophy-body" data-i18n="home_philosophy_text">
              Nina Marmaridou's philosophy is rooted in the harmonious coexistence of function and aesthetics — where every line, material, and light source serves both purpose and beauty. Each project begins with listening: understanding how a space will be lived in, felt, and remembered.
            </p>
            <a href="/work" data-link class="philosophy-cta" data-i18n="explore_projects">Explore Projects</a>
          </div>
        </div>
      </section>

      <!-- ── Project scroll ── -->
      ${buildProjScrollHTML(projectsData, lang)}

      <!-- ── Before / After ── -->
      ${(() => {
        const ba = projectsData.find(p => p.beforeAfter)?.beforeAfter;
        return ba ? `
        <section class="before-after-section">
          <div class="before-after-header">
            <h2 class="section-title" data-i18n="before_after_title">Before &amp; After</h2>
            <p class="before-after-subtitle" data-i18n="before_after_subtitle">Drag to explore the transformation.</p>
          </div>
          <div class="compare-slider" id="compare-slider">
            <div class="compare-after">
              <img src="${ba.after}"  alt="After renovation"  draggable="false" />
            </div>
            <div class="compare-before">
              <img src="${ba.before}" alt="Before renovation" draggable="false" />
            </div>
            <div class="compare-handle" id="compare-handle">
              <span class="compare-line"></span>
              <span class="compare-diamond"></span>
            </div>
            <span class="compare-label compare-label-before" data-i18n="before_label">Before</span>
            <span class="compare-label compare-label-after"  data-i18n="after_label">After</span>
          </div>
        </section>` : '';
      })()}

      <!-- ── Partners ── -->
      <section class="partners-section">
        <div class="partners-inner">
          <p class="partners-eyebrow" data-i18n="partners_eyebrow">Trusted Partners</p>
          <h2 class="partners-title" data-i18n="partners_title">Our Partners</h2>
          <p class="partners-subtitle" data-i18n="partners_text">Collaborating with leading brands to deliver exceptional spaces.</p>
          <div class="partners-logos">
            <img src="${import.meta.env.BASE_URL}partners/cma-logo.svg"   alt="CMA"        class="partner-logo" />
            <img src="${import.meta.env.BASE_URL}partners/epsilon.svg"    alt="Epsilon"    class="partner-logo" />
            <img src="${import.meta.env.BASE_URL}partners/florentino.svg" alt="Florentino" class="partner-logo" />
          </div>
        </div>
      </section>

    </div>
  `;

  // Wait one paint to ensure DOM is fully laid out before running GSAP
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initHeroAnimations();
      initHeroFadeOut();
      initProjScroll();
      initPhilosophyReveal();
      initBeforeAfterSlider();
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
    '.scroll-indicator',
    '.elevated-badge',
  ]);
}

// ─────────────────────────────────────────────────────────────────
// Scroll-reveal for the philosophy section
// ─────────────────────────────────────────────────────────────────
function initPhilosophyReveal() {
  revealOnScroll('.philosophy-inner', { y: 50, stagger: 0 });
}

// ─────────────────────────────────────────────────────────────────
// Project scroll — GSAP horizontal pin
// ─────────────────────────────────────────────────────────────────
function initProjScroll() {
  const wrapper = document.querySelector('.proj-scroll-wrapper');
  if (!wrapper) return;

  const N    = projectsData.length;
  const dots = [...document.querySelectorAll('.proj-scroll-dot')];
  const scrollDistance = window.innerHeight * N * 0.9;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.proj-scroll-container',
      pin: true,
      scrub: 1,
      end: () => '+=' + scrollDistance,
      invalidateOnRefresh: true,
      snap: {
        snapTo: N > 1 ? 1 / (N - 1) : 1,
        duration: { min: 0.3, max: 0.6 },
        delay: 0.1,
        ease: 'power2.inOut',
      },
      onUpdate: self => {
        const idx = Math.round(self.progress * (N - 1));
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      },
    },
  });

  projectsData.forEach((_, idx) => {
    if (idx > 0) tl.to(wrapper, { xPercent: -(100 / N) * idx, ease: 'none' });
  });
}

// ─────────────────────────────────────────────────────────────────
// Hero fades out as the user starts scrolling
// ─────────────────────────────────────────────────────────────────
function initHeroFadeOut() {
  gsap.to('.hero-section', {
    scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.6 },
    opacity: 0, scale: 0.97, y: -30,
  });
}

// ─────────────────────────────────────────────────────────────────
// Update scroll-section text in-place on language switch
// ─────────────────────────────────────────────────────────────────
function updateProjectSlidesLang(lang) {
  projectsData.forEach(project => {
    const slide = document.querySelector(`.proj-scroll-slide[data-project-id="${project.id}"]`);
    if (!slide) return;
    const titleEl = slide.querySelector('.proj-scroll-title');
    const catEl   = slide.querySelector('.proj-cat');
    const descEl  = slide.querySelector('.proj-desc');
    if (titleEl) titleEl.textContent = project.title[lang] || project.title.en;
    if (catEl)   catEl.textContent   = project.category === 'interior'
      ? (lang === 'el' ? 'Εσωτερικός Χώρος' : 'Interior Design')
      : (lang === 'el' ? 'Εξωτερικός Χώρος' : 'Exterior Design');
    if (descEl)  descEl.textContent  = (project.description[lang] || project.description.en).split('.')[0] + '.';
  });
}

// ─────────────────────────────────────────────────────────────────
// Before / After drag slider
// ─────────────────────────────────────────────────────────────────
function initBeforeAfterSlider() {
  const slider = document.getElementById('compare-slider');
  if (!slider) return;

  const beforeEl = slider.querySelector('.compare-before');
  const handle   = document.getElementById('compare-handle');
  let dragging   = false;

  function setPos(clientX) {
    const { left, width } = slider.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - left) / width) * 100));
    beforeEl.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = `${pct}%`;
  }

  // Start at 50 %
  setPos(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width / 2);

  slider.addEventListener('mousedown',  (e) => { dragging = true; setPos(e.clientX); });
  window.addEventListener('mousemove',  (e) => { if (dragging) setPos(e.clientX); });
  window.addEventListener('mouseup',    ()  => { dragging = false; });

  slider.addEventListener('touchstart', (e) => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
  slider.addEventListener('touchmove',  (e) => { if (dragging) { e.preventDefault(); setPos(e.touches[0].clientX); } }, { passive: false });
  slider.addEventListener('touchend',   ()  => { dragging = false; });
}
