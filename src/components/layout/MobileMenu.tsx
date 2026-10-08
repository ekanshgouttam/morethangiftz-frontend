import { useEffect, useRef, type RefObject } from 'react'
import { X } from 'lucide-react'
import { primaryNav, secondaryNav, WHATSAPP_NUMBER, WHATSAPP_URL } from '@/data/navigation'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { SearchBar } from '@/components/search/SearchBar'
import { useSearch } from '@/hooks/useSearch'
import { cn } from '@/utils/cn'

interface Props {
  open: boolean
  onClose: () => void
  returnFocusRef: RefObject<HTMLButtonElement | null>
}

export function MobileMenu({ open, onClose, returnFocusRef }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const { query, setQuery, open: openSearch, openOnFocus } = useSearch()
  const wasOpen = useRef(false)

  useEffect(() => {
    if (open) {
      wasOpen.current = true
      closeRef.current?.focus()
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
      document.addEventListener('keydown', onKey)
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', onKey)
        document.body.style.overflow = prevOverflow
      }
    }
    if (wasOpen.current) {
      wasOpen.current = false
      returnFocusRef.current?.focus()
    }
  }, [open, onClose, returnFocusRef])

  return (
    <div className={cn('fixed inset-0 z-50 lg:hidden', !open && 'pointer-events-none')} inert={!open}>
      <div
        onClick={onClose}
        aria-hidden
        className={cn('absolute inset-0 bg-black/50 transition-opacity duration-300', open ? 'opacity-100' : 'opacity-0')}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={cn(
          'absolute inset-y-0 left-0 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-white shadow-xl transition-transform duration-300',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-border-soft p-4">
          <span className="font-display text-xl">Menu</span>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close menu" className="grid size-10 place-items-center hover:bg-surface-soft">
            <X aria-hidden className="size-6" />
          </button>
        </div>

        <div className="p-4">
          <SearchBar
            value={query}
            onChange={setQuery}
            onFocus={() => {
              onClose()
              openOnFocus()
            }}
            onSubmit={() => {
              onClose()
              openSearch()
            }}
          />
        </div>

        <nav aria-label="Product categories" className="px-4">
          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {primaryNav.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={onClose} className="block py-3 text-base font-medium hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="p-4">
          <ul className="space-y-1">
            {secondaryNav.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={onClose} className="block py-2 text-sm text-muted hover:text-black hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-secondary">
            <WhatsAppIcon className="size-5" />
            {WHATSAPP_NUMBER}
          </a>
        </div>
      </aside>
    </div>
  )
}