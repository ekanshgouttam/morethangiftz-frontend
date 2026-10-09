import type { Client } from '@/types'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'

export function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="flex h-24 w-full items-center justify-center bg-white p-2">
      <ImageWithFallback src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
    </div>
  )
}