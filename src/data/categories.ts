import type { Category } from '@/types'
import { asset } from '@/utils/assets'

export const categories: Category[] = [
  { id: 'smartphone', name: 'Smart Phone', image: asset('categories/smartphone'), subcategories: ['Phone Accessories', 'Phone Cases', 'Postpaid Phones', 'Refurbished Phones'] },
  { id: 'television', name: 'Television', image: asset('categories/television'), subcategories: ['HD DVD Players', 'Projection Screens', 'Television Accessories', 'TV-DVD Combos'] },
  { id: 'computers', name: 'Computers', image: asset('categories/computers'), subcategories: ['Computer Com.', 'Computer Acc.', 'Desktops', 'Monitors'] },
  { id: 'electronics', name: 'Electronics', image: asset('categories/electronics'), subcategories: ['Office Electronics', 'Audio & Video', 'Washing Machine', 'Accessories & Supplies'] },
  { id: 'laptop-tablet', name: 'Laptop & Tablet', image: asset('categories/laptop-tablet'), subcategories: ['Office laptop', 'Gaming laptop', 'Laptop accessories', 'Tablet'] },
  { id: 'smartwatches', name: 'Smartwatches', image: asset('categories/smartwatches'), subcategories: ['Sport Watches', 'Watches', 'Kids Watches', 'Luxury Watches'] },
  { id: 'gaming', name: 'Gaming', image: asset('categories/gaming'), subcategories: ['Game Controllers', 'Gaming Keyboards', 'PC Gaming Mice', 'PC Game Headsets'] },
  { id: 'outdoor-camera', name: 'Outdoor Camera', image: asset('categories/outdoor-camera'), subcategories: ['Security & Surveillance', 'Surveillance DVR Kits', 'Surveillance NVR Kits', 'Smart Outdoor Lighting'] },
]