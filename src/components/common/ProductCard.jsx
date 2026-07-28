import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `
      perspective(1000px)
      rotateX(${py * -8}deg)
      rotateY(${px * 8}deg)
      translateY(-6px)
    `;
  };

  const handleLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <article
      data-reveal
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group overflow-hidden rounded-3xl border border-smoke-200 bg-white shadow-soft transition-all duration-500 hover:shadow-card will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        {/* SKU */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow backdrop-blur">
          {product.sku}
        </span>

        {/* Brand */}
        <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white shadow">
          {product.brand}
        </span>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-4 p-6">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            {product.category}
          </p>

          <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
            {product.name}
          </h3>
        </div>

        <div className="grid h-10 w-10 place-items-center rounded-full bg-smoke-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </article>
  );
}
