import type { Product } from '@/types'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/utils/cn'
import { ProductCard, type ProductCardVariant } from './ProductCard'
import { Carousel } from '@/components/ui/Carousel'

interface Props {
  id: string
  title: string
  subtitle?: string
  products: Product[]
  variant?: ProductCardVariant
  tone?: 'white' | 'grey'
}

const perView: Record<ProductCardVariant, string> = {
  horizontal: '[--n:1] sm:[--n:2] lg:[--n:3] xl:[--n:4] 2xl:[--n:5]',
  vertical: '[--n:2] sm:[--n:3] md:[--n:4] lg:[--n:5] xl:[--n:6] 2xl:[--n:7]',
}

export function ProductSection({ id, title, subtitle, products, variant = 'vertical', tone = 'white' }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('py-10 sm:py-14', tone === 'grey' && 'bg-surface')}>
      <Container>
        <SectionHeading id={`${id}-title`} title={title} subtitle={subtitle} className="mb-8" />
        <Carousel label={title} perViewClassName={perView[variant]}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant={variant} />
          ))}
        </Carousel>
      </Container>
    </section>
  )
}