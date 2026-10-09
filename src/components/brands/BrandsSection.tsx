import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { brands } from '@/data/brands'
import { BrandCard } from './BrandCard'

export function BrandsSection() {
  return (
    <section id="brands" aria-labelledby="brands-title" className="py-10 sm:py-14">
      <Container>
        <SectionHeading id="brands-title" title="Our Brands" className="mb-8" />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {brands.map((brand) => (
            <li key={brand.id}>
              <BrandCard brand={brand} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}