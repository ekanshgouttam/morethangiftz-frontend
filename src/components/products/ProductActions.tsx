import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import type { Product } from '@/types'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { useCart } from '@/hooks/useCart'
import { whatsappLink } from '@/utils/whatsapp'

export function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setAdded(false), 1500)
  }

  const message = `Hi MoreThanGiftz, I'd like to enquire about "${product.name}"${product.sku ? ` (${product.sku})` : ''}.`

  return (
    <div className="mt-2 flex gap-1.5" data-theme="dark">
      <button
        type="button"
        onClick={handleAdd}
        aria-label={`Add to cart: ${product.name}`}
        className="inline-flex flex-1 items-center justify-center gap-1.5 bg-primary px-2 py-2 text-sm text-white transition-colors hover:bg-secondary"
      >
        {added ? <><Check aria-hidden className="size-4" /> Added</> : 'Add to cart'}
      </button>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire about ${product.name} on WhatsApp`}
        className="grid size-9 shrink-0 place-items-center bg-primary text-white transition-colors hover:bg-secondary"
      >
        <WhatsAppIcon className="size-5" />
      </a>
      <span role="status" className="sr-only">{added ? `${product.name} added to cart` : ''}</span>
    </div>
  )
}