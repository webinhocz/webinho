export type ClientProject = {
  name: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  accent: string;
  bg: string;
  logo?: string;
  photo?: string;
};

export const CLIENTS: ClientProject[] = [
  {
    name: "Detektor investičních pastí",
    category: "Finanční poradenství",
    categoryEn: "Financial advisory",
    description: "Prodejní stránka pro finančního poradce s webinářem a platbou online.",
    descriptionEn: "A sales page for a financial advisor with a webinar and online payment.",
    url: "https://detektorpasti.cz",
    accent: "#c9a15a",
    bg: "#0c1524",
    photo: "/portfolio/detektor-pasti.jpg",
  },
  {
    name: "Pustelník Coach",
    category: "Fitness & trénink",
    categoryEn: "Fitness & coaching",
    description:
      "Prodejní stránka osobního trenéra s omezenou nabídkou a odpočtem volných míst.",
    descriptionEn:
      "A sales page for a personal trainer with a limited offer and a spots-remaining countdown.",
    url: "https://pustelnikcoach.cz",
    accent: "#3f9f7d",
    bg: "#0d1210",
    logo: "/loga/logo-petr.png",
    photo: "/portfolio/pustelnik-coach.jpg",
  },
  {
    name: "Élysée Garden",
    category: "Head Spa studio",
    categoryEn: "Head Spa studio",
    description: "Rezervační web pro Head Spa studio s online objednávkami a dárkovými poukazy.",
    descriptionEn: "A booking website for a Head Spa studio with online bookings and gift vouchers.",
    url: "https://elyseegarden.cz",
    accent: "#8a8f5e",
    bg: "#f5f2e8",
    logo: "/loga/elysee-garden.png",
    photo: "/portfolio/elysee-garden.jpg",
  },
  {
    name: "Obora Víno",
    category: "Lovecký turismus",
    categoryEn: "Hunting tourism",
    description: "Web pro luxusní lovecký pobyt s vícekrokovým poptávkovým formulářem.",
    descriptionEn: "A website for a luxury hunting retreat with a multi-step inquiry form.",
    url: "https://oboravino.cz",
    accent: "#7a6a4f",
    bg: "#12140f",
    logo: "/loga/hunting-duo.png",
    photo: "/portfolio/obora-vino.jpg",
  },
  {
    name: "Didaprax",
    category: "Vzdělávání",
    categoryEn: "Education",
    description: "Web pro doučování češtiny a přípravu na maturitu s osobním příběhem lektora.",
    descriptionEn:
      "A website for Czech language tutoring and exam prep, featuring the tutor's personal story.",
    url: "https://didaprax.cz",
    accent: "#c94f4f",
    bg: "#160c0c",
    photo: "/portfolio/didaprax.jpg",
  },
  {
    name: "Lukáš Přibyla",
    category: "Osobní značka",
    categoryEn: "Personal brand",
    description: "Osobní web a portfolio pro tvorbu obsahu a akvizici klientů.",
    descriptionEn: "A personal website and portfolio for content creation and client acquisition.",
    url: "https://lukepribyla.cz",
    accent: "#5b6ef5",
    bg: "#0a0a0a",
    logo: "/loga/workspace-logo.png",
    photo: "/portfolio/lukas-pribyla.jpg",
  },
  {
    name: "Daruj Head Spa",
    category: "Kampaňová landing page",
    categoryEn: "Campaign landing page",
    description: "Kampaňová landing page pro prodej dárkových poukazů Head Spa studia se sezónní nabídkou.",
    descriptionEn: "A campaign landing page for selling Head Spa gift vouchers with a seasonal offer.",
    url: "https://darujheadspa.cz",
    accent: "#8a8f5e",
    bg: "#1a1712",
    photo: "/portfolio/daruj-headspa.jpg",
  },
  {
    name: "Sladká větev",
    category: "Rodinná farma & e-shop",
    categoryEn: "Family orchard & e-shop",
    description: "E-shop rodinného sadu s domácími produkty a možností samosběru ovoce.",
    descriptionEn: "An online store for a family orchard with homemade products and fruit self-picking bookings.",
    url: "https://sladkavetev.cz",
    accent: "#7a9c4f",
    bg: "#f4f1e8",
    photo: "/portfolio/sladka-vetev.jpg",
  },
  {
    name: "Full Service Europe",
    category: "Finanční poradenství",
    categoryEn: "Financial advisory",
    description: "Web finančně poradenské firmy s kalkulačkami a týmovou prezentací.",
    descriptionEn: "A website for a financial advisory firm with calculators and a team showcase.",
    url: "https://fse.cz",
    accent: "#c9a15a",
    bg: "#12172a",
    photo: "/portfolio/fse.jpg",
  },
];
