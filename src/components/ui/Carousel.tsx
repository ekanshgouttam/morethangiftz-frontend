import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

interface Props {
  label: string
  /** Sets --n (cards per view) per breakpoint, e.g. "[--n:2] md:[--n:4]" */
  perViewClassName: string
  children: ReactNode
}

export function Carousel({ label, perViewClassName, children }: Props) {
  const scroller = useRef<HTMLUListElement>(null)
  const [{ page, pages }, setPaging] = useState({ page: 0, pages: 1 })

  /** Geometry of one "page" (a full row of visible cards). */
  const measure = useCallback(() => {
    const el = scroller.current
    const first = el?.firstElementChild as HTMLElement | null
    if (!el || !first) return null
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const step = first.offsetWidth + gap
    const perView = Math.max(1, Math.round((el.clientWidth + gap) / step))
    return { el, pageWidth: perView * step, total: Math.max(1, Math.ceil(el.children.length / perView)) }
  }, [])

  const update = useCallback(() => {
    const m = measure()
    if (!m) return
    const { el, pageWidth, total } = m
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
    const current = atEnd ? total - 1 : Math.min(total - 1, Math.round(el.scrollLeft / pageWidth))
    setPaging((s) => (s.page === current && s.pages === total ? s : { page: current, pages: total }))
  }, [measure])

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [update])

  const goTo = (target: number) => {
    const m = measure()
    if (!m) return
    const clamped = Math.max(0, Math.min(m.total - 1, target))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    m.el.scrollTo({ left: clamped * m.pageWidth, behavior: reduce ? 'auto' : 'smooth' })
  }

  const arrow = 'absolute top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center bg-primary text-white transition-opacity hover:bg-secondary disabled:opacity-30 md:grid'

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      className={cn('relative [--gap:1rem] sm:[--gap:1.5rem]', perViewClassName)}
    >
      {pages > 1 && (
        <>
          <button type="button" aria-label="Previous products" disabled={page === 0} onClick={() => goTo(page - 1)} className={cn(arrow, '-left-5')} data-theme="dark">
            <ChevronLeft aria-hidden className="size-5" />
          </button>
          <button type="button" aria-label="Next products" disabled={page === pages - 1} onClick={() => goTo(page + 1)} className={cn(arrow, '-right-5')} data-theme="dark">
            <ChevronRight aria-hidden className="size-5" />
          </button>
        </>
      )}

      <ul
        ref={scroller}
        onScroll={update}
        tabIndex={0}
        aria-label={`${label} list`}
        className="flex snap-x snap-mandatory gap-[var(--gap)] overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.toArray(children).map((child, i) => (
          <li key={i} className="flex shrink-0 basis-[calc((100%-(var(--n)-1)*var(--gap))/var(--n))] snap-start">
            {child}
          </li>
        ))}
      </ul>

      {pages > 1 && (
        <div className="mt-5 flex justify-center gap-1">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1} of ${pages}`}
              aria-current={i === page}
              className="group grid size-6 place-items-center"
            >
              <span className={cn('block size-3 transition-colors', i === page ? 'bg-primary' : 'bg-primary/30 group-hover:bg-primary/60')} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}