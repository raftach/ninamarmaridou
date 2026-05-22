import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data.js';
import { getLanguage, onLangChange, dict } from '../i18n.js';

gsap.registerPlugin(ScrollTrigger);

function catLabel(cat, lang) {
  const map = {
    interior: { en: 'Interior Design', el: 'Εσωτερική Διακόσμηση' },
    exterior: { en: 'Exterior Design', el: 'Εξωτερική Διακόσμηση' },
  };
  return map[cat]?.[lang] ?? cat;
}

function navBtn(project, lang, side) {
  if (!project) return '';
  const t   = project.title[lang] || project.title.en;
  const img = project.images[0];
  const arrow = side === 'prev' ? '←' : '→';
  const label = dict[side === 'prev' ? 'prev_project' : 'next_project'][lang];
  const preview = `
    <div class="proj-nav-preview">
      <img src="${img}" alt="${t}" loading="lazy" />
      <span class="proj-nav-preview-title">${t}</span>
    </div>`;
  const arrowEl = `<span class="proj-nav-arrow" aria-hidden="true">${arrow}</span>`;
  return `
    <a href="/project/${encodeURIComponent(project.id)}" data-link
       class="proj-nav-btn proj-nav-${side}" aria-label="${label}: ${t}">
      ${side === 'prev' ? arrowEl + preview : preview + arrowEl}
    </a>`;
}

function buildCarousel(images, title, id) {
  if (!images.length) return '';
  const slides = images.map(src =>
    `<div class="proj-carousel-slide"><img src="${src}" alt="${title}" loading="lazy" /></div>`
  ).join('');
  return `
    <div class="proj-carousel" id="${id}">
      <div class="proj-carousel-track">${slides}</div>
      <button class="proj-carousel-btn proj-carousel-prev" aria-label="Previous">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="proj-carousel-btn proj-carousel-next" aria-label="Next">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div class="proj-carousel-dots" id="${id}-dots"></div>
    </div>`;
}

function buildTextImg(img, text, title, rev) {
  if (!img) return '';
  return `
    <section class="proj-text-img${rev ? ' proj-text-img--rev' : ''}">
      <div class="proj-text-img-text"><p>${text}</p></div>
      <div class="proj-text-img-image"><img src="${img}" alt="${title}" loading="lazy" /></div>
    </section>`;
}

function buildImageSeries(imgs, title) {
  if (!imgs.length) return '';
  const imgTags = imgs.map(src => `
    <div class="proj-series-item">
      <img src="${src}" alt="${title}" loading="lazy" />
    </div>`).join('');
  return `<section class="proj-series">${imgTags}</section>`;
}

export async function renderProject(app, projectId) {
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    app.innerHTML = `
      <div class="not-found-page page-container">
        <h1>404</h1>
        <p data-i18n="project_not_found">Project not found.</p>
        <a href="/" data-link class="btn-primary" data-i18n="back_to_home">← Back to Home</a>
      </div>`;
    return;
  }

  const lang  = getLanguage();
  const idx   = projectsData.indexOf(project);
  const prevP = idx > 0 ? projectsData[idx - 1] : null;
  const nextP = idx < projectsData.length - 1 ? projectsData[idx + 1] : null;

  const title = project.title[lang]       || project.title.en;
  const desc  = project.description[lang] || project.description.en;
  const cat   = catLabel(project.category, lang);
  const imgs  = project.images;

  // Related: same category, not self, max 3
  const related = projectsData
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  // ── Image distribution ────────────────────────────────────────────────────
  // imgs[0] = hero cover
  const rest = imgs.slice(1);
  const carousel1Imgs = rest.slice(0, 6);        // main carousel
  const textImgSrc    = rest[6] ?? null;         // image beside text
  const carousel2Imgs = rest.slice(7, 13);       // sketches carousel
  const seriesImgs    = rest.slice(13, 19);      // final image series

  // Split description
  const sentences = desc.match(/[^.!?]+[.!?]+/g) ?? [desc];
  const half      = Math.ceil(sentences.length / 2);
  const text1     = sentences.slice(0, half).join(' ').trim();
  const text2     = sentences.slice(half).join(' ').trim() || text1;

  // ── Stats HTML ─────────────────────────────────────────────────────────────
  const stats = [
    project.location     ? { key: 'stat_location', val: project.location[lang] || project.location.en }     : null,
    project.type         ? { key: 'stat_type',     val: project.type[lang]     || project.type.en }         : null,
    project.completionYear ? { key: 'stat_year',   val: project.completionYear }                             : null,
    project.area         ? { key: 'stat_area',     val: project.area }                                       : null,
  ].filter(Boolean);

  const statsHTML = stats.length ? `
    <section class="proj-stats-section">
      <div class="proj-stats">
        ${stats.map(({ key, val }) => `
          <div class="proj-stat">
            <span class="proj-stat-label" data-i18n="${key}">${dict[key][lang]}</span>
            <span class="proj-stat-value">${val}</span>
          </div>`).join('')}
      </div>
    </section>` : '';

  // ── Related projects HTML ─────────────────────────────────────────────────
  const relatedHTML = related.length ? `
    <section class="proj-related">
      <h2 class="proj-related-title" data-i18n="related_projects">${dict.related_projects[lang]}</h2>
      <div class="proj-related-grid">
        ${related.map(p => {
          const t = p.title[lang] || p.title.en;
          return `
            <a href="/project/${encodeURIComponent(p.id)}" data-link class="proj-related-card">
              <div class="proj-related-img-wrap">
                <img src="${p.images[0]}" alt="${t}" loading="lazy" />
              </div>
              <p class="proj-related-name">${t}</p>
              <span class="proj-related-cat">${catLabel(p.category, lang)}</span>
            </a>`;
        }).join('')}
      </div>
    </section>` : '';

  // ── Render ────────────────────────────────────────────────────────────────
  app.innerHTML = `
    <div class="proj-page">

      <!-- Hero -->
      <section class="proj-hero" style="background-image:url('${imgs[0]}')">
        <div class="proj-hero-overlay"></div>
        ${navBtn(prevP, lang, 'prev')}
        <div class="proj-hero-content">
          <p class="proj-hero-cat">${cat}</p>
          <h1 class="proj-hero-title">${title}</h1>
        </div>
        ${navBtn(nextP, lang, 'next')}
        <div class="proj-hero-scroll">
          <svg width="18" height="26" viewBox="0 0 18 26" fill="none"
               stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M9 2v22M2 17l7 7 7-7"/>
          </svg>
        </div>
      </section>

      <!-- Stats -->
      ${statsHTML}

      <!-- Description -->
      <section class="proj-desc-section">
        <p class="proj-desc-text">${desc}</p>
      </section>

      <!-- Carousel 1: Main project photos -->
      <section class="proj-carousel-section">
        ${buildCarousel(carousel1Imgs, title, 'proj-carousel-1')}
      </section>

      <!-- Text + Image -->
      ${buildTextImg(textImgSrc, text1, title, false)}

      <!-- Carousel 2: Sketches / process -->
      <section class="proj-carousel-section">
        ${buildCarousel(carousel2Imgs, title + ' sketches', 'proj-carousel-2')}
      </section>

      <!-- Image series -->
      ${buildImageSeries(seriesImgs, title)}

      <!-- Related projects -->
      ${relatedHTML}

    </div>`;

  // ── Carousel init ──────────────────────────────────────────────────────────
  requestAnimationFrame(() => {
    app.querySelectorAll('.proj-carousel').forEach(carousel => {
      const track  = carousel.querySelector('.proj-carousel-track');
      const slides = [...carousel.querySelectorAll('.proj-carousel-slide')];
      const dotsEl = carousel.querySelector('.proj-carousel-dots');
      if (!slides.length) return;

      let cur = 0;
      const dots = slides.map((_, i) => {
        const d = document.createElement('button');
        d.className = 'proj-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', `Slide ${i + 1}`);
        d.addEventListener('click', () => go(i));
        dotsEl.appendChild(d);
        return d;
      });

      function go(idx) {
        cur = (idx + slides.length) % slides.length;
        track.style.transform = `translateX(-${cur * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === cur));
      }

      carousel.querySelector('.proj-carousel-prev').addEventListener('click', () => go(cur - 1));
      carousel.querySelector('.proj-carousel-next').addEventListener('click', () => go(cur + 1));

      let startX = 0;
      carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      carousel.addEventListener('touchend',   e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) go(dx < 0 ? cur + 1 : cur - 1);
      });
    });

    // ── Animations ─────────────────────────────────────────────────────────
    gsap.from('.proj-hero-content', {
      y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15,
    });
    gsap.from('.proj-hero-scroll', {
      y: 20, opacity: 0, duration: 1, ease: 'power2.out', delay: 0.9,
    });

    app.querySelectorAll(
      '.proj-carousel, .proj-text-img, .proj-series-item, ' +
      '.proj-related-card, .proj-stats-section, .proj-desc-text, .proj-related-title'
    ).forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%' },
        y: 35, opacity: 0, duration: 0.75, ease: 'power2.out',
        delay: (i % 3) * 0.08,
      });
    });
  });

  // Re-render on language switch
  onLangChange(() => {
    if (app.querySelector('.proj-hero')) renderProject(app, projectId);
  });
}
