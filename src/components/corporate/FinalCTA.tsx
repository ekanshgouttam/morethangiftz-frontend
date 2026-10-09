import { ArrowRight, Heart, Settings, Truck, Users } from 'lucide-react'
import type { ComponentType } from 'react'
import { Container } from '@/components/ui/Container'
import { asset } from '@/utils/assets'
import { whatsappLink } from '@/utils/whatsapp'

const features: { icon: ComponentType<{ className?: string }>; title: string; subtitle: string }[] = [
  { icon: Users, title: 'Bulk Orders', subtitle: 'Special Pricing' },
  { icon: Settings, title: 'Custom Branding', subtitle: 'Your Logo, Your Story' },
  { icon: Truck, title: 'Fast & Reliable Delivery', subtitle: 'Across UAE' },
  { icon: Heart, title: 'Dedicated Support', subtitle: "We're Here to Help" },
]

export function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="py-6 sm:py-10">
      <Container>
        <div className="grid overflow-hidden rounded-2xl lg:grid-cols-[1.15fr_1fr]">
          <div data-theme="dark" className="relative bg-[#141416] p-6 text-white sm:p-10">
            <img
              src={asset('corporate/cta-bow')}
              alt=""
              loading="lazy"
              className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-90 [mask-image:linear-gradient(to_right,transparent,black)] sm:block"
            />
            <div className="relative max-w-md">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em]">Elevate your brand</p>
              <h2 id="cta-title" className="mt-3 text-4xl leading-tight">Corporate Gifting, Made Simple.</h2>
              <p className="mt-3 text-sm">Custom solutions for teams, clients and every special occasion.</p>
              <a
                href={whatsappLink("Hi MoreThanGiftz, I'd like a quote for corporate gifts.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-surface"
              >
                Get a Quote <ArrowRight aria-hidden className="size-4" />
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-6 bg-[#ebebeb] p-6 sm:grid-cols-4 sm:p-8 lg:grid-cols-2 xl:grid-cols-4">
            {features.map(({ icon: Icon, title, subtitle }) => (
              <li key={title} className="flex flex-col items-center text-center">
                <Icon aria-hidden className="size-8" />
                <p className="mt-3 font-display text-base leading-tight">{title}</p>
                <p className="mt-1 text-xs text-muted">{subtitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}