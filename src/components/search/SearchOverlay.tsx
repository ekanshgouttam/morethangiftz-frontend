import { useMemo, useRef } from 'react'
import { X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProductCard } from '@/components/products/ProductCard'
import { SearchBar } from './SearchBar'
import { allProducts } from '@/data/products'
import { useModalBehavior } from '@/hooks/useModalBehavior'
import { useSearch } from '@/hooks/useSearch'
import { searchProducts } from '@/utils/search'
import { cn } from '@/utils/cn'

const SUGGESTIONS = ['Headphones', 'Bottle', 'Polo', 'Tumbler', 'Gift set', 'Bag']

export function SearchOverlay() {
  const { query, setQuery, isOpen, close } = useSearch()
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  useModalBehavior({ open: isOpen, onClose: close, containerRef: panelRef, initialFocusRef: inputRef })

  const results = useMemo(() => searchProducts(allProducts, query), [query])
  const trimmed = query.trim()

  const status = !trimmed
    ? 'Start typing to search products'
    : results.length
      ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${trimmed}”`
      : `No results for “${trimmed}”`

  const chips = (
    <ul className="mt-3 flex flex-wrap gap-2">
      {SUGGESTIONS.map((s) => (
        <li key={s}>
          <button type="button" onClick={() => setQuery(s)} className="border border-border px-3 py-1.5 text-sm transition-colors hover:bg-primary hover:text-white">
            {s}
          </button>
        </li>
      ))}
    </ul>
  )

  return (
    <div className={cn('fixed inset-0 z-[60]', !isOpen && 'pointer-events-none')} inert={!isOpen}>
      <div onClick={close} aria-hidden className={cn('absolute inset-0 bg-black/60 transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0')} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search products"
        className={cn(
          'absolute inset-x-0 top-0 max-h-[90vh] overflow-y-auto bg-white shadow-xl transition-transform duration-300',
          isOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <Container className="py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <SearchBar formLabel="Product search" inputRef={inputRef} value={query} onChange={setQuery} className="flex-1" />
            <button type="button" onClick={close} aria-label="Close search" className="grid size-11 shrink-0 place-items-center hover:bg-surface-soft">
              <X aria-hidden className="size-6" />
            </button>
          </div>

          <p role="status" className="mt-4 text-sm text-muted">{status}</p>

          {!trimmed && (
            <div className="pb-4">
              <h2 className="mt-4 text-xl">Popular searches</h2>
              {chips}
            </div>
          )}

          {trimmed && results.length > 0 && (
            <ul className="mt-4 grid grid-cols-2 gap-3 pb-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {results.map((product) => (
                <li key={product.id} className="flex">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          )}

          {trimmed && results.length === 0 && (
            <div className="pb-4">
              <h2 className="mt-4 text-xl">Nothing matches that — yet</h2>
              <p className="mt-2 max-w-xl text-sm">
                This demo catalogue is small. Try one of these, or ask our team about custom and bulk requests.
              </p>
              {chips}
              <ButtonLink href="#contact" onClick={close} className="mt-5">Ask our team</ButtonLink>
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}