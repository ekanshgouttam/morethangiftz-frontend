import { createContext } from 'react'

export const WISHLIST_KEY = 'mtg-wishlist-v1'

export function loadWishlist(): string[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? '[]')
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

export interface WishlistContextValue {
  ids: string[]
  count: number
  has: (id: string) => boolean
  toggle: (id: string) => void
}

export const WishlistContext = createContext<WishlistContextValue | null>(null)