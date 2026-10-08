import { createContext } from 'react'
import type { CartItem, Product } from '@/types'

export interface CartState {
  items: CartItem[]
  isOpen: boolean
}

export type CartAction =
  | { type: 'add'; product: Product }
  | { type: 'increase'; id: string }
  | { type: 'decrease'; id: string }
  | { type: 'remove'; id: string }
  | { type: 'clear' }
  | { type: 'open' }
  | { type: 'close' }

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const exists = state.items.some((i) => i.product.id === action.product.id)
      const items = exists
        ? state.items.map((i) => (i.product.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...state.items, { product: action.product, quantity: 1 }]
      return { ...state, items }
    }
    case 'increase':
      return { ...state, items: state.items.map((i) => (i.product.id === action.id ? { ...i, quantity: i.quantity + 1 } : i)) }
    case 'decrease':
      return { ...state, items: state.items.map((i) => (i.product.id === action.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i)) }
    case 'remove':
      return { ...state, items: state.items.filter((i) => i.product.id !== action.id) }
    case 'clear':
      return { ...state, items: [] }
    case 'open':
      return { ...state, isOpen: true }
    case 'close':
      return { ...state, isOpen: false }
  }
}

export const STORAGE_KEY = 'mtg-cart-v1'

export function loadItems(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (i): i is CartItem =>
        typeof i?.quantity === 'number' && i.quantity > 0 && typeof i?.product?.id === 'string' && typeof i?.product?.price === 'number',
    )
  } catch {
    return []
  }
}

export interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  count: number
  subtotal: number
  addItem: (product: Product) => void
  increase: (id: string) => void
  decrease: (id: string) => void
  remove: (id: string) => void
  clear: () => void
  openCart: () => void
  closeCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)