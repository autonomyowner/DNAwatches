export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: "DZD";
  colors: string[];
  badges?: string[];
  shortDescription: string;
  description: string;
  images: { src: string; alt: string }[];
  features: string[];
  availability: "in-stock" | "limited" | "preorder";
  collections: string[];
};

export const products: Product[] = [
  {
    id: "oa-001",
    name: "Casquette Northside",
    slug: "casquette-northside",
    price: 5900,
    currency: "DZD",
    colors: ["Noir", "Vert drapeau"],
    badges: ["Nouvelle collection", "Edition limitee"],
    shortDescription: "Casquette snapback double texture avec broderie 3D OUSS AURA.",
    description:
      "La casquette Northside fusionne un panneau avant texture et un mesh respirant pour un look urbain affute. Broderie 3D en vert drapeau, sous-visiere suede et bande anti transpiration integree.",
    images: [
      {
        src: "/products/b1.jpg",
        alt: "Casquette Northside portee dans la rue",
      },
      {
        src: "/products/b2.jpg",
        alt: "Zoom sur la visiere de la casquette Northside",
      },
      {
        src: "/products/b3.jpg",
        alt: "Casquette Northside posee sur une table",
      },
    ],
    features: [
      "Broderie 3D signature OUSS AURA",
      "Visiere suede resistant a l eau",
      "Traitement anti UV UPF 50",
      "Snapback premium ajustable",
    ],
    availability: "limited",
    collections: ["capsules 2025", "noir essentiel"],
  },
  {
    id: "oa-002",
    name: "Casquette Skyline 58",
    slug: "casquette-skyline-58",
    price: 5300,
    currency: "DZD",
    colors: ["Anthracite", "Blanc"],
    badges: ["Best seller"],
    shortDescription: "Look minimaliste avec broderie 58 wilayas, parfait pour le quotidien.",
    description:
      "Skyline 58 est concue pour accompagner vos journees actives. Microfibre impermeable, bande anti transpiration et patch 58 wilayas brode au laser.",
    images: [
      {
        src: "/products/c1.jpg",
        alt: "Casquette Skyline 58 sur un fond urbain",
      },
      {
        src: "/products/c2.jpg",
        alt: "Detail broderie Skyline 58",
      },
      {
        src: "/products/c3.jpg",
        alt: "Casquette Skyline 58 portee par un client",
      },
    ],
    features: [
      "Tissu impermeable et respirant",
      "Bande interieure anti transpiration",
      "Patte arriere magnetique ultra fine",
      "Profil mixte profondeur moyenne",
    ],
    availability: "in-stock",
    collections: ["capsules 2025", "urbain"],
  },
  {
    id: "oa-003",
    name: "Casquette Studio DZ",
    slug: "casquette-studio-dz",
    price: 6100,
    currency: "DZD",
    colors: ["Blanc casse", "Vert neon"],
    badges: ["Drop limite"],
    shortDescription: "Edition premium imaginee pour les studios et createurs de contenu.",
    description:
      "Studio DZ se distingue par sa palette blanc casse et ses details lime neon. Profil baseball structure, tissu ripstop et doublure technique signature.",
    images: [
      {
        src: "/products/11.jpg",
        alt: "Casquette Studio DZ sur fond neon",
      },
      {
        src: "/products/111.jpg",
        alt: "Detail broderie Studio DZ",
      },
      {
        src: "/products/1111.jpg",
        alt: "Casquette Studio DZ sur un bureau",
      },
    ],
    features: [
      "Ripstop technique resistant",
      "Bande interieure antibacterienne",
      "Logo neon phosphorescent",
      "Edition limitee numerotee",
    ],
    availability: "limited",
    collections: ["atelier", "drop signature"],
  },
  {
    id: "oa-004",
    name: "Casquette Desert Lines",
    slug: "casquette-desert-lines",
    price: 4900,
    currency: "DZD",
    colors: ["Sable", "Rouge"],
    shortDescription: "Casquette trucker inspiree des dunes, look desert moderne.",
    description:
      "Desert Lines allie panneaux mesh sable et visiere rouge profond. Patch tisse Desert Series et bande reflex arriere pour vos rides nocturnes.",
    images: [
      {
        src: "/products/b4.jpg",
        alt: "Casquette Desert Lines posee sur une dune",
      },
      {
        src: "/products/c4.jpg",
        alt: "Casquette Desert Lines en gros plan",
      },
      {
        src: "/products/kh7yt.jpg",
        alt: "Casquette Desert Lines portee dans la rue",
      },
    ],
    features: [
      "Panneaux mesh triple densite",
      "Patch Desert Series reflex",
      "Visiere pre courbee anti eclat",
      "Traitement anti poussiere",
    ],
    availability: "in-stock",
    collections: ["classic trucker", "desert club"],
  },
  {
    id: "oa-005",
    name: "Casquette Midnight Bloom",
    slug: "casquette-midnight-bloom",
    price: 6400,
    currency: "DZD",
    colors: ["Noir", "Or"],
    badges: ["Precommande"],
    shortDescription: "Edition premium brodee or, disponible en precommande exclusive.",
    description:
      "Midnight Bloom est la casquette statement de la saison. Broderie or 24k, velours noir et doublure satin imprime. Disponible uniquement en precommande, production numerotee.",
    images: [
      {
        src: "/products/b1.jpg",
        alt: "Casquette Midnight Bloom avec broderie or",
      },
      {
        src: "/products/b2.jpg",
        alt: "Detail luxe Midnight Bloom",
      },
      {
        src: "/products/b3.jpg",
        alt: "Casquette Midnight Bloom sur packaging",
      },
    ],
    features: [
      "Velours premium respirant",
      "Broderie or 24k edition limitee",
      "Boite magnetique signature",
      "Disponible uniquement en precommande",
    ],
    availability: "preorder",
    collections: ["drop signature", "luxe"],
  },
  {
    id: "oa-006",
    name: "Casquette Coastline",
    slug: "casquette-coastline",
    price: 4500,
    currency: "DZD",
    colors: ["Bleu marine", "Blanc"],
    shortDescription: "Casquette nylon resistant a l eau pour vos sorties bord de mer.",
    description:
      "Coastline est legere, resistente et taillee pour vos escapades marines. Nylon ripstop, oeillets laserises et corde frontale signature pour un look retro revisite.",
    images: [
      {
        src: "/products/c1.jpg",
        alt: "Casquette Coastline sur fond bleu",
      },
      {
        src: "/products/c2.jpg",
        alt: "Casquette Coastline sur rocher",
      },
      {
        src: "/products/c3.jpg",
        alt: "Casquette Coastline portee a la plage",
      },
    ],
    features: [
      "Nylon ripstop impermeable",
      "Corde frontale signature",
      "Boucle arriere aluminium",
      "Oeillets laserises pour ventilation",
    ],
    availability: "in-stock",
    collections: ["classic trucker", "summer drop"],
  },
];
