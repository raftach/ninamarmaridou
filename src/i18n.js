export const dict = {
  nav_home: { en: "Home", el: "Αρχική" },
  nav_services: { en: "Services", el: "Υπηρεσίες" },
  nav_about: { en: "About", el: "Προφίλ" },
  nav_contact: { en: "Contact", el: "Επικοινωνία" },
  footer_rights: { en: "All rights reserved.", el: "Με την επιφύλαξη παντός δικαιώματος." },
  
  // Home
  home_hero_title: { en: "Crafting Spaces. Shaping Experiences.", el: "Δημιουργούμε Χώρους. Πλάθουμε Εμπειρίες." },
  home_hero_subtitle: { en: "Interior Design & Architecture by Nina Marmaridou.", el: "Εσωτερική Διακόσμηση & Αρχιτεκτονική από την Νίνα Μαρμαρίδου." },
  explore_projects: { en: "Explore Projects", el: "Εξερευνήστε τα Έργα" },
  projects_title: { en: "Featured Works", el: "Επιλεγμένα Έργα" },

  // Services
  services_title: { en: "Our Services", el: "Οι Υπηρεσίες μας" },
  services_desc: { en: "We offer full-cycle interior design and architectural services tailored to your needs.", el: "Προσφέρουμε ολοκληρωμένες υπηρεσίες εσωτερικής διακόσμησης και αρχιτεκτονικής, προσαρμοσμένες στις ανάγκες σας." },

  // About
  about_title: { en: "About Nina", el: "Σχετικά με τη Νίνα" },
  about_text: { en: "My passion for design is rooted in the belief that every space has a story to tell. With years of experience in creating modern, functional, and aesthetically pleasing environments, I strive to elevate the everyday living experience through custom interior design solutions.", el: "Το πάθος μου για το design πηγάζει από την πεποίθηση ότι κάθε χώρος έχει μια ιστορία να πει. Με χρόνια εμπειρίας στη δημιουργία σύγχρονων, λειτουργικών και αισθητικά ευχάριστων περιβαλλόντων, προσπαθώ να αναβαθμίσω την καθημερινή εμπειρία διαβίωσης μέσω εξατομικευμένων λύσεων εσωτερικής διακόσμησης." },

  // Contact
  contact_title: { en: "Get In Touch", el: "Επικοινωνία" },
  contact_email: { en: "Email", el: "Email" },
  contact_phone: { en: "Phone", el: "Τηλέφωνο" },
  contact_social: { en: "Follow Us", el: "Ακολουθήστε μας" },
  contact_form_name: { en: "Your Name", el: "Το Όνομά σας" },
  contact_form_email: { en: "Your Email", el: "Το Email σας" },
  contact_form_message: { en: "Message", el: "Μήνυμα" },
  contact_form_submit: { en: "Send Message", el: "Αποστολή" },
  
  // Project Info placeholders (for the generic project text)
  project_desc_fallback: { 
    en: "A beautiful space created to reflect the client's personality while ensuring functional, modern standards.", 
    el: "Ένας όμορφος χώρος σχεδιασμένος με σκοπό να αντανακλά την προσωπικότητα του πελάτη, διασφαλίζοντας παράλληλα λειτουργικά και σύγχρονα πρότυπα." 
  }
};

let currentLang = 'en';
const listeners = [];

export function setLanguage(lang) {
  currentLang = lang;
  updateDOM();
  
  // Update buttons
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-el').classList.toggle('active', lang === 'el');
}

export function updateDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] && dict[key][currentLang]) {
      // use textContent or placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', dict[key][currentLang]);
      } else {
        el.textContent = dict[key][currentLang];
      }
    }
  });
  
  listeners.forEach(cb => cb(currentLang));
}

export function getLanguage() {
  return currentLang;
}

export function onLangChange(cb) {
  listeners.push(cb);
}
