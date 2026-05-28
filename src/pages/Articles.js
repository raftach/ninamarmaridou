import { gsap } from 'gsap';
import { getLanguage } from '../i18n.js';
import { articlesData } from '../data.js';
import { revealOnScroll } from '../utils/animations.js';

export async function renderArticles(app, articleId = null) {
  const lang = getLanguage();

  if (articleId) {
    renderArticle(app, articleId, lang);
  } else {
    renderArticleList(app, lang);
  }
}

// ── Article detail view ───────────────────────────────────────────────────────
function renderArticle(app, articleId, lang) {
  const article = articlesData.find(a => a.id === articleId);

  if (!article) {
    app.innerHTML = `
      <div style="padding:120px 20px; text-align:center;">
        <p data-i18n="project_not_found">Article not found.</p>
      </div>
    `;
    return;
  }

  const blocks      = article.content[lang] || article.content.en;
  const title       = article.title[lang] || article.title.en;
  const b0          = blocks[0] || {};
  const b1          = blocks[1] || {};
  const eyebrowSrc  = article.publication
    ? (article.publication[lang] || article.publication.en)
    : (lang === 'el' ? 'Άρθρο' : 'Article');

  // Extract first sentence as pull quote, rest as body
  const sentences0  = b0.text ? b0.text.split(/(?<=\.)\s+/) : [];
  const pullQuote   = sentences0[0] || '';
  const bodyText0   = sentences0.slice(1).join(' ');

  app.innerHTML = `
    <article class="mag-article">

      <!-- ① Back link -->
      <div class="mag-back">
        <button onclick="window.history.back()" class="mag-back-btn" data-i18n="back_to_articles">← Back to Articles</button>
      </div>

      <!-- ② Hero: full-bleed image with title overlay -->
      <div class="mag-hero">
        <img src="${b0.img || article.coverImage || ''}" alt="${title}" />
        <div class="mag-hero-overlay"></div>
        <div class="mag-hero-content">
          <span class="mag-hero-eyebrow">${eyebrowSrc} &nbsp;·&nbsp; ${article.date}</span>
          <h1 class="mag-hero-title">${title}</h1>
        </div>
      </div>

      <!-- ③ Intro: pull quote left · drop-cap body right -->
      <div class="mag-intro">
        <div class="mag-pull-quote">
          <span class="mag-pull-mark">"</span>
          <p class="mag-pull-text">${pullQuote}</p>
        </div>
        <div class="mag-intro-body">
          <p class="mag-drop-cap">${bodyText0}</p>
        </div>
      </div>

      <!-- ④ Full-width feature image -->
      ${b1.img ? `
      <div class="mag-full-img">
        <img src="${b1.img}" alt="" loading="lazy" />
      </div>` : ''}

      <!-- ⑤ Editorial spread: watermark number · text · offset detail -->
      <div class="mag-spread">
        <div class="mag-spread-aside">
          <span class="mag-spread-num">02</span>
          <div class="mag-spread-rule"></div>
          <p class="mag-spread-label">${lang === 'el' ? 'Σχεδιαστική Σκέψη' : 'Design Thinking'}</p>
        </div>
        <div class="mag-spread-body">
          <p>${b1.text || ''}</p>
        </div>
        ${b0.img ? `
        <div class="mag-spread-img">
          <img src="${b0.img}" alt="" loading="lazy" />
        </div>` : ''}
      </div>

      <!-- ⑥ Closing CTA -->
      <div class="mag-cta">
        <span class="mag-cta-label" data-i18n="article_footer_title">Experience it in motion</span>
        <a href="${article.videoUrl}" target="_blank" rel="noopener noreferrer" class="mag-cta-link">
          <span data-i18n="watch_instagram">Watch on Instagram</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      ${article.publication ? `
      <!-- ⑦ Partner disclaimer -->
      <div class="mag-partner-note">
        <p>${lang === 'el'
          ? `Διαβάστε αυτό και άλλα ενδιαφέρoντα άρθρα και διαθέσιμα ακίνητα στο online περιοδικό του συνεργάτη μας <a href="https://epsilonliving.gr/" target="_blank" rel="noopener noreferrer" class="mag-partner-link">Epsilon Living</a>.`
          : `Read this and other interesting articles and available properties on our partner's online magazine <a href="https://epsilonliving.gr/" target="_blank" rel="noopener noreferrer" class="mag-partner-link">Epsilon Living</a>.`
        }</p>
      </div>` : ''}

    </article>
  `;

  requestAnimationFrame(() => {
    gsap.from('.mag-hero-content', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    revealOnScroll('.mag-intro',     { y: 50, stagger: 0 });
    revealOnScroll('.mag-full-img',  { y: 30, stagger: 0 });
    revealOnScroll('.mag-spread',    { y: 50, stagger: 0 });
    revealOnScroll('.mag-cta',        { y: 30, stagger: 0 });
    revealOnScroll('.mag-partner-note', { y: 20, stagger: 0 });
  });
}

// ── Article list view ─────────────────────────────────────────────────────────
function renderArticleList(app, lang) {
  const cardsHTML = articlesData.map(article => {
    const title = article.title[lang] || article.title.en;
    const coverImg = article.coverImage || article.images?.[0] || '';
    return `
      <div class="article-card-wrapper" data-article-id="${article.id}">
        <div class="article-card-img-wrap">
          ${coverImg
            ? `<img src="${coverImg}" alt="${title}" loading="lazy" />`
            : `<div class="article-card-placeholder"></div>`}
          <div class="article-card-info">
            <h3 class="article-card-title">${title}</h3>
            <p class="article-card-date">${article.date}</p>
          </div>
        </div>
        <div class="article-options-overlay" id="options-${article.id}">
          <button class="article-options-close" data-close="${article.id}" aria-label="Close">&times;</button>
          <a href="/article/${article.id}" data-link class="article-overlay-btn"
             data-i18n="read_article">Read Article</a>
          <a href="${article.videoUrl}" target="_blank" rel="noopener noreferrer" class="article-overlay-btn article-overlay-btn--ghost"
             data-i18n="watch_video">Watch Video</a>
        </div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="articles-page">
      <section class="page-hero articles-hero">
        <div class="page-hero-bg">
          <img src="${import.meta.env.BASE_URL}Home/3d-rendering-wood-modern-luxury-bedroom-suite-with-2025-02-24-23-55-39-utc.jpg" alt="" aria-hidden="true" />
        </div>
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
          <span class="page-hero-eyebrow">${lang === 'el' ? 'Άρθρα & Βίντεο' : 'Articles & Videos'}</span>
          <h1 class="page-hero-title" data-i18n="nav_articles">Articles</h1>
          <p class="page-hero-sub" data-i18n="articles_subtitle">Thoughts, insights, and stories on elevated interior design.</p>
        </div>
      </section>
      <div class="articles-grid" id="articles-grid">
        ${cardsHTML}
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    gsap.from('.page-hero-content', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    revealOnScroll('.article-card-wrapper', { y: 40, stagger: 0.1 });
    wireArticleCards();
  });
}

// ── Event delegation for article card overlays ────────────────────────────────
function wireArticleCards() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  grid.addEventListener('click', e => {
    const card = e.target.closest('.article-card-wrapper');
    if (!card) return;

    // Close button
    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) {
      e.stopPropagation();
      card.querySelector('.article-options-overlay')?.classList.remove('open');
      return;
    }

    // Don't re-open if clicking overlay links
    if (e.target.closest('.article-overlay-btn')) return;

    // Close all, open this one
    grid.querySelectorAll('.article-options-overlay.open').forEach(el => el.classList.remove('open'));
    const overlay = card.querySelector('.article-options-overlay');
    overlay?.classList.add('open');
  });
}
