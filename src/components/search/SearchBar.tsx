import { useId, type FormEvent, type Ref } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/utils/cn'

interface Props {
  value: string
  onChange: (value: string) => void
  onSubmit?: (value: string) => void
  onFocus?: () => void
  onInputClick?: () => void
  inputRef?: Ref<HTMLInputElement>
  /** Accessible name of the search landmark — keep unique per page */
  formLabel?: string
  placeholder?: string
  className?: string
}

export function SearchBar({ value, onChange, onSubmit, onFocus, onInputClick, inputRef, formLabel = 'Search', placeholder = 'Search for gifts, products or ideas…', className }: Props) {
  const id = useId()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit?.(value)
  }

  return (
    <form role="search" aria-label={formLabel} onSubmit={handleSubmit} className={cn('relative', className)}>
      <label htmlFor={id} className="sr-only">Search products</label>
      <input
        ref={inputRef}
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onClick={onInputClick}
        placeholder={placeholder}
        autoComplete="off"
        className="h-11 w-full text-ellipsis rounded-md [&::-webkit-search-cancel-button]:hidden border border-border-soft bg-white pl-4 pr-11 text-sm shadow-sm placeholder:text-muted focus:border-primary focus:outline-none focus-visible:outline-none focus:ring-1 focus:ring-primary"
      />
      <button type="submit" aria-label="Search" className="absolute right-1 top-1/2 grid size-9 -translate-y-1/2 place-items-center hover:bg-surface-soft">
        <Search aria-hidden className="size-5" />
      </button>
    </form>
  )
}