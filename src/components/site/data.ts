import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const business = {
  name: "FLORIDA FITNESS",
  goal: "Our goal is to help you reach your fitness goals.",
  phone: "(352) 658-8040",
  phoneHref: "tel:+13526588040",
  email: "floridafitnesstrenton@gmail.com",
  messenger: "https://www.facebook.com/messages/t/FloridaFitnessTrenton/",
  city: "Trenton, Florida",
};

export const programs = [
  {
    icon: "dumbbell",
    title: "Strength Training",
    text: "Progressive barbell and dumbbell programming that builds real, measurable strength.",
  },
  {
    icon: "user",
    title: "Personal Training",
    text: "One-on-one coaching with trainers who learn your body, your goals and your pace.",
  },
  {
    icon: "heart",
    title: "Cardio & Conditioning",
    text: "New machines, open space and plans that keep your engine building week after week.",
  },
  {
    icon: "users",
    title: "Group Classes",
    text: "Scaled every session so beginners and advanced members get the same great workout.",
  },
  {
    icon: "activity",
    title: "Functional Fitness",
    text: "Kettlebells, ropes and turf work so you move better outside the gym too.",
  },
  {
    icon: "sparkles",
    title: "Weight Loss Coaching",
    text: "Support, accountability and a plan we adjust with you — every step celebrated.",
  },
] as const;

export const gallery = [
  { src: g1, title: "Strength Floor", tag: "Own Every Rep" },
  { src: g2, title: "Personal Training", tag: "Train With Purpose" },
  { src: g3, title: "Cardio Zone", tag: "Push Your Limits" },
  { src: g4, title: "Group Classes", tag: "Stronger Together" },
  { src: g5, title: "New Equipment", tag: "Built For Serious Work" },
  { src: g6, title: "Functional Area", tag: "Move Better Every Day" },
];

export const testimonials = [
  {
    name: "Ashlynn Nash",
    role: "Member",
    quote:
      "I've had a great experience at this gym! The staff is welcoming, the facility is always clean, and the equipment is in excellent condition. It's a motivating place to work out and I would definitely recommend it to others.",
  },
  {
    name: "Kim Parks",
    role: "Member",
    quote:
      "Love the energy of this gym, always greeted and feel welcomed and encouraged! My little happy place! Shane and Eric go the extra mile!",
  },
  {
    name: "Brandy Hodge",
    role: "Member",
    quote:
      "This is THE gym. Great atmosphere & even better trainers/coaches. The sense of family FloFit has created is nothing short of amazing. I've been to several gyms in my lifespan & this is the first one that's ever felt like \u201chome\u201d to me",
  },
  {
    name: "Jeremy Adkins",
    role: "Member",
    quote: "Great Gym with Lots of Very Nice Equipment & Plenty of Room.",
  },
  {
    name: "Debbie Hill",
    role: "Member",
    quote:
      "I love my gym!! I feel at home with no gym intimidation present. The owners are invested in my fitness journey, helping me and celebrating with me each step of the way. When my workout had gotten routine, they planned 2 others for me to shake things up so my body wouldn't get accustomed and I wouldn't get bored.",
  },
  {
    name: "DeAnna Roberts",
    role: "Member",
    quote:
      "Absolutely LOVE Florida Fitness! Nice large and clean gym. They have the newest and latest equipment. The staff is extremely nice. I love that the classes scaffold their class each day; the instructor does an excellent job at showing how beginners to advanced in their fitness journey can get the most out of each class.",
  },
  {
    name: "Katie Wilkerson Adkins",
    role: "Member",
    quote:
      "FLORIDA FITNESS is just what Trenton needed. I am excited to watch this gym grow! I had never worked out in a gym so I knew I'd be lost but when I learned a female trainer was available in the gym, I knew that was my cue to step out of my comfort zone.",
  },
  {
    name: "Michele Wood",
    role: "Member",
    quote:
      "Love this Gym.. Owners Shayne, Eric and Melissa are Amazing.. They care so much about everyone that comes.. they are helping me so much thru my weight loss journey...",
  },
  {
    name: "Ray Tremblay",
    role: "Personal training",
    quote: "Lisa is nothing short of awesome. Super knowledgeable, and super experienced.",
  },
  {
    name: "Jennyfer Ann",
    role: "Personal training",
    quote:
      "Lisa is an amazing trainer!! I would give her 10 stars! she is def. a motivator and can tell when I need to be pushed just a tad more. she also took time to educate my kid, which meant alot to me!!!",
  },
  {
    name: "Jenn Pacino-Lendvay",
    role: "Personal training",
    quote:
      "Trained with Lisa up in NY. Very attentive to the goals and needs of her clients. Great workouts with an excellent trainer!!!!",
  },
  {
    name: "Anita Richley",
    role: "Member",
    quote: "Melissa Kranz \u2764\ufe0f U lady \ud83e\udd17 \ud83c\uddfa\ud83c\uddf8",
  },
];

export const memberships = [
  {
    name: "Day Pass",
    price: "Drop In",
    tagline: "Try the floor, no strings.",
    perks: ["Full gym access for the day", "Locker room access", "Friendly floor guidance"],
    featured: false,
  },
  {
    name: "Unlimited",
    price: "Most Popular",
    tagline: "The full Florida Fitness experience.",
    perks: [
      "Unlimited gym access",
      "All group classes included",
      "Equipment orientation session",
      "Bring a friend passes",
    ],
    featured: true,
  },
  {
    name: "Coached",
    price: "1-on-1",
    tagline: "Personal training built around you.",
    perks: [
      "Everything in Unlimited",
      "Personal training sessions",
      "Custom program & check-ins",
      "Nutrition guidance",
    ],
    featured: false,
  },
];
