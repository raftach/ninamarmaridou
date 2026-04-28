export async function renderContact(app) {
  app.innerHTML = `
    <div class="page-container contact-page" style="padding-top: 120px; max-width: 1000px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
      <h1 class="page-title" data-i18n="contact_title" style="margin-top: 0;">Get In Touch</h1>
      <p style="text-align:center; max-width: 800px; margin: 0 auto; margin-bottom: 3rem; color: var(--text-color); opacity: 0.8; font-size: 1.2rem;" data-i18n="contact_intro">We are here to listen to you...</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; margin-bottom: 5rem;">
         
         <!-- Contact Form -->
         <div class="contact-card glass-panel" style="padding: 3rem;">
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
               <div>
                  <label style="display:block; margin-bottom: 0.5rem; color: var(--text-color); opacity: 0.7;" data-i18n="contact_form_name">Your Name</label>
               <input type="text" data-i18n="contact_form_name" style="width:100%; padding: 1rem; background: rgba(255,255,255,0.5); border: 1px solid rgba(0,0,0,0.1); color: var(--text-color); border-radius: 8px; font-family: inherit; font-size: 1rem;" />
            </div>
            <div>
               <label style="display:block; margin-bottom: 0.5rem; color: var(--text-color); opacity: 0.7;" data-i18n="contact_form_email">Your Email</label>
               <input type="email" data-i18n="contact_form_email" style="width:100%; padding: 1rem; background: rgba(255,255,255,0.5); border: 1px solid rgba(0,0,0,0.1); color: var(--text-color); border-radius: 8px; font-family: inherit; font-size: 1rem;" />
            </div>
            <div>
               <label style="display:block; margin-bottom: 0.5rem; color: var(--text-color); opacity: 0.7;" data-i18n="contact_form_services">Services of Interest</label>
               <div style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-color);">
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                     <input type="checkbox" name="services" value="interior" /> <span data-i18n="interior_design">Interior Design</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                     <input type="checkbox" name="services" value="exterior" /> <span data-i18n="exterior_design">Exterior Design</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                     <input type="checkbox" name="services" value="construction" /> <span data-i18n="construction_service">Construction & Overview</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                     <input type="checkbox" id="service-other" name="services" value="other" /> <span data-i18n="other_service">Other</span>
                  </label>
               </div>
               <div id="other-service-container" style="display: none; margin-top: 0.5rem;">
                  <input type="text" data-i18n="other_service_placeholder" style="width:100%; padding: 0.8rem; background: rgba(255,255,255,0.5); border: 1px solid rgba(0,0,0,0.1); color: var(--text-color); border-radius: 8px; font-family: inherit; font-size: 0.9rem;" placeholder="Please specify..." />
               </div>
            </div>
            <div>
               <label style="display:block; margin-bottom: 0.5rem; color: var(--text-color); opacity: 0.7;" data-i18n="contact_form_message">Message</label>
               <textarea rows="5" data-i18n="contact_form_message" style="width:100%; padding: 1rem; background: rgba(255,255,255,0.5); border: 1px solid rgba(0,0,0,0.1); color: var(--text-color); border-radius: 8px; font-family: inherit; font-size: 1rem; resize: vertical;"></textarea>
            </div>
            <div>
               <label style="display: flex; align-items: flex-start; gap: 0.5rem; cursor: pointer; color: var(--text-color); font-size: 0.9rem;">
                  <input type="checkbox" name="gdpr" required style="margin-top: 0.2rem;" />
                  <span>
                     <span data-i18n="gdpr_agree">I agree to the GDPR and the</span>
                     <a href="/privacy" data-link data-i18n="privacy_policy" style="text-decoration: underline;">Privacy Policy</a>
                  </span>
               </label>
            </div>
            <button class="btn-primary" style="margin-top: 1rem; width: 100%; text-align: center; border-radius: 8px;" data-i18n="contact_form_submit">Send Message</button>
         </div>
      </div>

      <!-- Contact Info & Map -->
      <div class="contact-info glass-panel" style="padding: 3rem; display: flex; flex-direction: column; gap: 1.5rem;">
         <h2 style="font-weight: 300; font-size: 1.8rem; margin-bottom: 1rem;">Location</h2>
         <p style="font-size: 1.1rem; opacity: 0.9;" data-i18n="contact_address">Address: Valaoritou 4, Thessaloniki, 54626</p>
         
         <div style="width: 100%; height: 300px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1);">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8716382022716!2d22.9366601!3d40.6380629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390757a3e7db%3A0xc66579cd50e4ed!2sValaoritou%204%2C%20Thessaloniki%20546%2026%2C%20Greece!5e0!3m2!1sen!2sus!4v1714493322111!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </div>

     </div>
    </div>
  `;

  setTimeout(() => {
    import('gsap').then(({ gsap }) => {
      gsap.fromTo(".contact-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
    });
    
    // Logic for "Other" service field
    const otherCheckbox = document.getElementById('service-other');
    const otherInputContainer = document.getElementById('other-service-container');
    if(otherCheckbox && otherInputContainer) {
       otherCheckbox.addEventListener('change', (e) => {
          if(e.target.checked) {
             otherInputContainer.style.display = 'block';
          } else {
             otherInputContainer.style.display = 'none';
          }
       });
    }
  }, 100);
}
