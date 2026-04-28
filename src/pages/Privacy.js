export async function renderPrivacy(app) {
  app.innerHTML = `
    <div class="page-container privacy-page" style="padding-top: 120px; max-width: 800px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
      <div class="glass-panel" style="margin-bottom: 4rem;">
         <h1 class="page-title" data-i18n="privacy_policy" style="margin-top: 0; text-align: left;">Privacy Policy</h1>
         <div style="color: var(--text-color); opacity: 0.8; font-size: 1rem; line-height: 1.8;">
            <p style="margin-bottom: 1.5rem;"><strong>1. Introduction</strong><br>Welcome to Nina Marmaridou Interior Design. We value your privacy and are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).</p>
            <p style="margin-bottom: 1.5rem;"><strong>2. Data Collection</strong><br>We collect personal information such as your name, email address, and phone number when you voluntarily submit it through our contact forms or when you interact with our website.</p>
            <p style="margin-bottom: 1.5rem;"><strong>3. Use of Information</strong><br>Your information is used solely to respond to your inquiries, provide requested services, and improve our website's user experience.</p>
            <p style="margin-bottom: 1.5rem;"><strong>4. Cookies</strong><br>We use cookies to analyze site traffic and enhance performance. By continuing to use our website, you consent to our use of cookies.</p>
            <p style="margin-bottom: 1.5rem;"><strong>5. Third-Party Disclosure</strong><br>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your explicit consent, except to trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.</p>
            <p style="margin-bottom: 1.5rem;"><strong>6. Your Rights</strong><br>You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your data at any time by contacting us.</p>
            <p><strong>Note:</strong> This is a generic privacy policy placeholder. Please consult with a legal professional to ensure it complies completely with your local laws and specific business operations.</p>
         </div>
      </div>
    </div>
  `;
}
