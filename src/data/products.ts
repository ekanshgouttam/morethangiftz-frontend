import type { Product } from '@/types'
import { asset } from '@/utils/assets'

// DEMO DATA — names, prices and SKUs are mock values written to match the supplied design's images.

export const featuredProducts: Product[] = [
  { id: 'feat-bottle', name: 'Insulated Travel Bottle', category: 'Drinkware', image: asset('products/featured/bottle'), price: 62, isFeatured: true, isBestSeller: true },
  { id: 'feat-polo', name: 'Classic Cotton Polo Shirt', category: 'Apparel', image: asset('products/featured/polo'), price: 45, isFeatured: true },
  { id: 'feat-card-holder', name: 'Magnetic Card Holder', category: 'Technology', image: asset('products/featured/card-holder'), price: 28, isFeatured: true },
  { id: 'feat-headphones', name: 'Wireless Over-Ear Headphones', category: 'Technology', image: asset('products/featured/headphones'), price: 129, isFeatured: true, isBestSeller: true },
  { id: 'feat-sling-bag', name: 'Baltimore RCS Essentials Sling Bag', category: 'Bags', brand: 'VINGA', image: asset('products/featured/sling-bag'), price: 50, isFeatured: true },
]

export const drinkwareProducts: Product[] = [
  { id: 'drink-botella-pro', sku: 'SG4776', name: 'Botella Pro', category: 'Drinkware', subcategory: 'Bottles', image: asset('products/drinkware/botella-pro'), price: 50 },
  { id: 'drink-botella-ultra', sku: 'SG4953', name: 'Botella Ultra', category: 'Drinkware', subcategory: 'Bottles', image: asset('products/drinkware/botella-ultra'), price: 58 },
  { id: 'drink-cozy-tumbler', sku: 'SG4954', name: 'Cozy Tumbler', category: 'Drinkware', subcategory: 'Tumblers', image: asset('products/drinkware/cozy-tumbler'), price: 42 },
  { id: 'drink-espresso-stackable', sku: 'SG4955', name: 'Espresso Stackable', category: 'Drinkware', subcategory: 'Cups', image: asset('products/drinkware/espresso-stackable'), price: 36 },
  { id: 'drink-espresso-go-set', sku: 'SG4956', name: 'Espresso-go-set', category: 'Drinkware', subcategory: 'Coffee', image: asset('products/drinkware/espresso-go-set'), price: 185 },
  { id: 'drink-gahwa-go-set', sku: 'SG4957', name: 'Gahwa Go Set', category: 'Drinkware', subcategory: 'Coffee', image: asset('products/drinkware/gahwa-go-set'), price: 95 },
  { id: 'drink-prime-flask', sku: 'SG4958', name: 'Prime Flask', category: 'Drinkware', subcategory: 'Flasks', image: asset('products/drinkware/prime-flask'), price: 74 },
]

const giftSetColours = ['Navy', 'Orange', 'Sand', 'Slate', 'Walnut', 'Black', 'White']

export const giftSets: Product[] = giftSetColours.map((colour, i) => ({
  id: `gift-leather-${i + 1}`,
  sku: `SG${4883 + i}`,
  name: `Leather Gift Set — ${colour}`,
  category: 'Premium Gifts Set',
  image: asset(`products/gift-sets/leather-gift-set-${i + 1}`),
  price: 150 + i * 15,
}))

export const allProducts: Product[] = [...featuredProducts, ...drinkwareProducts, ...giftSets]