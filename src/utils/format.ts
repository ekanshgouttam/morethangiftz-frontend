export const formatPrice = (value: number, currency = 'AED') =>
  `${value.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`
