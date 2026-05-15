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

  const contentBlocks = article.content[lang] || article.content.en;

  const blocksHTML = contentBlocks.map(block => {
    const isRight = block.type === 'text-img-right';
    return `
      <div class="article-block ${isRight ? '' : 'reverse'}">
        <div class="article-text glass-panel">
          <p>${block.text}</p>
        </div>
        <div class="article-img">
          <img src="${block.img}" alt="" loading="lazy" />
        </div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="page-container page-padded medium article-page">
      <button
        onclick="window.history.back()"
        style="background:none; border:none; color:var(--accent-color); font-size:1rem;
               cursor:pointer; margin-bottom:2rem; font-family:inherit;"
        data-i18n="back_to_articles"
      >← Back to Articles</button>

      <h1 class="page-title" style="margin-top:0; font-size:3rem; text-align:left;">
        ${article.title[lang] || article.title.en}
      </h1>
      <p style="opacity:0.5; margin-bottom:4rem;">${article.date}</p>

      <div class="article-content">
        ${blocksHTML}
      </div>

      <div class="article-footer">
        <h3 data-i18n="article_footer_title">Experience it in motion</h3>
        <a href="${article.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary"
           data-i18n="watch_instagram">Watch on Instagram</a>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    revealOnScroll('.article-block', { y: 40, stagger: 0.15 });
  });
}

// ── Article list view ─────────────────────────────────────────────────────────
function renderArticleList(app, lang) {
  const cardsHTML = articlesData.map(article => {
    const title = article.title[lang] || article.title.en;
    return `
      <div class="article-card-wrapper" data-article-id="${article.id}">
        <div class="article-shape">
          <h3 style="font-size:1.5rem; margin:0;">${title}</h3>
          <p style="opacity:0.7; font-size:0.9rem; margin-top:1rem;">${article.date}</p>
        </div>
        <div class="article-options-overlay" id="options-${article.id}">
          <button class="article-options-close" data-close="${article.id}" aria-label="Close">&times;</button>
          <a href="/article/${article.id}" data-link class="btn-primary"
             style="background:transparent; border-color:#fff; color:#fff; width:80%; text-align:center;"
             data-i18n="read_article">Read Article</a>
          <a href="${article.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary"
             style="background:#fff; color:#000; border-color:#fff; width:80%; text-align:center;"
             data-i18n="watch_video">Watch Video</a>
        </div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="page-container page-padded articles-page">
      <h1 class="page-title" data-i18n="nav_articles" style="margin-top:0;">Articles</h1>
      <p class="articles-subtitle" data-i18n="articles_subtitle">
        Thoughts, insights, and stories on elevated interior design.
      </p>
      <div class="articles-grid" id="articles-grid">
        ${cardsHTML}
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    revealOnScroll('.article-card-wrapper', { y: 40, stagger: 0.1 });
    wireArticleCards();
  });
}

// ── Event delegation for article card overlays ────────────────────────────────
function wireArticleCards() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  grid.addEventListener('click', e => {
    // Open overlay when shape is clicked
    const shape = e.target.closest('.article-shape');
    if (shape) {
      const wrapper = shape.closest('.article-card-wrapper');
      if (!wrapper) return;
      // Close all other overlays first
      grid.querySelectorAll('.article-options-overlay.open').forEach(el => el.classList.remove('open'));
      wrapper.querySelector('.article-options-overlay')?.classList.add('open');
      return;
    }

    // Close overlay via × button
    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) {
      e.stopPropagation();
      const id = closeBtn.dataset.close;
      document.getElementById(`options-${id}`)?.classList.remove('open');
    }
  });
}
