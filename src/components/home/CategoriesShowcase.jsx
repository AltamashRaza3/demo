import CategoryCard from "../common/CategoryCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { categories } from "../../data/site.js";

export default function CategoriesShowcase() {
  return (
    <section className="relative bg-smoke-50 py-20">
      <div className="container-wr">
        <SectionHeading
          eyebrow="What We Stock"
          title="Four categories, one stockroom, zero compromise."
          description="From switchboards to sanitary ware—every line is sourced, billed and delivered from a single address on Siswan–Siwan Road."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
