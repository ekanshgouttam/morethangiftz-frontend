import { Minus, Plus, Trash2 } from 'lucide-react'
import type { CartItem } from '@/types'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/format'

export function CartItemRow({ item }: { item: CartItem }) {
  const { increase, decrease, remove } = useCart()
  const { product, quantity } = item
  const lineTotal = Math.round(product.price * quantity * 100) / 100
  const stepper = 'grid size-8 place-items-center transition-colors hover:bg-surface-soft disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent'

  return (
    <li className="flex gap-3 border-b border-border-soft py-4">
      <div className="size-16 shrink-0 bg-white" style={{ backgroundColor: product.imageBackground }}>
        <ImageWithFallback src={product.image} alt={product.name} width={64} height={64} className="h-full w-full object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium leading-snug">{product.name}</p>
        {product.sku && <p className="text-xs text-muted">{product.sku}</p>}
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="inline-flex items-center border border-border">
            <button type="button" onClick={() => decrease(product.id)} disabled={quantity <= 1} aria-label={`Decrease quantity of ${product.name}`} className={stepper}>
              <Minus aria-hidden className="size-4" />
            </button>
            <span aria-live="polite" aria-label={`Quantity ${quantity}`} className="min-w-8 text-center text-sm font-medium">{quantity}</span>
            <button type="button" onClick={() => increase(product.id)} aria-label={`Increase quantity of ${product.name}`} className={stepper}>
              <Plus aria-hidden className="size-4" />
            </button>
          </div>
          <p className="text-sm font-semibold">{formatPrice(lineTotal)}</p>
        </div>
      </div>
      <button type="button" onClick={() => remove(product.id)} aria-label={`Remove ${product.name} from cart`} className="grid size-8 shrink-0 place-items-center text-muted transition-colors hover:bg-surface-soft hover:text-black">
        <Trash2 aria-hidden className="size-4" />
      </button>
    </li>
  )
}