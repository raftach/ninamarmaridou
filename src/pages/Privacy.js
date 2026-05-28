import { getLanguage } from '../i18n.js';

export async function renderPrivacy(app) {
  const lang = getLanguage();
  const el = lang === 'el';

  app.innerHTML = `
    <div class="page-container page-padded narrow privacy-page">
      <div class="glass-panel" style="margin-bottom:4rem;">
        <h1 class="page-title" data-i18n="privacy_policy">${el ? 'Πολιτική Απορρήτου' : 'Privacy Policy'}</h1>
        <div class="privacy-content">

          <p><strong>${el ? '1. Εισαγωγή' : '1. Introduction'}</strong><br>
          ${el
            ? 'Καλωσορίσατε στη Nina Marmaridou Interior Design. Εκτιμούμε την ιδιωτικότητά σας και δεσμευόμαστε να προστατεύουμε τα προσωπικά σας δεδομένα σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΓΚΠΔ).'
            : 'Welcome to Nina Marmaridou Interior Design. We value your privacy and are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).'
          }</p>

          <p><strong>${el ? '2. Συλλογή Δεδομένων' : '2. Data Collection'}</strong><br>
          ${el
            ? 'Συλλέγουμε προσωπικές πληροφορίες, όπως το όνομά σας, η διεύθυνση email και ο αριθμός τηλεφώνου σας, όταν τις υποβάλλετε εθελοντικά μέσω των φορμών επικοινωνίας ή όταν αλληλεπιδράτε με τον ιστότοπό μας.'
            : 'We collect personal information such as your name, email address, and phone number when you voluntarily submit it through our contact forms or when you interact with our website.'
          }</p>

          <p><strong>${el ? '3. Χρήση Πληροφοριών' : '3. Use of Information'}</strong><br>
          ${el
            ? 'Οι πληροφορίες σας χρησιμοποιούνται αποκλειστικά για να απαντάμε στα αιτήματά σας, να παρέχουμε τις ζητούμενες υπηρεσίες και να βελτιώνουμε την εμπειρία χρήσης του ιστότοπού μας.'
            : 'Your information is used solely to respond to your inquiries, provide requested services, and improve our website\'s user experience.'
          }</p>

          <p><strong>${el ? '4. Cookies' : '4. Cookies'}</strong><br>
          ${el
            ? 'Χρησιμοποιούμε cookies για την ανάλυση της κυκλοφορίας του ιστότοπου και τη βελτίωση της απόδοσής του. Συνεχίζοντας τη χρήση του ιστότοπού μας, συναινείτε στη χρήση cookies.'
            : 'We use cookies to analyse site traffic and enhance performance. By continuing to use our website, you consent to our use of cookies.'
          }</p>

          <p><strong>${el ? '5. Κοινοποίηση σε Τρίτους' : '5. Third-Party Disclosure'}</strong><br>
          ${el
            ? 'Δεν πωλούμε, δεν ανταλλάσσουμε ή μεταφέρουμε με οποιονδήποτε τρόπο τα προσωπικά σας δεδομένα σε τρίτα μέρη χωρίς τη ρητή συγκατάθεσή σας, εκτός από αξιόπιστους συνεργάτες που μας βοηθούν στη λειτουργία του ιστότοπου ή στην εξυπηρέτησή σας.'
            : 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your explicit consent, except to trusted third parties who assist us in operating our website or servicing you.'
          }</p>

          <p><strong>${el ? '6. Τα Δικαιώματά σας' : '6. Your Rights'}</strong><br>
          ${el
            ? 'Έχετε το δικαίωμα να ζητήσετε πρόσβαση στα προσωπικά δεδομένα που τηρούμε για εσάς, να ζητήσετε διορθώσεις ή να ζητήσετε τη διαγραφή τους ανά πάσα στιγμή, επικοινωνώντας μαζί μας στη διεύθυνση'
            : 'You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your data at any time by contacting us at'
          } <a href="mailto:ninamarmaridou@gmail.com">ninamarmaridou@gmail.com</a>.</p>

          <p><em>${el
            ? 'Σημείωση: Παρακαλώ συμβουλευτείτε νομικό επαγγελματία για να διασφαλίσετε ότι η παρούσα πολιτική συμμορφώνεται πλήρως με τη νομοθεσία της δικαιοδοσίας σας και τις ειδικές επιχειρηματικές σας λειτουργίες.'
            : 'Note: Please consult a legal professional to ensure this policy fully complies with your jurisdiction and specific business operations.'
          }</em></p>

        </div>
      </div>
    </div>
  `;
}
