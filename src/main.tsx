import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { CartProvider } from '@/context/CartContext'
import { SearchProvider } from '@/context/SearchContext'
import { WishlistProvider } from '@/context/WishlistContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)