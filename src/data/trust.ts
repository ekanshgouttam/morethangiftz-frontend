import type { ComponentType } from 'react'
import { BadgePercent, Gift, Smile, Truck } from 'lucide-react'
import { GoogleIcon } from '@/components/ui/GoogleIcon'

export interface Stat {
  id: string
  icon: ComponentType<{ className?: string }>
  title: string
  subtitle?: string
  stars?: number
}

// Figures and claims are taken verbatim from the supplied design — not independently verified.
export const trustStats: Stat[] = [
  { id: 'customers', icon: GoogleIcon, title: '50,000+ Happy Customers', stars: 5 },
  { id: 'products', icon: Gift, title: '1,000+ Custom Products', subtitle: 'High quality. No minimums!' },
  { id: 'prices', icon: BadgePercent, title: 'Affordable Prices', subtitle: 'Up to 40% bulk discounts!' },
  { id: 'shipping', icon: Truck, title: 'Fast & Free Shipping', subtitle: 'Global delivery. On-time!' },
  { id: 'support', icon: Smile, title: 'Worry Free', subtitle: 'Instant 24/7 support' },
]