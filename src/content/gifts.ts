export type Gift = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  category: string;
};

export const giftCategories = [
  "Provisions",
  "Homeware",
  "Merch",
  "Gift Sets",
] as const;

export const gifts: Gift[] = [
  {
    id: "chiya-tin",
    name: "Baithak Chiya Tin",
    description:
      "Our house blend — Assam leaf with ginger, cardamom and black pepper. Enough for many mornings.",
    price: "1,850",
    image: "/media/gift-tea.jpg",
    badge: "Most-loved",
    category: "Provisions",
  },
  {
    id: "achar-trio",
    name: "Achar Trio",
    description: "Tomato-chilli, mixed vegetable and Timur pickle — jarred in-house.",
    price: "1,200",
    image: "/media/dal-bhat.jpg",
    category: "Provisions",
  },
  {
    id: "masala-dabba",
    name: "Baithak Masala Dabba",
    description: "Seven spices for a Pokhara kitchen, packed in a lacquered tin.",
    price: "3,400",
    image: "/media/chiya.jpg",
    badge: "Newest",
    category: "Homeware",
  },
  {
    id: "tea-towel",
    name: "Lakeside Tea Towel",
    description: "Soft cotton printed with a Phewa line drawing.",
    price: "980",
    image: "/media/story-lake.jpg",
    category: "Homeware",
  },
  {
    id: "rules-tee",
    name: "Rules of the Baithak Tee",
    description: "All welcome. Soft washed cotton in lake-ink.",
    price: "2,200",
    image: "/media/pokhara-street.jpg",
    category: "Merch",
  },
  {
    id: "chiya-cap",
    name: "Chiya Cap",
    description: "Embroidered peak cap for sunny boardwalk days.",
    price: "1,650",
    image: "/media/annapurna.jpg",
    category: "Merch",
  },
  {
    id: "breakfast-kit",
    name: "Chiya & Sel Roti Kit",
    description:
      "Tea blend, spice pouch and a note on frying sel roti at home — for two.",
    price: "2,800",
    image: "/media/hotel-interior.jpg",
    badge: "Gift set",
    category: "Gift Sets",
  },
  {
    id: "hamper",
    name: "Baithak Lakeside Hamper",
    description: "Chiya tin, achar, incense and a handwritten menu keepsake.",
    price: "5,500",
    image: "/media/sekuwa.jpg",
    category: "Gift Sets",
  },
];
