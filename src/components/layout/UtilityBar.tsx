import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const PROMO_CODE = 'MERCH20'

function StaticSelect({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        defaultValue={value}
        className="cursor-pointer appearance-none bg-transparent pr-5 text-xs font-medium hover:underline"
      >
        <option className="text-black" value={value}>{value}</option>
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2" />
    </div>
  )
}

export function UtilityBar() {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — code is still visible */
    }
  }

  return (
    <aside aria-label="Store notices and utilities" data-theme="dark" className="bg-primary text-white">
      <Container className="flex h-10 items-center gap-4 text-[11px] sm:text-xs">
        <div className="hidden flex-1 items-center gap-8 md:flex">
          <StaticSelect label="Language" value="English" />
          <StaticSelect label="Currency" value="AED" />
        </div>

        <p className="flex flex-1 flex-wrap items-center justify-center gap-x-2 md:flex-none">
          <span className="border border-white/80 px-2 py-0.5 uppercase tracking-wide">50% price drop</span>
          <span>Extra 20% OFF</span>
          <button
            type="button"
            onClick={copyCode}
            aria-label={`Copy promo code ${PROMO_CODE}`}
            className="min-w-[4.5rem] border border-white/80 px-2 py-0.5 uppercase tracking-wide transition-colors hover:bg-white hover:text-black"
          >
            <span aria-live="polite">{copied ? 'Copied!' : PROMO_CODE}</span>
          </button>
        </p>

        <div className="hidden flex-1 justify-end md:flex">
          <a href="#contact" className="inline-flex items-center gap-1.5 hover:underline">
            <MapPin aria-hidden className="size-4" />
            Track Order
          </a>
        </div>
      </Container>
    </aside>
  )
}