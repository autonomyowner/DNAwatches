import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import OptimizedImage from "@/components/OptimizedImage";
import { products } from "@/data/products";
import type { Product } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

function findProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return {
      title: "Produit introuvable – OUSS AURA Boutique",
    };
  }

  return {
    title: `${product.name} – OUSS AURA Boutique`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <Section className="bg-background pb-24 pt-28">
      <Container>
        <Reveal>
          <div className="mb-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            <Link href="/collection" className="transition-colors duration-150 hover:text-white">
              Retour a la collection
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] xl:gap-16">
          <Reveal>
            <div className="space-y-6">
              <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {product.images.slice(0, 2).map((image) => (
                    <OptimizedImage
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="h-56 w-full rounded-[24px] border border-white/10"
                      quality={85}
                    />
                  ))}
                </div>
                {product.images[2] && (
                  <OptimizedImage
                    src={product.images[2].src}
                    alt={product.images[2].alt}
                    className="h-64 w-full rounded-[28px] border border-white/10"
                    quality={85}
                  />
                )}
              </div>
              <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">Couleurs</div>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-white">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="rounded-full border border-white/15 bg-black/50 px-4 py-2 uppercase tracking-[0.25em]"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">Collections</div>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/70">
                    {product.collections.map((collection) => (
                      <span
                        key={collection}
                        className="rounded-full border border-white/15 bg-black/40 px-4 py-2 uppercase tracking-[0.25em]"
                      >
                        {collection}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <aside className="space-y-8 rounded-[36px] border border-white/10 bg-white/5 p-8">
              <div className="space-y-4">
                {product.badges && product.badges.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                  {product.name}
                </h1>
                <p className="text-sm leading-relaxed text-white/70">{product.shortDescription}</p>
              </div>

              <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/60 px-6 py-5">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">Prix</div>
                <div className="text-2xl font-semibold text-white">
                  {product.price.toLocaleString("fr-DZ")} {product.currency}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Caracteristiques</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c9a961]" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-white/60" aria-hidden />
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/50">Livraison</div>
                      <div className="mt-2 text-sm text-white/70">
                        58 wilayas, expedition 24/48h sur stock. Paiement a la livraison disponible.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-white/60" aria-hidden />
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/50">Garantie</div>
                      <div className="mt-2 text-sm text-white/70">
                        Inspection qualite 3 points et echange sous 14 jours.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-white/60" aria-hidden />
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/50">Finition</div>
                      <div className="mt-2 text-sm text-white/70">
                        Broderie 3D, doublure signature et packaging recycle.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/collection">Ajouter au panier</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Parler au support</Link>
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>

        {relatedProducts.length > 0 && (
          <Reveal delay={250}>
            <section className="mt-20 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold uppercase tracking-[0.25em] text-white">Vous aimerez aussi</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/collection" className="flex items-center gap-2">
                    Retour boutique
                    <Zap className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedProducts.map((related) => (
                  <div key={related.id} className="rounded-[32px] border border-white/10 bg-white/5 p-4">
                    <OptimizedImage
                      src={related.images[0]?.src ?? ""}
                      alt={related.images[0]?.alt ?? related.name}
                      className="h-48 w-full rounded-[24px] border border-white/10"
                      quality={80}
                    />
                    <div className="mt-4 space-y-2">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {related.collections.join(" • ")}
                      </div>
                      <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">{related.name}</h3>
                      <div className="text-sm text-white/60">{related.shortDescription}</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm font-semibold text-white">
                        {related.price.toLocaleString("fr-DZ")} {related.currency}
                      </div>
                      <Link
                        href={`/product/${related.slug}`}
                        className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors duration-150 hover:text-white"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
