import { Project, Photo, CountryDestination, PersonalInterest, CareerMilestone } from '../types';

export const personalBio = {
  name: "Tarun Sabbineni",
  shortTitle: "Quant & Research Platform EM @ Vanguard",
  role: "Research & Quantitative Model Platform Engineering Manager",
  department: "Research & Quantitative Model Platform Engineering",
  company: "Vanguard",
  location: "London, United Kingdom",
  timezone: "Europe/London",
  availabilityStatus: "Open for quantitative engineering & leadership dialogue",
  summary: "Research and Quantitative Model Platform Engineering Manager at Vanguard (Dec 2022 – Present; 2 years as EM) leading quantitative modeling platforms, research compute infrastructure, and high-performance financial systems. Prior experience spans over 3 years at JPMorgan (2019 – 2022, including J.P. Morgan Asset Management 2021–2022, and a 6-month internship in 2018), and a 2:1 in Computer Science from Imperial College London.",
  email: "contact@tarunsabbineni.com",
  github: "https://github.com/tarunsab",
  linkedin: "https://www.linkedin.com/in/tarun-sabbineni-228419b7/",
  philosophy: "Bridging quantitative rigor and platform engineering: empowering researchers with resilient compute, clean abstractions, and high velocity.",
  stats: [
    { label: "Current Role", value: "Vanguard EM" },
    { label: "Domain", value: "Quant & Research" },
    { label: "JPMorgan", value: "2019 – 2022" },
    { label: "Degree", value: "Imperial CS 2:1" },
  ]
};

export const careerMilestones: CareerMilestone[] = [
  {
    id: "vanguard-em",
    yearRange: "Dec 2022 – Present",
    role: "Research & Quantitative Model Platform Engineering Manager",
    company: "Vanguard",
    division: "Research & Quantitative Model Platform Engineering",
    location: "London, United Kingdom",
    badge: "Current Role · 2 Yrs as EM",
    summary: "Leading the Research and Quantitative Model Platform Engineering team at Vanguard since December 2022, serving 2 years as Engineering Manager. Architecting and operating high-performance quantitative modeling platforms, model execution pipelines, distributed research computing grids, and resilient cloud infrastructure that power quantitative investment strategies.",
    achievements: [
      "Leading the Research & Quantitative Model Platform Engineering team for 2 years: setting platform vision, collaborating with quantitative researchers, and mentoring high-calibre systems engineers",
      "Architecting scalable quantitative model hosting, backtesting engines, and algorithmic calculation grids across enterprise cloud platforms",
      "Establishing developer velocity, standardized model deployment guardrails, and enterprise reliability for mission-critical investment research",
      "Fostering cross-disciplinary synergy between quantitative research scientists, portfolio managers, and platform engineers"
    ],
    skills: ["Quantitative Platforms", "Model Infrastructure", "Engineering Leadership", "Distributed Systems", "Cloud Compute Grids", "Python", "Java / C++", "FinTech Scale"],
    metrics: [
      { label: "Tenure at Vanguard", value: "Dec 2022 – Present" },
      { label: "Leadership Track", value: "2 Years as EM" },
      { label: "Engineering Scope", value: "Quant & Research Platform" }
    ]
  },
  {
    id: "jpmorgan-am",
    yearRange: "2021 – 2022",
    role: "Software Engineer",
    company: "J.P. Morgan Asset Management",
    division: "Asset Management Technology",
    location: "London, United Kingdom",
    badge: "Asset Management Tech",
    summary: "Spent 2021 to 2022 within J.P. Morgan Asset Management technology after starting at JPMorgan in 2019. Built and modernized multi-asset platforms, high-throughput calculation pipelines, and mission-critical investment management systems.",
    achievements: [
      "Engineered resilient multi-tier financial services and portfolio analytics processing critical market and investment data",
      "Modernized legacy pipeline architectures to cloud-ready event-driven microservices with robust observability",
      "Collaborated closely with portfolio managers, quantitative analysts, and risk teams to translate complex financial workflows into scalable software"
    ],
    skills: ["Java / Spring Boot", "Python", "Cloud Architecture", "Event-Driven Systems", "Kafka", "SQL / NoSQL", "Asset Management"],
    metrics: [
      { label: "Division", value: "Asset Management" },
      { label: "Tenure", value: "2021 – 2022" },
      { label: "Focus", value: "Portfolio & Data Scale" }
    ]
  },
  {
    id: "jpmorgan-tech",
    yearRange: "2019 – 2021",
    role: "Software Engineer",
    company: "JPMorgan Chase & Co.",
    division: "Corporate Technology & Graduate Program",
    location: "London, United Kingdom",
    badge: "Full-Time Start (2019)",
    summary: "Started full-time at JPMorgan in 2019 across Corporate Technology. Designed, developed, and maintained core distributed banking platforms and enterprise backend systems before transitioning to J.P. Morgan Asset Management in 2021.",
    achievements: [
      "Joined JPMorgan full-time in 2019, building distributed enterprise applications supporting high-volume internal transaction and reporting workloads",
      "Standardized CI/CD automation pipelines, automated test suites, and zero-downtime deployment patterns",
      "Graduated from rigorous software engineering graduate program, actively participating in firmwide technical innovation and hackathons"
    ],
    skills: ["Java", "Spring", "REST APIs", "Microservices", "Docker", "CI/CD", "Automated Testing"],
    metrics: [
      { label: "Start at JPMorgan", value: "2019" },
      { label: "Transition to Asset Mgmt", value: "2021" }
    ]
  },
  {
    id: "jpmorgan-intern",
    yearRange: "2018 (6 Months)",
    role: "Software Engineering Intern",
    company: "J.P. Morgan",
    division: "Corporate Technology",
    location: "London, United Kingdom",
    badge: "6-Month Internship",
    summary: "6-month Software Engineering Internship in Corporate Technology at J.P. Morgan in London, developing automated tooling and contributing to enterprise development pipelines.",
    achievements: [
      "Completed intensive 6-month software engineering internship delivering production features for internal engineering teams",
      "Engineered automation scripts and data ingestion utilities that accelerated testing cycles",
      "Received full-time graduate software engineering offer, returning to JPMorgan in 2019"
    ],
    skills: ["Python", "Java", "Automated Testing", "Git", "Agile Collaboration"],
    metrics: [
      { label: "Internship Duration", value: "6 Months" },
      { label: "Outcome", value: "Full-Time Return in 2019" }
    ]
  },
  {
    id: "imperial-degree",
    yearRange: "2015 – 2018",
    role: "BSc Computer Science (2:1)",
    company: "Imperial College London",
    division: "Department of Computing",
    location: "London, United Kingdom",
    badge: "2:1 Honours",
    summary: "Graduated with a 2:1 in Computer Science from Imperial College London (Department of Computing). Formed a comprehensive technical foundation spanning distributed systems, algorithms, computational mathematics, concurrency, data structures, and compiler architecture.",
    achievements: [
      "Earned 2:1 Honours in Computer Science from Imperial College London's world-renowned Department of Computing",
      "Mastered distributed systems, high-performance computing, advanced algorithms, and systems programming",
      "Conducted extensive project work in concurrent programming, database architecture, and algorithmic optimization"
    ],
    skills: ["Computer Science", "Algorithms & Complexity", "Distributed Systems", "Concurrency", "Systems Architecture", "Mathematical Modeling"],
    metrics: [
      { label: "Degree Result", value: "2:1 Honours" },
      { label: "Institution", value: "Imperial College London" }
    ],
    isEducation: true
  }
];

export const visitedCountries: CountryDestination[] = [
  {
    id: "gbr",
    name: "United Kingdom",
    code: "GB",
    region: "Northern Europe",
    lat: 51.5074,
    lng: -0.1278,
    yearVisited: "Resident",
    travelNotes: "Home base in London. The moody morning mist across the Thames, Brutalist brutalism of the Barbican, and solitary train journeys to the Scottish Highlands.",
    photoUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    highlights: ["London Barbican Estate", "Isle of Skye", "Cotswolds Golden Hour", "Highland Lochs"]
  },
  {
    id: "fra",
    name: "France",
    code: "FR",
    region: "Western Europe",
    lat: 48.8566,
    lng: 2.3522,
    yearVisited: "2024",
    travelNotes: "Haussmannian symmetry in Paris and dramatic limestone cliffs in Étretat. The play of late afternoon zinc-roof reflections.",
    photoUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Montmartre alleys", "Normandy coast", "Chamonix Aiguille du Midi", "Palais-Royal colonnades"]
  },
  {
    id: "bel",
    name: "Belgium",
    code: "BE",
    region: "Western Europe",
    lat: 50.8503,
    lng: 4.3517,
    yearVisited: "2023",
    travelNotes: "Gothic guildhouses in Ghent and misty canal reflections in Bruges under twilight lanterns.",
    photoUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Bruges canals", "Ghent Gravensteen", "Brussels Grand Place", "Antwerp Central Station"]
  },
  {
    id: "nld",
    name: "Netherlands",
    code: "NL",
    region: "Western Europe",
    lat: 52.3676,
    lng: 4.9041,
    yearVisited: "2024",
    travelNotes: "Bicycle pacing along Amsterdam canals, modern waterfront architecture in Rotterdam, and geometric bulb fields.",
    photoUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Prinsengracht morning", "Rotterdam Cube Houses", "Rijksmuseum corridors", "Westerpark sunset"]
  },
  {
    id: "che",
    name: "Switzerland",
    code: "CH",
    region: "Central Europe",
    lat: 46.8182,
    lng: 8.2275,
    yearVisited: "2025",
    travelNotes: "Glacier Express panoramas, crisp mountain air at 3,000m altitude in Zermatt, and mirrored alpine lakes.",
    photoUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Matterhorn dawn reflection", "Lauterbrunnen Valley", "Gornergrat railway", "Lake Geneva shoreline"]
  },
  {
    id: "deu",
    name: "Germany",
    code: "DE",
    region: "Central Europe",
    lat: 52.5200,
    lng: 13.4050,
    yearVisited: "2023",
    travelNotes: "Bauhaus minimalism in Dessau, crisp Bavarian alpine foothill roads, and industrial transformations in the Ruhr valley.",
    photoUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Berlin Museum Island", "Neuschwanstein morning fog", "Hamburg Speicherstadt", "Black Forest trails"]
  },
  {
    id: "esp",
    name: "Spain",
    code: "ES",
    region: "Southern Europe",
    lat: 40.4168,
    lng: -3.7038,
    yearVisited: "2024",
    travelNotes: "Warm terracotta shadows in Seville, modernist curves of Barcelona, and golden sea light across Mallorca.",
    photoUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Sagrada Familia interior light", "Alhambra courtyards", "Seville Plaza de España", "Mallorca Tramuntana"]
  },
  {
    id: "prt",
    name: "Portugal",
    code: "PT",
    region: "Southern Europe",
    lat: 38.7223,
    lng: -9.1393,
    yearVisited: "2024",
    travelNotes: "Hand-painted azulejo tiles, yellow trams descending steep cobblestones in Alfama, and rugged Atlantic surf in Nazaré.",
    photoUrl: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Alfama narrow stairs", "Porto Douro River bridge", "Sintra misty palaces", "Cabo da Roca"]
  },
  {
    id: "grc",
    name: "Greece",
    code: "GR",
    region: "Southern Europe",
    lat: 37.9838,
    lng: 23.7275,
    yearVisited: "2023",
    travelNotes: "The intense blue and whitewashed cycladic geometry of Santorini contrasted with classical marble antiquity in Athens.",
    photoUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Oia blue domes at dawn", "Acropolis Parthenon", "Milos volcanic coast", "Naxos mountain villages"]
  },
  {
    id: "bgr",
    name: "Bulgaria",
    code: "BG",
    region: "Southeast Europe",
    lat: 42.6977,
    lng: 23.3219,
    yearVisited: "2022",
    travelNotes: "Seven Rila Lakes dramatic glacial terrain and the Byzantine fresco craft of Rila Monastery.",
    photoUrl: "https://images.unsplash.com/photo-1584448141569-69f342da535c?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Rila Monastery cloisters", "Seven Rila Lakes crest", "Plovdiv Roman Amphitheatre", "Balkan range trails"]
  },
  {
    id: "hrv",
    name: "Croatia",
    code: "HR",
    region: "Southern Europe",
    lat: 45.8150,
    lng: 15.9819,
    yearVisited: "2023",
    travelNotes: "Emerald cascading terraces of Plitvice Lakes and Dubrovnik's ancient limestone walls glowing above Adriatic azure waters.",
    photoUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Dubrovnik city walls", "Plitvice cascading waters", "Split Diocletian Palace", "Hvar island sunset"]
  },
  {
    id: "mne",
    name: "Montenegro",
    code: "ME",
    region: "Southern Europe",
    lat: 42.4411,
    lng: 19.2636,
    yearVisited: "2023",
    travelNotes: "The fjord-like Bay of Kotor framed by sheer limestone mountains rising straight out of calm Mediterranean waters.",
    photoUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Bay of Kotor serpentine", "Perast Our Lady of the Rocks", "Durmitor Black Lake", "Sveti Stefan vista"]
  },
  {
    id: "lie",
    name: "Liechtenstein",
    code: "LI",
    region: "Central Europe",
    lat: 47.1660,
    lng: 9.5554,
    yearVisited: "2025",
    travelNotes: "Perched castle above Vaduz overlooking the Rhine basin, framed by pristine alpine pastures and serene mountain roads.",
    photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Vaduz Castle overlook", "Malbun mountain ridges", "Rhine Valley borders", "Alpine meadow hikes"]
  },
  {
    id: "ita",
    name: "Italy",
    code: "IT",
    region: "Southern Europe",
    lat: 41.9028,
    lng: 12.4964,
    yearVisited: "2024",
    travelNotes: "Dolomite pinnacles at sunrise, Florentine Renaissance proportion, and the salty scent of lemon groves on the Amalfi coast.",
    photoUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Tre Cime di Lavaredo", "Florence Duomo facade", "Positano cliffside", "Venice quiet canals"]
  },
  {
    id: "ind",
    name: "India",
    code: "IN",
    region: "South Asia",
    lat: 20.5937,
    lng: 78.9629,
    yearVisited: "Cultural Roots",
    travelNotes: "Deep cultural heritage, intricate Rajasthani stepwells, vibrant spice bazaars, and peaceful temple courtyards at first light.",
    photoUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Jaipur geometric stepwells", "Kerala backwaters serenity", "Varanasi ghats dawn", "Himalayan valley vistas"]
  },
  {
    id: "sgp",
    name: "Singapore",
    code: "SG",
    region: "Southeast Asia",
    lat: 1.3521,
    lng: 103.8198,
    yearVisited: "2023",
    travelNotes: "Biophilic architectural future: Supertree Grove illuminated against the humid tropical evening and Jewel Changi indoor waterfall vortex.",
    photoUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Gardens by the Bay supertrees", "Marina Bay geometric skyline", "Jewel vortex", "Chinatown heritage shophouses"]
  },
  {
    id: "mys",
    name: "Malaysia",
    code: "MY",
    region: "Southeast Asia",
    lat: 4.2105,
    lng: 101.9758,
    yearVisited: "2023",
    travelNotes: "Twin towers slicing through equatorial clouds in Kuala Lumpur and historic colonial streets of George Town, Penang.",
    photoUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Petronas Towers night illumination", "Batu Caves rainbow stairs", "Penang street murals", "Cameron Highlands tea slopes"]
  },
  {
    id: "are",
    name: "United Arab Emirates",
    code: "AE",
    region: "Middle East",
    lat: 23.4241,
    lng: 53.8478,
    yearVisited: "2024",
    travelNotes: "Jean Nouvel's Louvre Abu Dhabi 'rain of light' dome and the hyper-futuristic glass desert canyons of Dubai.",
    photoUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Louvre Abu Dhabi geometric dome", "Burj Khalifa spire reflections", "Sheikh Zayed Grand Mosque marble", "Rub' al Khali desert dunes"]
  },
  {
    id: "mdv",
    name: "Maldives",
    code: "MV",
    region: "South Asia",
    lat: 3.2028,
    lng: 73.2207,
    yearVisited: "2022",
    travelNotes: "Pure turquoise gradients stretching into infinite Indian Ocean horizons, coral atolls, and absolute silence under starry night skies.",
    photoUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Baa Atoll lagoon hues", "Overwater wooden boardwalks", "Bio-luminescent night plankton", "Coral reef biodiversity"]
  },
  {
    id: "idn",
    name: "Indonesia",
    code: "ID",
    region: "Southeast Asia",
    lat: -0.7893,
    lng: 113.9213,
    yearVisited: "2024",
    travelNotes: "Lush cascading rice terraces of Tegallalang, volcanic silhouettes of Mount Batur, and spiritual cliffside temples in Uluwatu.",
    photoUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Tegallalang rice terraces", "Uluwatu ocean cliffs", "Mount Batur caldera dawn", "Nusa Penida Kelingking beach"]
  },
  {
    id: "usa",
    name: "United States",
    code: "US",
    region: "North America",
    lat: 37.0902,
    lng: -95.7129,
    yearVisited: "2024",
    travelNotes: "Contrast of California coastal fog along Highway 1, monolithic sandstone fins in Utah, and high-energy Manhattan geometry.",
    photoUrl: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Big Sur Pacific coast", "Zion National Park canyon", "Manhattan grid reflections", "San Francisco Golden Gate fog"]
  }
];

export const curatedPhotos: Photo[] = [
  {
    id: "p1",
    title: "Alpine Solitude at First Light",
    category: "landscapes",
    country: "Switzerland",
    location: "Zermatt, Pennine Alps",
    year: "2025",
    camera: "Leica Q2",
    lens: "Summilux 28mm f/1.7",
    url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "landscape",
    caption: "The first rays of sunlight hitting the sheer eastern face, caught in still glacial waters before the morning wind rises."
  },
  {
    id: "p2",
    title: "Geometry of the Barbican",
    category: "architecture",
    country: "United Kingdom",
    location: "London, England",
    year: "2024",
    camera: "Sony α7R V",
    lens: "FE 24-70mm f/2.8 GM II",
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "portrait",
    caption: "Bush-hammered concrete columns converging against overcast London sky. Brutalist precision at scale."
  },
  {
    id: "p3",
    title: "Dolomite Ridge Lines",
    category: "landscapes",
    country: "Italy",
    location: "Seceda, Val Gardena",
    year: "2024",
    camera: "Sony α7R V",
    lens: "FE 16-35mm f/2.8 GM",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "landscape",
    caption: "Dramatic tectonic cliff edges breaking through low-lying valley clouds at 2,500 meters altitude."
  },
  {
    id: "p4",
    title: "Rain of Light Dome",
    category: "architecture",
    country: "United Arab Emirates",
    location: "Louvre Abu Dhabi, Saadiyat Island",
    year: "2024",
    camera: "Fujifilm GFX 100S",
    lens: "GF 32-64mm f/4",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "square",
    caption: "Eight layers of geometric stainless steel filtering harsh Arabian sun into dynamic dappled shadows."
  },
  {
    id: "p5",
    title: "Caldera Horizon at Dusk",
    category: "travel",
    country: "Greece",
    location: "Oia, Santorini",
    year: "2023",
    camera: "Leica M11",
    lens: "Apo-Summicron-M 50mm f/2",
    url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "landscape",
    caption: "Warm amber dusk casting long cast-iron shadows across whitewashed terraces carved into volcanic rock."
  },
  {
    id: "p6",
    title: "Zinc Roofs of Montmartre",
    category: "travel",
    country: "France",
    location: "Paris, 18th Arrondissement",
    year: "2024",
    camera: "Leica Q2",
    lens: "Summilux 28mm f/1.7",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "portrait",
    caption: "Layered Haussmannian chimneys and slate roofs catching the golden twilight over the Parisian basin."
  },
  {
    id: "p7",
    title: "Equatorial Canopy at Marina Bay",
    category: "architecture",
    country: "Singapore",
    location: "Gardens by the Bay",
    year: "2023",
    camera: "Sony α7R V",
    lens: "FE 24mm f/1.4 GM",
    url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "landscape",
    caption: "Living vertical gardens interwoven with high-tensile steel frames in dusk illumination."
  },
  {
    id: "p8",
    title: "Pacific Coast Highway Monolith",
    category: "landscapes",
    country: "United States",
    location: "Big Sur, California",
    year: "2024",
    camera: "Sony α7R V",
    lens: "FE 70-200mm f/2.8 GM II",
    url: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "landscape",
    caption: "Heavy ocean mist rolling into coastal redwood bluffs, illuminated by golden raking light."
  },
  {
    id: "p9",
    title: "Emerald Terrace Contours",
    category: "travel",
    country: "Indonesia",
    location: "Tegallalang, Bali",
    year: "2024",
    camera: "Fujifilm GFX 100S",
    lens: "GF 45mm f/2.8",
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=90",
    aspectRatio: "portrait",
    caption: "Intricate Subak irrigation contours reflecting early tropical morning dew among coconut palms."
  }
];

export const publicProjects: Project[] = [
  {
    id: "atlas-devex-orchestrator",
    title: "DevEx Workflow Orchestrator",
    category: "Platform Engineering",
    role: "Architect & Engineering Lead",
    year: "2025",
    description: "An open, declarative control plane that simplifies developer inner-loop environments across multi-tenant Kubernetes clusters with sub-second feedback loops.",
    achievements: [
      "Reduced developer environment boot time from 14 minutes to 48 seconds",
      "Adopted by 1,200+ engineers across 45 distributed microservices",
      "Automated ephemeral preview environments with automatic TTL garbage collection"
    ],
    techStack: ["Go", "Kubernetes CRDs", "gRPC", "OpenTelemetry", "TypeScript"],
    githubUrl: "https://github.com/sabbineni/devex-orchestrator",
    previewImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "observability-pipeline-mesh",
    title: "Zero-Overhead Telemetry Mesh",
    category: "Distributed Systems",
    role: "Creator & Maintainer",
    year: "2024",
    description: "High-throughput stream aggregator designed to process millions of log, trace, and metric vectors with kernel eBPF probes and minimal CPU tax.",
    achievements: [
      "Processes 1.8M events/sec at less than 1.5% CPU overhead per node",
      "Real-time anomaly detection with adaptive sampling algorithms",
      "Fully compliant with OpenTelemetry Collector protocol"
    ],
    techStack: ["Rust", "eBPF", "Kafka", "Arrow", "Prometheus"],
    githubUrl: "https://github.com/sabbineni/telemetry-mesh",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "canary-release-governor",
    title: "Automated Canary Governor",
    category: "Cloud Reliability",
    role: "Principal Engineer",
    year: "2024",
    description: "Statistical rollout automation that monitors real-time golden signals (latency, error rates, saturation) and gates multi-region production deployments automatically.",
    achievements: [
      "Eliminated 94% of human-triggered deployment rollbacks",
      "Mann-Whitney U statistical divergence scoring for micro-canaries",
      "Native integrations with Argo Rollouts and Spinnaker"
    ],
    techStack: ["Python", "Argo Rollouts", "FastAPI", "Redis", "Grafana API"],
    githubUrl: "https://github.com/sabbineni/canary-governor",
    previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lens-raw-cataloger",
    title: "Curator RAW Media Engine",
    category: "Photography Tooling",
    role: "Solo Creator",
    year: "2023",
    description: "A fast local CLI and desktop daemon for photographers to cull, index, and organize terabytes of medium-format RAW captures with perceptual hash deduplication.",
    achievements: [
      "Indexes 10,000 Sony & Leica RAW files in under 90 seconds using SIMD acceleration",
      "Automatic EXIF sanitization stripping sensitive GPS coordinates for public web portfolios",
      "Local smart album clustering based on color palette and scene composition"
    ],
    techStack: ["TypeScript", "Rust / Wasm", "Libraw", "Tauri", "SQLite"],
    githubUrl: "https://github.com/sabbineni/curator-raw-engine",
    previewImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
  }
];

export const personalInterests: PersonalInterest[] = [
  {
    id: "piano",
    title: "Acoustic Piano & Harmonic Nuance",
    subtitle: "Chopin, Debussy & Contemporary Neoclassical",
    description: "Studying classical and impressionistic repertoire. Playing piano instills the same discipline needed in software architecture: polyphony, measured pacing, and knowing that silent rests between notes carry equal weight to the chords.",
    iconName: "Music",
    detailPoints: [
      "Currently rehearsing: Chopin Nocturne Op. 9 No. 2 & Debussy's Clair de Lune",
      "Focusing on rubato control, dynamic touch sensitivity, and harmonic voicing",
      "Playable interactive grand piano sound synthesizer embedded right below"
    ],
    hasAudio: true,
    audioTrackName: "Nocturne in E-flat Major (Recorded Practice Session)"
  },
  {
    id: "tennis",
    title: "Lawn & Hardcourt Tennis",
    subtitle: "Tactical Geometry & Kinetic Rhythm",
    description: "An ardent recreational player. Tennis is chess at 80 miles an hour: court geometry, early racquet preparation, recovery footwork, and mental fortitude under pressure.",
    iconName: "Activity",
    detailPoints: [
      "Club player competing in weekend singles leagues",
      "One-handed backhand enthusiast inspired by Roger Federer and Stefanos Tsitsipas",
      "Favorite surfaces: Grass courts in summer, indoor hardcourts in winter"
    ]
  },
  {
    id: "travel",
    title: "Slow Travel & Cultural Immersion",
    subtitle: "21 Countries Explored with a Camera",
    description: "Rejecting bucket-list tourism in favor of slow observation. Walking back alleys at dawn, sharing street tea with local artisans, and letting the pace of a city reveal itself naturally.",
    iconName: "Compass",
    detailPoints: [
      "21 countries traversed across Europe, Asia, Middle East, and the Americas",
      "Preference for high-altitude alpine passes and maritime coasts",
      "Always on foot: averaging 22,000 steps per exploration day"
    ]
  },
  {
    id: "craft",
    title: "Mechanical Craft & Quiet Tech",
    subtitle: "Horology, Analog Optics & Tactile Tools",
    description: "Appreciating objects built with permanence in an era of ephemeral software. From mechanical spring-drive watch escapements to brass manual focus rings and fountain pens.",
    iconName: "Watch",
    detailPoints: [
      "Deep admiration for independent watchmaking and engineering tolerances",
      "Tactile mechanical keyboards built with tuned dampening and linear switches",
      "Collecting vintage manual focus prime lenses for optical character"
    ]
  }
];
