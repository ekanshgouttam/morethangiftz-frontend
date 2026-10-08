import { cn } from '@/utils/cn'

export type ButtonVariant = 'solid' | 'outline' | 'light'

const variants: Record<ButtonVariant, string> = {
  solid: 'bg-primary text-white hover:bg-secondary',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  light: 'bg-white text-primary hover:bg-surface-soft',
}

export const buttonClasses = (variant: ButtonVariant = 'solid', className?: string) =>
  cn(
    'inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    className,
  )