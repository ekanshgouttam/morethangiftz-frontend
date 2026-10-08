import type { AnchorHTMLAttributes } from 'react'
import { buttonClasses, type ButtonVariant } from './buttonStyles'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
}

export function ButtonLink({ variant = 'solid', className, ...rest }: Props) {
  return <a className={buttonClasses(variant, className)} {...rest} />
}