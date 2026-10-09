import { Carousel } from '@/components/ui/Carousel'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialsSection() {
  const hasDemo = testimonials.some((t) => t.isDemo)
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-10 sm:py-14">
      <Container>
        <SectionHeading id="testimonials-title" title="What Our Clients Said" className="mb-8" />
        <Carousel label="Client testimonials" perViewClassName="[--n:1] sm:[--n:2] lg:[--n:3] xl:[--n:4] 2xl:[--n:5]">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </Carousel>
        {hasDemo && <p className="mt-4 text-center text-xs text-muted">Demo content — placeholder reviews for demonstration.</p>}
      </Container>
    </section>
  )
}