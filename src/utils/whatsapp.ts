import { WHATSAPP_URL } from '@/data/navigation'
import type { CartItem } from '@/types'
import { formatPrice } from '@/utils/format'

export const whatsappLink = (message: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`

export function orderLink(items: CartItem[], subtotal: number) {
  const lines = items.map(({ product, quantity }) => `- ${quantity} × ${product.name}${product.sku ? ` (${product.sku})` : ''}`)
  return whatsappLink(`Hi MoreThanGiftz, I'd like a quote for:\n${lines.join('\n')}\nEstimated subtotal: ${formatPrice(subtotal)}`)
}