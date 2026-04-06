const fs = require('fs');

const descriptions = {
  kifisia: {
    en: 'An exclusive residential project in Kifisia. We integrated premium natural oak materials with bespoke minimalist lighting fixtures to create an airy, sophisticated environment, fulfilling the client’s desire for modern elegance.',
    el: 'Ένα αποκλειστικό οικιστικό έργο στην Κηφισιά. Ενσωματώσαμε υλικά από φυσικό δρυ με μινιμαλιστικά φωτιστικά κατά παραγγελία για να δημιουργήσουμε ένα αέρινο, εκλεπτυσμένο περιβάλλον, εκπληρώνοντας την επιθυμία του πελάτη για μοντέρνα κομψότητα.'
  },
  skgcenter: {
    en: 'A dynamic transformation of a historical apartment in Thessaloniki City Center. By knocking down unnecessary partitions and introducing industrial steel accents against exposed brick, we revitalized the urban layout for a young professional.',
    el: 'Μια δυναμική μεταμόρφωση ενός ιστορικού διαμερίσματος στο Κέντρο της Θεσσαλονίκης. Καταρρίπτοντας περιττά χωρίσματα και εισάγοντας βιομηχανικές ατσάλινες λεπτομέρειες σε συνδυασμό με εμφανές τούβλο, αναζωογονήσαμε την αστική διαρρύθμιση για έναν νέο επαγγελματία.'
  },
  tsimiski: {
    en: 'A high-end retail and showroom space on Tsimiski Street. Our approach utilized seamless acoustic panels, hidden LED strip lighting, and monolithic marble counters to emphasize the brand’s minimalist ethos and premium product line.',
    el: 'Ένας υψηλής αισθητικής εμπορικός και εκθεσιακός χώρος στην Οδό Τσιμισκή. Η προσέγγισή μας χρησιμοποίησε ακουστικά πάνελ χωρίς ραφές, κρυφό φωτισμό LED και μονολιθικούς πάγκους από μάρμαρο για να τονίσει τη μινιμαλιστική φιλοσοφία και την premium σειρά προϊόντων του brand.'
  },
  ekali: {
    en: 'A luxurious villa retreat in Ekali. The design seamlessly connects indoor and outdoor living spaces through expansive glass facades. We recommended earthy travertine floors and warm walnut cabinetry to ground the vast, open volumes.',
    el: 'Ένα πολυτελές καταφύγιο (βίλα) στην Εκάλη. Ο σχεδιασμός συνδέει αρμονικά τους εσωτερικούς και εξωτερικούς χώρους διαβίωσης μέσα από μεγάλες γυάλινες όψεις. Προτείναμε γήινα δάπεδα από τραβερτίνη και ζεστά ντουλάπια από καρυδιά για να ισορροπήσουμε τους τεράστιους, ανοιχτούς όγκους.'
  },
  karpenisi: {
    en: 'A cozy winter chalet nestled in Karpenisi. We focused on thermal comfort and rustic warmth by proposing heavy timber beams, locally sourced stone cladding, and plush textiles, creating an inviting sanctuary amidst the snowy landscape.',
    el: 'Ένα ζεστό χειμερινό σαλέ φωλιασμένο στο Καρπενήσι. Επικεντρωθήκαμε στη θερμική άνεση και τη ρουστίκ ζεστασιά προτείνοντας βαριά ξύλινα δοκάρια, επενδύσεις από τοπική πέτρα και πλούσια υφάσματα, δημιουργώντας ένα φιλόξενο καταφύγιο μέσα στο χιονισμένο τοπίο.'
  }
};

const titles = {
  kifisia: { en: 'Kifisia', el: 'Κηφισιά' },
  skgcenter: { en: 'Thessaloniki City Center', el: 'Κέντρο Θεσσαλονίκης' },
  tsimiski: { en: 'Tsimiski Street', el: 'Οδός Τσιμισκή' },
  ekali: { en: 'Ekali', el: 'Εκάλη' },
  karpenisi: { en: 'Karpenisi', el: 'Καρπενήσι' }
};

const colors = [
  { bg: '#ffffff', text: '#eccbb7' }, // Kifisia
  { bg: '#eccbb7', text: '#ffffff' }, // SKG
  { bg: '#ffffff', text: '#eccbb7' }, // Tsimiski
  { bg: '#eccbb7', text: '#ffffff' }, // Ekali
  { bg: '#ffffff', text: '#eccbb7' }  // Karpenisi
];

const dirs = ['kifisia', 'skgcenter', 'tsimiski', 'ekali', 'karpenisi'];
let dataJs = "export const projectsData = [\n";

dirs.forEach((d, i) => {
  const images = fs.readdirSync('public/projects/' + d)
    .filter(f => !f.startsWith('.') && f.match(/\.(png|jpe?g|svg)$/i))
    .map(f => "'" + "/projects/" + d + "/" + f + "'");

  dataJs += `  {
    id: '${d === 'skgcenter' ? 'thessaloniki-city-center' : d === 'tsimiski' ? 'tsimiski-street' : d}',
    title: { en: '${titles[d].en}', el: '${titles[d].el}' },
    folder: '${d}',
    bgColor: '${colors[i].bg}',
    textColor: '${colors[i].text}',
    description: {
      en: '${descriptions[d].en}',
      el: '${descriptions[d].el}'
    },
    images: [\n      ${images.join(',\n      ')}\n    ]
  }${i === dirs.length - 1 ? '' : ','}\n`;
});

dataJs += "];\n";

fs.writeFileSync('src/data.js', dataJs);
console.log('Successfully wrote src/data.js');
