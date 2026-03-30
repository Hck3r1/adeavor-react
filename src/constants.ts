export const ASSETS = {
  logo: '/logo.png',
  aboutPhoto:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
} as const

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Business Platforms', to: '/business' },
  { label: 'Stewardship', to: '/stewardship' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Careers', to: '/careers' },
] as const

export const MOBILE_DOCK_NAV = [
  { label: 'Home', to: '/', icon: 'fa-solid fa-house' },
  { label: 'About', to: '/about', icon: 'fa-solid fa-circle-info' },
  { label: 'Platforms', to: '/business', icon: 'fa-solid fa-layer-group' },
  { label: 'Stewardship', to: '/stewardship', icon: 'fa-solid fa-leaf' },
  { label: 'Contact', to: '/contact', icon: 'fa-solid fa-envelope' },
] as const

/** Full-bleed hero carousel (remote images; dark scrim applied in CSS). */
export const HERO_SLIDES = [
  {
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1920&q=80',
    kicker: 'Oil & Gas Consultancy — Est. 2011',
    title: 'Operational excellence, redefined',
    subtitle:
      'Engineering and technology solutions for dependable energy outcomes worldwide.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80',
    kicker: 'People · Process · Performance',
    title: 'A framework you can trust',
    subtitle:
      'Structured delivery that eliminates errors, drives efficiency, and keeps compliance front and center.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    kicker: 'Nigeria & United States',
    title: 'Global partnerships, local depth',
    subtitle:
      'Market knowledge and skilled teams supporting diverse clients across regions.',
  },
] as const

/** Three pillars strip (home). */
export const HOME_PILLARS = [
  {
    title: 'People',
    body:
      'Best-in-class professionals committed to your success.',
    icon: 'fa-solid fa-users',
  },
  {
    title: 'Process',
    body:
      'Proven frameworks that eliminate errors and inefficiency.',
    icon: 'fa-solid fa-gears',
  },
  {
    title: 'Performance',
    body:
      'Measurable outcomes and full regulatory compliance.',
    icon: 'fa-solid fa-chart-line',
  },
] as const

export const HOME_KEY_FACTS = [
  { value: '14+', label: 'Years Active' },
  { value: '2', label: 'Global Offices' },
  { value: '100%', label: 'Client Focus' },
] as const

export const HOME_HUB_LINKS = [
  {
    title: 'About Adeavor',
    blurb:
      'Our vision, mission, and the values that drive every engagement.',
    to: '/about',
    icon: 'fa-solid fa-building-columns',
  },
  {
    title: 'Business Platforms',
    blurb:
      'Engineering, technology, and consulting across critical sectors.',
    to: '/business',
    icon: 'fa-solid fa-diagram-project',
  },
  {
    title: 'Stewardship',
    blurb: 'HSE, quality, and social responsibility embedded in how we work.',
    to: '/stewardship',
    icon: 'fa-solid fa-shield-halved',
  },
  {
    title: 'Contact & Careers',
    blurb: 'Reach our team or explore opportunities to join Adeavor.',
    to: '/contact',
    icon: 'fa-solid fa-briefcase',
  },
] as const

export const HOME_PLATFORMS_TEASER = [
  { label: 'Engineering & technical consulting', to: '/business' },
  { label: 'Technology & digital transformation', to: '/business' },
  { label: 'Operational excellence advisory', to: '/business' },
  { label: 'Regulatory compliance & assurance', to: '/business' },
] as const

export const CLIENT_LOGOS = [
  { src: '/clients/partner-1.png', alt: 'Partner' },
  { src: '/clients/partner-2.png', alt: 'Partner' },
  { src: '/clients/partner-3.png', alt: 'Partner' },
  { src: '/clients/exxonmobil-logo-e1602364031669.png', alt: 'ExxonMobil' },
  { src: '/clients/NNPC-Logo-e1602364488244.png', alt: 'NNPC' },
] as const

export const CONTACT = {
  email: 'info@adeavor.com',
  talentEmail: 'careers@adeavor.com',
  phone: '+234 812 151 5697',
  phoneDisplay: '+234 812 151 5697',
  phoneHref: 'tel:+2348121515697',
  addressLines: [
    'Unit 1, Plot 2 Block 22',
    'Babatunde Anjous Street',
    'Lekki Phase 1, Lagos, Nigeria',
  ],
  offices: 'Nigeria & United States of America',
} as const
