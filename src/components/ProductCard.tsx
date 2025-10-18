import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import Button from "@/components/ui/Button";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  highlight?: boolean;
};

export default function ProductCard({ product, highlight = false }: ProductCardProps): ReactElement {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_25px_60px_-30px_rgba(0,0,0,0.7)] ${
        highlight ? "lg:col-span-2" : ""
      }`}
    >
      {product.badges && product.badges.length > 0 && (
        <div className="absolute left-6 top-6 flex gap-2">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/15 bg-black/70 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <Link href={`/product/${product.slug}`} className="block">
        <OptimizedImage
          src={product.images[0]?.src ?? ""}
          alt={product.images[0]?.alt ?? product.name}
          className="h-64 w-full rounded-[28px] border border-white/10 bg-black/50 object-cover"
          quality={85}
        />
      </Link>

      <div className="flex grow flex-col gap-6 p-4">
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">{product.collections.join(" • ")}</div>
          <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-sm leading-relaxed text-white/60">{product.shortDescription}</p>
        </div>

        <div className="mt-auto flex items-center justify-between text-sm">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Disponibilite</div>
            <div className="uppercase tracking-[0.2em] text-white">
              {product.availability === "in-stock" && "En stock"}
              {product.availability === "limited" && "Edition limitee"}
              {product.availability === "preorder" && "Precommande"}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Prix</div>
            <div className="text-lg font-semibold text-white">
              {product.price.toLocaleString("fr-DZ")} {product.currency}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button asChild size="sm">
            <Link href={`/product/${product.slug}`}>Voir le produit</Link>
          </Button>
          <Link
            href={`/product/${product.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors duration-200 hover:text-white"
          >
            Details
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
