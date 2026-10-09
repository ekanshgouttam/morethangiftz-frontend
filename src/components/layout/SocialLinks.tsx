import type { ComponentType, SVGProps } from 'react'
import { socialLinks } from '@/data/footer'
import { FacebookIcon, InstagramIcon, TikTokIcon, XIcon, YouTubeIcon } from '@/components/ui/SocialIcons'

const icons: Record<(typeof socialLinks)[number]['id'], ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
}

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {socialLinks.map(({ id, label, href }) => {
        const Icon = icons[id]
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center bg-white text-black transition-colors hover:bg-surface"
            >
              <Icon className="size-5" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}