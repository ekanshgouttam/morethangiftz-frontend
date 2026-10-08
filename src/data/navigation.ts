export interface NavLink {
  label: string
  href: string
}

// Hash links point at section ids that the homepage sections will expose
// (#categories, #featured, #drinkware, #gift-sets, #brands, #corporate, #clients, #testimonials, #contact).
export const primaryNav: NavLink[] = [
  { label: 'Best Sellers', href: '#featured' },
  { label: 'Premium Gifts Set', href: '#gift-sets' },
  { label: 'Technology', href: '#categories' },
  { label: 'Office & Business', href: '#categories' },
  { label: 'Sustainable', href: '#brands' },
  { label: 'Bags', href: '#featured' },
  { label: 'Drinkware', href: '#drinkware' },
  { label: 'Apparel', href: '#featured' },
]

export const secondaryNav: NavLink[] = [
  { label: 'About us', href: '#corporate' },
  { label: 'Branding', href: '#corporate' },
  { label: 'Annual Contract', href: '#contact' },
  { label: 'Track your Order', href: '#contact' },
]

export const WHATSAPP_NUMBER = '+971 55 786 3450'
export const WHATSAPP_URL = 'https://wa.me/971557863450'