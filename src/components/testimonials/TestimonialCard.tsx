import { useId, useState } from 'react'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'
import { GoogleIcon } from '@/components/ui/GoogleIcon'
import { cn } from '@/utils/cn'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false)
  const textId = useId()

  return (
    <article className="flex w-full flex-col border border-border bg-surface-soft p-4">
      <header className="flex items-center gap-3">
        <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-full bg-[#76259f] text-lg font-semibold text-white">
          {testimonial.author.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-sans text-sm font-semibold">{testimonial.author}</h3>
          <p className="text-xs text-muted">{testimonial.timeAgo}</p>
        </div>
        <GoogleIcon className="size-5 shrink-0" />
      </header>
      <p className="mt-3 flex gap-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} aria-hidden className="size-4 fill-amber-400 text-amber-400" />
        ))}
      </p>
      <p id={textId} className={cn('mt-3 text-[15px] leading-snug', !expanded && 'line-clamp-4')}>{testimonial.text}</p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={textId}
        className="mt-3 self-start text-sm text-muted underline-offset-4 hover:text-black hover:underline"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </article>
  )
}