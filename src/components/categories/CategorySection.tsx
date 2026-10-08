import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { categories } from '@/data/categories'
import { CategoryGrid } from './CategoryGrid'

export function CategorySection() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="py-10 sm:py-14">
      <Container>
        <SectionHeading id="categories-title" title="Shop by Category" className="mb-8" />
        <CategoryGrid categories={categories} />
      </Container>
    </section>
  )
}