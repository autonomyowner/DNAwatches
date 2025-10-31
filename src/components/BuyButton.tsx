"use client";

import { useState, type ReactElement } from "react";
import Button from "@/components/ui/Button";
import BuyModal from "@/components/BuyModal";
import type { Product } from "@/data/products";

type BuyButtonProps = {
  product: Product;
};

export default function BuyButton({ product }: BuyButtonProps): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button size="lg" onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto">
        Acheter maintenant
      </Button>
      <BuyModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

