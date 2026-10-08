import { Container } from '@/components/ui/Container'
import { trustStats } from '@/data/trust'
import { StatItem } from './StatItem'

export function TrustStats() {
  return (
    <section aria-label="Why choose MoreThanGiftz" className="border-b border-border-soft pb-6">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-5">
          {trustStats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} className={i === trustStats.length - 1 ? 'col-span-2 lg:col-span-1' : undefined} />
          ))}
        </ul>
      </Container>
    </section>
  )
}