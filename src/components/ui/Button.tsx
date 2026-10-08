import type { ButtonHTMLAttributes } from 'react'
import { buttonClasses, type ButtonVariant } from './buttonStyles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ variant = 'solid', className, type = 'button', ...rest }: Props) {
  return <button type={type} className={buttonClasses(variant, className)} {...rest} />
}