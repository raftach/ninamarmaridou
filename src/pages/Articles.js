import { getLanguage } from '../i18n.js';
import { articlesData } from '../data.js';
import { navigateTo } from '../router.js';

export async function renderArticles(app, articleId = null) {
  const lang = getLanguage();

  if (articleId) {
    // Render specific article
    const article = articlesData.find(a => a.id === articleId);
    if (!article) {
      app.innerHTML = '<div style="padding: 120px 20px; text-align: center;">Article not found.</div>';
      return;
    }

    const contentBlocks = article.content[lang] || article.content.en;
    
    let html = `
      <div class="page-container article-page" style="padding-top: 120px; max-width: 1000px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
        <button onclick="window.history.back()" style="background:none; border:none; color:var(--accent-color); font-size:1rem; cursor:pointer; margin-bottom: 2rem; font-family: inherit;">&larr; Back to Articles</button>
        <h1 class="page-title" style="margin-top:0; font-size: 3rem; text-align: left;">${article.title[lang] || article.title.en}</h1>
        <p style="opacity: 0.5; margin-bottom: 4rem;">${article.date}</p>
        
        <div class="article-content" style="display: flex; flex-direction: column; gap: 6rem;">
    `;

    contentBlocks.forEach((block, index) => {
      const isImgRight = block.type === 'text-img-right';
      
      html += `
        <div class="article-block" style="display: flex; flex-wrap: wrap; gap: 3rem; align-items: center; flex-direction: ${isImgRight ? 'row' : 'row-reverse'};">
           <div class="article-text" style="flex: 1; min-width: 300px;">
              <p style="font-size: 1.2rem; line-height: 1.8; opacity: 0.9;">${block.text}</p>
           </div>
           <div class="article-img" style="flex: 1; min-width: 300px;">
              <img src="${block.img}" alt="Article Image" style="width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
           </div>
        </div>
      `;
    });

    html += `
        </div>
        
        <div class="article-footer" style="margin-top: 6rem; padding-top: 3rem; border-top: 1px solid rgba(0,0,0,0.1); text-align: center; padding-bottom: 4rem;">
           <h3 style="margin-bottom: 1.5rem; font-weight: 300;">Experience it in motion</h3>
           <a href="${article.videoUrl}" target="_blank" class="btn-primary" style="display: inline-block; text-decoration: none;">Watch on Instagram</a>
        </div>
      </div>
    `;

    app.innerHTML = html;

  } else {
    // Render list of articles with diagonal shapes
    let gridHTML = `<div class="articles-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; padding-bottom: 4rem;">`;
    
    articlesData.forEach(article => {
      const title = article.title[lang] || article.title.en;
      gridHTML += `
        <div class="article-card-wrapper" style="position: relative; perspective: 1000px;">
           <div class="article-shape" style="
              background: var(--accent-color); 
              color: var(--bg-color); 
              padding: 3rem 2rem; 
              clip-path: polygon(10% 0, 100% 10%, 90% 100%, 0 90%);
              transition: transform 0.3s;
              cursor: pointer;
              min-height: 250px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
           " onclick="openArticleOptions('${article.id}')">
              <h3 style="font-size: 1.5rem; margin: 0;">${title}</h3>
              <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 1rem;">${article.date}</p>
           </div>
           
           <!-- Overlay Menu -->
           <div id="options-${article.id}" class="article-options" style="
              display: none;
              position: absolute;
              top: 0; left: 0; width: 100%; height: 100%;
              background: rgba(0,0,0,0.8);
              clip-path: polygon(10% 0, 100% 10%, 90% 100%, 0 90%);
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 1rem;
              z-index: 10;
           ">
              <button onclick="closeArticleOptions('${article.id}', event)" style="position:absolute; top: 20px; right: 20px; background:none; border:none; color:#fff; font-size: 1.5rem; cursor:pointer;">&times;</button>
              <a href="/article/${article.id}" data-link class="btn-primary" style="background: transparent; border-color: #fff; color: #fff; width: 80%; text-align:center;">Read Article</a>
              <a href="${article.videoUrl}" target="_blank" class="btn-primary" style="background: #fff; color: #000; border-color: #fff; width: 80%; text-align:center;">Watch Video</a>
           </div>
        </div>
      `;
    });
    
    gridHTML += `</div>`;

    app.innerHTML = `
      <div class="page-container articles-page" style="padding-top: 120px; max-width: 1200px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
        <h1 class="page-title" data-i18n="nav_articles" style="margin-top: 0;">Articles</h1>
        <p style="text-align:center; max-width: 800px; margin: 0 auto 4rem auto; color: var(--text-color); opacity: 0.7; font-size: 1.2rem;">Thoughts, insights, and stories on elevated interior design.</p>
        ${gridHTML}
      </div>
    `;

    // Add scripts to window for the onclick handlers
    window.openArticleOptions = (id) => {
      document.querySelectorAll('.article-options').forEach(el => el.style.display = 'none');
      document.getElementById('options-' + id).style.display = 'flex';
    };
    window.closeArticleOptions = (id, e) => {
      e.stopPropagation();
      document.getElementById('options-' + id).style.display = 'none';
    };
  }
}
