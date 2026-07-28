const mediaClass = {
  electrical: 'wr-media-electrical',
  plumbing: 'wr-media-plumbing',
  paint: 'wr-media-paint',
  hardware: 'wr-media-hardware',
}

export default function CategoryCard({ category }) {
  return (
    <article
      data-reveal
      className="group relative shrink-0 w-[280px] sm:w-[320px] rounded-3xl bg-white border border-smoke-200 overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-500"
    >
      <div className={`wr-media ${mediaClass[category.id]} h-44 flex items-start justify-between p-5`}>
        <span className="font-mono text-[11px] tracking-widest text-white/70">{category.sku}</span>
        <span className="font-display text-white/90 font-bold text-sm">
          {String(category.items.length).padStart(2, '0')} lines
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display font-extrabold text-xl text-ink">{category.name}</h3>
        <p className="mt-1.5 text-sm text-ink-soft">{category.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {category.items.slice(0, 4).map((item) => (
            <li key={item} className="text-[11px] font-medium text-ink-soft bg-smoke-100 rounded-full px-2.5 py-1">
              {item}
            </li>
          ))}
          {category.items.length > 4 && (
            <li className="text-[11px] font-medium text-blue-600 bg-blue-50 rounded-full px-2.5 py-1">
              +{category.items.length - 4} more
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}
