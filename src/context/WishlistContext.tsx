import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { WISHLIST_KEY, WishlistContext, loadWishlist, type WishlistContextValue } from './wishlistState'

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>(loadWishlist)

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids))
    } catch {
      /* storage unavailable — wishlist still works in memory */
    }
  }, [ids])

  const toggle = useCallback(
    (id: string) => setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    [],
  )

  const value = useMemo<WishlistContextValue>(
    () => ({ ids, count: ids.length, has: (id) => ids.includes(id), toggle }),
    [ids, toggle],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}