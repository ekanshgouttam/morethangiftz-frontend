import { WHATSAPP_URL } from '@/data/navigation'

export const whatsappLink = (message: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`