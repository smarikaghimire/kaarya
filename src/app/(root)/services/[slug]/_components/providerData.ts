// All service providers data
// Add new providers here to make them available in the app

export interface Provider {
  slug: string;
  id: number;
  name: string;
  initials: string;
  title: string;
  experienceYears: string; // FIXED: renamed from 'experience' to avoid conflict
  location: string;
  memberSince: string;
  rating: number;
  reviewCount: number;
  jobSuccess: string;
  responseTime: string;
  hourlyRate: string;
  projectRange: string;
  services: string[];
  heroImage: string;
  isVerified: boolean;
  backgroundVerified: boolean;
  about: {
    paragraphs: string[];
  };
  specializations: Array<{
    icon: string;
    title: string;
    description: string;
    price: string;
  }>;
  portfolio: Array<{
    id: number;
    url: string;
    title: string;
    category: string;
  }>;
  experienceHistory: Array<{
    // FIXED: renamed from 'experience' to avoid conflict
    id: number;
    title: string;
    client: string;
    date: string;
    description: string;
  }>;
  reviews: Array<{
    id: number;
    name: string;
    initials: string;
    date: string;
    rating: number;
    verified: boolean;
    project: string;
    comment: string;
    helpful: number;
  }>;
  licenses: Array<{
    icon: string;
    title: string;
    issuer: string;
    license: string;
    issued: string;
    status: string;
  }>;
  availability: Array<{
    day: string;
    date: number;
    available: boolean;
  }>;
  quickStats: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  contactMethods: Array<{
    icon: string;
    label: string;
    preferred: boolean;
  }>;
  serviceArea: {
    radius: number;
    location: string;
  };
  distance?: string;
  priceRange?: string;
  successRate?: string;
}

// Provider 1: Michael Rodriguez - Electrician
const michaelRodriguez: Provider = {
  slug: "michael-rodriguez-electrician",
  id: 1,
  name: "Michael Rodriguez",
  initials: "MR",
  title: "Licensed Master Electrician",
  experienceYears: "15+ Years Experience", // FIXED: renamed from 'experience'
  location: "San Francisco Bay Area",
  memberSince: "Karya member since 2022",
  rating: 4.9,
  reviewCount: 247,
  jobSuccess: "98%",
  responseTime: "< 1hr Response Time",
  hourlyRate: "$150-200/hour",
  projectRange: "$500-5000",
  distance: "1.2 mi away",
  priceRange: "$150-200/hour",
  successRate: "98%",
  services: [
    "Panel Upgrades",
    "Emergency Repairs",
    "Smart Home",
    "Commercial",
    "Residential",
  ],
  heroImage:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=400&fit=crop",
  isVerified: true,
  backgroundVerified: true,
  about: {
    paragraphs: [
      "With over 15 years of experience in residential and commercial electrical work, I take pride in delivering safe, efficient, and high-quality electrical solutions. I'm a licensed Master Electrician with specialized training in smart home technology and renewable energy systems.",
      "My approach is built on clear communication, transparent pricing, and exceptional craftsmanship. Whether you need a simple outlet installation or a complete electrical panel upgrade, I treat every project with the same level of professionalism and attention to detail.",
      "I stay current with the latest electrical codes and technologies, ensuring your home or business meets all safety standards while benefiting from modern innovations. My goal is not just to complete your project, but to build a lasting relationship based on trust and quality work.",
      "I'm fully licensed, insured, and bonded. All my work comes with a comprehensive warranty, and I'm available for emergency repairs 24/7. Let's discuss how I can help with your electrical needs.",
    ],
  },
  specializations: [
    {
      icon: "faBolt",
      title: "Electrical Panel Upgrades",
      description:
        "Complete panel replacement and circuit upgrades for modern electrical demands. Ensures safety and efficiency.",
      price: "From $150/hr",
    },
    {
      icon: "faHome",
      title: "Smart Home Installation",
      description:
        "Expert installation of smart lighting, thermostats, security systems, and home automation devices.",
      price: "From $175/hr",
    },
    {
      icon: "faExclamationTriangle",
      title: "Emergency Repairs",
      description:
        "24/7 emergency electrical repair services. Fast response times for urgent electrical issues and safety concerns.",
      price: "From $200/hr",
    },
    {
      icon: "faSolarPanel",
      title: "Solar & EV Charging",
      description:
        "Solar panel system integration and electric vehicle charging station installation for sustainable energy solutions.",
      price: "From $185/hr",
    },
  ],
  portfolio: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
      title: "Modern Electrical Installation",
      category: "Panel Upgrade",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      title: "Smart Home Control Panel",
      category: "Smart Home",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&h=400&fit=crop",
      title: "Luxury Home Exterior",
      category: "Residential",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop",
      title: "EV Charging Installation",
      category: "EV Charging",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      title: "Commercial Office Fit-out",
      category: "Commercial",
    },
  ],
  experienceHistory: [
    // FIXED: renamed from 'experience'
    {
      id: 1,
      title: "Complete Home Rewiring",
      client: "Sarah Johnson",
      date: "Completed Nov 2024",
      description:
        "Full house rewiring for a 1950s home, bringing all electrical systems up to modern code standards. Installed new panel, updated all outlets, added GFCI protection in kitchen and bathrooms, and integrated smart home controls.",
    },
    {
      id: 2,
      title: "Commercial Office Electrical Fit-out",
      client: "Tech Startup Inc.",
      date: "Completed Oct 2024",
      description:
        "Designed and installed electrical systems for 5,000 sq ft office space. Included dedicated circuits for server room, LED lighting throughout, and emergency backup systems.",
    },
    {
      id: 3,
      title: "Solar Panel Integration",
      client: "Martinez Family",
      date: "Completed Sep 2024",
      description:
        "Integrated 8kW solar panel system with home electrical, installed battery backup, and set up net metering. Coordinated with utility company for grid connection.",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      date: "Nov 15, 2024",
      rating: 5,
      verified: true,
      project: "Complete Home Rewiring",
      comment:
        "Michael did an outstanding job rewiring our 1950s home. He was professional, punctual, and explained everything clearly. The quality of work exceeded our expectations, and he went above and beyond to ensure everything was perfect. His attention to detail and commitment to safety gave us complete peace of mind. Highly recommend!",
      helpful: 45,
    },
    {
      id: 2,
      name: "Robert Taylor",
      initials: "RT",
      date: "Oct 28, 2024",
      rating: 5,
      verified: true,
      project: "Panel Upgrade",
      comment:
        "Fantastic experience from start to finish. Michael diagnosed our electrical issues quickly and provided clear options with transparent pricing. The panel upgrade was completed ahead of schedule and under budget. He's clearly an expert who takes pride in his work.",
      helpful: 32,
    },
    {
      id: 3,
      name: "Maria Lopez",
      initials: "ML",
      date: "Oct 12, 2024",
      rating: 5,
      verified: true,
      project: "Smart Home Installation",
      comment:
        "Michael installed our smart home system and it's been life-changing. He integrated all our lighting, thermostats, and security perfectly. Very patient explaining how everything works and responsive to follow-up questions. Worth every penny!",
      helpful: 28,
    },
  ],
  licenses: [
    {
      icon: "faCertificate",
      title: "Master Electrician License",
      issuer: "California State Board",
      license: "License #ME-92647",
      issued: "Issued 2015",
      status: "Verified",
    },
    {
      icon: "faBolt",
      title: "NABCEP Certified",
      issuer: "North American Board of Certified Energy Practitioners",
      license: "Solar PV Installation Certified 2020",
      issued: "",
      status: "Verified",
    },
    {
      icon: "faShieldAlt",
      title: "OSHA Safety Certified",
      issuer: "Occupational Safety & Health Administration",
      license: "30-Hour Construction Valid through 2025",
      issued: "",
      status: "Verified",
    },
  ],
  availability: [
    { day: "MON", date: 20, available: true },
    { day: "TUE", date: 21, available: true },
    { day: "WED", date: 22, available: false },
    { day: "THU", date: 23, available: true },
    { day: "FRI", date: 24, available: true },
    { day: "SAT", date: 25, available: false },
    { day: "SUN", date: 26, available: false },
  ],
  quickStats: [
    {
      icon: "faClock",
      label: "Response time:",
      value: "< 1 hour",
    },
    {
      icon: "faCheckCircle",
      label: "Completion rate:",
      value: "98%",
    },
    {
      icon: "faTruck",
      label: "On-time delivery:",
      value: "96%",
    },
    {
      icon: "faRepeat",
      label: "Repeat clients:",
      value: "67%",
    },
  ],
  contactMethods: [
    {
      icon: "faCommentDots",
      label: "Karya messaging",
      preferred: true,
    },
    {
      icon: "faPhone",
      label: "Phone call",
      preferred: true,
    },
    {
      icon: "faComment",
      label: "Text message",
      preferred: true,
    },
    {
      icon: "faEnvelope",
      label: "Email",
      preferred: false,
    },
  ],
  serviceArea: {
    radius: 25,
    location: "San Francisco Bay Area",
  },
};

// Provider 2: Sarah Rodriguez - Electrician (from the card example)
const sarahRodriguez: Provider = {
  slug: "sarah-rodriguez-electrician",
  id: 2,
  name: "Sarah Rodriguez",
  initials: "SR",
  title: "Licensed Electrician",
  experienceYears: "12 yrs exp", // FIXED: renamed from 'experience'
  location: "Queens, NY",
  memberSince: "Karya member since 2023",
  rating: 4.8,
  reviewCount: 189,
  jobSuccess: "95%",
  responseTime: "< 2hr response",
  hourlyRate: "$120-180/hour",
  projectRange: "$400-4500",
  distance: "2.4 mi away",
  priceRange: "$120-180/hour",
  successRate: "95%",
  services: [
    "Emergency Repairs",
    "Residential Wiring",
    "Lighting Design",
    "Panel Upgrades",
    "Smart Home",
  ],
  heroImage:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=400&fit=crop",
  isVerified: true,
  backgroundVerified: true,
  about: {
    paragraphs: [
      "Certified electrician specializing in residential wiring, lighting design, and emergency repairs. Available for same-day service in most cases.",
      "I bring 12 years of hands-on experience to every project, focusing on residential electrical solutions that prioritize safety and energy efficiency. My specialty lies in creating beautiful, functional lighting designs that transform spaces.",
      "As a female electrician in a traditionally male-dominated field, I take extra care to communicate clearly with clients and ensure they feel comfortable throughout the entire process. I believe everyone deserves to understand their electrical systems.",
      "I'm licensed, insured, and provide a full warranty on all work. Emergency services available 7 days a week.",
    ],
  },
  specializations: [
    {
      icon: "faBolt",
      title: "Residential Wiring",
      description:
        "Complete home wiring services including new construction, rewiring, and electrical upgrades.",
      price: "From $120/hr",
    },
    {
      icon: "faLightbulb",
      title: "Lighting Design",
      description:
        "Custom lighting solutions including recessed lighting, chandeliers, outdoor lighting, and smart controls.",
      price: "From $140/hr",
    },
    {
      icon: "faExclamationTriangle",
      title: "Emergency Repairs",
      description:
        "Same-day emergency service for power outages, dangerous wiring, and urgent electrical issues.",
      price: "From $180/hr",
    },
    {
      icon: "faHome",
      title: "Home Automation",
      description:
        "Integration of smart switches, dimmers, thermostats, and whole-home automation systems.",
      price: "From $150/hr",
    },
  ],
  portfolio: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
      title: "Kitchen Lighting Upgrade",
      category: "Lighting Design",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop",
      title: "Smart Home Integration",
      category: "Smart Home",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
      title: "Living Room Rewire",
      category: "Residential",
    },
  ],
  experienceHistory: [
    // FIXED: renamed from 'experience'
    {
      id: 1,
      title: "Full Home Electrical Upgrade",
      client: "Johnson Family",
      date: "Completed Dec 2024",
      description:
        "Upgraded entire home's electrical system including new 200-amp panel, all circuits, outlets, and switches. Added USB outlets and smart switches throughout.",
    },
    {
      id: 2,
      title: "Outdoor Lighting Installation",
      client: "Martinez Residence",
      date: "Completed Nov 2024",
      description:
        "Designed and installed comprehensive outdoor lighting system including landscape lighting, security lights, and architectural accent lighting.",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Jennifer Smith",
      initials: "JS",
      date: "Dec 10, 2024",
      rating: 5,
      verified: true,
      project: "Kitchen Renovation",
      comment:
        "Sarah was amazing! She helped us design the perfect lighting for our kitchen remodel. Very professional and detail-oriented.",
      helpful: 23,
    },
    {
      id: 2,
      name: "Mike Davis",
      initials: "MD",
      date: "Nov 28, 2024",
      rating: 5,
      verified: true,
      project: "Emergency Repair",
      comment:
        "Had an electrical emergency and Sarah came the same day. Fixed the problem quickly and explained everything clearly. Highly recommend!",
      helpful: 18,
    },
  ],
  licenses: [
    {
      icon: "faCertificate",
      title: "Licensed Electrician",
      issuer: "New York State",
      license: "License #E-45892",
      issued: "Issued 2012",
      status: "Verified",
    },
    {
      icon: "faShieldAlt",
      title: "OSHA Certified",
      issuer: "Occupational Safety & Health Administration",
      license: "30-Hour Construction",
      issued: "",
      status: "Verified",
    },
  ],
  availability: [
    { day: "MON", date: 20, available: true },
    { day: "TUE", date: 21, available: true },
    { day: "WED", date: 22, available: true },
    { day: "THU", date: 23, available: false },
    { day: "FRI", date: 24, available: true },
    { day: "SAT", date: 25, available: true },
    { day: "SUN", date: 26, available: false },
  ],
  quickStats: [
    {
      icon: "faClock",
      label: "Response time:",
      value: "< 2 hours",
    },
    {
      icon: "faCheckCircle",
      label: "Completion rate:",
      value: "95%",
    },
    {
      icon: "faTruck",
      label: "On-time delivery:",
      value: "94%",
    },
    {
      icon: "faRepeat",
      label: "Repeat clients:",
      value: "72%",
    },
  ],
  contactMethods: [
    {
      icon: "faCommentDots",
      label: "Karya messaging",
      preferred: true,
    },
    {
      icon: "faPhone",
      label: "Phone call",
      preferred: true,
    },
    {
      icon: "faComment",
      label: "Text message",
      preferred: true,
    },
    {
      icon: "faEnvelope",
      label: "Email",
      preferred: true,
    },
  ],
  serviceArea: {
    radius: 20,
    location: "Queens, NY",
  },
};

// All providers array
const allProviders: Provider[] = [michaelRodriguez, sarahRodriguez];

// Helper functions
export function getAllProviders(): Provider[] {
  return allProviders;
}

export function getProviderBySlug(slug: string): Provider | undefined {
  return allProviders.find((provider) => provider.slug === slug);
}

export function getProviderById(id: number): Provider | undefined {
  return allProviders.find((provider) => provider.id === id);
}

// For the service listing page
export function getProvidersForListing() {
  return allProviders.map((provider) => ({
    id: provider.id,
    name: provider.name,
    initials: provider.initials,
    title: provider.title,
    location: provider.location,
    rating: provider.rating,
    reviewCount: provider.reviewCount,
    description: provider.about.paragraphs[0],
    experienceYears: provider.experienceYears, // FIXED: renamed from 'experience'
    successRate: provider.successRate || provider.jobSuccess,
    responseTime: provider.responseTime,
    distance: provider.distance || "N/A",
    priceRange: provider.priceRange || provider.hourlyRate,
    isVerified: provider.isVerified,
    slug: provider.slug,
  }));
}
