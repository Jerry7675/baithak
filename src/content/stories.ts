export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "lake-mornings",
    title: "Lake mornings at Baithak",
    excerpt:
      "Before the boats leave the shore, chiya steams and the Annapurna range clears its throat.",
    category: "Our Place",
    date: "October 2025",
    image: "/media/story-lake.jpg",
    body: [
      "Pokhara wakes slowly. Mist sits low on Phewa, and from the terrace you can hear the first paddle dip into water. At Baithak we open the kitchen doors early — not because we must, but because mornings here deserve company.",
      "The first pot of chiya is always for the team. Ginger bruised, milk brought just to a boil, tea leaves waiting their turn. Guests arrive soon after: trekkers with dust still on their boots, honeymooners half-asleep, locals who have been coming since we were only a small dining room.",
      "Look across the lake. You’ll be walking and eating your way through the town that lies before you — and we hope Baithak is where you begin.",
    ],
  },
  {
    slug: "chiya-ritual",
    title: "The chiya ritual",
    excerpt:
      "All things nice: warming comfort and satisfying spice. Made the traditional way, or with plant milk.",
    category: "Recipes",
    date: "September 2025",
    image: "/media/chiya.jpg",
    body: [
      "No morning in the hills starts without chiya, and at Baithak it’s much the same. We brew ours with Assam leaf, fresh ginger, cardamom and a crack of black pepper — then pour it into thick glasses that warm your palms.",
      "There is no hurry in a proper chiya. It is conversation, pause, and a little courage for the day. We serve it with sel roti when the morning is soft, or with nothing at all when the lake is enough.",
      "Ask for it oat or almond if you prefer — the spice still sings.",
    ],
  },
  {
    slug: "dashain-feast",
    title: "A Dashain feast by the water",
    excerpt:
      "Marigold after marigold. Sticky-sweet mithai. Tables pulled together for everyone who walks in.",
    category: "Festivals",
    date: "October 2025",
    image: "/media/festival.jpg",
    body: [
      "Dashain at Baithak is less a reservation and more an open door. We set long tables on the lakeside terrace, light diyas along the rail, and cook the dishes our grandmothers would recognise — goat curry, beaten rice, achar in every colour.",
      "Guests share plates with strangers who become friends by dessert. That is the point. Pokhara has always gathered people from every trail; we only give them a table.",
      "If you are in town for the festival, come early. We keep most seats for walk-ins, because the best evenings are unplanned.",
    ],
  },
  {
    slug: "founding-story",
    title: "How Baithak found Lakeside",
    excerpt:
      "A hotel dining room that wanted to feel like a living room — and a kitchen that refused to forget home.",
    category: "Our Story",
    date: "August 2024",
    image: "/media/hotel-interior.jpg",
    body: [
      "Baithak began as a question: could a hotel restaurant on Phewa Lakeside taste like the best home kitchens of Nepal — patient, generous, a little eccentric — while still welcoming travellers who had never eaten momo before?",
      "We took a corner of the hotel that looked straight at the water, kept the ceiling fans slow, and filled the shelves with brass thals, mustard oil tins and cookbooks stained with turmeric. The menu grew the way good menus do: by listening.",
      "Today Baithak is still that same room. Same lake. Same promise. All are welcome.",
    ],
  },
  {
    slug: "what-is-in-my-thal",
    title: "What’s in my thal? with Chef Anisha",
    excerpt:
      "Our head chef recalls childhood kitchens in Bandipur and the spice tin she still refuses to tidy.",
    category: "Interviews",
    date: "July 2025",
    image: "/media/dal-bhat.jpg",
    body: [
      "Chef Anisha keeps a battered spice dabba by the pass. Timur for choyla. Jimbu for lentils. Fenugreek she toasts until the kitchen smells like her grandmother’s courtyard.",
      "“A thal is not a checklist,” she says. “It is a conversation between rice and dal, between pickle and greens. If one dish shouts, the others should know when to whisper.”",
      "Her favourite guest moment? Watching someone taste sekuwa for the first time and go quiet. “That silence,” she laughs, “is the best review.”",
    ],
  },
  {
    slug: "evening-tipples",
    title: "Evening tipples on the terrace",
    excerpt:
      "Raksi sours, lake breezes, and the soft neon of Lakeside after dark.",
    category: "Drinks",
    date: "June 2025",
    image: "/media/annapurna.jpg",
    body: [
      "When the last paraglider lands and the boardwalk lights blink on, our bar wakes up. We work with local spirits — raksi, aila — and treat them with the same care as any gin from further away.",
      "The Phewa Negroni is our stubborn classic. The Raksi Sour is the one the team drinks on nights off. Both are best with a view of the water and nowhere else to be.",
      "Teetotal guests get equal theatre: smoked apple shrub, salted plum soda, and bottomless chiya if the evening turns chilly.",
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
