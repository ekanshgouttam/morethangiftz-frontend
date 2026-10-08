import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/utils/cn'

type Props<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>

export function Container<T extends ElementType = 'div'>({ as, className, ...rest }: Props<T>) {
  const Tag: ElementType = as ?? 'div'
  return <Tag className={cn('mx-auto w-full max-w-[1760px] px-4 sm:px-6 xl:px-[60px]', className)} {...rest} />
}
