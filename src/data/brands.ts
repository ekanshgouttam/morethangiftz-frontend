import type { Brand } from '@/types'
import { asset } from '@/utils/assets'

export const brands: Brand[] = [
  { id: 'stormtech', name: 'Stormtech', image: asset('brands/stormtech') },
  { id: 'cross', name: 'Cross', image: asset('brands/cross') },
  { id: 'moleskine', name: 'Moleskine', image: asset('brands/moleskine') },
  { id: 'xd-design', name: 'XD Design', image: asset('brands/xd-design') },
  { id: 'hans-larsen', name: 'Hans Larsen', image: asset('brands/hans-larsen') },
  { id: 'change', name: 'Change Collection', image: asset('brands/change') },
]