// Keys whose values contain HTML markup — rendered with innerHTML instead of textContent.
const HTML_KEYS = new Set([
  'about_text',
  'services_study',
  'services_residential',
  'services_consulting',
  'services_custom',
  'services_construction_text',
]);

export const dict = {
  nav_home:     { en: 'Home',         el: 'Αρχική' },
  nav_work:     { en: 'Work',         el: 'Έργα' },
  nav_services: { en: 'Services',     el: 'Υπηρεσίες' },
  nav_about:    { en: 'About',        el: 'Προφίλ' },
  nav_articles: { en: 'Articles',     el: 'Άρθρα' },
  nav_contact:  { en: 'Contact',      el: 'Επικοινωνία' },
  footer_rights: { en: 'All rights reserved.', el: 'Με την επιφύλαξη παντός δικαιώματος.' },
  privacy_policy: { en: 'Privacy Policy', el: 'Πολιτική Απορρήτου' },

  // Home
  home_hero_title:    { en: 'Crafting Spaces. Shaping Experiences.', el: 'Δημιουργούμε Χώρους. Πλάθουμε Εμπειρίες.' },
  home_hero_title_1:  { en: 'Crafting Spaces.', el: 'Δημιουργούμε Χώρους.' },
  home_hero_title_2:  { en: 'Shaping Experiences.', el: 'Πλάθουμε Εμπειρίες.' },
  home_hero_subtitle: { en: 'Interior Design & Architecture by Nina Marmaridou.', el: 'Εσωτερική Διακόσμηση & Αρχιτεκτονική από την Νίνα Μαρμαρίδου.' },
  home_hero_subtitle_pre: { en: 'Interior Design & Architecture by ', el: 'Εσωτερική Διακόσμηση & Αρχιτεκτονική από την ' },
  home_hero_name:     { en: 'Nina Marmaridou.', el: 'Νίνα Μαρμαρίδου.' },
  home_motto:         { en: '"Designing the next chapter of your life"', el: '"Σχεδιάζουμε το επόμενο κεφάλαιο της ζωής σας"' },
  home_philosophy_title: { en: 'Design Philosophy', el: 'Φιλοσοφία Σχεδιασμού' },
  home_philosophy_text: {
    en: 'Nina Marmaridou\'s philosophy is based on the harmonious coexistence of function and aesthetics. Every project starts with an in-depth analysis of the client\'s needs, existing structures, and environment. The goal is to create timeless spaces, where functionality meets aesthetics through carefully selected materials.',
    el: 'Η φιλοσοφία της Νίνας Μαρμαρίδου βασίζεται στην αρμονική συνύπαρξη της λειτουργίας και της αισθητικής του χώρου. Κάθε έργο ξεκινά με μια εις βάθος ανάλυση των αναγκών του πελάτη, των υφιστάμενων δομών και του περιβάλλοντος. Στόχος είναι η δημιουργία διαχρονικών χώρων, όπου η λειτουργικότητα συναντά την αισθητική μέσα από προσεκτικά επιλεγμένα υλικά.',
  },
  explore_projects:      { en: 'Explore Projects', el: 'Εξερευνήστε τα Έργα' },
  before_after_title:    { en: 'Before & After',                         el: 'Πριν & Μετά' },
  before_after_subtitle: { en: 'Drag to explore the transformation.',    el: 'Σύρετε για να δείτε τη μεταμόρφωση.' },
  before_label:          { en: 'Before',                                 el: 'Πριν' },
  after_label:           { en: 'After',                                  el: 'Μετά' },
  work_hero_subtitle: { en: 'A curated portfolio of residential and commercial spaces.', el: 'Μια επιλεγμένη συλλογή κατοικιών και επαγγελματικών χώρων.' },
  projects_title:   { en: 'Featured Works',  el: 'Επιλεγμένα Έργα' },
  partners_title:   { en: 'Partners',        el: 'Συνεργάτες' },
  partners_text: {
    en: 'Every project is a unique design story, see how we transformed spaces with style, functionality, and aesthetic balance.',
    el: 'Κάθε έργο είναι μια μοναδική ιστορία σχεδιασμού, δείτε πώς μεταμορφώσαμε χώρους με στυλ, λειτουργικότητα και αισθητική ισορροπία.',
  },
  elevated_identity: { en: 'Elevated Interior Design', el: 'Υψηλή Εσωτερική Διακόσμηση' },
  scroll_to_explore: { en: 'Scroll to Explore', el: 'Κυλήστε για να Εξερευνήσετε' },

  // Services
  services_title: { en: 'Our Services', el: 'Οι Υπηρεσίες μας' },
  services_intro: {
    en: 'We offer comprehensive interior design solutions, tailored to the style and needs of each space. With aesthetic consistency, practical thinking, and a creative eye, we undertake every stage, from the initial idea to final implementation.',
    el: 'Προσφέρουμε ολοκληρωμένες λύσεις εσωτερικού σχεδιασμού, προσαρμοσμένες στο στυλ και τις ανάγκες κάθε χώρου. Με αισθητική συνέπεια, πρακτική σκέψη και δημιουργική ματιά, αναλαμβάνουμε κάθε στάδιο, από την αρχική ιδέα έως την τελική υλοποίηση.',
  },
  services_study:            { en: '<strong>Space Study:</strong> Creating tailored solutions that respond to your needs and personality.',                                                               el: '<strong>Μελέτη Χώρων:</strong> Δημιουργία προσαρμοσμένων λύσεων που ανταποκρίνονται στις ανάγκες και την προσωπικότητα σας.' },
  services_residential:      { en: '<strong>Residential & Commercial Formatting:</strong> Transforming spaces into modern, functional, and aesthetically complete environments.',                      el: '<strong>Διαμόρφωση Κατοικιών & Επαγγελματικών Χώρων:</strong> Μετατροπή των χώρων σε σύγχρονα, λειτουργικά και αισθητικά άρτια περιβάλλοντα.' },
  services_consulting:       { en: '<strong>Decor Consulting:</strong> Selecting materials, color palettes, and textures that define the space\'s atmosphere.',                                      el: '<strong>Συμβουλευτική Διακόσμησης:</strong> Επιλογή υλικών, χρωματικών παλετών και υφών που καθορίζουν την ατμόσφαιρα του χώρου.' },
  services_custom:           { en: '<strong>Furniture & Custom Design:</strong> Designing furniture and custom constructs that offer solutions even in the most unique spaces.',                     el: '<strong>Έπιπλα & Εξατομικευμένος Σχεδιασμός:</strong> Μελέτη και σχεδιασμός επίπλων και ειδικών κατασκευών που προσφέρουν λύσεις ακόμα και στις πιο ιδιαίτερους χώρους.' },
  services_construction_text: { en: '<strong>Construction & Overview:</strong> Complete project management from initiation to final delivery.',                                                      el: '<strong>Κατασκευή και Επίβλεψη:</strong> Πλήρης διαχείριση έργου από την έναρξη έως την τελική παράδοση.' },
  interior_design:            { en: 'Interior Design',          el: 'Εσωτερική Διακόσμηση' },
  exterior_design:            { en: 'Exterior Design',          el: 'Εξωτερική Διακόσμηση' },
  construction_service:       { en: 'Construction & Overview',  el: 'Κατασκευή και Επίβλεψη' },
  services_vision_title:      { en: 'Vision',                   el: 'Όραμα' },
  services_vision_text: {
    en: 'Reflecting your personal style through design solutions that make your space perfect for your everyday life.',
    el: 'Η αποτύπωση του προσωπικού σας στυλ, μέσα από σχεδιαστικές λύσεις που κάνουν τον χώρο σας ιδανικό για την καθημερινότητα σας.',
  },

  // About
  about_title: { en: 'About Nina', el: 'Σχετικά με τη Νίνα' },
  about_quote: { en: '"Designing the next chapter of your life — one space at a time."', el: '"Σχεδιάζοντας το επόμενο κεφάλαιο της ζωής σας — έναν χώρο τη φορά."' },
  about_quote_cite: { en: '— Nina Marmaridou', el: '— Νίνα Μαρμαρίδου' },
  about_credential_years:    { en: 'Years of Experience',  el: 'Χρόνια Εμπειρίας' },
  about_credential_projects: { en: 'Projects Completed',   el: 'Ολοκληρωμένα Έργα' },
  about_credential_awards:   { en: 'Design Awards',        el: 'Βραβεία Σχεδιασμού' },
  about_credential_cities:   { en: 'Cities',               el: 'Πόλεις' },
  // HTML content — rendered with innerHTML (see HTML_KEYS)
  about_text: {
    en: '<p>I am Nina Marmaridou, an interior designer based in Thessaloniki, with years of experience in interior design and decoration.</p><p>My goal is to create spaces that reflect the personality of the people living in them, with a perfect balance between functionality and aesthetics.</p><p>From residential renovations to commercial spaces, my approach is always personal and meticulous. I work with consistency, passion, and attention to detail, offering proposals that harmoniously combine modern aesthetics with timeless value.</p><p>I collaborate with architects, craftsmen, and construction teams to provide a comprehensive design experience in every project I undertake.</p>',
    el: '<p>Είμαι η Νίνα Μαρμαρίδου, interior designer με βάση τη Θεσσαλονίκη, με πολυετή εμπειρία στον σχεδιασμό και τη διακόσμηση εσωτερικών χώρων.</p><p>Στόχος μου είναι να δημιουργώ χώρους που αντικατοπτρίζουν την προσωπικότητα των ανθρώπων που τους ζουν, με απόλυτη ισορροπία ανάμεσα στη λειτουργικότητα και την αισθητική.</p><p>Από ανακαινίσεις κατοικιών έως επαγγελματικούς χώρους, η προσέγγισή μου είναι πάντα προσωπική και προσεγμένη. Δουλεύω με συνέπεια, πάθος και προσήλωση στη λεπτομέρεια, προσφέροντας προτάσεις που συνδυάζουν αρμονικά τη σύγχρονη αισθητική με τη διαχρονική αξία.</p><p>Συνεργάζομαι με αρχιτέκτονες, τεχνίτες και κατασκευαστικές ομάδες, με σκοπό να παρέχω μια ολοκληρωμένη εμπειρία σχεδιασμού σε κάθε έργο που αναλαμβάνω.</p>',
  },

  // Contact
  contact_title:   { en: 'Get In Touch',    el: 'Επικοινωνία' },
  contact_intro: {
    en: 'We are here to listen to you. Contact us for your next project or for any question — we will be happy to help!',
    el: 'Είμαστε εδώ για να σας ακούσουμε. Επικοινωνήστε μαζί μας για το επόμενο project σας ή για οποιαδήποτε ερώτηση, θα χαρούμε να σας βοηθήσουμε!',
  },
  contact_location: { en: 'Location',    el: 'Τοποθεσία' },
  contact_address:  { en: 'Valaoritou 4, Thessaloniki, 54626', el: 'Βαλαωρίτου 4, Θεσσαλονίκη, 54626' },
  contact_email:    { en: 'Email',       el: 'Email' },
  contact_phone:    { en: 'Phone',       el: 'Τηλέφωνο' },
  contact_social:   { en: 'Follow Us',   el: 'Ακολουθήστε μας' },
  contact_form_name:     { en: 'Your Name',            el: 'Το Όνομά σας' },
  contact_form_email:    { en: 'Your Email',           el: 'Το Email σας' },
  contact_form_services: { en: 'Services of Interest', el: 'Υπηρεσίες Ενδιαφέροντος' },
  contact_form_message:  { en: 'Message',              el: 'Μήνυμα' },
  contact_form_submit:   { en: 'Send Message',         el: 'Αποστολή' },
  other_service:            { en: 'Other',              el: 'Άλλο' },
  other_service_placeholder: { en: 'Please specify…',  el: 'Παρακαλώ διευκρινίστε…' },
  gdpr_agree:    { en: 'I agree to the GDPR and the', el: 'Συμφωνώ με τον GDPR και την' },
  form_success: {
    en: 'Thank you! Your message was sent successfully. We will get back to you shortly.',
    el: 'Ευχαριστούμε! Το μήνυμά σας στάλθηκε με επιτυχία. Θα επικοινωνήσουμε μαζί σας σύντομα.',
  },
  form_error: {
    en: 'Something went wrong. Please try again or email us directly.',
    el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας.',
  },

  // Cookies
  cookies_text: {
    en: 'We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.',
    el: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας. Συνεχίζοντας την περιήγηση σας συμφωνείτε με την χρήση των cookies.',
  },
  cookies_accept: { en: 'Accept', el: 'Αποδοχή' },

  // Articles
  articles_subtitle: {
    en: 'Thoughts, insights, and stories on elevated interior design.',
    el: 'Σκέψεις, ιδέες και ιστορίες για υψηλή εσωτερική διακόσμηση.',
  },
  read_article:        { en: 'Read Article',         el: 'Διαβάστε το Άρθρο' },
  watch_video:         { en: 'Watch Video',           el: 'Δείτε το Βίντεο' },
  article_footer_title: { en: 'Experience it in motion', el: 'Δείτε το σε κίνηση' },
  watch_instagram:     { en: 'Watch on Instagram',   el: 'Δείτε στο Instagram' },
  back_to_articles:    { en: '← Back to Articles',   el: '← Πίσω στα Άρθρα' },

  // Project
  project_not_found: { en: 'Project not found.',       el: 'Το έργο δεν βρέθηκε.' },
  back_to_home:      { en: '← Back to Home',           el: '← Πίσω στην Αρχική' },
  stat_location:     { en: 'Location',                 el: 'Τοποθεσία' },
  stat_type:         { en: 'Type',                     el: 'Τύπος' },
  stat_year:         { en: 'Completion Year',          el: 'Έτος Ολοκλήρωσης' },
  stat_area:         { en: 'Gross Built Area',         el: 'Μικτή Δομημένη Επιφάνεια' },
  related_projects:  { en: 'Related Projects',         el: 'Σχετικά Έργα' },
  prev_project:      { en: 'Previous Project',         el: 'Προηγούμενο Έργο' },
  next_project:      { en: 'Next Project',             el: 'Επόμενο Έργο' },
  view_project:      { en: 'View Project',             el: 'Δείτε το Έργο' },

  // 404
  not_found_title: { en: '404',                         el: '404' },
  not_found_text:  { en: 'The page you are looking for does not exist.', el: 'Η σελίδα που ψάχνετε δεν υπάρχει.' },
  not_found_back:  { en: 'Back to Home',                el: 'Αρχική Σελίδα' },

  service_interior_desc: {
    en: 'We design interior spaces that reflect the personality of our clients — from material and lighting selection to spatial layout. Every detail serves both function and aesthetic, creating environments that feel both timeless and deeply personal.',
    el: 'Σχεδιάζουμε εσωτερικούς χώρους που αντανακλούν την προσωπικότητα του πελάτη μας — από την επιλογή υλικών και φωτισμού έως τη διάταξη χώρου. Κάθε λεπτομέρεια εξυπηρετεί τόσο τη λειτουργία όσο και την αισθητική, δημιουργώντας περιβάλλοντα που αισθάνονται διαχρονικά.',
  },
  service_exterior_desc: {
    en: 'Our exterior architecture focuses on placing buildings harmoniously within their environment. We work with building morphology, facade materials, and landscaping to create powerful first impressions that endure over time.',
    el: 'Η εξωτερική αρχιτεκτονική μας εστιάζει στην ανάδειξη του κτιρίου στο περιβάλλον του. Εργαζόμαστε με τη μορφολογία, τα υλικά πρόσοψης και τον περιβάλλοντα χώρο για να δημιουργήσουμε μια ισχυρή πρώτη εντύπωση που διαρκεί.',
  },
  service_construction_desc: {
    en: 'We manage full construction oversight, ensuring every phase is executed with precision and high quality standards. Our collaboration with trusted contractors guarantees results that stand the test of time.',
    el: 'Αναλαμβάνουμε την πλήρη επίβλεψη της κατασκευής, διασφαλίζοντας ότι κάθε στάδιο εκτελείται με ακρίβεια και υψηλά πρότυπα ποιότητας. Η συνεργασία μας με έμπιστους κατασκευαστές εγγυάται αποτελέσματα που αντέχουν στον χρόνο.',
  },

  // Project fallback
  project_desc_fallback: {
    en: 'A beautiful space created to reflect the client\'s personality while ensuring functional, modern standards.',
    el: 'Ένας όμορφος χώρος σχεδιασμένος με σκοπό να αντανακλά την προσωπικότητα του πελάτη, διασφαλίζοντας παράλληλα λειτουργικά και σύγχρονα πρότυπα.',
  },
};

let currentLang = 'el';
let listeners = [];

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  updateDOM();

  const elBtn = document.getElementById('lang-el');
  const enBtn = document.getElementById('lang-en');
  if (elBtn) {
    elBtn.classList.toggle('active', lang === 'el');
    elBtn.setAttribute('aria-pressed', String(lang === 'el'));
  }
  if (enBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    enBtn.setAttribute('aria-pressed', String(lang === 'en'));
  }

  listeners.forEach(cb => cb(lang));
}

export function updateDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key]?.[currentLang];
    if (!val) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.setAttribute('placeholder', val);
    } else if (HTML_KEYS.has(key)) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
}

export function getLanguage() { return currentLang; }

export function onLangChange(cb) { listeners.push(cb); }

export function clearLangListeners() { listeners = []; }
