/** Primary logo — bundled in /public for full fidelity (remote mirror: ../adeavor.com/). */
export const ASSETS = {
  logo: '/logo.png',
  aboutPhoto:
    'https://adeavor.com/wp-content/uploads/2020/10/pexels-ylanite-koppens-796602-870x580.jpg',
} as const

export const HERO_SLIDES = [
  {
    kicker: 'We guarantee',
    title: 'Operational Excellence',
    subtitle: 'through our proven framework',
    image:
      'https://adeavor.com/wp-content/uploads/2020/10/pexels-brotin-biswas-518543.jpg',
  },
  {
    kicker: 'Providing for today',
    title: 'Engineering and technology solutions',
    subtitle: 'Dependable delivery for complex energy and industrial projects.',
    image: 'https://adeavor.com/wp-content/uploads/2020/10/Tech-HS.jpg',
  },
  {
    kicker: 'We provide',
    title: 'Dependable solutions',
    subtitle:
      'To meet the growing worldwide demand for energy while preparing for the future.',
    image:
      'https://adeavor.com/wp-content/uploads/2020/10/pexels-chris-f-3714195.jpg',
  },
] as const

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/business', label: 'Business Platforms' },
  { to: '/stewardship', label: 'Stewardship' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/careers', label: 'Careers' },
] as const

/** Short labels for the fixed mobile dock (max-width 899px). */
export const MOBILE_DOCK_NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/business', label: 'Platforms' },
  { to: '/stewardship', label: 'Steward' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Careers' },
] as const

export const HOME_KEY_FACTS = [
  { value: '2011', label: 'Founded' },
  { value: 'Nigeria · USA', label: 'Office footprint' },
  { value: '5', label: 'Business platforms' },
  { value: 'PPP', label: 'People · Process · Performance' },
] as const

export const HOME_HUB_LINKS = [
  {
    to: '/about',
    title: 'About us',
    blurb: 'Our story, vision, leadership, and organizations we work with.',
  },
  {
    to: '/business',
    title: 'Business platforms',
    blurb: 'Digital solutions, EPCCM, O&M, Academy, and Investment.',
  },
  {
    to: '/stewardship',
    title: 'Stewardship',
    blurb: 'Health & safety, quality assurance, and sustainability.',
  },
  {
    to: '/careers',
    title: 'Careers',
    blurb: 'Join our team and explore strategic partnerships.',
  },
  {
    to: '/contact',
    title: 'Contact',
    blurb: 'Lagos office, phone, email, and how to reach consultants.',
  },
] as const

export const HOME_PLATFORMS_TEASER = [
  { label: 'Digital solutions', to: '/business' },
  { label: 'EPCCM', to: '/business' },
  { label: 'O&M', to: '/business' },
  { label: 'Academy', to: '/business' },
  { label: 'Investment', to: '/business' },
] as const

/** Sample of clients / partners featured on the original About page. */
export const CLIENT_LOGOS = [
  { src: '/clients/partner-3.png', alt: 'Industry partner' },
  {
    src: '/clients/exxonmobil-logo-e1602364031669.png',
    alt: 'ExxonMobil',
  },
  { src: '/clients/partner-2.png', alt: 'Industry partner' },
  { src: '/clients/partner-1.png', alt: 'Industry partner' },
  { src: '/clients/NNPC-Logo-e1602364488244.png', alt: 'NNPC' },
] as const

export const CONTACT = {
  addressLines: [
    'Unit 1 Plot 2 Block 22 Babatunde Anjous Street',
    'Lekki Phase 1, Lagos',
  ],
  phoneDisplay: '+234 812 151 5697',
  phoneHref: 'tel:+2348121515697',
  email: 'info@adeavor.com',
  talentEmail: 'talent@adeavor.com',
} as const
