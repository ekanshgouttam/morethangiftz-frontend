import { useRef } from 'react'
import { ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { CartItemRow } from './CartItemRow'
import { useCart } from '@/hooks/useCart'
import { useModalBehavior } from '@/hooks/useModalBehavior'
import { formatPrice } from '@/utils/format'
import { orderLink } from '@/utils/whatsapp'
import { cn } from '@/utils/cn'

export function CartDrawer() {
  const { items, isOpen, count, subtotal, closeCart, clear } = useCart()
  const panelRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  useModalBehavior({ open: isOpen, onClose: closeCart, containerRef: panelRef, initialFocusRef: closeRef })

  return (
    <div className={cn('fixed inset-0 z-[55]', !isOpen && 'pointer-events-none')} inert={!isOpen}>
      <div onClick={closeCart} aria-hidden className={cn('absolute inset-0 bg-black/50 transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0')} />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-border-soft p-4">
          <h2 id="cart-title" className="text-xl">Your Cart <span className="font-sans text-sm text-muted">({count})</span></h2>
          <button ref={closeRef} type="button" onClick={closeCart} aria-label="Close cart" className="grid size-10 place-items-center hover:bg-surface-soft">
            <X aria-hidden className="size-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingBag aria-hidden className="size-12 text-muted" />
            <p className="font-display text-2xl">Your cart is empty</p>
            <p className="text-sm text-muted">Add a few products and they'll show up here.</p>
            <ButtonLink href="#featured" onClick={closeCart} className="mt-2 px-6">Continue shopping</ButtonLink>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-4">
              {items.map((item) => (
                <CartItemRow key={item.product.id} item={item} />
              ))}
            </ul>
            <div className="space-y-3 border-t border-border-soft p-4">
              <p className="flex items-baseline justify-between">
                <span className="text-sm font-medium">Subtotal</span>
                <span className="font-display text-2xl">{formatPrice(subtotal)}</span>
              </p>
              <p className="text-xs text-muted">Checkout isn't part of this demo — send your list to our team on WhatsApp for a quote.</p>
              <ButtonLink href={orderLink(items, subtotal)} target="_blank" rel="noopener noreferrer" className="w-full py-3" data-theme="dark">
                <WhatsAppIcon className="size-5" /> Request quote on WhatsApp
              </ButtonLink>
              <Button variant="outline" onClick={clear} className="w-full">Clear cart</Button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}