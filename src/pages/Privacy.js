export async function renderPrivacy(app) {
  app.innerHTML = `
    <div class="page-container page-padded narrow privacy-page">
      <div class="glass-panel" style="margin-bottom:4rem;">
        <h1 class="page-title" data-i18n="privacy_policy">Privacy Policy</h1>
        <div class="privacy-content">
          <p><strong>1. Introduction</strong><br>
          Welcome to Nina Marmaridou Interior Design. We value your privacy and are committed to protecting
          your personal data in accordance with the General Data Protection Regulation (GDPR).</p>

          <p><strong>2. Data Collection</strong><br>
          We collect personal information such as your name, email address, and phone number when you
          voluntarily submit it through our contact forms or when you interact with our website.</p>

          <p><strong>3. Use of Information</strong><br>
          Your information is used solely to respond to your inquiries, provide requested services,
          and improve our website's user experience.</p>

          <p><strong>4. Cookies</strong><br>
          We use cookies to analyse site traffic and enhance performance. By continuing to use our
          website, you consent to our use of cookies.</p>

          <p><strong>5. Third-Party Disclosure</strong><br>
          We do not sell, trade, or otherwise transfer your personally identifiable information to
          outside parties without your explicit consent, except to trusted third parties who assist
          us in operating our website or servicing you.</p>

          <p><strong>6. Your Rights</strong><br>
          You have the right to request access to the personal data we hold about you, request
          corrections, or request deletion of your data at any time by contacting us at
          <a href="mailto:ninamarmaridou@gmail.com">ninamarmaridou@gmail.com</a>.</p>

          <p><em>Note: Please consult a legal professional to ensure this policy fully complies
          with your jurisdiction and specific business operations.</em></p>
        </div>
      </div>
    </div>
  `;
}
