import { ButtonLink } from '@/components/ui/ButtonLink'

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative bg-surface-soft">
      {/* Images live in /public so they can be preloaded from index.html (LCP). Phones get the cropped half-width version. */}
      <picture>
        <source media="(max-width: 767px)" srcSet="/hero-right.webp" width={943} height={502} />
        <img
          src="/hero.webp"
          alt="Corporate gift ideas: travel organiser, charging cable, notebook and colourful insulated bottles"
          width={1883}
          height={502}
          fetchPriority="high"
          className="h-56 w-full object-cover md:h-auto"
        />
      </picture>

      <div className="px-4 py-8 text-center lg:p-0">
        <h1 id="hero-title" className="text-3xl sm:text-4xl lg:sr-only">
          Corporate Gifts &amp; Promotional Merchandise in Dubai
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm lg:hidden">
          Premium corporate gifts and custom merchandise that leave a lasting impression.
        </p>

        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:absolute lg:left-1/2 lg:top-[calc(clamp(150px,14.9vw,280px)+1rem)] lg:mt-0 lg:-translate-x-1/2 lg:flex-nowrap lg:gap-2">
          <ButtonLink href="#featured" className="px-5 py-2.5 font-semibold">Shop Best Sellers</ButtonLink>
          <ButtonLink href="#contact" variant="light" className="border border-primary px-5 py-2.5 font-semibold">Get a Quote</ButtonLink>
        </div>
      </div>
    </section>
  )
}