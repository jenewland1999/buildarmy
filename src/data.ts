import {
  ArrowCircleRightIcon,
  BookOpenIcon,
  CalendarIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  GiftIcon,
  MailIcon,
  PhotographIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

export const menuItems = [
  {
    name: "Shop",
  },
  {
    name: "Discover",
  },
  {
    name: "Help",
  },
];

export const productCategories = [
  {
    name: "WW2 Aircraft",
    description:
      "Assemble your aircraft and take to the sky for reconnaissance and airstrike missions.",
    href: "/shop/products?category=ww2-aircraft",
    icon: "/images/categories/icons/ww2-aircraft.png",
  },
  {
    name: "WW2 Micro",
    description: "Get out your binoculars! It's time to build your micro army!",
    href: "/shop/products?category=ww2-micro",
    icon: "/images/categories/icons/ww2-micro.png",
  },
  {
    name: "WW2 Artillery",
    description:
      "Turn your enemies to dust with long-range munition-firing weaponry.",
    href: "/shop/products?category=ww2-artillery",
    icon: "/images/categories/icons/ww2-artillery.png",
  },
  {
    name: "WW2 Tanks",
    description:
      "The ultimate vehicular-weapons from WW2. Blast your enemies into oblivion.",
    href: "/shop/products?category=ww2-tanks",
    icon: "/images/categories/icons/ww2-tanks.png",
  },
  {
    name: "WW2 Buildings and Diorama",
    description:
      "Construct your very own scenic war zones with various buildings and diorama.",
    href: "/shop/products?category=ww2-buildings-and-diorama",
    icon: "/images/categories/icons/ww2-buildings-and-diorama.png",
  },
  {
    name: "WW2 Weapons and Accessories",
    description:
      "Lock and load! Prepare your soldiers for battle with weapons and accessories.",
    href: "/shop/products?category=ww2-weapons-and-accessories",
    icon: "/images/categories/icons/ww2-weapons-and-accessories.png",
  },
  {
    name: "WW2 Land Vehicles",
    description:
      "From trucks to bikes, land transportation vehicles from the second world war.",
    href: "/shop/products?category=ww2-land-vehicles",
    icon: "/images/categories/icons/ww2-land-vehicles.png",
  },
  {
    name: "Modern Weapons and Accessories",
    description:
      "It's time for an upgrade! 21st Century weapons and accessories.",
    href: "/shop/products?category=modern-weapons-and-accessories",
    icon: "/images/categories/icons/modern-weapons-and-accessories.png",
  },
];

export const callsToAction = [
  {
    icon: ArrowCircleRightIcon,
    name: "View All",
    href: "/shop/product-categories",
  },
  {
    icon: CurrencyDollarIcon,
    name: "Sale",
    href: "/shop/products?sale=true",
  },
  {
    icon: BookOpenIcon,
    name: "Instructions",
    href: "/shop/products?category=instructions",
  },
];

export const discover = [
  {
    name: "About Us",
    description:
      "Learn about the origins of Buildarmy and how we design and develop our brick kits.",
    href: "/about-us",
    icon: UserGroupIcon,
  },
  {
    name: "Events",
    description:
      "See what competitions and other events we are running now and in the near future.",
    href: "/about-us/events",
    icon: CalendarIcon,
  },
  {
    name: "Gallery",
    description:
      "View our extensive gallery of curated Buildarmy diorama and model shots.",
    href: "https://instagram.com/buildarmy",
    icon: PhotographIcon,
  },
  {
    name: "Rewards System",
    description:
      "Find out how you can join our rewards system and start collecting points towards your next purchase.",
    href: "/about-us/rewards-system",
    icon: GiftIcon,
  },
  {
    name: "Legal",
    description:
      "View our most up to date policies on Privacy, Terms of Use, Cookies and more.",
    href: "/legal",
    icon: ScaleIcon,
  },
];

export const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export const help = [
  {
    name: "Contact Us",
    description:
      "We're here to help you with your purchases, account and any questions you may have.",
    href: "/contact-us",
    icon: MailIcon,
  },
  {
    name: "Common Questions",
    description: "Get answers to frequently asked questions.",
    href: "/about-us/faq",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Shipping & Returns",
    description:
      "Learn about our shipping methods and their costs along with our most up to date returns policy.",
    href: "/shipping-returns",
    icon: TruckIcon,
  },
  {
    name: "Payment Methods",
    description: "Find out what payment methods we accept for purchases.",
    href: "/payment-methods",
    icon: CreditCardIcon,
  },
];
