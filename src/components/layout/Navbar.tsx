import { useCallback, useRef, useState } from 'react'
import { Menu, ShoppingCart, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { SearchBar } from '@/components/search/SearchBar'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { primaryNav, secondaryNav, WHATSAPP_NUMBER, WHATSAPP_URL } from '@/data/navigation'
import { useCart } from '@/hooks/useCart'
import { useSearch } from '@/hooks/useSearch'
import { asset } from '@/utils/assets'

const logo = asset('brand/logo')

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { count, openCart } = useCart()
  const { query, setQuery, open: openSearch, openOnFocus } = useSearch()
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className="sticky top-0 z-40 lg:static">
      {/* Main row */}
      <div className="border-b border-border-soft bg-white lg:border-0">
        <Container className="flex h-16 items-center gap-3 lg:h-[84px] lg:gap-6">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="grid size-11 place-items-center hover:bg-surface-soft lg:hidden"
          >
            <Menu aria-hidden className="size-6" />
          </button>

          <a href="#top" aria-label="MoreThanGiftz home" className="block bg-primary lg:hidden">
            <img src={logo} alt="MoreThanGiftz — it's an experience" width={280} height={278} className="size-14 object-contain" />
          </a>

          <nav aria-label="Company" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-8">
              {secondaryNav.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="whitespace-nowrap text-sm font-medium underline-offset-4 hover:underline xl:text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden flex-1 justify-center px-2 lg:flex">
            <SearchBar
              value={query}
              onChange={(value) => {
                setQuery(value)
                openSearch()
              }}
              onFocus={openOnFocus}
              onInputClick={() => openSearch()}
              onSubmit={() => openSearch()}
              className="w-full max-w-[490px]"
            />
          </div>

          <div className="ml-auto flex items-center gap-1 lg:ml-0 lg:gap-4">
            <a href="#contact" className="flex flex-col items-center px-2 text-[11px] font-medium hover:underline" aria-label="Account">
              <User aria-hidden className="size-6" />
              <span className="hidden lg:inline">Account</span>
            </a>
            <button type="button" onClick={openCart} aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`} className="relative flex flex-col items-center px-2 text-[11px] font-medium hover:underline">
              <ShoppingCart aria-hidden className="size-6" />
              <span className="hidden lg:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -right-0.5 -top-1.5 grid min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-5 text-white">
                  {count}
                </span>
              )}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${WHATSAPP_NUMBER}`}
              data-theme="dark"
              className="hidden items-center gap-2 bg-primary px-3 py-3 text-sm font-semibold text-white hover:bg-secondary lg:flex xl:px-4 xl:text-lg"
            >
              <WhatsAppIcon className="size-6" />
              <span className="hidden xl:inline">{WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Category bar (desktop) + hanging logo */}
      <div data-theme="dark" className="relative hidden bg-primary text-white lg:block">
        <Container as="nav" aria-label="Product categories" className="flex h-14 items-center xl:h-16">
          <ul className="flex w-full items-center justify-between gap-4">
            {primaryNav.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="whitespace-nowrap text-base underline-offset-8 decoration-2 hover:underline xl:text-lg 2xl:text-xl">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
        <a
          href="#top"
          aria-label="MoreThanGiftz home"
          className="absolute left-1/2 top-full z-10 block -translate-x-1/2"
        >
          <img src={logo} alt="MoreThanGiftz — it's an experience" width={280} height={278} className="w-[clamp(150px,14.9vw,280px)]" />
        </a>
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} returnFocusRef={menuButtonRef} />
    </header>
  )
}