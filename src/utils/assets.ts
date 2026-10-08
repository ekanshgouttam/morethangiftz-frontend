const files = import.meta.glob<string>('/src/assets/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

/** asset('products/featured/bottle') -> hashed URL of src/assets/products/featured/bottle.webp */
export const asset = (path: string): string => {
  const url = files[`/src/assets/${path}.webp`]
  if (!url && import.meta.env.DEV) console.warn(`[asset] missing: ${path}`)
  return url ?? ''
}