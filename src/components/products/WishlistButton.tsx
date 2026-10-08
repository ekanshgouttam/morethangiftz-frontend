import { Heart } from 'lucide-react'
import type { Product } from '@/types'
import { useWishlist } from '@/hooks/useWishlist'
import { cn } from '@/utils/cn'

export function WishlistButton({ product, className }: { product: Product; className?: string }) {
  const { has, toggle } = useWishlist()
  const active = has(product.id)
  return (
    <button
      type="button"
      onClick={() => toggle(product.id)}
      aria-pressed={active}
      aria-label={active ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
      className={cn('grid size-8 place-items-center transition-colors hover:bg-black/10', className)}
    >
      <Heart aria-hidden className={cn('size-[18px]', active && 'fill-primary')} />
    </button>
  )
}