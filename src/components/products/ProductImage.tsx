import type { Product } from '@/types'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { cn } from '@/utils/cn'

export function ProductImage({ product, className }: { product: Product; className?: string }) {
  return (
    <ImageWithFallback
      src={product.image}
      alt={product.name}
      width={160}
      height={160}
      className={cn('h-full w-full object-contain transition-transform duration-300 group-hover:scale-105', className)}
    />
  )
}