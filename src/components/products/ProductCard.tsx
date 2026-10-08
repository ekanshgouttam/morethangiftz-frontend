import type { Product } from '@/types'
import { ProductActions } from './ProductActions'
import { ProductImage } from './ProductImage'
import { ProductPrice } from './ProductPrice'
import { WishlistButton } from './WishlistButton'

export type ProductCardVariant = 'horizontal' | 'vertical'

export function ProductCard({ product, variant = 'vertical' }: { product: Product; variant?: ProductCardVariant }) {
  if (variant === 'horizontal') {
    return (
      <article className="group relative flex w-full gap-3 border border-border p-3 transition-shadow hover:shadow-lg sm:gap-4 sm:p-4">
        <WishlistButton product={product} className="absolute right-1 top-1" />
        <div className="h-28 w-20 shrink-0 self-center sm:w-24">
          <ProductImage product={product} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="pr-7 text-xl leading-tight">{product.category}</h3>
          <p className="mt-1 text-[13px] leading-snug">
            {product.brand && <span className="font-semibold">{product.brand} </span>}
            {product.name}
          </p>
          <div className="mt-auto pt-3">
            <ProductPrice product={product} />
            <ProductActions product={product} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group relative flex w-full flex-col border border-border bg-white p-3 transition-shadow hover:shadow-lg">
      <WishlistButton product={product} className="absolute right-1 top-1" />
      <div className="pr-7">
        <h3 className="text-lg leading-tight">{product.name}</h3>
        {product.sku && <p className="mt-0.5 text-xs text-muted">{product.sku}</p>}
      </div>
      <div className="my-3 flex h-40 items-center justify-center sm:h-44">
        <ProductImage product={product} />
      </div>
      <div className="mt-auto">
        <ProductPrice product={product} />
        <ProductActions product={product} />
      </div>
    </article>
  )
}