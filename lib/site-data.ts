import {
  BadgeCheck,
  Car,
  Droplets,
  Gem,
  Layers3,
  Shield,
  Sparkles,
  Sun,
  WandSparkles,
  Zap
} from "lucide-react";

const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 99044 84312";
const phoneHrefValue = phoneDisplay.replace(/[^\d+]/g, "");

export const siteConfig = {
  name: "Iconic Car care",
  tagline: "Ultimate Protection. Unmatched Shine.",
  location: "Vadodara, Gujarat",
  address: "Vadodara, Gujarat, India",
  phoneDisplay,
  phoneHref: `tel:${phoneHrefValue.startsWith("+") ? phoneHrefValue : `+${phoneHrefValue}`}`,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919904484312",
  instagram: "https://www.instagram.com/iconiccarcare",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://iconiccarcare.com",
  mapEmbed:
    "https://www.google.com/maps?q=Iconic%20Car%20care%2C%20Vadodara%2C%20Gujarat&output=embed"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/packages", label: "Packages" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" }
];

export const imagery = {
  hero:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=90",
  ppf:
    "/image/car-ppf.jpeg",
  correction:
    "/image/car-correction.jpeg",
  interior:
    "https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?auto=format&fit=crop&w=1600&q=85",
  supercar:
    "/image/car-supercar.jpeg",
  studio:
    "/image/car-studio.jpeg",
  dentingpainting:
    "/denting-painting.jpeg",
  galleryPpfBefore:
    "/image/car-beforeppf.jpeg",
  galleryPpfAfter:
    "/image/car-afterppf.jpeg",
  galleryMirrorBefore:
    "/image/car-beforemirror.jpeg",
  galleryMirrorAfter:
    "/image/car-aftermirror.jpeg",
  galleryLuxuryBefore:
    "/image/car-beforeluxury.jpeg",
  galleryLuxuryAfter:
    "/image/car-afterluxury.jpeg"
};

export const services = [
  {
    title: "12H Graphene Coating",
    description:
      "Elite-grade slickness, water behavior, and long-term paint protection for daily-driven and luxury vehicles.",
    icon: Gem,
    image: imagery.supercar
  },
  {
    title: "Ceramic Coating",
    description:
      "High-gloss ceramic shield engineered for UV resistance, chemical resistance, and easier maintenance.",
    icon: Shield,
    image: imagery.studio
  },
  {
    title: "Borophene Coating",
    description:
      "Advanced surface protection with crisp reflectivity, durable hydrophobic performance, and a premium finish.",
    icon: Layers3,
    image: imagery.hero
  },
  {
    title: "Paint Protection Film (PPF)",
    description:
      "Transparent physical armor for impact zones, stone chips, swirl marks, and everyday road abuse.",
    icon: BadgeCheck,
    image: imagery.ppf
  },
  {
    title: "Paint Correction",
    description:
      "Multi-stage polishing to remove haze, swirls, oxidation, and dullness before protective coating.",
    icon: WandSparkles,
    image: imagery.correction
  },
  {
    title: "Denting painting",
    description:
      "Professional Denting & Painting Services Restoring Your Car to a Flawless Showroom Finish.",
    icon: Car,
    image: imagery.dentingpainting
  },
  {
    title: "Interior Detailing",
    description:
      "Deep cabin cleansing, leather care, steam treatment, trim revival, and a refined factory-fresh feel.",
    icon: Car,
    image: imagery.interior
  }
  
];

export const benefits = [
  { title: "UV Protection", icon: Sun },
  { title: "Hydrophobic Technology", icon: Droplets },
  { title: "Scratch Resistance", icon: Shield },
  { title: "Deep Gloss Finish", icon: Sparkles },
  { title: "Long Lasting Protection", icon: BadgeCheck },
  { title: "Self Healing Technology", icon: Zap }
];

export const packages = [
  {
    name: "Signature Gloss",
    price: "From Rs. 7,999",
    tag: "Detailing starter",
    features: [
      "Exterior foam wash and decontamination",
      "Single-stage gloss enhancement",
      "Interior vacuum and trim refresh",
      "SiO2 sealant protection"
    ]
  },
  {
    name: "Graphene Elite",
    price: "From Rs. 15,499",
    tag: "Most booked",
    featured: true,
    features: [
      "12H graphene coating system",
      "Paint correction preparation",
      "Wheel and glass coating add-ons",
      "Maintenance guidance included"
    ]
  },
  {
    name: "PPF Armour",
    price: "Custom quote",
    tag: "Maximum defense",
    features: [
      "Front bumper, hood, fenders, mirrors",
      "Self-healing premium film options",
      "Edge wrapping where possible",
      "Ideal for premium and sports cars"
    ]
  }
];

export const testimonials = [
  {
    name: "Rohan Shah",
    car: "BMW 5 Series",
    review:
      "The graphene coating finish is unreal. The car looks deeper, darker, and much easier to clean after every wash.",
    rating: 5
  },
  {
    name: "Priya Patel",
    car: "Mercedes-Benz GLC",
    review:
      "Very professional team. Interior detailing and ceramic coating were delivered exactly as explained.",
    rating: 5
  },
  {
    name: "Amit Trivedi",
    car: "Toyota Fortuner",
    review:
      "I chose PPF for highway protection. The installation looks clean and the shine after correction is excellent.",
    rating: 5
  }
];

export const galleryItems = [
  {
    title: "PPF Precision Install",
    before: imagery.galleryPpfBefore,
    after: imagery.galleryPpfAfter,
    label: "Protection film installation"
  },
  {
    title: "Mirror Finish Correction",
    before: imagery.galleryMirrorBefore,
    after: imagery.galleryMirrorAfter,
    label: "Gloss restoration"
  },
  {
    title: "Luxury Cabin Revival",
    before: imagery.galleryLuxuryBefore,
    after: imagery.galleryLuxuryAfter,
    label: "Interior detailing"
  }
];

export const faqs = [
  {
    question: "Which coating is best for Vadodara weather?",
    answer:
      "Graphene and ceramic coatings both work well in heat, UV, dust, and monsoon conditions. Graphene is usually recommended for clients who want higher slickness and long-term water behavior."
  },
  {
    question: "Do I need paint correction before coating?",
    answer:
      "Yes, most cars benefit from correction before coating. Coating locks in the finish, so removing swirls and haze first creates a much deeper gloss."
  },
  {
    question: "How long does PPF installation take?",
    answer:
      "Coverage determines the timeline. Partial front-end PPF can often be completed faster than full-body coverage, which needs more preparation and curing time."
  },
  {
    question: "Can I book through WhatsApp?",
    answer:
      "Yes. Use any WhatsApp button on the site and share your car model, service choice, and preferred date."
  }
];

export const stats = [
  { value: "12H", label: "Graphene grade finish" },
  { value: "6+", label: "Premium protection services" },
  { value: "5.0", label: "Customer-rated experience" },
  { value: "100%", label: "Detail-focused delivery" }
];
