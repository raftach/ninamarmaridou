const BASE = import.meta.env.BASE_URL;

export const projectsData = [
  {
    id: 'kifisia',
    title: { en: 'Kifisia', el: 'Κηφισιά' },
    folder: 'kifisia',
    category: 'interior',
    bgColor: '#ffffff',
    textColor: '#eccbb7',
    location:        { en: 'Kifisia, Attica',          el: 'Κηφισιά, Αττική' },
    type:            { en: 'Residential Interior',     el: 'Κατοικία – Εσωτερικό' },
    completionYear:  '2023',
    area:            '180 m²',
    beforeAfter: {
      before: BASE + 'projects/kifisia/kifisia3.jpg',
      after:  BASE + 'projects/kifisia/kifisia1.jpg',
    },
    description: {
      en: 'An exclusive residential project in Kifisia. We integrated premium natural oak materials with bespoke minimalist lighting fixtures to create an airy, sophisticated environment, fulfilling the client’s desire for modern elegance.',
      el: 'Ένα αποκλειστικό οικιστικό έργο στην Κηφισιά. Ενσωματώσαμε υλικά από φυσικό δρυ με μινιμαλιστικά φωτιστικά κατά παραγγελία για να δημιουργήσουμε ένα αέρινο, εκλεπτυσμένο περιβάλλον, εκπληρώνοντας την επιθυμία του πελάτη για μοντέρνα κομψότητα.'
    },
    images: [
      BASE + 'projects/kifisia/kifisia1.jpg',
      BASE + 'projects/kifisia/kifisia10.png',
      BASE + 'projects/kifisia/kifisia11.jpg',
      BASE + 'projects/kifisia/kifisia12.png',
      BASE + 'projects/kifisia/kifisia13.jpg',
      BASE + 'projects/kifisia/kifisia14.png',
      BASE + 'projects/kifisia/kifisia15.jpg',
      BASE + 'projects/kifisia/kifisia16.png',
      BASE + 'projects/kifisia/kifisia17.jpg',
      BASE + 'projects/kifisia/kifisia18.png',
      BASE + 'projects/kifisia/kifisia19.jpg',
      BASE + 'projects/kifisia/kifisia2.png',
      BASE + 'projects/kifisia/kifisia20.png',
      BASE + 'projects/kifisia/kifisia21.jpg',
      BASE + 'projects/kifisia/kifisia22.png',
      BASE + 'projects/kifisia/kifisia23.jpg',
      BASE + 'projects/kifisia/kifisia3.jpg',
      BASE + 'projects/kifisia/kifisia4.png',
      BASE + 'projects/kifisia/kifisia5.jpg',
      BASE + 'projects/kifisia/kifisia6.png',
      BASE + 'projects/kifisia/kifisia7.jpg',
      BASE + 'projects/kifisia/kifisia8.png',
      BASE + 'projects/kifisia/kifisia9.jpg'
    ]
  },
  {
    id: 'thessaloniki-city-center',
    title: { en: 'Thessaloniki City Center', el: 'Κέντρο Θεσσαλονίκης' },
    folder: 'skgcenter',
    category: 'interior',
    bgColor: '#eccbb7',
    textColor: '#ffffff',
    location:        { en: 'Thessaloniki, Central Macedonia', el: 'Θεσσαλονίκη, Κεντρική Μακεδονία' },
    type:            { en: 'Residential Interior',            el: 'Κατοικία – Εσωτερικό' },
    completionYear:  '2022',
    area:            '95 m²',
    description: {
      en: 'A dynamic transformation of a historical apartment in Thessaloniki City Center. By knocking down unnecessary partitions and introducing industrial steel accents against exposed brick, we revitalized the urban layout for a young professional.',
      el: 'Μια δυναμική μεταμόρφωση ενός ιστορικού διαμερίσματος στο Κέντρο της Θεσσαλονίκης. Καταρρίπτοντας περιττά χωρίσματα και εισάγοντας βιομηχανικές ατσάλινες λεπτομέρειες σε συνδυασμό με εμφανές τούβλο, αναζωογονήσαμε την αστική διαρρύθμιση για έναν νέο επαγγελματία.'
    },
    images: [
      BASE + 'projects/skgcenter/skgcenter1.png',
      BASE + 'projects/skgcenter/skgcenter10.png',
      BASE + 'projects/skgcenter/skgcenter11.png',
      BASE + 'projects/skgcenter/skgcenter12.png',
      BASE + 'projects/skgcenter/skgcenter13.png',
      BASE + 'projects/skgcenter/skgcenter14.png',
      BASE + 'projects/skgcenter/skgcenter15.png',
      BASE + 'projects/skgcenter/skgcenter16.png',
      BASE + 'projects/skgcenter/skgcenter17.png',
      BASE + 'projects/skgcenter/skgcenter18.png',
      BASE + 'projects/skgcenter/skgcenter19.png',
      BASE + 'projects/skgcenter/skgcenter2.png',
      BASE + 'projects/skgcenter/skgcenter20.png',
      BASE + 'projects/skgcenter/skgcenter21.png',
      BASE + 'projects/skgcenter/skgcenter22.png',
      BASE + 'projects/skgcenter/skgcenter3.png',
      BASE + 'projects/skgcenter/skgcenter4.png',
      BASE + 'projects/skgcenter/skgcenter5.png',
      BASE + 'projects/skgcenter/skgcenter6.png',
      BASE + 'projects/skgcenter/skgcenter7.png',
      BASE + 'projects/skgcenter/skgcenter8.png',
      BASE + 'projects/skgcenter/skgcenter9.png'
    ]
  },
  {
    id: 'tsimiski-street',
    title: { en: 'Tsimiski Street', el: 'Οδός Τσιμισκή' },
    folder: 'tsimiski',
    category: 'interior',
    bgColor: '#ffffff',
    textColor: '#eccbb7',
    location:       { en: 'Thessaloniki, Central Macedonia', el: 'Θεσσαλονίκη, Κεντρική Μακεδονία' },
    type:           { en: 'Commercial Interior',             el: 'Εμπορικός Χώρος – Εσωτερικό' },
    completionYear: '2023',
    area:           '150 m²',
    description: {
      en: 'A high-end retail and showroom space on Tsimiski Street. Our approach utilized seamless acoustic panels, hidden LED strip lighting, and monolithic marble counters to emphasize the brand’s minimalist ethos and premium product line.',
      el: 'Ένας υψηλής αισθητικής εμπορικός και εκθεσιακός χώρος στην Οδό Τσιμισκή. Η προσέγγισή μας χρησιμοποίησε ακουστικά πάνελ χωρίς ραφές, κρυφό φωτισμό LED και μονολιθικούς πάγκους από μάρμαρο για να τονίσει τη μινιμαλιστική φιλοσοφία και την premium σειρά προϊόντων του brand.'
    },
    images: [
      BASE + 'projects/tsimiski/tsimiski1.jpg',
      BASE + 'projects/tsimiski/tsimiski10.png',
      BASE + 'projects/tsimiski/tsimiski11.jpeg',
      BASE + 'projects/tsimiski/tsimiski12.jpeg',
      BASE + 'projects/tsimiski/tsimiski2.png',
      BASE + 'projects/tsimiski/tsimiski3.jpg',
      BASE + 'projects/tsimiski/tsimiski4.png',
      BASE + 'projects/tsimiski/tsimiski5.jpg',
      BASE + 'projects/tsimiski/tsimiski6.jpg',
      BASE + 'projects/tsimiski/tsimiski7.jpg',
      BASE + 'projects/tsimiski/tsimiski8.jpg',
      BASE + 'projects/tsimiski/tsimiski9.png'
    ]
  },
  {
    id: 'ekali',
    title: { en: 'Ekali', el: 'Εκάλη' },
    folder: 'ekali',
    category: 'exterior',
    bgColor: '#eccbb7',
    textColor: '#ffffff',
    location:       { en: 'Ekali, Attica',                   el: 'Εκάλη, Αττική' },
    type:           { en: 'Residential Exterior & Interior',  el: 'Κατοικία – Εξωτερικό & Εσωτερικό' },
    completionYear: '2024',
    area:           '320 m²',
    description: {
      en: 'A luxurious villa retreat in Ekali. The design seamlessly connects indoor and outdoor living spaces through expansive glass facades. We recommended earthy travertine floors and warm walnut cabinetry to ground the vast, open volumes.',
      el: 'Ένα πολυτελές καταφύγιο (βίλα) στην Εκάλη. Ο σχεδιασμός συνδέει αρμονικά τους εσωτερικούς και εξωτερικούς χώρους διαβίωσης μέσα από μεγάλες γυάλινες όψεις. Προτείναμε γήινα δάπεδα από τραβερτίνη και ζεστά ντουλάπια από καρυδιά για να ισορροπήσουμε τους τεράστιους, ανοιχτούς όγκους.'
    },
    images: [
      BASE + 'projects/ekali/ekali1.png',
      BASE + 'projects/ekali/ekali10.png',
      BASE + 'projects/ekali/ekali11.png',
      BASE + 'projects/ekali/ekali12.png',
      BASE + 'projects/ekali/ekali13.png',
      BASE + 'projects/ekali/ekali14.png',
      BASE + 'projects/ekali/ekali15.png',
      BASE + 'projects/ekali/ekali16.png',
      BASE + 'projects/ekali/ekali2.png',
      BASE + 'projects/ekali/ekali3.png',
      BASE + 'projects/ekali/ekali4.png',
      BASE + 'projects/ekali/ekali5.png',
      BASE + 'projects/ekali/ekali6.png',
      BASE + 'projects/ekali/ekali7.png',
      BASE + 'projects/ekali/ekali8.png',
      BASE + 'projects/ekali/ekali9.png'
    ]
  },
  {
    id: 'karpenisi',
    title: { en: 'Karpenisi', el: 'Καρπενήσι' },
    folder: 'karpenisi',
    category: 'exterior',
    bgColor: '#ffffff',
    textColor: '#eccbb7',
    location:       { en: 'Karpenisi, Evrytania',            el: 'Καρπενήσι, Ευρυτανία' },
    type:           { en: 'Residential Exterior & Interior',  el: 'Κατοικία – Εξωτερικό & Εσωτερικό' },
    completionYear: '2024',
    area:           '220 m²',
    description: {
      en: 'A cozy winter chalet nestled in Karpenisi. We focused on thermal comfort and rustic warmth by proposing heavy timber beams, locally sourced stone cladding, and plush textiles, creating an inviting sanctuary amidst the snowy landscape.',
      el: 'Ένα ζεστό χειμερινό σαλέ φωλιασμένο στο Καρπενήσι. Επικεντρωθήκαμε στη θερμική άνεση και τη ρουστίκ ζεστασιά προτείνοντας βαριά ξύλινα δοκάρια, επενδύσεις από τοπική πέτρα και πλούσια υφάσματα, δημιουργώντας ένα φιλόξενο καταφύγιο μέσα στο χιονισμένο τοπίο.'
    },
    images: [
      BASE + 'projects/karpenisi/karpenisi1.jpg',
      BASE + 'projects/karpenisi/karpenisi10.png',
      BASE + 'projects/karpenisi/karpenisi11.jpg',
      BASE + 'projects/karpenisi/karpenisi12.png',
      BASE + 'projects/karpenisi/karpenisi13.jpg',
      BASE + 'projects/karpenisi/karpenisi14.png',
      BASE + 'projects/karpenisi/karpenisi15.jpg',
      BASE + 'projects/karpenisi/karpenisi16.png',
      BASE + 'projects/karpenisi/karpenisi17.jpg',
      BASE + 'projects/karpenisi/karpenisi18.png',
      BASE + 'projects/karpenisi/karpenisi19.jpg',
      BASE + 'projects/karpenisi/karpenisi2.jpg',
      BASE + 'projects/karpenisi/karpenisi20.png',
      BASE + 'projects/karpenisi/karpenisi21.jpg',
      BASE + 'projects/karpenisi/karpenisi22.jpg',
      BASE + 'projects/karpenisi/karpenisi23.jpg',
      BASE + 'projects/karpenisi/karpenisi24.jpg',
      BASE + 'projects/karpenisi/karpenisi25.jpg',
      BASE + 'projects/karpenisi/karpenisi26.jpg',
      BASE + 'projects/karpenisi/karpenisi27.jpg',
      BASE + 'projects/karpenisi/karpenisi28.jpg',
      BASE + 'projects/karpenisi/karpenisi29.jpg',
      BASE + 'projects/karpenisi/karpenisi3.jpg',
      BASE + 'projects/karpenisi/karpenisi30.jpg',
      BASE + 'projects/karpenisi/karpenisi31.jpg',
      BASE + 'projects/karpenisi/karpenisi32.jpg',
      BASE + 'projects/karpenisi/karpenisi33.jpg',
      BASE + 'projects/karpenisi/karpenisi34.jpg',
      BASE + 'projects/karpenisi/karpenisi35.jpg',
      BASE + 'projects/karpenisi/karpenisi36.jpg',
      BASE + 'projects/karpenisi/karpenisi37.jpg',
      BASE + 'projects/karpenisi/karpenisi38.jpg',
      BASE + 'projects/karpenisi/karpenisi4.jpg',
      BASE + 'projects/karpenisi/karpenisi5.jpg',
      BASE + 'projects/karpenisi/karpenisi6.jpg',
      BASE + 'projects/karpenisi/karpenisi7.png',
      BASE + 'projects/karpenisi/karpenisi8.png',
      BASE + 'projects/karpenisi/karpenisi9.jpg'
    ]
  }
];

export const articlesData = [
  {
    id: 'minimalism-redefined',
    title: { en: 'Minimalism Redefined', el: 'Ο Μινιμαλισμός Αλλιώς' },
    date: '2026-04-15',
    coverImage: BASE + 'projects/kifisia/kifisia1.jpg',
    videoUrl: 'https://www.instagram.com/p/mockvideo1/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Minimalism is not about having less — it is about making room for more of what matters. Natural textures and considered lighting play a pivotal role in creating a warm minimalist space that never feels cold or sterile.', img: BASE + 'projects/kifisia/kifisia1.jpg' },
        { type: 'img-left-text', text: 'Integrating acoustic panels and bespoke furniture allows the space to breathe without feeling empty. Every corner serves a purpose, maintaining a clean yet deeply inviting aesthetic that rewards slow living.', img: BASE + 'projects/tsimiski/tsimiski1.jpg' }
      ],
      el: [
        { type: 'text-img-right', text: 'Ο μινιμαλισμός δεν σημαίνει λιγότερα πράγματα, αλλά να κάνεις χώρο για αυτά που έχουν σημασία. Οι φυσικές υφές και ο φωτισμός παίζουν καθοριστικό ρόλο στη δημιουργία ενός ζεστού μινιμαλιστικού χώρου.', img: BASE + 'projects/kifisia/kifisia1.jpg' },
        { type: 'img-left-text', text: 'Η ενσωμάτωση ακουστικών πάνελ και επίπλων κατά παραγγελία επιτρέπει στον χώρο να αναπνέει χωρίς να φαίνεται άδειος. Κάθε γωνία εξυπηρετεί έναν σκοπό.', img: BASE + 'projects/tsimiski/tsimiski1.jpg' }
      ]
    }
  },
  {
    id: 'outdoor-living',
    title: { en: 'The Art of Outdoor Living', el: 'Η Τέχνη της Εξωτερικής Διαβίωσης' },
    date: '2026-03-22',
    coverImage: BASE + 'projects/ekali/ekali1.png',
    videoUrl: 'https://www.instagram.com/p/mockvideo2/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Blurring the lines between interior and exterior spaces creates a seamless living experience. Expansive glass facades allow nature to become part of the decor, bringing light deep into every room.', img: BASE + 'projects/ekali/ekali1.png' },
        { type: 'img-left-text', text: 'Choosing the right materials — travertine floors, oiled timber decks, and weathering steel accents — ensures durability while maintaining a luxurious aesthetic that improves with age.', img: BASE + 'projects/ekali/ekali2.png' }
      ],
      el: [
        { type: 'text-img-right', text: 'Το να θολώνεις τα όρια μεταξύ εσωτερικού και εξωτερικού χώρου δημιουργεί μια απρόσκοπτη εμπειρία διαβίωσης. Οι μεγάλες γυάλινες όψεις αφήνουν τη φύση να γίνει μέρος της διακόσμησης.', img: BASE + 'projects/ekali/ekali1.png' },
        { type: 'img-left-text', text: 'Η επιλογή σωστών υλικών — δάπεδα τραβερτίνης, λαδωμένα ξύλα, ατσάλινες λεπτομέρειες — εξασφαλίζει αντοχή και διατηρεί μια πολυτελή αισθητική που βελτιώνεται με τον χρόνο.', img: BASE + 'projects/ekali/ekali2.png' }
      ]
    }
  },
  {
    id: 'power-of-natural-light',
    title: { en: 'The Power of Natural Light', el: 'Η Δύναμη του Φυσικού Φωτός' },
    date: '2026-03-05',
    coverImage: BASE + 'projects/skgcenter/skgcenter1.png',
    videoUrl: 'https://www.instagram.com/p/mockvideo3/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Natural light is the most powerful and cost-free design element available. How a space is oriented, how windows are positioned, and how surfaces reflect light defines the mood of every room throughout the day.', img: BASE + 'projects/skgcenter/skgcenter1.png' },
        { type: 'img-left-text', text: 'We use layered window treatments, light shelves, and polished surfaces strategically to amplify daylight deep into floor plans where direct sunlight rarely reaches. The result is spaces that feel alive at every hour.', img: BASE + 'projects/skgcenter/skgcenter4.png' }
      ],
      el: [
        { type: 'text-img-right', text: 'Το φυσικό φως είναι το πιο ισχυρό και δωρεάν στοιχείο σχεδιασμού. Ο προσανατολισμός ενός χώρου, η θέση των παραθύρων και ο τρόπος που οι επιφάνειες αντανακλούν το φως καθορίζουν τη διάθεση κάθε δωματίου.', img: BASE + 'projects/skgcenter/skgcenter1.png' },
        { type: 'img-left-text', text: 'Χρησιμοποιούμε στρωματωμένα στοιχεία σκίασης, ράφια φωτός και γυαλιστερές επιφάνειες στρατηγικά για να ενισχύσουμε το φυσικό φως σε βάθος μέσα στα κτίρια. Το αποτέλεσμα είναι χώροι που νιώθουν ζωντανοί σε κάθε ώρα.', img: BASE + 'projects/skgcenter/skgcenter4.png' }
      ]
    }
  },
  {
    id: 'colour-psychology',
    title: { en: 'Colour Psychology in Interior Spaces', el: 'Ψυχολογία Χρωμάτων στον Εσωτερικό Χώρο' },
    date: '2026-02-18',
    coverImage: BASE + 'projects/tsimiski/tsimiski3.jpg',
    videoUrl: 'https://www.instagram.com/p/mockvideo4/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Colour is the first thing we perceive entering a room and the last thing we consciously notice. A warm terracotta in a kitchen creates appetite and conversation; a cool sage in a bedroom slows the heart rate and invites rest.', img: BASE + 'projects/tsimiski/tsimiski3.jpg' },
        { type: 'img-left-text', text: 'We never select a colour in isolation. It is tested under natural and artificial light, against the floor finish, and alongside the dominant textiles. A colour that sings in a showroom can flatten entirely in a north-facing room.', img: BASE + 'projects/kifisia/kifisia5.jpg' }
      ],
      el: [
        { type: 'text-img-right', text: 'Το χρώμα είναι το πρώτο πράγμα που αντιλαμβανόμαστε μπαίνοντας σε ένα δωμάτιο. Ένα ζεστό τερακότα στην κουζίνα δημιουργεί διάθεση για συζήτηση· ένα δροσερό πράσινο στην κρεβατοκάμαρα προσκαλεί σε ανάπαυση.', img: BASE + 'projects/tsimiski/tsimiski3.jpg' },
        { type: 'img-left-text', text: 'Δεν επιλέγουμε ποτέ ένα χρώμα μεμονωμένα. Δοκιμάζεται υπό φυσικό και τεχνητό φωτισμό, δίπλα στο δάπεδο και στα υφάσματα. Ένα χρώμα που λάμπει σε showroom μπορεί να επιπεδωθεί εντελώς σε ένα βορινό δωμάτιο.', img: BASE + 'projects/kifisia/kifisia5.jpg' }
      ]
    }
  },
  {
    id: 'small-spaces',
    title: { en: 'Making Every Square Metre Count', el: 'Κάθε Τετραγωνικό Μέτρο Μετράει' },
    date: '2026-02-01',
    coverImage: BASE + 'projects/skgcenter/skgcenter3.png',
    videoUrl: 'https://www.instagram.com/p/mockvideo5/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Small spaces demand greater discipline than large ones. Removing a single unnecessary wall can transform a 60 m² apartment from cramped to coherent. We approach compact projects with the same rigour as a villa.', img: BASE + 'projects/skgcenter/skgcenter3.png' },
        { type: 'img-left-text', text: 'Built-in storage, multi-functional furniture, and a restrained colour palette are the three pillars of successful compact living. When each element earns its place, nothing feels missing and nothing feels excessive.', img: BASE + 'projects/skgcenter/skgcenter6.png' }
      ],
      el: [
        { type: 'text-img-right', text: 'Οι μικροί χώροι απαιτούν μεγαλύτερη πειθαρχία από τους μεγάλους. Η κατάργηση ενός περιττού τοίχου μπορεί να μεταμορφώσει ένα διαμέρισμα 60 τ.μ. από στενόχωρο σε αρμονικό. Προσεγγίζουμε τα συμπαγή έργα με την ίδια σοβαρότητα που δίνουμε σε μια βίλα.', img: BASE + 'projects/skgcenter/skgcenter3.png' },
        { type: 'img-left-text', text: 'Ενσωματωμένες αποθήκες, πολυλειτουργικά έπιπλα και περιορισμένη χρωματική παλέτα είναι οι τρεις πυλώνες της επιτυχημένης συμπαγούς διαβίωσης. Όταν κάθε στοιχείο δικαιολογεί τη θέση του, τίποτα δεν λείπει.', img: BASE + 'projects/skgcenter/skgcenter6.png' }
      ]
    }
  },
  {
    id: 'chalet-aesthetic',
    title: { en: 'Warmth in Mountain Architecture', el: 'Ζεστασιά στην Ορεινή Αρχιτεκτονική' },
    date: '2026-01-14',
    coverImage: BASE + 'projects/karpenisi/karpenisi1.jpg',
    videoUrl: 'https://www.instagram.com/p/mockvideo6/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Mountain architecture must respond to extremes — intense cold, heavy snowfall, and the dramatic scale of nature itself. The chalet aesthetic draws from this necessity: thick timber beams, deep overhangs, and a hearth at the centre of every plan.', img: BASE + 'projects/karpenisi/karpenisi1.jpg' },
        { type: 'img-left-text', text: 'At Karpenisi we layered locally quarried stone with rough-sawn pine and plush wool textiles to create a refuge that feels earned. Every material references the landscape outside, blurring the boundary between shelter and terrain.', img: BASE + 'projects/karpenisi/karpenisi4.jpg' }
      ],
      el: [
        { type: 'text-img-right', text: 'Η ορεινή αρχιτεκτονική πρέπει να ανταποκρίνεται σε ακραίες συνθήκες — έντονο κρύο, βαρύ χιόνι και δραματική κλίμακα της φύσης. Το αισθητικό ορεινό ύφος προέρχεται από αυτή την ανάγκη: χοντρά ξύλινα δοκάρια, βαθιές προεξοχές και ένα τζάκι στο κέντρο.', img: BASE + 'projects/karpenisi/karpenisi1.jpg' },
        { type: 'img-left-text', text: 'Στο Καρπενήσι στρωματώσαμε τοπική πέτρα με πριστή πεύκη και πλούσια υφάσματα μαλλιού για να δημιουργήσουμε ένα καταφύγιο που νιώθεις ότι το αξίζεις. Κάθε υλικό παραπέμπει στο τοπίο έξω, θολώνοντας το όριο μεταξύ καταφυγίου και εδάφους.', img: BASE + 'projects/karpenisi/karpenisi4.jpg' }
      ]
    }
  },
  {
    id: 'commercial-spaces',
    title: { en: 'Commercial Spaces That Inspire', el: 'Επαγγελματικοί Χώροι που Εμπνέουν' },
    date: '2025-12-10',
    coverImage: BASE + 'projects/tsimiski/tsimiski5.jpg',
    videoUrl: 'https://www.instagram.com/p/mockvideo7/',
    content: {
      en: [
        { type: 'text-img-right', text: 'A commercial space is a brand argument made physical. Every surface, every transition between zones, every ambient sound decision communicates values before a single word is spoken. At Tsimiski Street we translated a premium brand identity into a tangible spatial experience.', img: BASE + 'projects/tsimiski/tsimiski5.jpg' },
        { type: 'img-left-text', text: 'Monolithic marble counters, seamless acoustic ceiling panels, and hidden LED strips removed visual noise entirely. The product became the protagonist — which is precisely what the client required.', img: BASE + 'projects/tsimiski/tsimiski7.jpg' }
      ],
      el: [
        { type: 'text-img-right', text: 'Ένας επαγγελματικός χώρος είναι ένα επιχείρημα για το brand σε φυσική μορφή. Κάθε επιφάνεια, κάθε μετάβαση μεταξύ ζωνών, κάθε απόφαση για τον ήχο επικοινωνεί αξίες πριν ειπωθεί λέξη.', img: BASE + 'projects/tsimiski/tsimiski5.jpg' },
        { type: 'img-left-text', text: 'Μονολιθικοί πάγκοι μαρμάρου, αδιάκοπα ακουστικά ταβάνια και κρυμμένα λωρίδες LED εξάλειψαν εντελώς τον οπτικό θόρυβο. Το προϊόν έγινε ο πρωταγωνιστής — ακριβώς αυτό που ζητούσε ο πελάτης.', img: BASE + 'projects/tsimiski/tsimiski7.jpg' }
      ]
    }
  },
  {
    id: 'material-selection',
    title: { en: 'The Art of Material Selection', el: 'Η Τέχνη της Επιλογής Υλικών' },
    date: '2025-11-20',
    coverImage: BASE + 'projects/kifisia/kifisia3.jpg',
    videoUrl: 'https://www.instagram.com/p/mockvideo8/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Material selection is where design becomes tactile. A space can be perfectly proportioned and beautifully lit, yet feel wrong because the materials lack honesty. We always specify materials with a full lifecycle in mind — how will this oak patina in ten years? How will this stone wear under daily use?', img: BASE + 'projects/kifisia/kifisia3.jpg' },
        { type: 'img-left-text', text: 'Natural materials carry inherent variation that manufactured finishes cannot replicate. The grain of a slab of walnut, the crystalline structure of a piece of statuary marble — these are irreproducible qualities that age gracefully and anchor a space in time.', img: BASE + 'projects/kifisia/kifisia7.jpg' }
      ],
      el: [
        { type: 'text-img-right', text: 'Η επιλογή υλικών είναι το σημείο όπου ο σχεδιασμός γίνεται απτός. Ένας χώρος μπορεί να έχει τέλειες αναλογίες και φωτισμό, αλλά να αισθάνεται λάθος επειδή τα υλικά στερούνται ειλικρίνειας.', img: BASE + 'projects/kifisia/kifisia3.jpg' },
        { type: 'img-left-text', text: 'Τα φυσικά υλικά φέρουν εγγενή ποικιλία που τα κατασκευαστικά φινιρίσματα δεν μπορούν να αντιγράψουν. Η ίνα μιας φέτας καρυδιάς, η κρυσταλλική δομή ενός μαρμάρου — αυτές είναι αδύνατο να αναπαραχθούν.', img: BASE + 'projects/kifisia/kifisia7.jpg' }
      ]
    }
  },
  {
    id: 'open-plan-living',
    title: { en: 'Open Plan Living: Zones Without Walls', el: 'Ανοιχτό Πλάνο: Ζώνες Χωρίς Τοίχους' },
    date: '2025-10-30',
    coverImage: BASE + 'projects/ekali/ekali3.png',
    videoUrl: 'https://www.instagram.com/p/mockvideo9/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Open-plan living promises freedom but demands structure. Without walls to define function, designers must use changes in floor level, ceiling height, lighting intensity, and material shifts to guide occupants intuitively from one zone to the next.', img: BASE + 'projects/ekali/ekali3.png' },
        { type: 'img-left-text', text: 'At Ekali, a raised dining platform and a dropped living soffit created a legible plan without a single partition. The kitchen remained visually connected to the garden while the lounge retained an intimate, contained quality despite sharing the same open volume.', img: BASE + 'projects/ekali/ekali6.png' }
      ],
      el: [
        { type: 'text-img-right', text: 'Το ανοιχτό πλάνο υπόσχεται ελευθερία αλλά απαιτεί δομή. Χωρίς τοίχους για να ορίσουν τη λειτουργία, οι σχεδιαστές πρέπει να χρησιμοποιούν αλλαγές στο επίπεδο δαπέδου, ύψος ταβανιού και εναλλαγές υλικών για να καθοδηγούν τους κατοίκους.', img: BASE + 'projects/ekali/ekali3.png' },
        { type: 'img-left-text', text: 'Στην Εκάλη, μια υπερυψωμένη τραπεζαρία και ένα χαμηλωμένο ταβάνι στο σαλόνι δημιούργησαν ένα ευανάγνωστο πλάνο χωρίς κανένα χώρισμα. Η κουζίνα παρέμεινε οπτικά συνδεδεμένη με τον κήπο, ενώ το σαλόνι διατήρησε μια οικεία ποιότητα.', img: BASE + 'projects/ekali/ekali6.png' }
      ]
    }
  },
  {
    id: 'sustainable-luxury',
    title: { en: 'Sustainable Luxury: Eco-Conscious Design', el: 'Βιώσιμη Πολυτέλεια: Οικολογικός Σχεδιασμός' },
    date: '2025-10-05',
    coverImage: BASE + 'projects/karpenisi/karpenisi3.jpg',
    videoUrl: 'https://www.instagram.com/p/mockvideo10/',
    content: {
      en: [
        { type: 'text-img-right', text: 'Sustainability and luxury are not opposing forces — they share the same foundation: longevity. A space built to last fifty years with locally sourced, natural materials is both the most sustainable and the most luxurious outcome.', img: BASE + 'projects/karpenisi/karpenisi3.jpg' },
        { type: 'img-left-text', text: 'We prioritise passive design strategies — orientation, cross-ventilation, thermal mass — before any mechanical systems are considered. This reduces the energy footprint while creating spaces that feel regulated by nature rather than technology.', img: BASE + 'projects/karpenisi/karpenisi9.jpg' }
      ],
      el: [
        { type: 'text-img-right', text: 'Βιωσιμότητα και πολυτέλεια δεν είναι αντίθετες δυνάμεις — μοιράζονται το ίδιο θεμέλιο: τη μακροζωία. Ένας χώρος που χτίζεται για να διαρκέσει πενήντα χρόνια με τοπικά, φυσικά υλικά είναι και το πιο βιώσιμο και το πιο πολυτελές αποτέλεσμα.', img: BASE + 'projects/karpenisi/karpenisi3.jpg' },
        { type: 'img-left-text', text: 'Δίνουμε προτεραιότητα σε παθητικές στρατηγικές σχεδιασμού — προσανατολισμός, φυσικός αερισμός, θερμική μάζα — πριν εξεταστούν μηχανικά συστήματα. Αυτό μειώνει το ενεργειακό αποτύπωμα ενώ δημιουργεί χώρους που ρυθμίζονται από τη φύση.', img: BASE + 'projects/karpenisi/karpenisi9.jpg' }
      ]
    }
  }
];
