import type { Testimonial } from '@/types'

// DEMO CONTENT — the first entry reproduces the supplied design's visible text; the rest are generic placeholders.
export const testimonials: Testimonial[] = [
  { id: 't1', author: 'Guest Relations Manager', source: 'Google', timeAgo: '1 year ago', rating: 5, isDemo: true,
    text: 'They deserved to be the number #1 in the uae when it comes to the supplier for corporate gifts and more.. Starting from i sent …' },
  { id: 't2', author: 'Demo Reviewer', source: 'Google', timeAgo: '1 year ago', rating: 5, isDemo: true,
    text: 'Demo review: smooth ordering, helpful team and quick delivery for our corporate gifting needs.' },
  { id: 't3', author: 'Demo Reviewer', source: 'Google', timeAgo: '1 year ago', rating: 5, isDemo: true,
    text: 'Demo review: great range of branded merchandise and clear communication throughout the process.' },
  { id: 't4', author: 'Demo Reviewer', source: 'Google', timeAgo: '1 year ago', rating: 5, isDemo: true,
    text: 'Demo review: the custom branding quality exceeded expectations for our team gifts.' },
  { id: 't5', author: 'Demo Reviewer', source: 'Google', timeAgo: '1 year ago', rating: 5, isDemo: true,
    text: 'Demo review: reliable service and a wide selection of premium products to choose from.' },
]