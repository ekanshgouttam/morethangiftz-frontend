import { createContext } from 'react'

export interface SearchContextValue {
  query: string
  isOpen: boolean
  setQuery: (query: string) => void
  /** Open the overlay, optionally with a preset query (e.g. from a category card). */
  open: (query?: string) => void
  /** Open from an input's focus event — ignored briefly after closing so focus restore doesn't reopen it. */
  openOnFocus: () => void
  close: () => void
}

export const SearchContext = createContext<SearchContextValue | null>(null)