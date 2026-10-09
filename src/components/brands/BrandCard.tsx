import type { Brand } from '@/types'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="group overflow-hidden bg-primary">
      <ImageWithFallback
        src={brand.image}
        alt={`${brand.name} brand`}
        width={257}
        height={193}
        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}