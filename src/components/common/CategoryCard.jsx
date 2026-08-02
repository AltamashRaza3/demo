import electricalImg from "../../assets/images/categories/electrical.webp";
import plumbingImg from "../../assets/images/categories/plumbing.webp";
import paintImg from "../../assets/images/categories/paint.webp";
import hardwareImg from "../../assets/images/categories/hardware.webp";

const categoryImages = {
  electrical: electricalImg,
  plumbing: plumbingImg,
  paint: paintImg,
  hardware: hardwareImg,
};

export default function CategoryCard({ category }) {
  return (
    <article
      data-reveal
      className="
    group
    relative
    w-full
    overflow-hidden
    rounded-3xl
    border
    border-smoke-200
    bg-white
    shadow-soft
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-card
  "
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-smoke-50 to-white">
        <img
          src={categoryImages[category.id]}
          alt={category.name}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        {/* SKU Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold tracking-widest text-white backdrop-blur">
          {category.sku}
        </span>

        {/* Product Count */}
        <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
          {category.items.length}+ Products
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-extrabold text-ink">
          {category.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {category.tagline}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {category.items.slice(0, 4).map((item) => (
            <li
              key={item}
              className="rounded-full bg-smoke-100 px-3 py-1 text-[11px] font-medium text-ink-soft"
            >
              {item}
            </li>
          ))}

          {category.items.length > 4 && (
            <li className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600">
              +{category.items.length - 4} More
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
