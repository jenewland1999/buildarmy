import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  ArrowCircleRightIcon,
  BookOpenIcon,
  CalendarIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  GiftIcon,
  GlobeAltIcon,
  MailIcon,
  PhotographIcon,
  QuestionMarkCircleIcon,
  ReceiptTaxIcon,
  ScaleIcon,
  SupportIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const menuItems = [
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

const productCategories = [
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

const callsToAction = [
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

const discover = [
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

const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

const help = [
  {
    name: "Contact Us",
    description:
      "We're here to help you with your purchases, account and any questions you may have.",
    href: "/contact",
    icon: MailIcon,
  },
  {
    name: "Common Questions",
    description: "Get answers to frequently asked questions.",
    href: "/about-us/faq",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Shipping",
    description: "Learn about our shipping methods and their costs along.",
    href: "/shipping",
    icon: TruckIcon,
  },
  {
    name: "Payment Methods",
    description: "Find out what payment methods we accept for purchases.",
    href: "/payment-methods",
    icon: CreditCardIcon,
  },
];

const USPs = [
  {
    icon: ReceiptTaxIcon,
    title: "Multibuy Discount",
    description:
      "Get 10% discount on all orders over £100 using coupon code BA100.",
  },
  {
    icon: GiftIcon,
    title: "Collect Reward Points",
    description:
      "Collect 1 point for every £1 you spend to use on future orders.",
  },
  {
    icon: SupportIcon,
    title: "Live Support",
    description: "Need help? We offer live support via Instagram and Facebook.",
  },
  {
    icon: GlobeAltIcon,
    title: "International Shipping",
    description: "We ship across the world to a variety of countries.",
  },
];

const categories = [
  {
    name: "WWII Tanks",
    href: "/shop?category=wwii-tanks",
    imageSrc: "/images/categories/wwii-tanks.jpg",
  },
  {
    name: "WWII Artillery",
    href: "/shop?category=wwii-artillery",
    imageSrc: "/images/categories/wwii-artillery.jpg",
  },
  {
    name: "WWII Light Vehicles",
    href: "/shop?category=wwii-light-vehicles",
    imageSrc: "/images/categories/wwii-light-vehicles.jpg",
  },
  {
    name: "WWII Planes",
    href: "/shop?category=wwii-planes",
    imageSrc: "/images/categories/wwii-planes.jpg",
  },
];

const socialMediaMenu = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Buildarmybricks",
    title: "Visit the Buildarmy Facebook Page...",
    icon: faFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/buildarmy",
    title: "Visit the Buildarmy Instagram feed...",
    icon: faInstagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/#",
    title: "Visit the Buildarmy Twitter profile...",
    icon: faTwitter,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/#",
    title: "Visit the Buildarmy YouTube channel...",
    icon: faYoutube,
  },
];

const footerMenus = [
  {
    name: "About Us",
    menuItems: [
      {
        name: "History",
        href: "/about-us/history",
      },
      {
        name: "FAQ",
        href: "/about-us/faq",
      },
      {
        name: "Gallery",
        href: "https://instagram.com/buildarmy",
      },
      {
        name: "Rewards System",
        href: "/about-us/rewards-system",
      },
    ],
  },
  {
    name: "Support",
    menuItems: [
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "Payment Methods",
        href: "/payment-methods",
      },
      {
        name: "Shipping Information",
        href: "/shipping",
      },
      {
        name: "Returns",
        href: "/returns",
      },
    ],
  },
  {
    name: "Account",
    menuItems: [
      {
        name: "Login",
        href: "/account/login",
      },
      {
        name: "Register",
        href: "/account/register",
      },
      {
        name: "Order History",
        href: "/account/order-history",
      },
      {
        name: "Newsletter Subscription",
        href: "/account/notification-preferences",
      },
    ],
  },
];

const footerLegalMenu = [
  {
    name: "Privacy Policy",
    href: "/legal/privacy-policy",
  },
  {
    name: "Cookies",
    href: "/legal/cookies",
  },
  {
    name: "Terms of Use",
    href: "/legal/terms",
  },
  {
    name: "Accessibility",
    href: "/legal/accessibility",
  },
  {
    name: "Cookie Settings",
    href: "/legal/cookies/settings",
  },
];

const banners = [
  {
    title: "It's Competition Time!",
    excerpt:
      "Buildarmy is proud to present the sixth instalment of the image contest. Send in your photos (or rendered images) of military related brick creations for a chance to win a big prize.",
    image: {
      altText: "",
      sourceUrl: "/images/banner-competition.jpg",
      objectFit: "cover",
    },
    callToAction: {
      href: "/post/6th-buildarmy-image-contest",
      text: "Learn More",
    },
  },
  {
    title: "Want to earn rewards?",
    excerpt:
      "Buildarmy offers reward points for every purchase. For every pound(£) you spend, you will earn 1 point. 100 points is the equivalent of £1. Register now to start earning points.",
    image: {
      altText: "",
      sourceUrl: "/images/banner-rewards.png",
      objectFit: "contain",
    },
    callToAction: {
      href: "/account/register",
      text: "Sign Up",
    },
  },
];

export {
  banners,
  categories,
  productCategories,
  menuItems,
  USPs,
  help,
  recentPosts,
  discover,
  callsToAction,
  socialMediaMenu,
  footerMenus,
  footerLegalMenu,
};
