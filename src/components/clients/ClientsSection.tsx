import { Carousel } from '@/components/ui/Carousel'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { clients } from '@/data/clients'
import { ClientLogo } from './ClientLogo'

export function ClientsSection() {
  const hasPlaceholders = clients.some((c) => c.isPlaceholder)
  return (
    <section id="clients" aria-labelledby="clients-title" className="py-10 sm:py-14">
      <Container>
        <SectionHeading id="clients-title" title="Our Clients" className="mb-8" />
        <Carousel label="Our clients" perViewClassName="[--n:2] sm:[--n:3] md:[--n:4] lg:[--n:5] xl:[--n:6] 2xl:[--n:7]">
          {clients.map((client) => (
            <ClientLogo key={client.id} client={client} />
          ))}
        </Carousel>
        {hasPlaceholders && <p className="mt-4 text-center text-xs text-muted">Placeholder logos shown for demonstration.</p>}
      </Container>
    </section>
  )
}