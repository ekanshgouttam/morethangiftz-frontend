export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumnData {
  title: string
  links: FooterLink[]
}

// Secondary pages (privacy, jobs, FAQs …) are outside this assignment's scope, so they point at the contact section.
export const footerColumns: FooterColumnData[] = [
  {
    title: 'Company Info',
    links: [
      { label: 'About Us', href: '#corporate' },
      { label: 'Sustainability', href: '#brands' },
      { label: 'Privacy Policy', href: '#contact' },
      { label: 'Jobs', href: '#contact' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'E-Catalog', href: '#featured' },
      { label: 'Products', href: '#drinkware' },
      { label: 'Brands', href: '#brands' },
      { label: 'Branding Methods', href: '#corporate' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQS', href: '#contact' },
      { label: 'APIs', href: '#contact' },
      { label: 'Reseller Registration', href: '#contact' },
      { label: 'Our Locations', href: '#contact' },
      { label: 'Blogs', href: '#contact' },
    ],
  },
]

export const footerHighlights = [
  'Decades of Trusted Expertise in branded merchandise, corporate & promotional giveaways',
  'Extensive collection of over 3,000 ready-stock products and counting…',
  'Diverse range of premium brands including Moleskine, Cross, Skross, Ocean Bottle, Stormtech, XDDesign, and a lot more!',
  'Custom items such as drinkware, notebooks, bags, and so much more! Serving clients across Middle East, Africa and India!',
]

export const offices = ['Dubai', 'Sharjah']

export const socialLinks = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 'x', label: 'X (Twitter)', href: 'https://x.com/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/' },
] as const