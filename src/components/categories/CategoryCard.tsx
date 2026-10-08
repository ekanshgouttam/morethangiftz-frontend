import type { Category } from '@/types'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { useSearch } from '@/hooks/useSearch'

export function CategoryCard({ category }: { category: Category }) {
  const { open } = useSearch()

  return (
    <article className="group flex h-full min-h-[200px] flex-col border border-border bg-white transition-shadow hover:shadow-lg">
      <div className="flex flex-1 gap-4 p-4 sm:p-5">
        <ImageWithFallback
          src={category.image}
          alt=""
          width={130}
          height={105}
          className="mt-3 h-20 w-20 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
        />
        <div className="min-w-0">
          <h3 className="text-2xl leading-tight">{category.name}</h3>
          <ul className="mt-3 space-y-0.5 text-[13px] xl:text-sm">
            {category.subcategories.map((sub) => (
              <li key={sub} className="flex gap-2">
                <span aria-hidden>•</span>
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => open(category.name)}
        aria-label={`View all ${category.name}`}
        className="self-end bg-primary px-6 py-1.5 text-sm text-white transition-colors hover:bg-secondary"
      >
        View all
      </button>
    </article>
  )
}