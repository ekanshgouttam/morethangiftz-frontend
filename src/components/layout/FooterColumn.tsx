import type { FooterColumnData } from '@/data/footer'

export function FooterColumn({ column }: { column: FooterColumnData }) {
  return (
    <nav aria-label={column.title}>
      <h3 className="text-2xl">{column.title}</h3>
      <ul className="mt-4 space-y-2 text-[15px]">
        {column.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="underline-offset-4 hover:underline">{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}