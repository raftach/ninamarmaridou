import { updateDOM } from './i18n.js';
import { renderHome } from './pages/Home.js';
import { renderServices } from './pages/Services.js';
import { renderAbout } from './pages/About.js';
import { renderContact } from './pages/Contact.js';

const routes = {
  '/': renderHome,
  '/services': renderServices,
  '/about': renderAbout,
  '/contact': renderContact,
};

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

export async function router() {
  const path = location.pathname;
  
  // Highlight active nav link
  document.querySelectorAll('.nav-links a, .mobile-link').forEach(link => {
    link.classList.remove('active');
    // Ensure we match href absolute or relative
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });

  const app = document.getElementById('app');
  app.innerHTML = ''; // Basic clear
  
  if (path.startsWith('/project/')) {
    const projectId = path.split('/')[2];
    const { renderProject } = await import('./pages/Project.js');
    await renderProject(app, decodeURIComponent(projectId));
  } else {
    const renderFn = routes[path] || renderHome;
    await renderFn(app);
  }
  
  updateDOM();
  setTimeout(() => window.scrollTo(0, 0), 10);
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
