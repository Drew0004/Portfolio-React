const projects = [
    {
        title: 'BMusic',
        description: 'BMusic è uno dei primi progetti Full Stack che ho realizzato, sviluppato in team durante il corso di Web Development presso Boolean. La piattaforma è stata concepita per offrire uno spazio dedicato agli artisti musicali, permettendo loro di registrarsi, caricare demo e condividere informazioni personali. BMusic funge da intermediario tra artisti e potenziali clienti, come privati o locali, che possono contattare direttamente i musicisti attraverso la piattaforma per ingaggi o collaborazioni. In questo modo, BMusic si propone come un ponte efficace tra chi offre servizi musicali e chi li ricerca. Per lo sviluppo Front-End è stato utilizzato il framework VueJs, mentre per lo sviluppo Back-End è stato utilizzato il framework Laravel.',
        techFunct: [
            'Possibilità di accedre o registrarsi alla piattaforma tramite sistema di autenticazione.',
            "Validazione e sanificazione dei dati inviati dall'utente.",
            'Gestione del profilo personale con operazioni di modifica dei contenuti.',
            'Visualizzazione di messaggi, recensioni e votazioni ricevute da potenziali clienti.',
            "Possibilità di caricare delle demo audio per permettere al pubblico di ascoltare le doti tecniche dell'artista.",
            "Possibilità di acquistare un piano di sponsorizzazione tramite la piattaforma, quest'ultima permette di risultare per primi nell'indicizzazione della ricerca, inoltre il profilo apparirà nel carosello principale degli artisti in evidenza, situato nella Home Page.",
            "Possibilità di visualizzare le proprie statistiche di Messaggi, Voti, Recensioni, con delle medie basate per anno e mese, tramite l'utilizzo di grafici per mostrare i vari dati.",
            "Possibilità in quanto cliente di ricercare gli artisti tramite nome, media di recensioni e tipo di musicista (es. Batterista, Cantante, DJ).",
            "Possibilità in quanto cliente di visualizzare i profili degli artisti e le recensioni e votazioni lasciate da altri utenti, inoltre è inclusa la possibilità di contattare direttamente l'artista per una collaborazione tramite l'apposito form."
        ],
        mainImg: '/img/Slides Portfolio/BMusic/BMusicHome.png',
        carouselPics: [
            '/img/Slides Portfolio/BMusic/BMusicHome.png',
            '/img/Slides Portfolio/BMusic/BMusicHome2.png',
            '/img/Slides Portfolio/BMusic/BMusicSearch.png',
            '/img/Slides Portfolio/BMusic/BMusicProfile.png',
            '/img/Slides Portfolio/BMusic/BMusicReview.png',
            '/img/Slides Portfolio/BMusic/BMusicSelfProfile.png',
            '/img/Slides Portfolio/BMusic/BMusicEditProfile.png',
            '/img/Slides Portfolio/BMusic/BMusicMessages.png',
            '/img/Slides Portfolio/BMusic/BMusicSelfReviews.png',
            '/img/Slides Portfolio/BMusic/BMusicStatistics.png',
            '/img/Slides Portfolio/BMusic/BMusicBMusicErrorSponsor.png',
            '/img/Slides Portfolio/BMusic/BMusicPayment.png',
        ],
        repoLink: 'https://github.com/Drew0004/boolean-final-project-backend'
    },

    {
        title: 'Traveller',
        description: "Traveller è uno dei primi progetti che ho sviluppato utilizzando ReactJs. La piattaforma è stata concepita per permettere agli utenti di pianificare un viaggio in maniera semplice e intuitiva. Gli utenti possono creare un itinerario personalizzato tramite un form dedicato, impostando il numero di giorni e le tappe da visitare per ogni giornata. Il tutto è integrato con i servizi di Google Maps, garantendo una navigazione agevole e pratica. La UI del progetto è stata progettata in precedenza utilizzando Figma, il che ha facilitato notevolmente il processo di sviluppo e ha contribuito a garantire un'esperienza utente ottimale. Per la persistenza dei dati, è stata sfruttata la memoria locale del browser, permettendo agli utenti di salvare e gestire il proprio viaggio senza la necessità di un backend. ",
        techFunct: [
            'Possibilità di creare un nuovo viaggio tramite un form, impostando nome della meta, date di permanenza, descrizione e immagine.',
            "Validazione dei dati inviati dall'utente per garantire che siano corretti e completi.",
            "È possibile aggiungere tappe a ogni singola giornata del viaggio, con la visualizzazione delle stesse direttamente sulla mappa",
            "Gli utenti possono aggiungere recensioni e note alle varie tappe per registrare le proprie impressioni e tenere traccia dei dettagli del viaggio.",
            "I dati sono salvati nel LocalStorage del browser, consentendo la persistenza delle informazioni anche dopo il refresh della pagina.",
            "Possibilità di eliminare i viaggi terminati o non effettuati."
        ],
        mainImg: '/img/Slides Portfolio/Traveller/Home1.png',
        carouselPics: [
            '/img/Slides Portfolio/Traveller/Home1.png',
            '/img/Slides Portfolio/Traveller/Home2.png',
            '/img/Slides Portfolio/Traveller/Days.png',
            '/img/Slides Portfolio/Traveller/SingleDay1.png',
            '/img/Slides Portfolio/Traveller/SingleDay2.png',
            '/img/Slides Portfolio/Traveller/Form.png',
        ],
        repoLink: 'https://github.com/Drew0004/travel-app'
    },

    {
        title: 'MaxCoach',
        description: "MaxCoach Landing Page (Replica) è uno dei primi progetti che ho realizzato con VueJs durante il mio percorso formativo presso Boolean. Il progetto consiste nella replica fedele della landing page del sito MaxCoach, un'esperienza che mi ha permesso di mettere in pratica i concetti di base di VueJs e di approfondire le mie competenze in HTML, CSS e JavaScript. La sfida principale è stata riprodurre accuratamente il layout e il design, rispettando le specifiche dell'originale, e gestire componenti dinamici tipici di VueJs, come la struttura modulare e la gestione delle props, per il passaggio di dati da componenti padre a componenti figlio. Durante lo sviluppo, ho migliorato la mia capacità di lavorare tramite l'utilizzo di componenti, permettendomi così di avere maggiore controllo e mantenibilità all'interno del codice. Nonostante fosse un progetto introduttivo, è stato un passo fondamentale per comprendere il flusso di lavoro in VueJs e familiarizzare con i concetti di componentizzazione e riutilizzo del codice. Grazie a questo progetto, ho acquisito maggiore fiducia nelle mie abilità di programmazione e ho affinato le mie capacità nel tradurre un design in un'interfaccia funzionale.",
        techFunct: [
            "La pagina è stata costruita utilizzando componenti VueJs modulari, permettendo una gestione efficiente del codice e il riutilizzo di elementi comuni come header, footer e sezioni della pagina.",
            "Per rendere il codice CSS più leggibile e manutenibile, è stato utilizzato Sass per gestire variabili, mixin e codice più modulare.",
            "Gestione e visualizzazione dei dati tramite utilizzo di un carosello realizzato con la libreria Swiper.",
            "L'interfaccia è stata sviluppata seguendo un approccio pixel-perfect, assicurando che ogni elemento corrisponda fedelmente al design originale."
        ],
        mainImg: '/img/Slides Portfolio/MaxCoach/Sect1.png',
        carouselPics: [
            '/img/Slides Portfolio/MaxCoach/Sect1.png',
            '/img/Slides Portfolio/MaxCoach/Sect2.png',
            '/img/Slides Portfolio/MaxCoach/Sect3.png',
            '/img/Slides Portfolio/MaxCoach/Sect4.png',
            '/img/Slides Portfolio/MaxCoach/Sect5.png',
        ],
        repoLink: 'https://github.com/Drew0004/proj-html-vuejs'
    },

    {
        title: 'My Todo List',
        description: "My Todo List è il mio primo progetto sviluppato con ReactJs. L'idea alla base del progetto è stata quella di creare una piattaforma utility semplice e funzionale, pensata per gestire e organizzare facilmente le attività quotidiane. La UI è stata progettata in modo minimalista e lineare, con l'obiettivo di offrire un'esperienza utente fluida e intuitiva, consentendo agli utenti di aggiungere, modificare, rimuovere e completare le proprie task in modo rapido ed efficiente.",
        techFunct: [
            "Gestione dei componenti tramite gli Hooks useState e useEffect",,
            "Validazione dei dati inviati dall'utente per garantire che siano corretti e completi.",
            "Logica di aggiunta, modifica e rimozione (Includendo la doppia verifica per evitare cancellazioni accidentali) del task nella apposita sezione.",
            "Inserimento opzionale della data del task in modo tale da poter avere maggiore organizzazione",
            "Utilizzo del local storage, per preservare dati in persistenza nella memoria locale del proprio browser web."

        ],
        mainImg: '/img/Slides Portfolio/TodoList/Main.png',
        carouselPics: [
            '/img/Slides Portfolio/TodoList/Main.png',
        ],
        repoLink: 'https://github.com/Drew0004/React-To-Do-List'
    },

    {
        title: 'Boolzap',
        description: "Boolzap è una replica della popolare app di messaggistica WhatsApp, sviluppata durante il mio percorso formativo presso Boolean utilizzando VueJs. Questa applicazione include funzionalità come la ricerca dei contatti e la possibilità di inviare messaggi all'interno di una chat. Ogni messaggio ricevuto genera una risposta automatica, simile a un bot di conversazione per una maggiore interattività.",
        techFunct: [
            "Gestione della ricerca degli utenti per nome con un sistema di ricerca case insensitive.",
            "Possibilità di scrivere dei messaggi all'interno di una chat",
            "Gestione degli eventi relativi ai messaggi tramite risposte automatiche."
        ],
        mainImg: '/img/Slides Portfolio/Boolzap/Home.png',
        carouselPics: [
            '/img/Slides Portfolio/Boolzap/Home.png',
            '/img/Slides Portfolio/Boolzap/Response.png',
            '/img/Slides Portfolio/Boolzap/Search.png',
        ],
        repoLink: 'https://github.com/Drew0004/React-To-Do-List'
    },
]

const artworks = [
    '/img/Artworks/Astratto1920.jpg',
    '/img/Artworks/Butterfly.jpg',
    '/img/Artworks/Ciclope.jpg',
    '/img/Artworks/DaliEdit2.jpg',
    '/img/Artworks/Elephant.jpg',
    '/img/Artworks/Esso.jpg',
    '/img/Artworks/Fair Park.jpg',
    '/img/Artworks/HappinessType.jpg',
    '/img/Artworks/MushAlienBianco.jpg',
    '/img/Artworks/MushroomMan1.jpg',
    '/img/Artworks/PosterTyler.jpg',
    '/img/Artworks/PostY2K1.jpg',
    '/img/Artworks/RockCerchio.jpg',
    '/img/Artworks/scifi.jpg',
    '/img/Artworks/SirFlower.jpg',
    '/img/Artworks/Space Invaders.jpg',
]

const graphicTechnologies = [
    'img/Technologies/adobe-illustrator-svgrepo-com.svg',
    '/img/Technologies/adobe-photoshop-svgrepo-com.svg',
    '/img/Technologies/indesign-svgrepo-com.svg',
    '/img/Technologies/blender-svgrepo-com.svg',
    '/img/Technologies/figma.svg'
]

const webDevTechnologies = [
    '/img/Technologies/html5.svg',
    '/img/Technologies/css3-alt.svg',
    '/img/Technologies/bootstrap.svg',
    '/img/Technologies/js.svg',
    '/img/Technologies/vuejs.svg',
    '/img/Technologies/react-svgrepo-com.svg',
    '/img/Technologies/sass.svg',
    '/img/Technologies/php.svg',
    '/img/Technologies/laravel.svg',
    '/img/Technologies/mysql-svgrepo-com.svg',
    '/img/Technologies/database-solid.svg',
    '/img/Technologies/git-alt.svg'
]

export  { projects, artworks, graphicTechnologies, webDevTechnologies };