// Single source of truth for the demo. One brand, two physical salons.
// Real content from the shops' Google Business pages (June 2026).
// Photos are grayscale placeholders — swap the `image`/`gallery` URLs for the
// real Google Business photos when available.

export const PHONE = "07 69 63 23 77";
export const PHONE_HREF = "tel:+33769632377";

export const BRAND = {
  name: "Coiffeur MB 31",
  tagline: "Coiffeur · Barbier · Toulouse",
} as const;

export type Service = {
  title: string;
  description: string;
  price: string;
};

export const SERVICES: Service[] = [
  {
    title: "Coiffure + barbe",
    description:
      "La coupe et la taille de barbe dans la même séance. Dégradé net, contours précis, finitions soignées.",
    price: "25 €",
  },
  {
    title: "Coiffure",
    description:
      "Coupe homme sur mesure, du classique au dégradé moderne. Lavage, coupe et coiffage compris.",
    price: "20 €",
  },
  {
    title: "Barbe",
    description:
      "Taille et entretien de la barbe au rasoir : contours dessinés, longueur maîtrisée, finition nette.",
    price: "10 €",
  },
];

export type Location = {
  id: string;
  name: string;
  street: string;
  city: string;
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
