import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { asset } from '@/utils/assets'

export function CorporateGiftingSection() {
  return (
    <section id="corporate" aria-labelledby="corporate-title" className="py-6 sm:py-10">
      <Container>
        <div className="grid items-center gap-6 overflow-hidden bg-surface-strong md:grid-cols-[1fr_1.1fr] md:gap-0">
          <div className="p-6 sm:p-10 lg:p-14">
            <h2 id="corporate-title" className="text-3xl leading-tight sm:text-4xl">
              Corporate Gifts &amp; Promotional Gifts Item Supplier in Dubai, UAE.
            </h2>
            <p className="mt-4 max-w-md text-lg">Premium corporate gifts and custom merchandise that leave a lasting impression.</p>
            <ButtonLink href="#contact" className="mt-6 px-6 py-3">Get a Quote</ButtonLink>
          </div>
          <ImageWithFallback
            src={asset('corporate/corporate-gifting')}
            alt="Sketch of a commuter wearing wireless earbuds in a city, with ideas and notes around him"
            width={708}
            height={324}
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  )
}