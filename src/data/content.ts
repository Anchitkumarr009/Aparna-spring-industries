/**
 * ALL EDITABLE WEBSITE CONTENT LIVES HERE.
 * To change text, phone numbers, images, products etc., edit this file.
 * Images are served from /public/images (reference them as "/images/<file>").
 */

export const company = {
  name: "Aparna Springs Industries",
  legalName: "Aparna Springs Industries Pvt. Ltd",
  phone: "9871409617",
  mobile: "9818454442",
  /** Number used by the "Call Now" button in the header. */
  callNowPhone: "9871409617",
  email: "info@aparnasprings.com",
  whatsappUrl: "https://wa.me/919818454442",
  addressLines: ["Plot No. 05, KH. - 28/14, Matiala Extn.,", "New Delhi-59"],
  addressOneLine: "Plot No. 05, KH. - 28/14, Matiala Extn., New Delhi-59",
  hours: "Mon-Fri 9am-6pm",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Plot+No.+05+KH+28%2F14+Matiala+Extension+New+Delhi&output=embed&z=15",
  logo: "/images/logo.png",
} as const;

export const socialLinks = [
  { id: "whatsapp", label: "WhatsApp", href: company.whatsappUrl, external: true },
  { id: "facebook", label: "Facebook", href: "#", external: false },
  { id: "linkedin", label: "LinkedIn", href: "#", external: false },
  { id: "twitter", label: "X / Twitter", href: "https://x.com/", external: true },
] as const;

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
] as const;

export const heroSlides = [
  {
    title: "Manufacturers & Exporters of Quality Springs",
    subtitle: "Aparna Springs Industries",
    image: "/images/hero-main.jpeg",
  },
  {
    title: "Precision Springs and Custom Wireforms",
    subtitle: "Crafted for Industrial Strength",
    image: "/images/gallery-1.jpeg",
  },
  {
    title: "ISO Certified Excellence",
    subtitle: "Trusted by Industries Worldwide",
    image: "/images/gallery-3.jpeg",
  },
];

export const aboutContent = {
  image: "/images/about.jpeg",
  yearsBadge: { value: "20+", label: "Years of Excellence" },
  heading: "About Aparna Springs",
  paragraphs: [
    "Crafting precision springs and wireforms with over two decades of trusted manufacturing excellence.",
    "Aparna Springs Industries is a leading manufacturer and exporter of quality springs and wireforms. With state-of-the-art machinery and a skilled team, we deliver precision-engineered solutions for diverse industrial applications — backed by ISO and IAS-ANZ certifications.",
  ],
  /** `icon` must match a key in components/About.tsx (statIcons). */
  stats: [
    { id: "products", icon: "package", value: "150+", label: "Products" },
    { id: "clients", icon: "shield", value: "ISO", label: "Certified" },
    { id: "export", icon: "globe", value: "Export", label: "Excellence" },
    { id: "trusted", icon: "award", value: "Trusted", label: "Since Decades" },
  ],
} as const;

export const products = [
  {
    title: "Tension Spring",
    description:
      "Spring tension is the force exerted by an extension (or tension) spring when it is stretched.",
    image: "/images/product-tension.jpeg",
  },
  {
    title: "Compression spring",
    description:
      "Compression springs are open-coil helical springs designed to oppose compression.",
    image: "/images/product-compression.jpeg",
  },
  {
    title: "Led Springs",
    description:
      "LED springs, commonly known as LED downlight springs or clips, are essential components used in lighting fixtures.",
    image: "/images/product-led-real.png",
  },
];

/** `icon` must match a key in components/Values.tsx (valueIcons). */
export const values = [
  {
    icon: "settings",
    title: "Lean Manufacture",
    description: "Manufactures products with minimal process change & wastage.",
  },
  {
    icon: "trash",
    title: "Zero Scrap",
    description:
      "Most manufacturers never scrap, but we aim to minimize it. Our goal is zero scrap, starting from product development, including tool and process design. This approach helps reduce the carbon footprint.",
  },
  {
    icon: "clock",
    title: "Long Life",
    description:
      "Being in sheet metal business, we believe each product should be made from right material & in a way that it serves with longer life. Long Life of product is essential since every part is critical for the role it plays in larger product.",
  },
  {
    icon: "refresh",
    title: "Re-use",
    description:
      "Reusing materials is crucial for reducing the carbon footprint, but we take it a step further by reusing processes. We analyze each product's operation process and align it with existing operations. This approach reduces manpower, optimizes material utilization, and ultimately lowers costs for our customers.",
  },
] as const;

export const teamPhotos = [
  { src: "/images/team-1.jpeg", alt: "Aparna Springs Team Member" },
  { src: "/images/team-2.jpeg", alt: "Aparna Springs Team Member" },
  { src: "/images/team-3.jpeg", alt: "Aparna Springs Team Member" },
];

export const galleryPhotos = [
  { src: "/images/gallery-1.jpeg", alt: "Springs Manufacturing" },
  { src: "/images/gallery-2.jpeg", alt: "Wire Forms" },
  { src: "/images/gallery-3.jpeg", alt: "Industrial Springs" },
];

/** `id` is the YouTube video id. */
export const videos = [
  { id: "LXv3QEwkiLU", title: "Aparna Springs — Manufacturing Process" },
  { id: "_7XK5nTt29k", title: "Aparna Springs — Product Range" },
];

export const testimonials = [
  {
    name: "Ravi S.",
    rating: 5,
    text: "Aparna Springs delivered exactly what we needed — durable springs with precise specifications and on time.",
  },
];

export const footerProductLinks = [
  "Compression Springs",
  "Tension Springs",
  "Custom Wireforms",
  "Torsion Springs",
  "Disc Springs",
  "Special Purpose Springs",
];
