import { cn } from '@/utils/cn'

interface Props {
  title: string
  subtitle?: string
  id?: string
  className?: string
}

export function SectionHeading({ title, subtitle, id, className }: Props) {
  return (
    <div className={cn('text-center', className)}>
      <h2 id={id} className="text-3xl sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm sm:text-base">{subtitle}</p>}
    </div>
  )
}
