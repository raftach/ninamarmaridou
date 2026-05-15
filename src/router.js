import { gsap } from 'gsap';
import { updateDOM, dict, getLanguage } from './i18n.js';
import { lenis } from './scroll.js';
import { renderHome }     from './pages/Home.js';
import { renderServices } from './pages/Services.js';
import { renderAbout }    from './pages/About.js';
import { renderContact }  from './pages/Contact.js';
import { renderArticles } from './pages/Articles.js';
import { renderPrivacy }  from './pages/Privacy.js';

const routes = {
  '/':         renderHome,
  '/services': renderServices,
  '/about':    renderAbout,
  '/contact':  renderContact,
  '/articles': renderArticles,
  '/privacy':  renderPrivacy,
};

const routeTitles = {
  '/':         () => 'Nina Marmaridou | Interior Design',
  '/services': () => `${dict.nav_services[getLanguage()]} – Nina Marmaridou`,
  '/about':    () => `${dict.nav_about[getLanguage()]} – Nina Marmaridou`,
  '/contact':  () => `${dict.nav_contact[getLanguage()]} – Nina Marmaridou`,
  '/articles': () => `${dict.nav_articles[getLanguage()]} – Nina Marmaridou`,
  '/privacy':  () => `${dict.privacy_policy[getLanguage()]} – Nina Marmaridou`,
};

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

async function transitionOut(app) {
  if (!app.children.length) return;
  await gsap.to(app, { opacity: 0, y: -10, duration: 0.22, ease: 'power2.in' });
}

function transitionIn(app) {
  gsap.fromTo(app, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out', clearProps: 'all' });
}

export async function router() {
  const path   = location.pathname;
  const app    = document.getElementById('app');

  // Update active nav link
  document.querySelectorAll('.nav-links a, .mobile-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === path);
  });

  await transitionOut(app);
  app.innerHTML = '';

  if (path.startsWith('/project/')) {
    const projectId = decodeURIComponent(path.split('/')[2]);
    document.title = `${projectId} – Nina Marmaridou`;
    const { renderProject } = await import('./pages/Project.js');
    await renderProject(app, projectId);

  } else if (path.startsWith('/article/')) {
    const articleId = decodeURIComponent(path.split('/')[2]);
    document.title = `${articleId} – Nina Marmaridou`;
    await renderArticles(app, articleId);

  } else if (routes[path]) {
    document.title = routeTitles[path]?.() ?? 'Nina Marmaridou | Interior Design';
    await routes[path](app);

  } else {
    document.title = '404 – Nina Marmaridou';
    app.innerHTML = `
      <div class="not-found-page page-container">
        <h1 data-i18n="not_found_title">404</h1>
        <p data-i18n="not_found_text">The page you are looking for does not exist.</p>
        <a href="/" data-link class="btn-primary" data-i18n="not_found_back">Back to Home</a>
      </div>
    `;
  }

  updateDOM();
  lenis.scrollTo(0, { immediate: true });
  transitionIn(app);
}

export function initRouter() {
  window.addEventListener('popstate', router);

  document.body.addEventListener('click', e => {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      navigateTo(link.getAttribute('href'));
    }
  });

  router();
}
