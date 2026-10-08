import { useState, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/utils/cn'

type Status = 'loading' | 'loaded' | 'error'

/** <img> with lazy loading, a loading skeleton and a broken-image fallback. */
export function ImageWithFallback({ src, alt = '', className, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [status, setStatus] = useState<Status>(src ? 'loading' : 'error')
  const [prevSrc, setPrevSrc] = useState(src)
  if (src !== prevSrc) {
    setPrevSrc(src)
    setStatus(src ? 'loading' : 'error')
  }

  if (status === 'error') {
    return (
      <div role="img" aria-label={alt || 'Image unavailable'} className={cn('grid place-items-center bg-surface-soft text-muted', className)}>
        <ImageOff aria-hidden className="size-1/3 min-h-5 min-w-5" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setStatus('loaded')}
      onError={() => setStatus('error')}
      className={cn(className, 'transition-opacity duration-300', status === 'loading' ? 'animate-pulse bg-surface-soft opacity-60' : 'opacity-100')}
      {...rest}
    />
  )
}