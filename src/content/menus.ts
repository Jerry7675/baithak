export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: string[];
};

export type MenuSection = {
  title: string;
  intro?: string;
  items: MenuItem[];
};

export type Menu = {
  slug: string;
  title: string;
  subtitle: string;
  blurb: string;
  image: string;
  sections: MenuSection[];
};

export const menus: Menu[] = [
  {
    slug: "breakfast",
    title: "Breakfast",
    subtitle: "Sunrise on the lake",
    blurb:
      "Begin gently with chiya, beaten rice, and the soft comfort of a Pokhara morning.",
    image: "/media/chiya.jpg",
    sections: [
      {
        title: "Morning plates",
        items: [
          {
            name: "Chiya & Sel Roti",
            description:
              "House milk tea with ring-shaped rice doughnuts, crisp at the edge, soft within.",
            price: "320",
            image: "/media/dishes/01-chiya-sel.jpg",
            tags: ["Vegetarian"],
          },
          {
            name: "Baithak Breakfast Thali",
            description:
              "Eggs your way, aloo bhujia, toast, seasonal fruit and a pot of chiya.",
            price: "780",
            image: "/media/dishes/02-thali.jpg",
          },
          {
            name: "Syabaji & Eggs",
            description:
              "Beaten rice tossed with mustard oil, tomato and chilli, topped with soft scrambled eggs.",
            price: "520",
            image: "/media/dishes/03-eggs.jpg",
          },
          {
            name: "Aloo Paratha",
            description:
              "Flaky wholewheat stuffed with spiced potato, served with yoghurt and achar.",
            price: "450",
            image: "/media/dishes/04-dish.jpg",
            tags: ["Vegetarian"],
          },
          {
            name: "Date & Banana Porridge",
            description:
              "Warm oats with Himalayan honey, banana and toasted walnuts.",
            price: "480",
            image: "/media/dishes/05-dish.jpg",
            tags: ["Vegetarian"],
          },
        ],
      },
    ],
  },
  {
    slug: "all-day",
    title: "All Day",
    subtitle: "Lakeside comfort",
    blurb:
      "The food of homes, tea shops and trail-side stalls — served from late morning through the afternoon.",
    image: "/media/dal-bhat.jpg",
    sections: [
      {
        title: "Small plates & snacks",
        items: [
          {
            name: "Steam Momo",
            description:
              "Chicken or vegetable dumplings with sesame tomato achar.",
            price: "420",
            image: "/media/dishes/06-dish.jpg",
          },
          {
            name: "Crispy Chatamari",
            description:
              "Newari rice crepe with minced chicken, egg and spring onion.",
            price: "560",
            image: "/media/dishes/07-crepe.jpg",
          },
          {
            name: "Aloo Chop",
            description:
              "Spiced potato fritters with green chutney and tamarind.",
            price: "380",
            image: "/media/dishes/08-fritter.jpg",
            tags: ["Vegetarian"],
          },
          {
            name: "Bhatmas Sadeko",
            description:
              "Roasted soybeans with onion, chilli, coriander and mustard oil.",
            price: "320",
            image: "/media/dishes/09-dish.jpg",
            tags: ["Vegan"],
          },
        ],
      },
      {
        title: "Mains",
        items: [
          {
            name: "Dal Bhat Tarkari",
            description:
              "The daily plate — lentils, rice, seasonal vegetables, achar and papad.",
            price: "890",
            image: "/media/dishes/10-dal.jpg",
            tags: ["Vegetarian"],
          },
          {
            name: "Chicken Thukpa",
            description:
              "Hand-pulled noodle soup with Himalayan spices and fresh herbs.",
            price: "720",
            image: "/media/dishes/11-thukpa.jpg",
          },
          {
            name: "Sekuwa Platter",
            description:
              "Charcoal-grilled marinated meat with onion salad and chiura.",
            price: "980",
            image: "/media/dishes/12-sekuwa.jpg",
          },
          {
            name: "Mustard Greens & Paneer",
            description:
              "Saag with homemade paneer, tempered garlic and dried chilli.",
            price: "760",
            image: "/media/dishes/13-dish.jpg",
            tags: ["Vegetarian"],
          },
        ],
      },
    ],
  },
  {
    slug: "dinner",
    title: "Dinner",
    subtitle: "Evening by Phewa",
    blurb:
      "As the mountains fade to indigo, the kitchen turns to grills, curries and sharing plates.",
    image: "/media/sekuwa.jpg",
    sections: [
      {
        title: "To share",
        items: [
          {
            name: "Newari Khaja Set",
            description:
              "Beaten rice, choyla, achar, boiled egg and spiced soybeans for the table.",
            price: "1,450",
            image: "/media/dishes/14-khaja.jpg",
          },
          {
            name: "Lake Fish Fry",
            description:
              "Catch of the day, mustard-marinated and crisp-fried with lemon.",
            price: "1,120",
            image: "/media/dishes/15-dish.jpg",
          },
          {
            name: "Buff Choyla",
            description:
              "Smoky minced buffalo with Timur, garlic and green chilli.",
            price: "890",
            image: "/media/dishes/16-dish.jpg",
          },
        ],
      },
      {
        title: "Mains",
        items: [
          {
            name: "Goat Curry",
            description:
              "Slow-cooked with whole spices, potatoes and a soft roti.",
            price: "1,280",
            image: "/media/dishes/17-curry.jpg",
          },
          {
            name: "Jackfruit Berry Pulao",
            description:
              "Fragrant rice with young jackfruit, barberries and fried onion.",
            price: "980",
            image: "/media/dishes/18-pulao.jpg",
            tags: ["Vegan"],
          },
          {
            name: "Himalayan Trout",
            description:
              "Pan-roasted trout, tomato-ginger sauce, seasonal greens.",
            price: "1,450",
            image: "/media/dishes/19-dish.jpg",
          },
          {
            name: "Baithak Biryani",
            description:
              "Layered rice with chicken, saffron and crispy onion — for two.",
            price: "1,680",
            image: "/media/dishes/20-dish.jpg",
          },
        ],
      },
      {
        title: "Sweet things",
        items: [
          {
            name: "Sikarni",
            description:
              "Sweetened yoghurt with cardamom, saffron and pistachio.",
            price: "420",
            image: "/media/dishes/35-dessert.jpg",
            tags: ["Vegetarian"],
          },
          {
            name: "Juju Dhau",
            description: "King curd from Bhaktapur, served chilled with honey.",
            price: "380",
            image: "/media/dishes/26-plate.jpg",
            tags: ["Vegetarian"],
          },
        ],
      },
    ],
  },
  {
    slug: "drinks",
    title: "Drinks",
    subtitle: "Chiya to nightcap",
    blurb:
      "Piping chiya at dawn, cooling lassi at noon, and a careful list of cocktails after dusk.",
    image: "/media/gift-tea.jpg",
    sections: [
      {
        title: "Hot & cold",
        items: [
          {
            name: "Baithak Chiya",
            description: "Milk tea with ginger, cardamom and black pepper.",
            price: "180",
            image: "/media/dishes/21-chiya.jpg",
          },
          {
            name: "Himalayan Coffee",
            description: "Single-origin pour-over from the mid-hills.",
            price: "320",
            image: "/media/dishes/31-coffee.jpg",
          },
          {
            name: "Mango Lassi",
            description: "Ripe mango, yoghurt and a touch of cardamom.",
            price: "380",
            image: "/media/dishes/25-tea.jpg",
            tags: ["Vegetarian"],
          },
          {
            name: "Fresh Lime Soda",
            description: "Sweet, salty or mixed — your call.",
            price: "280",
            image: "/media/dishes/27-feast.jpg",
            tags: ["Vegan"],
          },
        ],
      },
      {
        title: "Evening tipples",
        items: [
          {
            name: "Raksi Sour",
            description: "Millet spirit, lemon, honey and egg white.",
            price: "780",
            image: "/media/dishes/33-drink.jpg",
          },
          {
            name: "Phewa Negroni",
            description: "Gin, local bitter and vermouth, orange twist.",
            price: "920",
            image: "/media/dishes/28-share.jpg",
          },
          {
            name: "Aila Highball",
            description: "Newari distilled spirit with soda and lime.",
            price: "680",
            image: "/media/dishes/29-street.jpg",
          },
          {
            name: "Gorkha Beer",
            description: "Chilled local lager.",
            price: "450",
            image: "/media/dishes/30-serve.jpg",
          },
        ],
      },
    ],
  },
];

export function getMenu(slug: string) {
  return menus.find((m) => m.slug === slug);
}

export type MenuSearchHit = {
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: string[];
  menuSlug: string;
  menuTitle: string;
  sectionTitle: string;
};

export function searchMenuItems(query: string, limit = 12): MenuSearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const hits: MenuSearchHit[] = [];

  for (const menu of menus) {
    for (const section of menu.sections) {
      for (const item of section.items) {
        const haystack = [
          item.name,
          item.description,
          section.title,
          menu.title,
          ...(item.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(q)) continue;

        hits.push({
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image,
          tags: item.tags,
          menuSlug: menu.slug,
          menuTitle: menu.title,
          sectionTitle: section.title,
        });

        if (hits.length >= limit) return hits;
      }
    }
  }

  return hits;
}

export const featuredDishes = [
  {
    name: "Steam Momo",
    category: "Snacks",
    image: "/media/dishes/06-dish.jpg",
  },
  {
    name: "Dal Bhat Tarkari",
    category: "Mains",
    image: "/media/dishes/10-dal.jpg",
  },
  {
    name: "Baithak Chiya",
    category: "Drinks",
    image: "/media/dishes/21-chiya.jpg",
  },
  {
    name: "Sekuwa Platter",
    category: "Grills",
    image: "/media/dishes/12-sekuwa.jpg",
  },
  {
    name: "Chiya & Sel Roti",
    category: "Breakfast",
    image: "/media/dishes/01-chiya-sel.jpg",
  },
  {
    name: "Newari Khaja Set",
    category: "To share",
    image: "/media/dishes/14-khaja.jpg",
  },
];
