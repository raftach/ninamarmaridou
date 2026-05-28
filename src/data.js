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
    id: 'faux-limewash',
    title: {
      en: 'Faux Limewash: The Technique That Makes Your Space Look 10× More Expensive',
      el: 'Faux Limewash: Η τεχνική που κάνει τον χώρο σας να φαίνεται 10 φορές πιο ακριβός'
    },
    date: '2026-03-29',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/kifisia/kifisia1.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'Faux Limewash is a painting technique that radically transforms the feel of a room — lending a patina of time and an atmospheric luxury found only in high-end hotels and historic European buildings. The search for authenticity in interior design is leading the world\'s top designers back to their roots. According to Architectural Digest, walls with texture and movement are the dominant trend as design moves away from flat, cold surfaces. Unlike traditional plaster, Faux Limewash is a specialised colour application technique: with simple brushstrokes, natural gradations evoke aged plaster, giving the wall depth, character, and a distinctive sense of quiet luxury.',
          img: BASE + 'projects/karpenisi/karpenisi1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'International publications such as Elle Decor emphasise that textures imitating natural materials offer an organic character that plain paint simply cannot match — a cost-effective solution that instantly upgrades a property\'s perceived value. The technique delivers a matte finish that absorbs light and creates a restful atmosphere, a natural handmade texture, and chromatic variations that make the surface feel alive. Nina\'s curated palette for guaranteed results: RAL 9010 Pure White for brightness and clarity; RAL 1001 Beige for timeless elegance; RAL 6021 Pale Green for natural calm; RAL 8004 Copper Brown Terracotta for warmth and earthiness; RAL 5024 Pastel Blue for aristocratic depth. This technique is not simply a paint — it is an aesthetic statement that can radically transform your space with the right inspiration.',
          img: BASE + 'projects/kifisia/kifisia3.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Το Faux Limewash είναι μια τεχνική βαφής που μεταμορφώνει ριζικά την αίσθηση ενός δωματίου, προσδίδοντας μια πατίνα χρόνου και μια ατμοσφαιρική πολυτέλεια που συναντάμε μόνο σε high-end ξενοδοχεία και ιστορικά κτίρια της Ευρώπης. Η αναζήτηση της αυθεντικότητας στον εσωτερικό σχεδιασμό οδηγεί τους κορυφαίους designers παγκοσμίως πίσω στις ρίζες. Σύμφωνα με το Architectural Digest, οι τοίχοι με υφή και «κίνηση» είναι η κυρίαρχη τάση, καθώς το design απομακρύνεται πλέον από τις επίπεδες και ψυχρές επιφάνειες. Δεν πρόκειται για σοβά, αλλά για μια εξειδικευμένη τεχνική εφαρμογής χρώματος: με απλές κινήσεις πινέλου, δημιουργούνται φυσικές διαβαθμίσεις που θυμίζουν παλαιωμένο σοβά, δίνοντας στον τοίχο βάθος, χαρακτήρα και μια ιδιαίτερη αίσθηση «ήσυχης πολυτέλειας».',
          img: BASE + 'projects/karpenisi/karpenisi1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Διεθνή έντυπα, όπως το Elle Decor, τονίζουν ότι οι υφές που μιμούνται φυσικά υλικά προσφέρουν έναν οργανικό χαρακτήρα που το απλό χρώμα δεν μπορεί να φτάσει — μια οικονομική λύση που αναβαθμίζει την αξία του ακινήτου ακαριαία. Η τεχνική προσφέρει ματ αποτέλεσμα που απορροφά το φως και δημιουργεί ξεκούραστη ατμόσφαιρα, φυσική χειροποίητη υφή και χρωματικές διακυμάνσεις που κάνουν την επιφάνεια να δείχνει ζωντανή. Η παλέτα της Νίνας Μαρμαρίδου για εγγυημένο αποτέλεσμα: RAL 9010 Pure White για φωτεινότητα και καθαρότητα· RAL 1001 Beige, η επιτομή της διαχρονικής κομψότητας· RAL 6021 Pale Green για αίσθηση φυσικής γαλήνης· RAL 8004 Copper Brown Terracotta για ζεστασιά και γήινη ενέργεια· RAL 5024 Pastel Blue για αριστοκρατικό και ατμοσφαιρικό βάθος. Η τεχνική αυτή δεν είναι απλά μια βαφή — είναι μια δήλωση αισθητικής.',
          img: BASE + 'projects/kifisia/kifisia3.jpg'
        }
      ]
    }
  },
  {
    id: 'hidden-mechanisms',
    title: {
      en: 'The Mechanisms That Make Clutter Disappear',
      el: 'Οι Μηχανισμοί που «Εξαφανίζουν» την Ακαταστασία'
    },
    date: '2026-02-28',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/skgcenter/skgcenter1.png',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'Smart storage mechanisms are the greatest innovation in utility space design — they allow functional elements to be hidden away when not in use, transforming cluttered areas into clean, serene spaces. Pocket Doors are the most elegant solution for laundry areas or small kitchens located in shared spaces: the doors open and slide into special recesses on the sides of the cabinet, leaving the space fully accessible while in use and closing hermetically when done, making appliances and objects disappear entirely from the field of view. In homes with limited square footage, foldable counters and shelves — ironing boards or work surfaces that fold and conceal inside a shallow drawer — are simply a lifesaver.',
          img: BASE + 'projects/kifisia/kifisia7.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Pull-out systems — wagons and sliding shelves in pantries — allow full access even to the furthest corner of a cabinet without the need to move ten items to find one, maintaining order effortlessly. These mechanisms are no longer out of reach: solutions exist for every budget and can be retrofitted into existing cabinetry, immediately upgrading the usability of your home. Investing in a good mechanism is an investment in your daily peace of mind — it allows you to truly close the door on household chores and step into a clean, uncluttered space.',
          img: BASE + 'projects/skgcenter/skgcenter3.png'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Η μεγαλύτερη καινοτομία στον σχεδιασμό των βοηθητικών χώρων είναι οι μηχανισμοί που επιτρέπουν την απόκρυψη των λειτουργικών σημείων όταν δεν χρησιμοποιούνται. Οι Pocket Doors (Συρόμενες Πόρτες που «Χάνονται») αποτελούν την πιο έξυπνη λύση για πλυσταριά ή μικρές κουζίνες σε κοινόχρηστους χώρους: ανοίγουν και γλιστρούν μέσα σε ειδικές εσοχές στα πλαϊνά του επίπλου, αφήνοντας τον χώρο πλήρως προσβάσιμο όσο εργάζεστε και κλείνοντας ερμητικά μετά, εξαφανίζοντας συσκευές και αντικείμενα από το οπτικό πεδίο. Σε σπίτια με περιορισμένα τετραγωνικά, οι πτυσσόμενοι πάγκοι και τα ράφια — πάγκος σιδερώματος ή εργασίας που αναδιπλώνεται και κρύβεται μέσα σε ένα ρηχό συρτάρι — είναι σωτήριοι.',
          img: BASE + 'projects/kifisia/kifisia7.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Τα Pull-out Systems — τα βαγόνια και τα συρόμενα ράφια στις τροφοθήκες — επιτρέπουν την πλήρη πρόσβαση ακόμα και στο πιο απομακρυσμένο σημείο του ντουλαπιού, χωρίς να χρειάζεται να μετακινείτε δέκα αντικείμενα για να βρείτε ένα, διατηρώντας την τάξη χωρίς κόπο. Αυτοί οι μηχανισμοί δεν είναι πλέον απρόσιτοι: υπάρχουν λύσεις για κάθε προϋπολογισμό που μπορούν να τοποθετηθούν ακόμα και σε υφιστάμενα ντουλάπια, αναβαθμίζοντας άμεσα τη χρηστικότητα του σπιτιού σας. Η επένδυση σε έναν καλό μηχανισμό είναι επένδυση στην καθημερινή σας ηρεμία — σας επιτρέπει να «κλείνετε την πόρτα» στις δουλειές του σπιτιού και να απολαμβάνετε έναν καθαρό χώρο.',
          img: BASE + 'projects/skgcenter/skgcenter3.png'
        }
      ]
    }
  },
  {
    id: 'kitchen-2026',
    title: {
      en: 'The Kitchen as Investment: Technology, Ergonomics & Colour for 2026',
      el: 'Η Κουζίνα ως Επένδυση: Τεχνολογία, Εργονομία & Χρώμα για το 2026'
    },
    date: '2026-01-30',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/kifisia/kifisia1.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'Invisible Technology and Ergonomics — Quiet Luxury: technology is integrated discreetly without disrupting the design. Smart Mechanisms — motion-activated drawers and concealed appliance garages ensure absolute order, keeping the kitchen clean and uncluttered at all times. Island Hubs take this further: kitchen islands now accommodate everything from integrated extractor hobs to hidden charging stations, completely transforming the ergonomics of the space and making the kitchen the undisputed heart of the home.',
          img: BASE + 'projects/kifisia/kifisia5.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Colour Trends — From Minimal to Earthy: the trends of 2026 move away from cool white. Warm, earthy tones — clay, stone, and warm off-white — are preferred, creating moments of calm and relaxation throughout the day. Whether it is a penthouse in the city centre, a villa in Kifisia, or a seaside property on the Riviera, the kitchen is the room that sells a home. A kitchen that integrates smart technology and high-end materials can increase a property\'s commercial value by 10–15% — making it the highest-return investment in the premium Attica market.',
          img: BASE + 'projects/kifisia/kifisia3.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Αόρατη Τεχνολογία & Εργονομία — Quiet Luxury: η τεχνολογία ενσωματώνεται διακριτικά χωρίς να διαταράσσει το design. Έξυπνοι Μηχανισμοί: συρτάρια motion-activated και κρυφοί αποθηκευτικοί χώροι (appliance garages) εξασφαλίζουν την απόλυτη τάξη. Νησίδες-Hubs: οι νησίδες φιλοξενούν πλέον τα πάντα — από εστίες με ενσωματωμένο απορροφητήρα μέχρι κρυφούς σταθμούς φόρτισης — αλλάζοντας πλήρως την εργονομία και καθιστώντας την κουζίνα την αδιαμφισβήτητη καρδιά του σπιτιού.',
          img: BASE + 'projects/kifisia/kifisia5.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Χρωματικές Τάσεις — Από το Minimal στο Earthy: οι τάσεις του 2026 απομακρύνονται από το ψυχρό λευκό. Προτιμώνται γήινα, ζεστά χρώματα όπως οι τόνοι του πηλού (clay), της πέτρας και το θερμό off-white, που δημιουργούν στιγμές χαλάρωσης. Είτε πρόκειται για ένα ρετιρέ στο Κέντρο, μια έπαυλη στην Κηφισιά ή ένα παραθαλάσσιο ακίνητο στη Ριβιέρα, η κουζίνα είναι το δωμάτιο που «πουλάει» το σπίτι. Μια κουζίνα που ενσωματώνει smart technology και high-end υλικά μπορεί να αυξήσει την εμπορική αξία ενός ακινήτου κατά 10–15% — είναι η επένδυση με τη μεγαλύτερη απόδοση (ROI) στην premium αγορά της Αττικής.',
          img: BASE + 'projects/kifisia/kifisia3.jpg'
        }
      ]
    }
  },
  {
    id: 'commercial-space-strategy',
    title: {
      en: 'When the Space Works for the Business',
      el: 'Όταν ο Χώρος Δουλεύει για την Επιχείρηση'
    },
    date: '2025-12-30',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/tsimiski/tsimiski1.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'The commercial space is not simply the backdrop of an activity — it is a core pillar of commercial strategy, reflected directly in cash flow. In an era where businesses must stand out in an increasingly competitive environment, the space ceases to be a functional shell and becomes a medium of communication, a carrier of identity, and a defining factor in the customer experience. Aesthetics, ergonomics, and spatial coherence directly affect how a business is perceived, how long a visitor stays, and ultimately its commercial performance. The role of the interior designer thus acquires strategic importance: connecting aesthetics with functionality and business sustainability so that a well-designed space supports the brand, builds trust, and creates conditions for growth.',
          img: BASE + 'projects/tsimiski/tsimiski5.jpg'
        },
        {
          type: 'img-left-text',
          text: 'A comprehensive study combining architectural thinking, functional design, and aesthetic consistency can turn any space into a genuine competitive advantage — whether it is a hair salon, a shop, a restaurant, or a hotel. Every space needs its own identity. The key elements are the correct organisation of functions, the flow of movement, lighting that highlights the space, and the selection of materials that activate emotion. When a visitor feels comfortable and at home, they stay longer, trust more, and ultimately choose more consciously. The interior designer acts as a strategic partner: we transform the space into a meaningful tool for growth, because aesthetics with measurable value makes all the difference.',
          img: BASE + 'projects/tsimiski/tsimiski7.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Ο επαγγελματικός χώρος δεν είναι απλώς το σκηνικό μίας δραστηριότητας — είναι βασικός πυλώνας της εμπορικής στρατηγικής που αποτυπώνεται στις ταμειακές ροές. Σε μια εποχή που οι επιχειρήσεις καλούνται να ξεχωρίσουν σε ένα ιδιαίτερα απαιτητικό και ανταγωνιστικό περιβάλλον, ο χώρος παύει να είναι λειτουργικό κέλυφος και μετατρέπεται σε μέσο επικοινωνίας, σε φορέα ταυτότητας και σε καθοριστικό παράγοντα εμπειρίας για τον πελάτη. Η αισθητική, η εργονομία και η συνοχή του χώρου επηρεάζουν άμεσα την αντίληψη της επιχείρησης, τη διάρκεια παραμονής του επισκέπτη και τελικά την ίδια την εμπορική της απόδοση. Ο ρόλος του interior designer αποκτά έτσι στρατηγική σημασία: συνδέει την αισθητική με τη λειτουργικότητα και τη βιωσιμότητα της επιχείρησης, ώστε ο σωστά μελετημένος χώρος να υποστηρίζει το brand, να ενισχύει την εμπιστοσύνη και να δημιουργεί συνθήκες ανάπτυξης.',
          img: BASE + 'projects/tsimiski/tsimiski5.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Μία ολοκληρωμένη μελέτη που συνδυάζει αρχιτεκτονική σκέψη, λειτουργικό σχεδιασμό και αισθητική συνέπεια μπορεί να κάνει τον χώρο ένα πραγματικό ανταγωνιστικό πλεονέκτημα — είτε μιλάμε για κομμωτήριο, κατάστημα, εστιατόριο ή ξενοδοχείο. Κάθε χώρος χρειάζεται τη δική του ταυτότητα. Τα βασικά στοιχεία είναι η σωστή οργάνωση των λειτουργιών, η ροή της κίνησης, ο φωτισμός που αναδεικνύει τον χώρο και η επιλογή υλικών που ενεργοποιούν το συναίσθημα. Όταν ο επισκέπτης νιώθει άνεση και οικειότητα, μένει περισσότερο, εμπιστεύεται και τελικά επιλέγει πιο συνειδητά. Ο interior designer λειτουργεί ως στρατηγικός συνεργάτης: μετατρέπουμε τον χώρο σε ένα ουσιαστικό μέσο ανάπτυξης, επειδή η αισθητική με μετρήσιμη αξία κάνει τη διαφορά!',
          img: BASE + 'projects/tsimiski/tsimiski7.jpg'
        }
      ]
    }
  },
  {
    id: 'silhouette-af655',
    title: {
      en: 'SILHOUETTE AF 655: The Colour of 2026',
      el: 'SILHOUETTE AF 655: Το Χρώμα του 2026'
    },
    date: '2025-11-30',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/tsimiski/tsimiski1.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'Silhouette AF 655 is the colour of 2026 — a deep, neutral shade with espresso grey tones that offers depth, sophistication, and warmth without weighing down a space. The year brings a clear shift toward meaningful luxury, perfectly embodied in this shade already appearing in the editorials of major paint houses worldwide, signalling that the new season moves towards more sophisticated, atmospheric palettes. It works as a backdrop of elegance: mysterious, character-defining, and inherently expensive-looking. International interior designers apply it on accent walls for contrast, across entire zones of a room for a more dramatic effect, and even on exterior facades where it creates that sense of quiet luxury now seen in new projects across the United States, Canada, and the United Kingdom — equally successful on kitchen cabinets, wooden doors, built-in wardrobes, and commercial spaces where identity must exude authority and coherence.',
          img: BASE + 'projects/karpenisi/karpenisi1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Silhouette AF 655 pairs beautifully with timeless cream tones such as Swiss Coffee OC-45 and Natural Cream OC-14, which soften and illuminate it, as well as with metals — brass, gold, and black — for a more dramatic statement, harmonising naturally with raw wood, marble, leather, and velvet. A professional secret: warm-white bulbs bring out a chocolatey intensity and a sense of relaxed warmth, while cooler lighting returns it to its clean espresso grey character. This dual personality makes it ideal for both residences and commercial spaces that want to shift atmosphere with the hour and the use. In 2026 it is clear that luxury needs no loudness — it needs depth, texture, materials that work in concert, and colours with substance. Silhouette AF 655 is exactly that: one of the safest and most refined choices for a home or workplace that both looks exceptional and endures.',
          img: BASE + 'projects/tsimiski/tsimiski3.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Το Silhouette AF 655 είναι το χρώμα του 2026 — μια βαθιά ουδέτερη απόχρωση με espresso γκρι τόνους που προσφέρει βάθος, κομψότητα και θερμή πολυτέλεια χωρίς να βαραίνει τον χώρο. Το 2026 φέρνει μια σαφή μετατόπιση προς την ουσιαστική πολυτέλεια και αυτή η τάση αποτυπώνεται ιδανικά στο χρώμα αυτό, που αναδεικνύεται παγκοσμίως ως το color of the year, εμφανιζόμενο ήδη σε editorial μεγάλων οίκων βαφής που δείχνουν πως η νέα χρονιά κινείται σε πιο σοφιστικέ, ατμοσφαιρικές παλέτες. Λειτουργεί ως σκηνικό κομψότητας: έχει μυστήριο, δίνει χαρακτήρα, δείχνει ακριβό. Οι διεθνείς interior designers το τοποθετούν σε μεμονωμένους τοίχους για αντίθεση, σε ολοκληρωμένες ζώνες ενός δωματίου για πιο δραματικό αποτέλεσμα, ακόμη και σε εξωτερικές προσόψεις όπου δημιουργεί αίσθηση ήσυχης πολυτέλειας — εξίσου επιτυχημένο σε ντουλάπια κουζίνας, ξύλινες πόρτες, εντοιχισμένες ντουλάπες και επαγγελματικούς χώρους όπου η ταυτότητα πρέπει να αποπνέει κύρος και συνέπεια.',
          img: BASE + 'projects/karpenisi/karpenisi1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Το Silhouette AF 655 συνδυάζεται άψογα με διαχρονικές κρεμ αποχρώσεις όπως Swiss Coffee OC-45 και Natural Cream OC-14 που το μαλακώνουν και το φωτίζουν, ενώ λειτουργεί εξαιρετικά και με μέταλλα όπως ορείχαλκος, χρυσό και μαύρο για πιο dramatic τόνο, δένοντας αρμονικά με φυσικά υλικά όπως ακατέργαστο ξύλο, μάρμαρο, δέρμα και βελούδο. Ένα μυστικό των επαγγελματιών: με warm λευκές λάμπες αποκτά σοκολατί ένταση και αίσθηση ζεστής χαλάρωσης, ενώ με πιο ψυχρό φωτισμό επιστρέφει στον καθαρό espresso γκρι χαρακτήρα του — μια διπλή προσωπικότητα ιδανική για χώρους που θέλουν να προσαρμόζουν την ατμόσφαιρά τους με την ώρα και τη χρήση. Το 2026 δείχνει ξεκάθαρα ότι η πολυτέλεια δεν χρειάζεται φωνές. Θέλει βάθος, υφή, υλικά που συνεργάζονται μεταξύ τους και χρώματα που έχουν υπόσταση. Το Silhouette AF 655 είναι ακριβώς αυτό — μία από τις πιο ασφαλείς και καλαίσθητες επιλογές για μια κατοικία ή χώρο εργασίας που φαίνεται και έχει διάρκεια.',
          img: BASE + 'projects/tsimiski/tsimiski3.jpg'
        }
      ]
    }
  },
  {
    id: '3d-wall-tiles',
    title: {
      en: '3D Wall Tiles: The Three-Dimensional Investment That Upgrades Property Value',
      el: '3D Πλακίδια Τοίχου: Η Τρισδιάστατη Επένδυση που Αναβαθμίζει την Αξία του Ακινήτου'
    },
    date: '2025-10-30',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/kifisia/kifisia1.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: '3D wall tiles introduce depth, light, and texture to a wall surface — their relief forms create a play of shadows that adds dynamism and energy to a space while exuding elegance and architectural coherence. In the modern real estate market, aesthetics and quality are no longer luxuries but decisive investment criteria: first impression, the sense of luxury, and the overall spatial experience directly shape a property\'s perceived value. Among the elements that can transform a space and give it a premium character, 3D wall tiles stand out as a design trend with a timeless result that combines high aesthetics with genuine investment interest. From wavy surfaces and geometric patterns to natural material imitations, they provide the visual identity and architectural presence indispensable to any contemporary property that wants to stand apart.',
          img: BASE + 'projects/karpenisi/karpenisi4.jpg'
        },
        {
          type: 'img-left-text',
          text: '3D tiles can be installed almost anywhere — living rooms, entrances, hallways, kitchens, bathrooms, or even exterior spaces depending on the material. In reception areas or professional environments they function as a statement wall, the central focal point of the design, and with hidden LED lighting their three-dimensional texture is elevated further, completely transforming the atmosphere. Next-generation materials — ceramic, porcelain, or synthetic panels with relief textures — offer durability, ease of cleaning, and aesthetic consistency with the rest of the space. A property that stands out for its design does not sell only square metres, but an experience: upgrading a wall with 3D tiles can transform the feel of a home or commercial space, increasing its market value. 3D wall tiles are the next step in high-value interior design — a choice that combines architectural imagination, technological innovation, and a clear return on investment.',
          img: BASE + 'projects/skgcenter/skgcenter1.png'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Τα 3D πλακίδια εισάγουν στην επιφάνεια του τοίχου βάθος, φως και υφή — οι ανάγλυφες μορφές τους δημιουργούν ένα παιχνίδι σκιών που προσθέτει δυναμική και ζωντάνια στον χώρο, ενώ παράλληλα αποπνέουν κομψότητα και αρχιτεκτονική συνέπεια. Στη σύγχρονη αγορά του real estate, η αισθητική και η ποιότητα ενός ακινήτου δεν αποτελούν πλέον πολυτέλεια, αλλά καθοριστικό επενδυτικό κριτήριο: η πρώτη εντύπωση, η αίσθηση πολυτέλειας και η συνολική εμπειρία του χώρου διαμορφώνουν την αντίληψη του ενδιαφερόμενου αγοραστή ή ενοικιαστή, επηρεάζοντας άμεσα την αξία του ίδιου του ακινήτου. Ανάμεσα στα στοιχεία που μπορούν να μεταμορφώσουν έναν χώρο και να του προσδώσουν premium χαρακτήρα, ξεχωρίζουν τα 3D πλακίδια τοίχου — μια σχεδιαστική τάση με διαχρονικό αποτέλεσμα, που συνδυάζει υψηλή αισθητική και ουσιαστικό επενδυτικό ενδιαφέρον. Από κυματιστές επιφάνειες και γεωμετρικά μοτίβα έως φυσικές απομιμήσεις, προσδίδουν αισθητικό ενδιαφέρον και ισχυρή οπτική ταυτότητα.',
          img: BASE + 'projects/karpenisi/karpenisi4.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Τα 3D πλακίδια μπορούν να τοποθετηθούν σχεδόν παντού: σε σαλόνια, εισόδους, χολ, κουζίνες, μπάνια ή ακόμα και σε εξωτερικούς χώρους, ανάλογα με το υλικό. Σε χώρους υποδοχής ή επαγγελματικά περιβάλλοντα λειτουργούν ως statement wall, το κεντρικό σημείο εστίασης του σχεδιασμού — με την προσθήκη κρυφού φωτισμού LED, η τρισδιάστατη υφή τους αναδεικνύεται ακόμη περισσότερο, απογειώνοντας την ατμόσφαιρα. Κεραμικά, πορσελάνινα ή συνθετικά panels με ανάγλυφες υφές προσφέρουν αντοχή, ευκολία καθαρισμού και αισθητική συνέπεια με το υπόλοιπο design του χώρου. Ένα ακίνητο που ξεχωρίζει για το design του δεν «πουλάει» μόνο τετραγωνικά, αλλά εμπειρία: η αναβάθμιση ενός τοίχου με 3D πλακίδια μπορεί να μεταμορφώσει την αίσθηση ενός σπιτιού ή επαγγελματικού χώρου, αυξάνοντας την εμπορική του αξία. Τα 3D πλακίδια τοίχου αποτελούν το επόμενο βήμα στο interior design ακινήτων υψηλής αξίας — μια επιλογή που συνδυάζει αρχιτεκτονική φαντασία, τεχνολογική καινοτομία και σαφή επενδυτική απόδοση.',
          img: BASE + 'projects/skgcenter/skgcenter1.png'
        }
      ]
    }
  },
  {
    id: 'lighting-design',
    title: { en: 'Lighting Design', el: 'Σχεδιασμός Φωτισμού' },
    date: '2025-10-05',
    publication: { en: 'Epsilon Living — Issue 5', el: 'Epsilon Living — Τεύχος 5' },
    coverImage: BASE + 'projects/tsimiski/tsimiski1.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'Lighting is not just about seeing clearly. It is what gives character, highlights architecture and furnishings, creates emotions, and defines how we experience our space. When a home is still at the brickwork stage, there are two options: a lighting study by specialized professionals, which comes at a higher cost but guarantees precision and flawless results, or a plan prepared by an interior designer, with provisions for all lighting points and the necessary outlets in ceilings and walls — avoiding extension cords, the risk of overload or electric shock, and mistakes that compromise daily living.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Proper lighting is not a privilege reserved only for those building a new home, office, or shop. In already built spaces, meaningful improvements can be made: replacing light fixtures, using track systems, adding dimmers, or even installing new power lines where needed. The choice of light temperature is equally crucial — warm tones at 2700–3000K for a sense of coziness in living rooms, neutral to cool at 4000–5000K for clear vision in kitchens and offices, and 2700K at the nightstands for relaxation. Lighting is not a detail. It is the staging of our space, the atmosphere that accompanies us every day — and whether we are talking about a new home or an old one, it deserves the importance it truly holds.',
          img: BASE + 'projects/tsimiski/tsimiski5.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Ο φωτισμός δεν αφορά μόνο το να βλέπουμε καθαρά. Είναι αυτό που δίνει χαρακτήρα, αναδεικνύει την αρχιτεκτονική και τα έπιπλα, δημιουργεί συναισθήματα και ορίζει τον τρόπο με τον οποίο βιώνουμε τον χώρο μας. Όταν ένα σπίτι βρίσκεται ακόμα στο στάδιο της δόμησης, υπάρχουν δύο επιλογές: μελέτη φωτισμού από εξειδικευμένους επαγγελματίες, η οποία εγγυάται ακρίβεια και άψογα αποτελέσματα, ή σχέδιο από εσωτερικό διακοσμητή, με πρόβλεψη για όλα τα σημεία φωτισμού και τις απαραίτητες πρίζες σε οροφές και τοίχους — αποφεύγοντας καλώδια στα δάπεδα, τον κίνδυνο υπερφόρτωσης ή ηλεκτροπληξίας και λάθη που συμβιβάζουν την καθημερινότητα.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Ο σωστός φωτισμός δεν είναι προνόμιο αποκλειστικά για όσους χτίζουν νέο σπίτι, γραφείο ή κατάστημα. Σε ήδη κατασκευασμένους χώρους μπορούν να γίνουν ουσιαστικές βελτιώσεις: αντικατάσταση φωτιστικών, χρήση συστημάτων ράγας, προσθήκη dimmer ή ακόμα και εγκατάσταση νέων ηλεκτρικών γραμμών όπου χρειάζεται. Καθοριστική είναι και η θερμοκρασία χρώματος — ζεστές αποχρώσεις 2700–3000K για αίσθηση ζεστασιάς στο σαλόνι, ουδέτερες έως ψυχρές 4000–5000K για καθαρή όραση σε κουζίνες και γραφεία, και 2700K στα κομοδίνα για χαλάρωση. Ο φωτισμός δεν είναι μια λεπτομέρεια. Είναι η σκηνοθεσία του χώρου μας, η ατμόσφαιρα που μας συνοδεύει κάθε μέρα — και αξίζει την προσοχή που πραγματικά του ανήκει.',
          img: BASE + 'projects/tsimiski/tsimiski5.jpg'
        }
      ]
    }
  },
  {
    id: 'renovation-without-plan',
    title: {
      en: 'Renovation Without a Plan: Either You Pay Twice, or You Live With the Mistakes',
      el: 'Ανακαίνιση χωρίς σχέδιο: είτε πληρώνεις δύο φορές, είτε ζεις με τα λάθη'
    },
    date: '2025-08-30',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/kifisia/kifisia3.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'A spatial study before a renovation is not a luxury — it is the antidote to chaos. If you start without a plan, you will almost always end up with demolitions, double the work, and double the cost. And the worst part? If you don\'t fix them, you will end up living in a home that burdens rather than serves you. A design study is essential because it ensures the space is utilised correctly from the very start — without one, changes are made hastily and almost always require costly corrections. When taking on a project, the starting point is always understanding the space and carefully listening to the owner\'s needs: examining the layout, the natural light, and how people move within it, then designing the best way to bring their vision to life. Strategic design means that every choice is made with a specific goal, not by chance — in an older property we might keep wooden frames that have value and replace only what is functionally outdated; in a new one, we plan utilities and furniture placement in advance to avoid mistakes that compound over time.',
          img: BASE + 'projects/skgcenter/skgcenter1.png'
        },
        {
          type: 'img-left-text',
          text: 'Material and style selection is based on durability, the use of the space, and the architecture — a floor in a high-traffic area must be durable first and beautiful second. The study identifies which material meets the functional need while fitting aesthetically with the overall space. The owner gains two things from a proper study: first, it increases the property\'s market value; second, the space becomes more functional for everyday use. A well-designed home or office makes daily life easier and is more attractive for rental or sale. And yes, there are real savings in time and money — a study reduces mistakes and mid-course changes, which means fewer delays, a lower final cost, and a smoother project from start to finish.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Η μελέτη χώρου πριν από μια ανακαίνιση δεν είναι πολυτέλεια, είναι το αντίδοτο στο χάος. Αν ξεκινήσεις χωρίς σχέδιο, σχεδόν πάντα θα οδηγηθείς σε γκρεμίσματα, διπλή δουλειά και διπλό κόστος. Και το χειρότερο; Αν δεν τα διορθώσεις, θα καταλήξεις να ζεις σε ένα σπίτι που σε ταλαιπωρεί αντί να σε εξυπηρετεί. Η μελέτη σχεδιασμού είναι απαραίτητη γιατί εξασφαλίζει ότι ο χώρος θα αξιοποιηθεί σωστά από την αρχή — χωρίς μελέτη, οι αλλαγές γίνονται πρόχειρα και σχεδόν πάντα χρειάζονται διορθώσεις που κοστίζουν. Η αφετηρία κάθε έργου είναι η κατανόηση του χώρου και η προσεκτική ακρόαση των αναγκών του ιδιοκτήτη: εξετάζω τη διάταξη, το φυσικό φως και τον τρόπο που κινούνται οι άνθρωποι μέσα σε αυτόν, ακούω τα θέλω τους και σχεδιάζω την υλοποίησή τους με τον καλύτερο τρόπο. Στρατηγικός σχεδιασμός σημαίνει ότι οι επιλογές γίνονται με συγκεκριμένο στόχο και όχι στην τύχη — σε παλιό ακίνητο κρατάμε ό,τι έχει αξία και αλλάζουμε μόνο ό,τι είναι λειτουργικά ξεπερασμένο, ενώ σε νέο σχεδιάζουμε από πριν τις παροχές και τα έπιπλα για να αποφευχθούν μελλοντικές αστοχίες.',
          img: BASE + 'projects/skgcenter/skgcenter1.png'
        },
        {
          type: 'img-left-text',
          text: 'Η επιλογή υλικών και στυλ γίνεται βάσει αντοχής, χρήσης και αρχιτεκτονικής — ένα δάπεδο σε χώρο με έντονη χρήση πρέπει να είναι ανθεκτικό, δεν αρκεί να είναι καλαίσθητο. Η μελέτη δείχνει ποιο υλικό καλύπτει τις ανάγκες και παράλληλα δένει αισθητικά με τον χώρο. Ο ιδιοκτήτης κερδίζει δύο πράγματα από μια σωστή μελέτη: πρώτον, αυξάνει την αξία του ακινήτου στην αγορά· δεύτερον, ο χώρος γίνεται πιο λειτουργικός για την καθημερινή χρήση. Ένα σπίτι ή γραφείο που είναι καλά σχεδιασμένο διευκολύνει την καθημερινότητα και είναι πιο ελκυστικό για μίσθωση ή πώληση. Και φυσικά υπάρχει εξοικονόμηση σε χρόνο και χρήμα — με τη μελέτη περιορίζονται τα λάθη και οι αλλαγές στην πορεία, που σημαίνει λιγότερες καθυστερήσεις, μικρότερο τελικό κόστος και πιο ομαλή εξέλιξη του έργου.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        }
      ]
    }
  },
  {
    id: 'false-ceilings',
    title: {
      en: 'Plasterboard False Ceilings: The Ally of Modern Aesthetics',
      el: 'Ψευδοροφές από Γυψοσανίδα: Ο Σύμμαχος της Σύγχρονης Αισθητικής'
    },
    date: '2025-07-31',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/kifisia/kifisia5.jpg',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'Plasterboard false ceilings have established themselves as one of the most popular solutions for shaping both interior and exterior spaces — their flexibility at both an architectural and decorative level makes them an exceptional tool for combining functionality and design. One of their most significant capabilities is the integration of lighting: concealed LED strips or decorative fixtures that highlight specific areas of a space. They also allow for the installation of ventilation, cooling, and heating systems, while concealing beams and technical infrastructure that would otherwise remain visible. Aesthetically, plasterboard offers almost limitless shaping possibilities — organic or geometric forms such as a large oval element above the dining table or a circular canopy with atmospheric lighting. Three-dimensional ceiling structures add depth and character, and can be used intelligently to zone an open-plan space: the living area, for example, can be defined by a false ceiling at a different height from the dining zone.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'False ceilings also offer concealment of wiring and, with specialist materials, enhanced acoustic or thermal insulation — a versatility that makes plasterboard ideal for residential, professional, and hospitality environments alike, always resulting in a harmonious whole that serves the user\'s needs while elevating the aesthetics. Before starting without an interior designer, ask your contractor these key questions: What type of plasterboard suits the space — standard, moisture-resistant, or fire-resistant? Who handles the electrical installation? Can concealed LED lighting be added? What happens to cables, pipes, and ventilation — can they be hidden? Are insulation options available? Does the project require a structural engineer\'s approval? How long will it take and can you stay in the space during works? Is painting included in the quote? What warranty covers future cracks or issues? Extra tip: always keep a file with the final plan and installation photographs — they will be invaluable for any future technical work.',
          img: BASE + 'projects/tsimiski/tsimiski5.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Οι ψευδοροφές από γυψοσανίδα έχουν καθιερωθεί ως μία από τις πιο δημοφιλείς λύσεις στη διαμόρφωση εσωτερικών αλλά και εξωτερικών χώρων — η ευελιξία τους, τόσο σε αρχιτεκτονικό όσο και σε διακοσμητικό επίπεδο, τις καθιστά εξαιρετικό εργαλείο για κάθε interior designer που επιθυμεί να συνδυάσει λειτουργικότητα και design. Μία από τις σημαντικότερες δυνατότητες που προσφέρουν είναι η ενσωμάτωση φωτισμού — κρυφό φωτισμό LED ή διακοσμητικά φωτιστικά που αναδεικνύουν συγκεκριμένα σημεία του χώρου — ενώ επιτρέπουν και την τοποθέτηση συστημάτων εξαερισμού, ψύξης και θέρμανσης, καλύπτοντας δοκάρια και τεχνικές υποδομές που αλλιώς θα παρέμεναν ορατές. Από την αισθητική πλευρά, η γυψοσανίδα προσφέρει σχεδόν απεριόριστες δυνατότητες: οργανικές ή γεωμετρικές μορφές, όπως ένα μεγάλο οβάλ στοιχείο πάνω από την τραπεζαρία ή κυκλική ανάρτηση με ατμοσφαιρικό φωτισμό, ενώ οι τρισδιάστατες κατασκευές στο ταβάνι δίνουν βάθος και μπορούν να διαχωρίσουν έξυπνα τις λειτουργικές ζώνες ενός ανοιχτού χώρου.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        },
        {
          type: 'img-left-text',
          text: 'Επιπλέον, οι ψευδοροφές δίνουν τη δυνατότητα απόκρυψης καλωδιώσεων και ενίσχυσης της ηχομόνωσης ή θερμομόνωσης με χρήση ειδικών υλικών — αυτός ο πολυμορφικός χαρακτήρας της γυψοσανίδας την καθιστά ιδανική για χώρους κατοικίας, επαγγελματικά περιβάλλοντα και χώρους φιλοξενίας, με αποτέλεσμα πάντα ένα αρμονικό σύνολο που εξυπηρετεί τις ανάγκες του χρήστη, απογειώνοντας την αισθητική. Αν το κάνετε χωρίς interior designer, κάντε αυτές τις ερωτήσεις στον επαγγελματία: Τι είδους γυψοσανίδα ταιριάζει στον χώρο; Ποιος αναλαμβάνει την ηλεκτρολογική εγκατάσταση; Μπορώ να βάλω κρυφό φωτισμό LED; Τι γίνεται με τα καλώδια, τους σωλήνες και τον εξαερισμό; Υπάρχει δυνατότητα θερμομόνωσης ή ηχομόνωσης; Χρειάζεται έγκριση μηχανικού; Πόση διάρκεια θα έχει το έργο; Περιλαμβάνεται βάψιμο στην προσφορά; Τι εγγύηση δίνεται για τυχόν ρωγμές; Extra tip: κρατήστε πάντα αρχείο με το τελικό σχέδιο και φωτογραφίες κατά την εγκατάσταση — θα σας φανούν πολύτιμα σε μελλοντικές τεχνικές εργασίες!',
          img: BASE + 'projects/tsimiski/tsimiski5.jpg'
        }
      ]
    }
  },
  {
    id: 'old-properties-new-gains',
    title: {
      en: 'Old Properties, New Gains: Renovation as a Tool for Added Value',
      el: 'Παλιά Ακίνητα, Νέα Κέρδη: Η Ανακαίνιση ως Εργαλείο Υπεραξίας'
    },
    date: '2025-07-01',
    publication: { en: 'Epsilon Living', el: 'Epsilon Living' },
    coverImage: BASE + 'projects/skgcenter/skgcenter1.png',
    videoUrl: 'https://www.instagram.com/ninamarmaridou',
    content: {
      en: [
        {
          type: 'text-img-right',
          text: 'Buying an old property is not simply an economical choice — it is a strategic decision for those who look ahead. Why is it worth investing in an old property today? A low purchase price means the property is acquired at the lowest point in the market, ideal for investment or owner-occupation. Renovation adapts it to modern needs and increases its practicality from day one. Even spaces that previously seemed lost are activated through design — and entirely new rooms can be added: a laundry room, storage, a walk-in wardrobe, a playroom, a home gym, or a barbecue area. The property becomes more energy-efficient and contemporary, with a smaller footprint. Most importantly, its overall value increases significantly in both valuation and market demand.',
          img: BASE + 'projects/skgcenter/skgcenter3.png'
        },
        {
          type: 'img-left-text',
          text: 'Renovation is a tool that adds real, measurable value. Works range from €150 to €500 per square metre — materials not included — with the final cost depending on the extent, complexity, and quality requirements of the owner. The bottom line: buying an old property is an opportunity for capital growth. With the right design approach, it can be transformed from an overlooked asset into a property with significant returns and a fully elevated aesthetic.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        }
      ],
      el: [
        {
          type: 'text-img-right',
          text: 'Η αγορά ενός παλιού ακινήτου δεν είναι απλώς μια οικονομική λύση — είναι στρατηγική επιλογή για όσους βλέπουν μπροστά. Γιατί αξίζει να επενδύσει κανείς σε ένα παλιό ακίνητο σήμερα; Χαμηλή τιμή αγοράς: το ακίνητο αποκτάται στη χαμηλότερη τιμή της αγοράς, ιδανικό για επένδυση ή ιδιοκατοίκηση. Λειτουργικότητα από την αρχή: η ανακαίνιση προσαρμόζει το ακίνητο στις σύγχρονες ανάγκες και αυξάνει την πρακτικότητά του. Εκμετάλλευση κάθε τετραγωνικού: ακόμα και χώροι που πριν φαίνονταν «χαμένοι», ενεργοποιούνται με σχεδιασμό. Δημιουργία νέων χώρων: laundry room, αποθηκευτικά, βεστιάριο, playroom, home gym ή barbecue area. Ενεργειακή αναβάθμιση: το ακίνητο γίνεται πιο αποδοτικό και σύγχρονο, με μικρότερο ενεργειακό αποτύπωμα. Άμεση υπεραξία: η συνολική αξία του ακινήτου αυξάνεται σημαντικά, τόσο σε αποτίμηση όσο και σε ζήτηση.',
          img: BASE + 'projects/skgcenter/skgcenter3.png'
        },
        {
          type: 'img-left-text',
          text: 'Η ανακαίνιση είναι ένα εργαλείο που προσθέτει πραγματική αξία. Οι εργασίες ξεκινούν από 150€ έως 500€ ανά τετραγωνικό μέτρο — χωρίς να περιλαμβάνονται τα υλικά — με το τελικό κόστος να εξαρτάται από την έκταση, την πολυπλοκότητα και τις ποιοτικές απαιτήσεις του ιδιοκτήτη. Τελικό συμπέρασμα: η αγορά ενός παλιού ακινήτου αποτελεί μια ευκαιρία αύξησης κεφαλαίου. Με τον σωστό σχεδιασμό, μπορεί να μετατραπεί σε ένα περιουσιακό στοιχείο με αξιόλογη απόδοση και αισθητική αναβάθμιση.',
          img: BASE + 'projects/kifisia/kifisia1.jpg'
        }
      ]
    }
  },
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
