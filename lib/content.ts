export const imageUrls = {
  // Kawasan Terpadu Jl. Riau No. 147 Pekanbaru (Foto Lanskap Arsitektural Asli)
  hero: '/images/hotel/overview-facade-landscape.jpg',

  // FOX Harris Hotel Pekanbaru (Foto Udara Menara 14 Lantai & Fasilitas Asli)
  hotel: '/images/hotel/exterior-drone.jpg',
  hotelPool: '/images/hotel/rooftop-skypool-evening.jpg',
  dining: '/images/hotel/restaurant-wtf-buffet.jpg',
  meeting: '/images/hotel/meeting-roundtable-fox.jpg',
  event: '/images/hotel/ballroom-grand-wedding.jpg',

  // Pekanbaru Xchange / PX Mall (Fasad Geometris Ikonik & Tenant Asli)
  mall: '/images/mall/hero-px-mall.jpg',
  mallInterior: '/images/mall/cinema-xxi.jpg',
  architecture: '/images/mall/atrium-corridor.jpg',
  team: '/images/mall/retail-fashion.jpg',
  city: '/images/hotel/bar-lounge-interior.jpg',
  construction: '/images/mall/plaza-live-event.jpg',
};

export type CompanyValue = {
  number: string;
  title: string;
  copy: string;
  image: string;
  tag: string;
  icon: 'ShieldCheck' | 'TrendingUp' | 'Sparkles' | 'Compass' | 'Award' | 'Users';
  color: string;
};

export const values: CompanyValue[] = [
  {
    number: '01',
    title: 'Integrity',
    copy: 'Doing what is right, consistently and transparently.',
    image: '/images/hotel/exterior-drone.jpg',
    tag: 'Trust & Governance',
    icon: 'ShieldCheck',
    color: '#2b6754',
  },
  {
    number: '02',
    title: 'Continuous Development',
    copy: 'Always learning, improving, and creating room to grow.',
    image: '/images/mall/hero-px-mall.jpg',
    tag: 'Growth & Innovation',
    icon: 'TrendingUp',
    color: '#d97736',
  },
  {
    number: '03',
    title: 'Excellence',
    copy: 'Delivering thoughtful quality in every guest experience.',
    image: '/images/hotel/rooftop-skypool-evening.jpg',
    tag: 'Hospitality Quality',
    icon: 'Sparkles',
    color: '#c8385a',
  },
  {
    number: '04',
    title: 'Proactive',
    copy: 'Seeing possibilities early and moving with purpose.',
    image: '/images/hotel/bar-lounge-interior.jpg',
    tag: 'Visionary Purpose',
    icon: 'Compass',
    color: '#2b6754',
  },
  {
    number: '05',
    title: 'Accountability',
    copy: 'Owning our decisions, outcomes, and commitments.',
    image: '/images/hotel/meeting-roundtable-fox.jpg',
    tag: 'Ownership & Rigor',
    icon: 'Award',
    color: '#d97736',
  },
  {
    number: '06',
    title: 'Teamwork',
    copy: 'Growing stronger through trust and collaboration.',
    image: '/images/hotel/restaurant-wtf-buffet.jpg',
    tag: 'People & Synergy',
    icon: 'Users',
    color: '#c8385a',
  },
];

export const missions = [
  'Create meaningful and challenging job opportunities for Indonesians.',
  'Ensure sustainable, profitable growth that maximizes shareholder value.',
  'Provide value-added solutions that optimize customer satisfaction.',
  'Actively engage within communities as a good corporate citizen.',
];

export const projects = [
  {
    id: 1,
    title: 'FOX Hotel Pekanbaru',
    slug: 'fox-hotel-pekanbaru',
    category: 'Hospitality',
    location: 'Jalan Riau, Pekanbaru',
    description: 'A contemporary midscale hotel for smart stays, directly connected to Pekanbaru Xchange.',
    longDescription: 'FOX Hotel Pekanbaru is strategically located on Jalan Riau, approximately 30 minutes from Sultan Syarif Kasim II Airport. Designed for business travellers, families, and modern city explorers, the hotel brings comfort and convenience into one connected destination.',
    image: imageUrls.hotel,
    secondaryImage: imageUrls.hotelPool,
    facilities: ['225 Rooms', 'Gym', 'Spa', 'Restaurant', 'Indoor Rooftop Sky Pool'],
  },
  {
    id: 2,
    title: 'Pekanbaru Xchange',
    slug: 'pekanbaru-xchange',
    category: 'Lifestyle Destination',
    location: 'Pekanbaru Business District',
    description: 'A modern destination for shopping, dining, entertainment, business, and leisure.',
    longDescription: "Pekanbaru Xchange is a modern lifestyle and entertainment mall in the heart of Pekanbaru's business district. Physically connected to FOX Hotel Pekanbaru, it creates a seamless experience where retail, dining, business, and leisure come together.",
    image: imageUrls.mall,
    secondaryImage: imageUrls.mallInterior,
    facilities: ['Retail', 'Dining', 'Entertainment', 'Events', 'Direct Hotel Access'],
  },
];

export const gallery = [
  { id: 1, title: 'A warm welcome', category: 'FOX Hotel', image: imageUrls.hero, size: 'tall' },
  { id: 2, title: 'Lifestyle, connected', category: 'Mall Events', image: imageUrls.mall, size: 'wide' },
  { id: 3, title: 'Shared moments', category: 'Mall Events', image: imageUrls.event, size: 'standard' },
  { id: 4, title: 'Restful spaces', category: 'FOX Hotel', image: imageUrls.hotel, size: 'standard' },
  { id: 5, title: 'The journey begins', category: 'Ground Breaking', image: imageUrls.construction, size: 'tall' },
  { id: 6, title: 'Building the future', category: 'Underconstruction', image: imageUrls.architecture, size: 'standard' },
  { id: 7, title: 'A place to gather', category: 'FOX Hotel', image: imageUrls.dining, size: 'wide' },
  { id: 8, title: 'Urban energy', category: 'Underconstruction', image: imageUrls.city, size: 'standard' },
];

export const news = [
  {
    id: 1,
    title: 'Whistle Blowing System',
    slug: 'whistle-blowing-system',
    category: 'Corporate Governance',
    date: '02 December 2022',
    year: '2022',
    excerpt: 'Our commitment to conducting business professionally, transparently, and in line with good corporate governance.',
    image: imageUrls.architecture,
    content: [
      'PT Halla Mohana is committed to conducting business professionally and in accordance with good corporate governance principles.',
      'The Whistle Blowing System provides a trusted channel for reporting suspected violations while supporting confidentiality, fairness, and responsible follow-up.',
      'Every report is handled with care and reviewed according to applicable company policies and regulations.',
    ],
  },
  {
    id: 2,
    title: 'Building Connected Experiences in Pekanbaru',
    slug: 'building-connected-experiences',
    category: 'Projects',
    date: '18 August 2026',
    year: '2026',
    excerpt: 'How FOX Hotel and Pekanbaru Xchange work together as one integrated hospitality and lifestyle destination.',
    image: imageUrls.mallInterior,
    content: [
      'Great destinations feel effortless. At Pekanbaru Xchange, a direct connection to FOX Hotel brings stays, meetings, shopping, dining, and leisure into one convenient address.',
      'This integrated approach reflects Halla Mohana’s belief that thoughtful places can make city life more enjoyable and create lasting value for communities.',
    ],
  },
  {
    id: 3,
    title: 'Hospitality with a Human Touch',
    slug: 'hospitality-with-a-human-touch',
    category: 'People & Culture',
    date: '06 July 2026',
    year: '2026',
    excerpt: 'The people and principles behind meaningful stays, welcoming spaces, and memorable everyday moments.',
    image: imageUrls.team,
    content: [
      'Hospitality begins with people. Our teams combine professional standards with genuine care to create experiences that feel warm, personal, and dependable.',
      'We invest in continuous development so every team member can grow, contribute, and bring Halla Mohana’s values to life.',
    ],
  },
];

export const jobs = [
  { title: 'Marketing Communication Staff', location: 'Pekanbaru', type: 'Full-time', department: 'Marketing' },
  { title: 'Guest Experience Supervisor', location: 'Pekanbaru', type: 'Full-time', department: 'Hospitality' },
];

export const leadershipTraits = ['Competent', 'Visionary', 'Inspiring', 'Self-Actualizing', 'Honest & Humble'];
