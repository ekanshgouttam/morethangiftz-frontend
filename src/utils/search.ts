import type { Product } from '@/types'

const tokenize = (text: string) => (text.toLowerCase().match(/[a-z0-9]+/g) ?? []).map((t) => t.replace(/s$/, ''))

/** Every word of the query must appear somewhere in the product's searchable text (plural-insensitive). */
export function searchProducts(products: Product[], query: string): Product[] {
  const tokens = tokenize(query)
  if (!tokens.length) return []
  return products.filter((p) => {
    const haystack = [p.name, p.category, p.subcategory, p.brand, p.sku].filter(Boolean).join(' ').toLowerCase()
    return tokens.every((t) => haystack.includes(t))
  })
}