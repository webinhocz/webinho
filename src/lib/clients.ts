export type ClientProject = {
  name: string;
  category: string;
  description: string;
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
    description: "Prodejní stránka pro finančního poradce s webinářem a platbou online.",
    url: "https://detektorpasti.cz",
    accent: "#c9a15a",
    bg: "#0c1524",
    photo: "/portfolio/detektor-pasti.jpg",
  },
  {
    name: "Kittel Consult",
    category: "Finanční poradenství",
    description: "Osobní web finančního poradce s kalkulačkami a e-bookem zdarma.",
    url: "https://kittelconsult.cz",
    accent: "#c9a15a",
    bg: "#0c1524",
    logo: "/loga/kittel-consult.png",
    photo: "/portfolio/kittel-consult.jpg",
  },
  {
    name: "Oprav dům bez úroku",
    category: "Rekonstrukce",
    description:
      "Leadová stránka pro rekonstrukce rodinných domů s formulářem na ověření nároku.",
    url: "https://opravdumbezuroku.cz",
    accent: "#2f8a3c",
    bg: "#f4f6f2",
  },
  {
    name: "Pustelník Coach",
    category: "Fitness & trénink",
    description:
      "Prodejní stránka osobního trenéra s omezenou nabídkou a odpočtem volných míst.",
    url: "https://pustelnikcoach.cz",
    accent: "#3f9f7d",
    bg: "#0d1210",
    logo: "/loga/logo-petr.png",
    photo: "/portfolio/pustelnik-coach.jpg",
  },
  {
    name: "Élysée Garden",
    category: "Head Spa studio",
    description: "Rezervační web pro Head Spa studio s online objednávkami a dárkovými poukazy.",
    url: "https://elyseegarden.cz",
    accent: "#8a8f5e",
    bg: "#f5f2e8",
    logo: "/loga/elysee-garden.png",
    photo: "/portfolio/elysee-garden.jpg",
  },
  {
    name: "Obora Víno",
    category: "Lovecký turismus",
    description: "Web pro luxusní lovecký pobyt s vícekrokovým poptávkovým formulářem.",
    url: "https://oboravino.cz",
    accent: "#7a6a4f",
    bg: "#12140f",
    logo: "/loga/hunting-duo.png",
    photo: "/portfolio/obora-vino.jpg",
  },
  {
    name: "Didaprax",
    category: "Vzdělávání",
    description: "Web pro doučování češtiny a přípravu na maturitu s osobním příběhem lektora.",
    url: "https://didaprax.cz",
    accent: "#c94f4f",
    bg: "#160c0c",
    photo: "/portfolio/didaprax.jpg",
  },
  {
    name: "Lukáš Přibyla",
    category: "Osobní značka",
    description: "Osobní web a portfolio pro tvorbu obsahu a akvizici klientů.",
    url: "https://lukepribyla.cz",
    accent: "#5b6ef5",
    bg: "#0a0a0a",
    logo: "/loga/workspace-logo.png",
    photo: "/portfolio/lukas-pribyla.jpg",
  },
];
