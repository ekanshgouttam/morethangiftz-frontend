import { useContext } from 'react'
import { SearchContext } from '@/context/searchState'

export function useSearch() {
  const ctx = useContext(SearchContext)
  if (!ctx) throw new Error('useSearch must be used inside <SearchProvider>')
  return ctx
}