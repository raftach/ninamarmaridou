export async function renderContact(app) {
  app.innerHTML = `
    <div class="page-container contact-page" style="padding-top: 120px; max-width: 800px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
      <h1 class="page-title" data-i18n="contact_title" style="margin-top: 0;">Get In Touch</h1>
      
      <div class="contact-card" style="background: rgba(0,0,0,0.03); padding: 3rem; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05);">
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
            <button class="btn-primary" style="margin-top: 1rem; width: 100%; text-align: center; border-radius: 8px;" data-i18n="contact_form_submit">Send Message</button>
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
