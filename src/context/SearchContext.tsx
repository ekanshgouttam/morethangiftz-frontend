import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react'
import { SearchContext, type SearchContextValue } from './searchState'

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const ignoreFocusUntil = useRef(0)

  const open = useCallback((q?: string) => {
    if (q !== undefined) setQuery(q)
    setIsOpen(true)
  }, [])
  const openOnFocus = useCallback(() => {
    if (Date.now() >= ignoreFocusUntil.current) setIsOpen(true)
  }, [])
  const close = useCallback(() => {
    ignoreFocusUntil.current = Date.now() + 400
    setIsOpen(false)
    setQuery('')
  }, [])

  const value = useMemo<SearchContextValue>(
    () => ({ query, isOpen, setQuery, open, openOnFocus, close }),
    [query, isOpen, open, openOnFocus, close],
  )
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}