import { useEffect, useEffectEvent, type RefObject } from 'react'

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])'

interface Options {
  open: boolean
  onClose: () => void
  containerRef: RefObject<HTMLElement | null>
  initialFocusRef?: RefObject<HTMLElement | null>
}

/** Escape to close, body scroll lock, Tab focus trap, initial focus, and focus restore for dialogs/drawers. */
export function useModalBehavior({ open, onClose, containerRef, initialFocusRef }: Options) {
  const handleClose = useEffectEvent(onClose)

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(() => {
      const target = initialFocusRef?.current ?? containerRef.current?.querySelector<HTMLElement>(FOCUSABLE)
      target?.focus()
    }, 50)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleClose()
        return
      }
      if (e.key !== 'Tab' || !containerRef.current) return
      const items = [...containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)]
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      if (opener && document.contains(opener) && !opener.closest('[inert]')) opener.focus()
    }
  }, [open, containerRef, initialFocusRef])
}