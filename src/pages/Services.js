import { projectsData } from '../data.js';
import { getLanguage, dict } from '../i18n.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function buildCarousel(images, title, id) {
  if (!images.length) return '';
  const slides = images.map(src =>
    `<div class="svc-carousel-slide"><img src="${src}" alt="${title}" loading="lazy" /></div>`
  ).join('');
  return `
    <div class="svc-carousel" id="${id}">
      <div class="svc-carousel-track">${slides}</div>
      <button class="svc-carousel-btn svc-carousel-prev" aria-label="Previous" data-carousel="${id}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="svc-carousel-btn svc-carousel-next" aria-label="Next" data-carousel="${id}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div class="svc-carousel-dots" id="${id}-dots"></div>
    </div>`;
}

export async function renderServices(app) {
  const lang = getLanguage();

  const interiorProjects = projectsData.filter(p => p.category === 'interior');
  const exteriorProjects = projectsData.filter(p => p.category === 'exterior');

  const interiorImgs     = interiorProjects.flatMap(p => p.images).slice(0, 8);
  const exteriorImgs     = exteriorProjects.flatMap(p => p.images).slice(0, 8);
  const constructionImgs = exteriorProjects.flatMap(p => p.images).slice(8, 16);

  const services = [
    {
      id: 'interior',
      nameKey:  'interior_design',
      name:     lang === 'el' ? 'Εσωτερική Αρχιτεκτονική' : 'Interior Design',
      descKey: 'service_interior_desc',
      desc:     lang === 'el'
        ? 'Σχεδιάζουμε εσωτερικούς χώρους που αντανακλούν την προσωπικότητα του πελάτη μας — από την επιλογή υλικών και φωτισμού έως τη διάταξη χώρου. Κάθε λεπτομέρεια εξυπηρετεί τόσο τη λειτουργία όσο και την αισθητική.'
        : 'We design interior spaces that reflect the personality of our clients — from material and lighting selection to spatial layout. Every detail serves both function and aesthetic, creating environments that feel both timeless and deeply personal.',
      images: interiorImgs,
      carouselId: 'carousel-interior',
    },
    {
      id: 'exterior',
      nameKey:  'exterior_design',
      name:     lang === 'el' ? 'Εξωτερική Αρχιτεκτονική' : 'Exterior Design',
      descKey:  'service_exterior_desc',
      desc:     lang === 'el'
        ? 'Η εξωτερική αρχιτεκτονική μας εστιάζει στην ανάδειξη του κτιρίου στο περιβάλλον του. Εργαζόμαστε με τη μορφολογία, τα υλικά πρόσοψης και τον περιβάλλοντα χώρο για να δημιουργήσουμε μια ισχυρή πρώτη εντύπωση.'
        : 'Our exterior architecture focuses on placing buildings harmoniously within their environment. We work with building morphology, facade materials, and landscaping to create powerful first impressions that endure over time.',
      images: exteriorImgs,
      carouselId: 'carousel-exterior',
    },
    {
      id: 'construction',
      nameKey:  'construction_service',
      name:     lang === 'el' ? 'Κατασκευή & Επίβλεψη' : 'Construction & Overview',
      descKey:  'service_construction_desc',
      desc:     lang === 'el'
        ? 'Αναλαμβάνουμε την πλήρη επίβλεψη της κατασκευής, διασφαλίζοντας ότι κάθε στάδιο εκτελείται με ακρίβεια και υψηλά πρότυπα ποιότητας. Η συνεργασία μας με έμπιστους κατασκευαστές εγγυάται αποτελέσματα που αντέχουν στον χρόνο.'
        : 'We manage full construction oversight, ensuring every phase is executed with precision and high quality standards. Our collaboration with trusted contractors guarantees results that stand the test of time.',
      images: constructionImgs.length ? constructionImgs : exteriorImgs.slice(0, 8),
      carouselId: 'carousel-construction',
    },
    {
      id: 'study',
      nameKey:  'service_study_name',
      name:     lang === 'el' ? 'Μελέτη Χώρων' : 'Space Study',
      descKey:  'service_study_desc',
      desc:     lang === 'el'
        ? 'Δημιουργία προσαρμοσμένων λύσεων που ανταποκρίνονται στις ανάγκες και την προσωπικότητα σας.'
        : 'Creating tailored solutions that respond to your needs and personality.',
      images: [],
      carouselId: 'carousel-study',
    },
    {
      id: 'residential',
      nameKey:  'service_residential_name',
      name:     lang === 'el' ? 'Διαμόρφωση Κατοικιών & Επαγγελματικών Χώρων' : 'Residential & Commercial Design',
      descKey:  'service_residential_desc',
      desc:     lang === 'el'
        ? 'Μετατροπή των χώρων σε σύγχρονα, λειτουργικά και αισθητικά άρτια περιβάλλοντα.'
        : 'Transforming spaces into modern, functional, and aesthetically complete environments.',
      images: [],
      carouselId: 'carousel-residential',
    },
    {
      id: 'consulting',
      nameKey:  'service_consulting_name',
      name:     lang === 'el' ? 'Συμβουλευτική Διακόσμησης' : 'Decor Consulting',
      descKey:  'service_consulting_desc',
      desc:     lang === 'el'
        ? 'Επιλογή υλικών, χρωματικών παλετών και υφών που καθορίζουν την ατμόσφαιρα του χώρου.'
        : 'Selecting materials, color palettes, and textures that define the atmosphere of the space.',
      images: [],
      carouselId: 'carousel-consulting',
    },
    {
      id: 'custom',
      nameKey:  'service_custom_name',
      name:     lang === 'el' ? 'Έπιπλα & Εξατομικευμένος Σχεδιασμός' : 'Furniture & Custom Design',
      descKey:  'service_custom_desc',
      desc:     lang === 'el'
        ? 'Μελέτη και σχεδιασμός επίπλων και ειδικών κατασκευών που προσφέρουν λύσεις ακόμα και στις πιο ιδιαίτερους χώρους προσδίδοντας μοναδικό χαρακτήρα.'
        : 'Designing furniture and custom constructs that offer solutions even in the most unique spaces, adding a unique character.',
      images: [],
      carouselId: 'carousel-custom',
    },
  ];

  const sectionsHTML = services.map((svc, idx) => `
    <div class="svc-item${idx % 2 === 1 ? ' svc-item--reverse' : ''}" id="svc-${svc.id}">
      <div class="svc-text">
        <span class="svc-number">0${idx + 1}</span>
        <h2 class="svc-name" data-i18n="${svc.nameKey}">${svc.name}</h2>
        <p class="svc-desc" data-i18n="${svc.descKey}">${svc.desc}</p>
      </div>
      ${buildCarousel(svc.images, svc.name, svc.carouselId)}
    </div>
  `).join('');

  app.innerHTML = `
    <div class="services-page">

      <section class="page-hero services-hero">
        <div class="page-hero-bg">
          <img src="${import.meta.env.BASE_URL}projects/tsimiski/tsimiski1.jpg" alt="" aria-hidden="true" />
        </div>
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
          <span class="page-hero-eyebrow" data-i18n="nav_services">${dict.nav_services[lang]}</span>
          <h1 class="page-hero-title" data-i18n="services_title">${dict.services_title[lang]}</h1>
          <p class="page-hero-sub">${lang === 'el' ? 'Ολοκληρωμένες λύσεις σχεδιασμού για κατοικία και επαγγελματικούς χώρους.' : 'Comprehensive design solutions for residential and commercial spaces.'}</p>
        </div>
      </section>

      <!-- Intro statement -->
      <section class="svc-intro">
        <p class="svc-intro-lead" data-i18n="services_intro">${lang === 'el'
          ? 'Προσφέρουμε ολοκληρωμένες λύσεις εσωτερικού σχεδιασμού, προσαρμοσμένες στο στυλ και τις ανάγκες κάθε χώρου. Με αισθητική συνέπεια, πρακτική σκέψη και δημιουργική ματιά, αναλαμβάνουμε κάθε στάδιο, από την αρχική ιδέα έως την τελική υλοποίηση.'
          : 'We offer comprehensive interior design solutions, tailored to the style and needs of each space. With aesthetic consistency, practical thinking, and a creative eye, we undertake every stage, from the initial idea to final implementation.'
        }</p>
      </section>

      <!-- Sticky service nav -->
      <nav class="svc-nav" aria-label="Services navigation">
        ${services.map((svc, idx) => `
          <button class="svc-nav-item" data-target="svc-${svc.id}">
            <span class="svc-nav-num">0${idx + 1}</span>
            <span class="svc-nav-name" data-i18n="${svc.nameKey}">${svc.name}</span>
          </button>
        `).join('')}
      </nav>

      <div class="svc-list">
        ${sectionsHTML}
      </div>

      <!-- Vision closing section -->
      <section class="svc-vision">
        <span class="svc-vision-label" data-i18n="services_vision_title">${lang === 'el' ? 'Όραμα' : 'Vision'}</span>
        <p class="svc-vision-text" data-i18n="services_vision_text">${lang === 'el'
          ? 'Η αποτύπωση του προσωπικού σας στυλ, μέσα από σχεδιαστικές λύσεις που κάνουν τον χώρο σας ιδανικό για την καθημερινότητα σας.'
          : 'Reflecting your personal style through design solutions that make your space perfect for your everyday life.'
        }</p>
      </section>

    </div>
  `;

  requestAnimationFrame(() => {
    gsap.from('.page-hero-content', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    gsap.from('.svc-intro-lead', {
      scrollTrigger: { trigger: '.svc-intro', start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.9, ease: 'power2.out',
    });
    gsap.from('.svc-vision-label, .svc-vision-text', {
      scrollTrigger: { trigger: '.svc-vision', start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.9, ease: 'power2.out', stagger: 0.15,
    });
    app.querySelectorAll('.svc-item').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', delay: i * 0.05,
      });
    });
    initSvcNav(app);
    initCarousels(app);
  });
}

function initSvcNav(app) {
  const btns = [...app.querySelectorAll('.svc-nav-item')];

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const navbarH = document.querySelector('.navbar')?.offsetHeight ?? 0;
      const svcNavH = app.querySelector('.svc-nav')?.offsetHeight ?? 0;
      const top     = target.getBoundingClientRect().top + window.scrollY - navbarH - svcNavH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Scroll-spy: highlight nav item whose section is in view
  const sections = [...app.querySelectorAll('.svc-item')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        btns.forEach(b => b.classList.toggle('active', b.dataset.target === entry.target.id));
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

function initCarousels(container) {
  container.querySelectorAll('.svc-carousel').forEach(carousel => {
    const track = carousel.querySelector('.svc-carousel-track');
    const slides = [...carousel.querySelectorAll('.svc-carousel-slide')];
    const dotsContainer = carousel.querySelector('.svc-carousel-dots');
    if (!slides.length) return;

    let current = 0;

    const dots = slides.map((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'svc-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
      return dot;
    });

    function goTo(idx) {
      current = (idx + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    carousel.querySelector('.svc-carousel-prev').addEventListener('click', () => goTo(current - 1));
    carousel.querySelector('.svc-carousel-next').addEventListener('click', () => goTo(current + 1));

    // Touch swipe
    let startX = 0;
    carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
    });
  });
}
