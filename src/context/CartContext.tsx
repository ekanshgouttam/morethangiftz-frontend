import { useCallback, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import type { Product } from '@/types'
import { CartContext, STORAGE_KEY, cartReducer, loadItems, type CartContextValue } from './cartState'

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, () => ({ items: loadItems(), isOpen: false }))

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch {
      /* storage unavailable — cart still works in memory */
    }
  }, [state.items])

  const addItem = useCallback((product: Product) => dispatch({ type: 'add', product }), [])
  const increase = useCallback((id: string) => dispatch({ type: 'increase', id }), [])
  const decrease = useCallback((id: string) => dispatch({ type: 'decrease', id }), [])
  const remove = useCallback((id: string) => dispatch({ type: 'remove', id }), [])
  const clear = useCallback(() => dispatch({ type: 'clear' }), [])
  const openCart = useCallback(() => dispatch({ type: 'open' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'close' }), [])

  const value = useMemo<CartContextValue>(() => {
    const count = state.items.reduce((n, i) => n + i.quantity, 0)
    const subtotal = Math.round(state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0) * 100) / 100
    return { items: state.items, isOpen: state.isOpen, count, subtotal, addItem, increase, decrease, remove, clear, openCart, closeCart }
  }, [state, addItem, increase, decrease, remove, clear, openCart, closeCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}