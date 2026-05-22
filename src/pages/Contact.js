import { gsap } from 'gsap';
import { getLanguage } from '../i18n.js';

// ── FormSubmit AJAX endpoint ──────────────────────────────────────────────────
// On first real submission FormSubmit sends an activation email to this address.
// Click the link in that email once — then all future submissions arrive in the inbox.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ninamarmaridou@gmail.com';

// ── Social media handles ──────────────────────────────────────────────────────
// TODO: Replace placeholder URLs with Nina's real profile links
const INSTAGRAM_URL = 'https://www.instagram.com/ninamarmaridou';
const TIKTOK_URL    = 'https://www.tiktok.com/@ninamarmaridou';

export async function renderContact(app) {
  app.innerHTML = `
    <div class="contact-page">

      <!-- Hero Header -->
      <section class="page-hero contact-hero">
        <div class="page-hero-bg">
          <img src="${import.meta.env.BASE_URL}Home/creative-composition-of-living-room-interior-with-2024-10-17-17-47-29-utc.jpg" alt="" aria-hidden="true" />
        </div>
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
          <span class="page-hero-eyebrow">Contact</span>
          <h1 class="page-hero-title" data-i18n="contact_title">Let's Work Together</h1>
          <p class="page-hero-sub" data-i18n="contact_intro">We'd love to hear about your project. Fill in the form below or reach out directly.</p>
        </div>
      </section>

      <div class="contact-layout">

        <!-- ── Contact form ── -->
        <div class="contact-form-panel">
          <form class="contact-form" id="contact-form" novalidate>
            <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off" />

            <div class="form-group">
              <label for="contact-name" class="form-label" data-i18n="contact_form_name">Your Name</label>
              <input type="text" id="contact-name" name="name" class="form-input" required />
            </div>

            <div class="form-group">
              <label for="contact-email" class="form-label" data-i18n="contact_form_email">Your Email</label>
              <input type="email" id="contact-email" name="email" class="form-input" required />
            </div>

            <div class="form-group">
              <span class="form-label" data-i18n="contact_form_services">Services of Interest</span>
              <div class="form-checkbox-group">
                <label class="form-checkbox-label">
                  <input type="checkbox" name="services" value="interior" />
                  <span data-i18n="interior_design">Interior Design</span>
                </label>
                <label class="form-checkbox-label">
                  <input type="checkbox" name="services" value="exterior" />
                  <span data-i18n="exterior_design">Exterior Design</span>
                </label>
                <label class="form-checkbox-label">
                  <input type="checkbox" name="services" value="construction" />
                  <span data-i18n="construction_service">Construction &amp; Overview</span>
                </label>
                <label class="form-checkbox-label">
                  <input type="checkbox" id="service-other-check" name="services" value="other" />
                  <span data-i18n="other_service">Other</span>
                </label>
              </div>
              <div id="other-service-container" style="display:none; margin-top:0.5rem;">
                <input type="text" id="other-service-input" name="other_service" class="form-input" data-i18n="other_service_placeholder" />
              </div>
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label" data-i18n="contact_form_message">Message</label>
              <textarea id="contact-message" name="message" rows="5" class="form-textarea" required></textarea>
            </div>

            <div class="form-group">
              <label class="form-gdpr-label">
                <input type="checkbox" name="gdpr" id="gdpr-checkbox" required />
                <span>
                  <span data-i18n="gdpr_agree">I agree to the GDPR and the</span>
                  <a href="/privacy" data-link data-i18n="privacy_policy"> Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="submit" class="btn-primary form-submit-btn" data-i18n="contact_form_submit">Send Message</button>
            <div id="form-feedback"></div>
          </form>
        </div>

        <!-- ── Contact info ── -->
        <div class="contact-info-panel">
          <div class="contact-info-block">
            <span class="contact-info-label">Studio</span>
            <p class="contact-info-value" data-i18n="contact_address">Valaoritou 4, Thessaloniki, 54626</p>
          </div>
          <div class="contact-info-block">
            <span class="contact-info-label">Email</span>
            <p class="contact-info-value"><a href="mailto:ninamarmaridou@gmail.com">ninamarmaridou@gmail.com</a></p>
          </div>
          <div class="contact-info-block">
            <span class="contact-info-label" data-i18n="contact_social">Follow</span>
            <div class="social-links">
              <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="${TIKTOK_URL}" target="_blank" rel="noopener noreferrer" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.94a8.16 8.16 0 0 0 4.77 1.52V7.01a4.85 4.85 0 0 1-1.01-.32z"/></svg>
                TikTok
              </a>
            </div>
          </div>
          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8716382022716!2d22.9366601!3d40.6380629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390757a3e7db%3A0xc66579cd50e4ed!2sValaoritou%204%2C%20Thessaloniki%20546%2026%2C%20Greece!5e0!3m2!1sen!2sus!4v1714493322111!5m2!1sen!2sus"
              title="Nina Marmaridou office location"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  `;

  // Wait for DOM then wire interactivity
  requestAnimationFrame(() => {
    gsap.from('.page-hero-content', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    gsap.fromTo('.contact-form-panel, .contact-info-panel',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.1 }
    );
    wireForm();
  });
}

function wireForm() {
  // "Other" service toggle
  const otherCheck = document.getElementById('service-other-check');
  const otherBox   = document.getElementById('other-service-container');
  if (otherCheck && otherBox) {
    otherCheck.addEventListener('change', () => {
      otherBox.style.display = otherCheck.checked ? 'block' : 'none';
    });
  }

  // Form submission
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const lang    = getLanguage();
    const name    = form.querySelector('#contact-name').value.trim();
    const email   = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();
    const gdpr    = form.querySelector('#gdpr-checkbox').checked;

    // Basic client-side validation
    if (!name || !email || !message) {
      showFeedback(feedback, 'error', lang === 'el'
        ? 'Παρακαλώ συμπληρώστε τα υποχρεωτικά πεδία.'
        : 'Please fill in all required fields.');
      return;
    }
    if (!gdpr) {
      showFeedback(feedback, 'error', lang === 'el'
        ? 'Πρέπει να αποδεχτείτε την Πολιτική Απορρήτου.'
        : 'You must accept the Privacy Policy.');
      return;
    }

    const services = [...form.querySelectorAll('input[name="services"]:checked')]
      .map(cb => cb.value).join(', ');
    const otherService = form.querySelector('#other-service-input')?.value.trim() || '';

    const submitBtn = form.querySelector('.form-submit-btn');
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          services: services || '—',
          other_service: otherService || '—',
          message,
          _subject: 'New Inquiry – ninamarmaridou.com',
        }),
      });

      if (res.ok) {
        showFeedback(feedback, 'success', lang === 'el'
          ? 'Ευχαριστούμε! Το μήνυμά σας στάλθηκε με επιτυχία.'
          : 'Thank you! Your message was sent successfully.');
        form.reset();
        if (otherBox) otherBox.style.display = 'none';
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      showFeedback(feedback, 'error', lang === 'el'
        ? 'Κάτι πήγε στραβά. Δοκιμάστε ξανά ή στείλτε email απευθείας.'
        : 'Something went wrong. Please try again or email us directly.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';
    }
  });
}

function showFeedback(container, type, message) {
  container.innerHTML = `<div class="form-message ${type}">${message}</div>`;
}
