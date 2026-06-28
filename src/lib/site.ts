// Single source of truth for the demo. One brand, two physical salons.
// Real content from the shops' Google Business pages (June 2026).
// Photos are grayscale placeholders — swap the `image`/`gallery` URLs for the
// real Google Business photos when available.

export const CAL_USERNAME = "arslane";

// Canonical production URL — single source for metadata, robots, sitemap and JSON-LD.
export const SITE_URL = "https://mb-coiffure.vercel.app";

export const PHONE = "07 69 63 23 77";
export const PHONE_HREF = "tel:+33769632377";
export const PHONE_E164 = "+33769632377";

export const BRAND = {
  name: "Coiffeur MB 31",
  tagline: "Coiffeur · Barbier · Toulouse",
} as const;

// Opening hours, identical every day (10h–20h, 7j/7). Used for both display
// and the openingHoursSpecification in the HairSalon schema.
export const OPENING_HOURS = {
  opens: "10:00",
  closes: "20:00",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
} as const;

export const PRICE_RANGE = "€10–€25";

export type Service = {
  title: string;
  description: string;
  /** Price in euros — display string is derived (`25 €`); schema uses `25.00`. */
  priceEUR: number;
  calSlug: string;
};

export const SERVICES: Service[] = [
  {
    title: "Coiffure + barbe",
    description:
      "La coupe et la taille de barbe dans la même séance. Dégradé net, contours précis, finitions soignées. Comptez environ 40 minutes.",
    priceEUR: 25,
    calSlug: "coupe-barbe",
  },
  {
    title: "Coiffure",
    description:
      "Coupe homme sur mesure, du classique au dégradé moderne. Lavage, coupe et coiffage compris, en 30 minutes environ.",
    priceEUR: 20,
    calSlug: "30min",
  },
  {
    title: "Barbe",
    description:
      "Taille et entretien de la barbe au rasoir : contours dessinés, longueur maîtrisée, finition nette. Idéal en complément d'une coupe.",
    priceEUR: 10,
    calSlug: "barbe",
  },
];

export type Location = {
  id: string;
  name: string;
  street: string;
  city: string;
  postalCode: string;
  addressLocality: string;
  /** Geo coordinates from OpenStreetMap for 2 Chemin de Nicol, 31200 Toulouse. */
  geo: { latitude: number; longitude: number };
  hours: string;
  hoursNote: string;
  rating: number;
  reviews: number;
  mapsUrl: string;
  image: string;
};

const mapsQuery = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const LOCATIONS: Location[] = [
  {
    id: "mb-31",
    name: "Coiffeur MB 31",
    street: "2 Chemin de Nicol",
    city: "31200 Toulouse",
    postalCode: "31200",
    addressLocality: "Toulouse",
    geo: { latitude: 43.6252, longitude: 1.475 },
    hours: "10h – 20h",
    hoursNote: "Tous les jours, 7j/7",
    rating: 4.8,
    reviews: 54,
    mapsUrl: mapsQuery("Coiffeur MB 31, 2 Chemin de Nicol, 31200 Toulouse"),
    image: "https://picsum.photos/seed/mb31-salon/1200/1500?grayscale",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  salon: string;
};

// Curated from genuine positive Google reviews.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "La meilleure coupe de cheveux que j'aie eue depuis longtemps. Les coiffeurs sont très gentils, l'ambiance est agréable et l'endroit confortable.",
    author: "Kevin Gauthier",
    salon: "Coiffeur MB 31",
  },
  {
    quote: "Prestation pro. Très satisfait du service.",
    author: "Ma Nu",
    salon: "Coiffeur MB 31",
  },
];

// Editorial gallery — grayscale placeholders, swap for real shots.
export const GALLERY: string[] = [
  "https://picsum.photos/seed/cut-01/800/1000?grayscale",
  "https://picsum.photos/seed/cut-02/800/1000?grayscale",
  "https://picsum.photos/seed/cut-03/800/1000?grayscale",
  "https://picsum.photos/seed/cut-04/800/1000?grayscale",
];

// Local context for hyper-local long-tail SEO. The Chemin de Nicol runs through
// the Roseraie and Croix-Daurade districts in the east of Toulouse (verified via
// OpenStreetMap / Wikipedia) — close to the Roseraie metro (line A).
export const AREA =
  "Situé 2 Chemin de Nicol, dans l'est de Toulouse, Coiffeur MB 31 dessert " +
  "les quartiers de la Roseraie, de Croix-Daurade, de Soupetard et de Jolimont. " +
  "Le salon se trouve à quelques minutes à pied de la station de métro Roseraie " +
  "(ligne A), avec un accès facile depuis tout le nord-est toulousain.";

export type Faq = { question: string; answer: string };

// Question-format content for People Also Ask boxes and AI Overviews. Each
// answer opens with a direct response and names the salon + its location.
export const FAQ: Faq[] = [
  {
    question: "Quels sont les horaires du Coiffeur MB 31 ?",
    answer:
      "Le Coiffeur MB 31 est ouvert tous les jours de 10h à 20h, sans interruption, au 2 Chemin de Nicol à Toulouse (31200). Que ce soit en début de matinée, sur la pause déjeuner ou en soirée après le travail, vous trouverez un créneau pour votre coupe ou votre taille de barbe. Pour être sûr d'être reçu à l'heure qui vous arrange, le mieux reste de réserver votre créneau en ligne.",
  },
  {
    question: "Le salon est-il ouvert le dimanche à Toulouse ?",
    answer:
      "Oui, le Coiffeur MB 31 est ouvert le dimanche, comme tous les autres jours de la semaine, de 10h à 20h. C'est l'un des rares coiffeurs barbiers de l'est toulousain à recevoir 7j/7 : vous pouvez donc passer le week-end, le dimanche compris, sans avoir à poser de congé. La réservation en ligne fonctionne également le dimanche.",
  },
  {
    question: "Combien coûte une coupe homme et une taille de barbe ?",
    answer:
      "Chez Coiffeur MB 31, la coupe homme est à 20 €, la taille de barbe à 10 €, et la formule coiffure + barbe à 25 €. Les tarifs sont clairs et affichés à l'avance, sans supplément caché. La réservation se fait en ligne et le paiement s'effectue directement au salon, à Toulouse.",
  },
  {
    question: "Faut-il prendre rendez-vous ou venir sans réservation ?",
    answer:
      "Vous pouvez réserver votre créneau en ligne en quelques secondes, ce qui garantit d'être reçu à l'heure choisie sans attendre. Le Coiffeur MB 31 accueille aussi les passages sans rendez-vous, selon l'affluence du moment. Aux heures les plus demandées (fin de journée et week-end), la réservation en ligne reste le moyen le plus sûr d'avoir votre place.",
  },
  {
    question: "Dans quel quartier de Toulouse se trouve le salon ?",
    answer:
      "Le Coiffeur MB 31 se situe au 2 Chemin de Nicol, dans l'est de Toulouse (31200), à la jonction des quartiers Roseraie et Croix-Daurade. Le salon est à quelques minutes à pied de la station de métro Roseraie (ligne A) et facilement accessible depuis Soupetard, Jolimont et tout le nord-est toulousain.",
  },
  {
    question: "Comment réserver chez Coiffeur MB 31 ?",
    answer:
      "La réservation se fait directement en ligne depuis ce site : choisissez votre prestation (coupe, barbe ou les deux), puis le créneau qui vous convient, et vous recevez une confirmation immédiate. Le paiement se règle ensuite au salon. Vous pouvez aussi appeler le salon pour organiser votre venue au 2 Chemin de Nicol, à Toulouse.",
  },
];
