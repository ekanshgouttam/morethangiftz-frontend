import type { Product } from '@/types'
import { formatPrice } from '@/utils/format'

export function ProductPrice({ product }: { product: Product }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className="font-display text-xl leading-none">{formatPrice(product.price)}</span>
      {product.originalPrice && (
        <>
          <s className="text-xs text-muted"><span className="sr-only">Original price </span>{formatPrice(product.originalPrice)}</s>
          {product.discount && <span className="bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-white">-{product.discount}%</span>}
        </>
      )}
    </p>
  )
}