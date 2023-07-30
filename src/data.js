import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const navIcons = [
  {
    id: 1,
    href: "https://www.facebook.com",
    iconName: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    iconName: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.squarespace.com",
    iconName: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Streamlined planning, group discounts, and exclusive offers save you money. Unforgettable experiences without breaking the bank.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "variety of offering",
    text: "From thrilling escapades to cultural immersions, our tours cater to all interests. Explore the world your way.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Indulge in luxury accommodations and seamless logistics. Relax and relish every moment.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    text: "Embark on a spiritual journey to the roof of the world. Witness ancient monasteries, majestic Himalayan vistas, and vibrant Tibetan culture. Unforgettable and awe-inspiring.",
    place: "china",
    days: 6,
    startingPrice: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2024",
    title: "best of java",
    text: "Immerse in the enchanting beauty of Java. Explore ancient temples, lush landscapes, and vibrant markets. A captivating blend of history and nature.",
    place: "indonesia",
    days: 11,
    startingPrice: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2024",
    title: "explore hong kong",
    text: "Experience the electric charm of Hong Kong. Dive into a fusion of cultures, modern marvels, and delectable cuisine. Unforgettable urban adventures await.",
    place: "hong kong",
    days: 8,
    startingPrice: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "september 15th, 2024",
    title: "kenya highlights",
    text: "Embark on an extraordinary wildlife odyssey in Kenya. Witness majestic safaris, encounter the Big Five, and embrace Maasai culture. A journey of untamed beauty and wonder.",
    place: "kenya",
    days: 20,
    startingPrice: 3300,
  },
];
