import type { Client } from '@/types'
import { asset } from '@/utils/assets'

// Only the first logo is real in the supplied design; the rest are template placeholders.
export const clients: Client[] = [
  { id: 'client-1', name: 'Clientèle Life', logo: asset('clients/client-1') },
  ...[2, 3, 4, 5, 6, 7].map((n) => ({
    id: `client-${n}`,
    name: 'Placeholder client logo',
    logo: asset(`clients/client-${n}`),
    isPlaceholder: true,
  })),
]