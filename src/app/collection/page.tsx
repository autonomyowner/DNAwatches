"use client";

import { useMemo, useState } from "react";
import type { ReactElement } from "react";
import { ArrowUpDown, Filter, RefreshCw } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const availabilityOptions = [
  { value: "in-stock", label: "En stock" },
  { value: "limited", label: "Edition limitee" },
  { value: "preorder", label: "Precommande" },
] as const;

const uniqueCollections = Array.from(new Set(products.flatMap((product) => product.collections)));

export default function CollectionPage(): ReactElement {
  const [searchTerm, setSearchTerm] = useState("");
  const [collectionFilter, setCollectionFilter] = useState<string | null>(null);
  const [availabilityFilter, setAvailabilityFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"new" | "asc" | "desc">("new");

  const filteredProducts = useMemo(() => {
    let next = products;

    if (searchTerm.trim().length > 0) {
      const normalized = searchTerm.trim().toLowerCase();
      next = next.filter(
        (product) =>
          product.name.toLowerCase().includes(normalized) ||
          product.shortDescription.toLowerCase().includes(normalized) ||
          product.collections.some((collection) => collection.toLowerCase().includes(normalized)),
      );
    }

    if (collectionFilter) {
      next = next.filter((product) => product.collections.includes(collectionFilter));
    }

    if (availabilityFilter) {
      next = next.filter((product) => product.availability === availabilityFilter);
    }

    return [...next].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      }
      if (sortOrder === "desc") {
        return b.price - a.price;
      }
      return products.indexOf(a) - products.indexOf(b);
    });
  }, [availabilityFilter, collectionFilter, searchTerm, sortOrder]);

  const handleReset = () => {
    setSearchTerm("");
    setCollectionFilter(null);
    setAvailabilityFilter(null);
    setSortOrder("new");
  };

  return (
    <Section className="bg-background pb-24 pt-28">
      <Container>
        <Reveal>
          <header className="mb-12 space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Boutique</span>
                <h1 className="mt-3 text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                  Collection caps premium
                </h1>
              </div>
              <Button onClick={handleReset} variant="ghost" size="sm" className="gap-2">
                <RefreshCw className="h-4 w-4" aria-hidden />
                Reset
              </Button>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Selectionnez la drop qui vous ressemble: editions limitees, precommandes exclusives et best sellers. Chaque
              casquette est controlee, emballee et livree dans les 58 wilayas.
            </p>
          </header>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-10 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 lg:grid-cols-[2fr_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-white/50" htmlFor="search">
                Chercher une casquette
              </label>
              <Input
                id="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Rechercher par nom, drop ou collection"
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex grow flex-wrap gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">Disponibilite</span>
                {availabilityOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setAvailabilityFilter((prev) => (prev === option.value ? null : option.value))
                    }
                    className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all ${
                      availabilityFilter === option.value
                        ? "border-[#c9a961] bg-[#c9a961] text-black"
                        : "border-white/15 bg-black/40 text-white/60 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <ArrowUpDown className="h-4 w-4 text-white/40" aria-hidden />
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value as typeof sortOrder)}
                  className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="new">Nouveautes</option>
                  <option value="asc">Prix croissant</option>
                  <option value="desc">Prix decroissant</option>
                </select>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
              <Filter className="h-4 w-4" aria-hidden />
              Collections
            </div>
            {uniqueCollections.map((collection) => (
              <button
                key={collection}
                type="button"
                onClick={() => setCollectionFilter((prev) => (prev === collection ? null : collection))}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all ${
                  collectionFilter === collection
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-black/40 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {collection}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
            {filteredProducts.length} resultat{filteredProducts.length > 1 ? "s" : ""}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
