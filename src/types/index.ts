export interface Product {
  id: string
  name: string
  sku?: string
  category: string
  subcategory?: string
  brand?: string
  image: string
  /** CSS colour behind the image when the source photo is not on white */
  imageBackground?: string
  price: number
  originalPrice?: number
  discount?: number
  rating?: number
  reviewCount?: number
  isFeatured?: boolean
  isBestSeller?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Category {
  id: string
  name: string
  image: string
  subcategories: string[]
}

export interface Brand {
  id: string
  name: string
  image: string
}

export interface Client {
  id: string
  name: string
  logo: string
  isPlaceholder?: boolean
}

export interface Testimonial {
  id: string
  author: string
  source: string
  timeAgo: string
  rating: number
  text: string
  isDemo?: boolean
}