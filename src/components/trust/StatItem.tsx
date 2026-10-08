import { Star } from 'lucide-react'
import type { Stat } from '@/data/trust'
import { cn } from '@/utils/cn'

export function StatItem({ stat, className }: { stat: Stat; className?: string }) {
  const Icon = stat.icon
  return (
    <li className={cn('flex items-center justify-center gap-3 px-3 py-4 lg:justify-start lg:border-l lg:border-border-soft lg:first:border-l-0', className)}>
      <Icon className="size-8 shrink-0 sm:size-9" />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-tight sm:text-[15px]">{stat.title}</p>
        {stat.stars && (
          <p className="mt-1 flex gap-0.5" role="img" aria-label={`${stat.stars} out of 5 stars`}>
            {Array.from({ length: stat.stars }, (_, i) => (
              <Star key={i} aria-hidden className="size-3.5 fill-amber-400 text-amber-400" />
            ))}
          </p>
        )}
        {stat.subtitle && <p className="mt-0.5 text-xs text-muted">{stat.subtitle}</p>}
      </div>
    </li>
  )
}