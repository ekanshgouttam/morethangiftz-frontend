import { Mail, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { FooterColumn } from './FooterColumn'
import { NewsletterForm } from './NewsletterForm'
import { SocialLinks } from './SocialLinks'
import { CONTACT_EMAIL, PHONE_URL, WHATSAPP_URL } from '@/data/navigation'
import { footerColumns, footerHighlights, offices } from '@/data/footer'
import { asset } from '@/utils/assets'

const contactBtn = 'inline-flex items-center gap-2 border border-white bg-white px-5 py-2.5 text-base text-black transition-colors hover:bg-surface'

export function Footer() {
  return (
    <footer data-theme="dark" className="bg-primary text-white">
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <h2 className="text-4xl leading-tight sm:text-5xl">The #1 premium corporate gifts supplier in the Middle East.</h2>
          <ul className="mt-8 space-y-4 text-[15px]">
            {footerHighlights.map((line) => (
              <li key={line} className="flex gap-2">
                <span aria-hidden>•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <SocialLinks />
          </div>
          <div className="mt-6 inline-flex items-center gap-3 bg-white px-4 py-2 text-black">
            <span className="font-display text-lg">We Accept</span>
            <ImageWithFallback src={asset('footer/payments')} alt="Mastercard and Visa" width={115} height={30} className="h-7 w-auto" />
          </div>
        </div>

        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
          </div>

          <hr className="border-white/70" />

          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className={contactBtn}><Mail aria-hidden className="size-5" /> Email</a>
            <a href={PHONE_URL} className={contactBtn}><Phone aria-hidden className="size-5" /> Call</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={contactBtn}><WhatsAppIcon className="size-5" /> Whatsapp</a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h3 className="mr-1 text-2xl">Our Offices:</h3>
            {offices.map((city) => (
              <a
                key={city}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`MoreThanGiftz ${city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-5 py-2 text-base transition-colors hover:bg-white hover:text-black"
              >
                {city}
              </a>
            ))}
          </div>

          <NewsletterForm />

          <p className="text-sm text-white/80">
            For complaints or feedback about our services, please email our Managing Director at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">{CONTACT_EMAIL}</a> for immediate action.
          </p>
        </div>
      </Container>
    </footer>
  )
}